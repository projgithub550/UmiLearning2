package base

import (
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)
func SetupDB()(db *gorm.DB, err error){
	db,err = gorm.Open(mysql.Open("test.db"),&gorm.Config{});
	return
}