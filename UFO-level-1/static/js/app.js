// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

//Create table from data using function --> We assigned variable tableData to our data above. 
tableData.forEach((ufodata) => {
    console.log(ufodata);
    var row = tbody.append('tr');

    Object.entries(ufodata).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

//assign vairable to our button
var button = d3.select("#filter-btn");
// var form = d3.select ("#form");

// var submit = d3.select("#filter-btn");

//take variable and assign the action of "click" with a function defined below
button.on("click", function() {

    // function runEnter() {
    d3.event.preventDefault();
    d3.select("tbody").html("");

    var inputdate = d3.select("#datetime").property("value");
    // console.log(dateTime);

    //search data records based on the user inputs
    var datesearch = tableData.filter(record => record.datetime === inputdate);
    // console.log(filteredData);

    //show search results
    dataeearch.forEach((ufodata) => {
        var row = tbody.append('tr');

        Object.entries(ufodata).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});