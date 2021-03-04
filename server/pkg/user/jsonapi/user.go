package user

import (
	"net/http"

	"github.com/projgithub550/UmiLearning2/server/pkg/user/models"
	"gorm.io/gorm"
)

type UserService struct {
	db *gorm.DB
}

func NewUserService(db *gorm.DB) *UserService {
	if err := db.AutoMigrate(models.UserModel); err != nil {
		panic(err)
	}
	return &UserService{db: db}
}

//登录服务
type LoginReq struct {
	UserName string
	Password string
}

type LoginRes struct {
	Token string
}

func (s *UserService) Login(r *http.Request, req *LoginReq, res *LoginRes) error {
	if req.UserName == "admin" && req.Password == "admin" {
		res.Token = "success"
	} else {
		res.Token = "fail"
	}

	return nil
}

//注册服务
type RegisterReq struct {
	UserName string
	Password string
}

type RegisterRes struct {
	Token string
}

func (s *UserService) Register(r *http.Request, req *RegisterReq, res *RegisterRes) error {

	return nil
}
