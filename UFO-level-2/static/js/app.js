// from data.js
var tableData = data;
// console.log(tableData);

var tbody = d3.select("tbody");


//Create table from data using function --> We assigned variable tableData to our data above. 
tableData.forEach(function(ufodata) {
    // console.log(ufodata);

    var row = tbody.append("tr");

    Object.entries(ufodata).forEach(function([key, value]) {
        // console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});

//assign variable to our button
var button = d3.select("#filter-btn");


//take variable and assign the action of "click" with a function defined below
button.on("click", function() {

    d3.event.preventDefault();
    d3.select("tbody").html("");

    //variables for each search category
    var inputdate = d3.select("#datetime").property("value");
    var inputcity = d3.select("#city").property("value").toLowerCase().trim();
    var inputstate = d3.select("#state").property("value").toLowerCase().trim();
    var inputecountry = d3.select("#country").property("value").toLowerCase().trim();
    var inputshape = d3.select("#shape").property("value").toLowerCase().trim();
    // console.log(dateTime);

    //search data records based on the user inputs
    var multisearch = tableData.filter(record => record.datetime === inputdate ||
        record.city === inputcity ||
        record.state === inputstate ||
        record.country === inputecountry ||
        record.shape === inputshape);
    console.log(multisearch);
    //show results of query
    multisearch.forEach(function(inputs) {
        var row = tbody.append('tr');

        Object.entries(inputs).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append('td');
            cell.text(value);
        });
    });
});