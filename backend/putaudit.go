package routers

import (
	"database/sql"
	"fmt"
	"strconv"
	"strings"
	"time"
)

func CreateAudit(request Request, db *sql.DB) (requestResponse RequestResponse, err error) {
	t := time.Now()
	timeNow := t.String()

	stmt, err := db.Prepare("insert into request (requestor, quarter, due_by, resource, date_created, done, resource_group) values (?,?,?,?,?,false,?);")
	if err != nil {
		fmt.Println("1:" + err.Error())
	}
	_, err = stmt.Exec(request.Requestor, request.Quarter, request.Due_By, request.Resource, timeNow, request.ResourceGroup)
	if err != nil {
		fmt.Println("2:" + err.Error())
	}

	var requestID int
	row := db.QueryRow("select requestID from request where requestor=? and quarter=? and due_by=? and resource=? and date_created=? and resource_group=? ;", request.Requestor, request.Quarter, request.Due_By, request.Resource, timeNow, request.ResourceGroup)
	err = row.Scan(&requestID)
	if err != nil {
		fmt.Println("3:" + err.Error())
	} else {
		requestResponse.DateCreated = timeNow
		requestResponse.Done = false
		requestResponse.Due_By = request.Due_By
		requestResponse.ID = requestID
		requestResponse.Quarter = request.Quarter
		requestResponse.Requestor = request.Requestor
		requestResponse.Resource = request.Resource
		requestResponse.ResourceGroup = request.ResourceGroup

		for i, _ := range request.Approvers {
			stmt, err := db.Prepare("insert into requestApprovers (requestID, approverID, delegate) values (?,?,false);")
			if err != nil {
				fmt.Println("4:" + err.Error())
			}
			_, err = stmt.Exec(requestID, string(request.Approvers[i].ID))
			if err != nil {
				fmt.Println("5:" + err.Error())
			}

			approverInt, err := strconv.Atoi(string(request.Approvers[i].ID))
			var name string = "Unknown"
			if err == nil {
				row := db.QueryRow("select employeeName from employee where employeeID=?;", approverInt)
				err = row.Scan(&name)
				if err != nil {
					fmt.Println("6:" + err.Error())
				}
			} else {
				row := db.QueryRow("select employeeName from employee where employeeLAN=? and employeeLAN is not null;", string(request.Approvers[i].ID))
				err = row.Scan(&name)
				if err != nil {
					fmt.Println("7:" + err.Error())
				}
			}
			var nextApprover = ReqRespApprover{string(request.Approvers[i].ID), name, false}
			requestResponse.Approvers = append(requestResponse.Approvers, nextApprover)
		}

		for i, _ := range request.Users {
			stmt, err := db.Prepare("insert into requestUsers (requestID, userID, approval_status, reviewed_on, reviewed_by) values (?,?,null,null,null);")
			if err != nil {
				fmt.Println(err.Error())
			}
			_, err = stmt.Exec(requestID, string(request.Users[i].ID))
			if err != nil {
				fmt.Println(err.Error())
			}
			userInt, err := strconv.Atoi(string(request.Users[i].ID))
			var name string = "Unknown"
			var status string = "Unknown"
			if err == nil {
				row := db.QueryRow("select employeeName, empTypeDesc from employee, emptype where employeeID=? and employeeType = empTypeId;", userInt)
				err = row.Scan(&name, &status)
				if err != nil {
					fmt.Println(err.Error())
				}
			} else {
				row := db.QueryRow("select employeeName, empTypeDesc from employee, emptype where employeeLAN=? and employeeType = empTypeId and employeeLAN is not null;", string(request.Users[i].ID))
				err = row.Scan(&name, &status)
				if err != nil {
					fmt.Println(err.Error())
				}
			}
			var nextUser = ReqRespUser{string(request.Users[i].ID), name, false, "", "", strings.Contains(status, "Ex-")}
			requestResponse.Users = append(requestResponse.Users, nextUser)
		}
	}
	return
}
