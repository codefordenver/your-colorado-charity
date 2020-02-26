package db

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

func InsertData(data string) (insert *sql.Rows) {
	db := ConnectDB()
	insert, err := db.Query("INSERT INTO Charity(Data) VALUES (?)", data)
	if err != nil {
		panic(err.Error())
	}

	defer insert.Close()
	defer db.Close()
	return insert
}
