console.log("dancearrow.js is loading...");
loadData();




function loadData() {
    fetch("database.json")
        .then(function(response) {
            response.json()
                .then(function(jsonObj) {
                    database = jsonObj;
                    console.log("Database Loaded Successfully");
                })
        });
}
console.log("dancearrow.js is alive...");
