// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//get data and show all on page
tableData.forEach((ufodata) => {
    console.log(ufodata);
    var row = tbody.append('tr');

    Object.entries(ufodata).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
// var form = d3.select ("#form");

// var submit = d3.select("#filter-btn");
button.on("click", function() {

    // function runEnter() {
    d3.event.preventDefault();
    d3.select("tbody").html("");

    var dateTime = d3.select("#datetime").property("value");
    // console.log(dateTime);

    var filteredData = tableData.filter(record => record.datetime === dateTime);
    // console.log(filteredData);

    filteredData.forEach((ufodata) => {
        var row = tbody.append('tr');

        Object.entries(ufodata).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});