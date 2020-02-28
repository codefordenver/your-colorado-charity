package db

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

func InsertData(data string) (insert sql.Result) {
	db := ConnectDB()

	stmt, err := db.Prepare("INSERT INTO Charity(Data) VALUES (?)")
	if err != nil {
		panic(err.Error())
	}
	res, err := stmt.Exec(data)
	if err != nil {
		panic(err.Error())
	}

	defer stmt.Close()
	defer db.Close()
	return res
}
