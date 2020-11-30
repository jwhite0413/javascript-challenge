// from data.js
var tableData = data;
// console.log(tableData);

var tbody = d3.select("tbody");



tableData.forEach(function(ufodata) {
    // console.log(ufodata);

    var row = tbody.append("tr");

    Object.entries(ufodata).forEach(function([key, value]) {
        // console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});

var buttonfilter = d3.select("#filter-btn");
// var form = d3.select ("#form");

// var submit = d3.select("#filter-btn");
buttonfilter.on("click", function() {

    // function runEnter() {
    d3.event.preventDefault();
    d3.select("tbody").html("");
    var inputdate = d3.select("#datetime").property("value");
    var inputcity = d3.select("#city").property("value").toLowerCase().trim();
    var inputstate = d3.select("#state").property("value").toLowerCase().trim();
    var inputecountry = d3.select("#country").property("value").toLowerCase().trim();
    var inputshape = d3.select("#shape").property("value").toLowerCase().trim();
    // console.log(dateTime);

    var filteredData = tableData.filter(record => record.datetime === inputdate ||
        record.city === inputcity ||
        record.state === inputstate ||
        record.country === inputecountry ||
        record.shape === inputshape);
    console.log(filteredData);

    filteredData.forEach(function(inputs) {
        var row = tbody.append('tr');

        Object.entries(inputs).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});


// YOUR CODE HERE!