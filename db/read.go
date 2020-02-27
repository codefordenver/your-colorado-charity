package db

import (
	"encoding/json"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func SelectAllCharities() (res []Charity) {
	db := ConnectDB()

	defer db.Close()

	selDB, err := db.Query("SELECT * FROM Charity")
	if err != nil {
		panic(err.Error())
	}

	var (
		charity  Charity
		response []Charity
	)
	for selDB.Next() {
		var charityid int
		var data json.RawMessage
		err = selDB.Scan(&charityid, &data)
		if err != nil {
			panic(err.Error())
		}
		charity.CharityID = charityid
		charity.Data = data
		response = append(res, charity)
	}
	fmt.Println(response)
	defer selDB.Close()
	return response
}

func SelectCharity(charityID int) (jsonRes *CharityJSON) {
	db := ConnectDB()

	defer db.Close()

	selDB, err := db.Query("SELECT * FROM Charity WHERE CharityID = ?", charityID)
	if err != nil {
		panic(err.Error())
	}

	var charityRes string
	for selDB.Next() {
		var data string
		var charityid int
		err = selDB.Scan(&charityid, &data)
		if err != nil {
			panic(err.Error())
		}
		charityRes = data
	}
	jsonRes = &CharityJSON{}
	err = json.Unmarshal([]byte(charityRes), jsonRes)
	if err != nil {
		panic(err.Error())
	}
	return jsonRes

}
