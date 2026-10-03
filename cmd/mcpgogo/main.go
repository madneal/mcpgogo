package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/madneal/mcpgogo"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Content-Type", "text/plain; charset=utf-8")
		_, _ = fmt.Fprintln(w, mcpgogo.Hello("mcpgogo"))
	})

	if err := http.ListenAndServe(":"+port, nil); err != nil {
		panic(err)
	}
}
