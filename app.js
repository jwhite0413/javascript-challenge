var filterData = data;

var tbody = d3.select("tbody");

var filterEntries = d3.select ("#filter-btn");
filterEntries.on("click", function() {


    d3.event.preventDefault();


    var date = d3.select("#datetime");
    var city = d3.select("#city");
    var state = d3.select("#state");
    var country = d3.select("#country");
    var shape = d3.select("#shape");

    d3.select("#datetime");
    d3.select("#city");
    d3.select("#state");
    d3.select("#country");
    d3.select("#shape");

    if (date !== ""|| city !== ""|| state !== ""||country !== ""|| shape !==""){
        buildTable(date,city,state,country,shape);
    }
    else{
        console.log("No input criteria provided.")
    };


function buildTable (date, city, state, country, shape) {
    tbody.html("");
    var filteredData =[];
    if (date !== "") {
        filteredData = sightings.filter(sighting => sighting.datetime == date);
    }
    else {
        filteredData = sightings;
    };

    if (city !== "") {
        filteredData = filteredData.filter(data =>data.city == city);
    };

    if (state !== "") {
        filteredData = filteredData.filter(data => data.state == state);
        
    };
    if (country !=="") {
        filteredData = filteredData.filter(data => data.country == country);
    };
    if (shape !=="" ) {
        filteredData = filteredData.filter(data => data.shape == shape);
    };
    console.log(filteredData);

    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
