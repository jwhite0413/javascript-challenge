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

var button = d3.select("#filter-btn");
// var form = d3.select ("#form");

// var submit = d3.select("#filter-btn");
button.on("click", function() {

    // function runEnter() {
    d3.event.preventDefault();
    d3.select("tbody").html("");

    var inputvalue = d3.select("#input").property("value");
    // console.log(dateTime);

    var filteredData = tableData.filter(record => record.datetime === inputvalue ||
        record.city === inputvalue ||
        record.state === inputvalue ||
        record.country === inputvalue ||
        record.shape === inputvalue);
    console.log(filteredData);

    // filteredData.forEach((ufodata) => {
    //     var row = tbody.append('tr');

    //     Object.entries(ufodata).forEach(([key, value]) => {
    //         console.log(key, value);
    //         var cell = row.append('td');
    //         cell.text(value);
    //     });
    // });
});


// YOUR CODE HERE!