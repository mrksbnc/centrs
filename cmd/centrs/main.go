package main

import (
	"fmt"

	"github.com/mrksbnc/centrs/internal/adapter/config"
)

func main() {
	config, err := config.ConstructConfig()

	fmt.Println("Hello, world!")
	fmt.Println(config)
	fmt.Println(err)
}
