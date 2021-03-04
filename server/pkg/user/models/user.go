package models

import (
	"gorm.io/gorm"
)

type UserModel struct {
	gorm.Model
	UserName string
	Password string
}
