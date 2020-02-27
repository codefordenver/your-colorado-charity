package server

import (
	"encoding/json"
	"log"
	"net/http"

	// "strconv"
	"github.com/codefordenver/your-colorado-charity/db"
	"github.com/gorilla/mux"
)

type server struct{}

func get(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"message": "get called"}`))
}

func post(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	w.Write([]byte(`{"message": "post called"}`))
}

func put(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusAccepted)
	w.Write([]byte(`{"message": "put called"}`))
}

func delete(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"message": "delete called"}`))
}

func notFound(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusNotFound)
	w.Write([]byte(`{"message": "not found"}`))
}

// examples...
// func params(w http.ResponseWriter, r *http.Request) {
//     pathParams := mux.Vars(r)
//     w.Header().Set("Content-Type", "application/json")

//     userID := -1
//     var err error
//     if val, ok := pathParams["userID"]; ok {
//         userID, err = strconv.Atoi(val)
//         if err != nil {
//             w.WriteHeader(http.StatusInternalServerError)
//             w.Write([]byte(`{"message": "need a number"}`))
//             return
//         }
//     }

//     commentID := -1
//     if val, ok := pathParams["commentID"]; ok {
//         commentID, err = strconv.Atoi(val)
//         if err != nil {
//             w.WriteHeader(http.StatusInternalServerError)
//             w.Write([]byte(`{"message": "need a number"}`))
//             return
//         }
//     }

//     query := r.URL.Query()
//     location := query.Get("location")

//     w.Write([]byte(fmt.Sprintf(`{"userID": %d, "commentID": %d, "location": "%s" }`, userID, commentID, location)))
// }

// func createEvent(w http.ResponseWriter, r *http.Request) {
// 	var newEvent event
// 	reqBody, err := ioutil.ReadAll(r.Body)
// 	if err != nil {
// 		fmt.Fprintf(w, "Kindly enter data with the event title and description only in order to update")
// 	}

// 	json.Unmarshal(reqBody, &newEvent)
// 	events = append(events, newEvent)
// 	w.WriteHeader(http.StatusCreated)

// 	json.NewEncoder(w).Encode(newEvent)
// }

func getAllCharities(w http.ResponseWriter, r *http.Request) {
	charities := db.SelectAllCharities()
	json.NewEncoder(w).Encode(charities)
}

func ServerConnect() {
	r := mux.NewRouter()
	api := r.PathPrefix("/api").Subrouter()
	api.HandleFunc("", get).Methods(http.MethodGet)
	api.HandleFunc("", post).Methods(http.MethodPost)
	api.HandleFunc("", put).Methods(http.MethodPut)
	api.HandleFunc("", delete).Methods(http.MethodDelete)
	api.HandleFunc("/charities", getAllCharities).Methods(http.MethodGet)
	api.HandleFunc("", notFound)
	log.Fatal(http.ListenAndServe(":8080", r))
}
