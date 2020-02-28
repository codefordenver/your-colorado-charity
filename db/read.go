package db

import (
	"encoding/json"

	_ "github.com/go-sql-driver/mysql"
)

func SelectAllCharities() (res *CharitiesList) {
	db := ConnectDB()

	defer db.Close()

	selDB, err := db.Query("SELECT * FROM Charity")
	if err != nil {
		panic(err.Error())
	}

	charities := []Charity{}
	response := &CharitiesList{charities}

	for selDB.Next() {
		charity := Charity{}
		var charityid int
		var data json.RawMessage
		err = selDB.Scan(&charityid, &data)
		if err != nil {
			panic(err.Error())
		}
		charity.CharityID = charityid
		charity.Data = json.RawMessage(data)
		response.AddCharity(charity)
	}
	defer selDB.Close()
	return response
}

func SelectCharity(charityID int) (response *Charity) {
	db := ConnectDB()

	defer db.Close()

	selDB, err := db.Query("SELECT * FROM Charity WHERE CharityID = ?", charityID)
	if err != nil {
		panic(err.Error())
	}

	charity := &Charity{}
	for selDB.Next() {
		var data string
		var charityid int
		err = selDB.Scan(&charityid, &data)
		charityJson := &CharityJSON{}
		err = json.Unmarshal([]byte(data), charityJson)
		if err != nil {
			panic(err.Error())
		}
		charity.CharityID = charityid
		charity.Data = json.RawMessage(data)
	}
	return charity
}
