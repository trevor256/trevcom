package main

import(
    "fmt"
    "log"
    "net/http"
    "database/sql"
    _ "github.com/go-sql-driver/mysql"
)


func datab() {
    db, err := sql.Open("mysql", "root:<yourMySQLdatabasepassword>@tcp(127.0.0.1:3306)/test")
    if err != nil {
        panic(err.Error())
    }
    defer db.Close()
    fmt.Println("Success!")
}

func helloHandler(w http.ResponseWriter, r *http.Request){
if r.URL.Path != "/hello" {
    http.Error(w, "404 not found", http. StatusNotFound)
    return
}
if r.Method != "GET"{
    http.Error(w, "method is not supported", http.StatusNotFound)
    return
}
fmt.Fprintf(w, "hello!")
}

func main(){
    fileServer := http.FileServer(http.Dir("./public"))
    datab()
    http.Handle("/", fileServer)
    http.HandleFunc("/hello", helloHandler)
    

    fmt.Printf("120.0.0.1:8080")
    if err := http.ListenAndServe(":8080", nil); err !=nil {
        log.Fatal(err)

    }
}
