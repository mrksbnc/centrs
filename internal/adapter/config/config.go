package config

import (
	"os"

	"github.com/joho/godotenv"
)

type (
	Postgres struct {
		Host       string
		Port       string
		User       string
		Password   string
		Name       string
		Connection string
	}

	Redis struct {
		ConnectionString string
		Password         string
	}

	App struct {
		Name    string
		Version string
	}

	Config struct {
		App      *App
		Redis    *Redis
		Postgres *Postgres
	}
)

func ConstructConfig() (*Config, error) {
	if os.Getenv("APP_ENV") != "production" {
		err := godotenv.Load(".centrs.env")
		if err != nil {
			return nil, err
		}
	}

	app := &App{
		Name:    os.Getenv("APP_NAME"),
		Version: os.Getenv("APP_VERSION"),
	}

	redis := &Redis{
		ConnectionString: os.Getenv("REDIS_CONNECTION_STRING"),
		Password:         os.Getenv("REDIS_PASSWORD"),
	}

	postgres := &Postgres{
		Host:       os.Getenv("DB_HOST"),
		Port:       os.Getenv("DB_PORT"),
		User:       os.Getenv("DB_USER"),
		Name:       os.Getenv("DB_NAME"),
		Password:   os.Getenv("DB_PASSWORD"),
		Connection: os.Getenv("DB_CONNECTION"),
	}

	return &Config{
		App:      app,
		Redis:    redis,
		Postgres: postgres,
	}, nil
}
