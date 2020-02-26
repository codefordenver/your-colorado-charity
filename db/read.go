package db

import (
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

func SelectAllCharities() {
	db := ConnectDB()

	defer db.Close()

	selDB, err := db.Query("SELECT * FROM Charity")
	if err != nil {
		panic(err.Error())
	}

	charity := Charity{}
	res := []Charity{}

	for selDB.Next() {
		var charityid int
		var data string
		err = selDB.Scan(&charityid, &data)
		if err != nil {
			panic(err.Error())
		}
		charity.CharityID = charityid
		charity.Data = data
		res = append(res, charity)
	}
	fmt.Println(res)
	defer selDB.Close()
}
