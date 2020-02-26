package db

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

func ConnectDB() (db *sql.DB) {
	db, err := sql.Open("mysql", "root:root@tcp(127.0.0.1:8889)/ycc")
	if err != nil {
		panic(err.Error())
	}

	return db
}
