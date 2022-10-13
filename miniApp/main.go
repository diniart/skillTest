package main

import (
	"fmt"
	"net/http"

	authcontroller "miniApp/controllers"
)

func main() {
	http.HandleFunc("/", authcontroller.Index)
	http.HandleFunc("/login", authcontroller.Login)
	http.HandleFunc("/logout", authcontroller.Logout)
	http.HandleFunc("/register", authcontroller.Register)
	http.HandleFunc("/loginGoogle", authcontroller.GoogleCallback)
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets"))))

	fmt.Println("Server jalan di: http://localhost:3001")
	http.ListenAndServe(":3001", nil)
}
