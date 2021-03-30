// Assign the data from `data.js` to a descriptive variable
var tableData = data;
// use D3 to select the html element that references the tablebody in html
var tbody = d3.select("tbody");
// create a function to build the table with certain data
function buildTable(data) {
    //at the start of the function clear out any prior data
    tbody.html("");
    //Loop through the data - and for each row in the data...
    data.forEach((sighting) => {
        // append a new blank row to the table
        var row = tbody.append("tr");
        //in the data for each key value pair put the text value in the cell 
        Object.entries(sighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        }); //end the inner for each loop of column
    }); //end the outer for each loop of row
}; //finish the function of building the table
//call the function to use the table data in the data.js file
buildTable(tableData);

//get reference to the button on the html page with id#
var button = d3.select("#filter-btn");
// Create an event handler to listen for the event of the button being clicked on the table
button.on("click", runEnter);
//trigger a function called runEnter when the button is clicked
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    //identify the input element id in the html code
     var inputElement = d3.select("#datetime");
    //identify the value of the input when changed in the input element form field
    var inputValue = inputElement.property("value");
    //identify the data to be used in the function
    let sightings = tableData
    //filter the data for the value input in the input element field
    var filterData = sightings.filter(sighting => sighting.datetime === inputValue);
    //verify function is reading data, reading input and filtering on the input
    console.log(inputValue);
    console.log(sightings);
    console.log(filterData);
    //in the runEnter function call the buildTable function and use the filterData function data
    buildTable(filterData);
}; //end the runEnter function






