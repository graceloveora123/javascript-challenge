// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);
/*
var loadTableData=data.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });*/

  var loadTableData=(selections)=>{
      tbody.html("");
          selections.forEach(dataRow=>{
              var tableRow=tbody.append("tr");
              tableColumns.forEach(column=>tableRow.append("td").text(dataRow[column]))
              });
  
  }

  loadTableData(tableData);
      // Select the button
var button = d3.select("#filter-btn");

      // Select the form
var form = d3.select("#filters");
  // Create event handlers 
  button.on("click", runEnter);
  form.on("submit",runEnter);
  
  // Complete the event handler function for the form
  function runEnter() {
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node


    var inputElement = d3.select("#datetime");
    var inputCityElement = d3.select("#city");
    var inputStateElement = d3.select("#state");
    var inputCountryElement = d3.select("#country");
    var inputShapeElement = d3.select("#shape");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    var inputCityValue = inputCityElement.property("value");
    var inputStateValue = inputStateElement.property("value");
    var inputCountryValue = inputCountryElement.property("value");
    var inputShapeValue = inputShapeElement.property("value");
  
  
    console.log(inputValue);
    console.log(inputCityValue);
    console.log(inputStateValue);
    console.log(inputCountryValue);
    console.log(inputShapeValue);
    //console.log(tableData);


    if(inputValue){
        var filteredData = tableData.filter(person => person.datetime === inputValue);
        if(filteredData.length !=0) {
            loadTableData(filteredData);
        }
        else {
            tbody.html("");
            tbody.append("tr").append("tb").text("No data from this date")
        }
    }

    else if(inputCityValue) {
        var filteredData = tableData.filter(person => person.city === inputValue);
        if(filteredData.length !=0) {
            loadTableData(filteredData);
        }
        else {
            tbody.html("");
            tbody.append("tr").append("tb").text("No data from this city")
        
        }
    }
    else if(inputStateValue) {
        var filteredData = tableData.filter(person => person.state === inputValue);
        if(filteredData.length !=0) {
            loadTableData(filteredData);
        }
        else {
            tbody.html("");
            tbody.append("tr").append("tb").text("No data from this state")
        
        }
    }

    else if(inputCountryValue) {
        var filteredData = tableData.filter(person => person.country === inputValue);
        if(filteredData.length !=0) {
            loadTableData(filteredData);
        }
        else {
            tbody.html("");
            tbody.append("tr").append("tb").text("No data from this country")
        
        }
    }

    else if(inputShapeValue) {
        var filteredData = tableData.filter(person => person.shape === inputValue);
        if(filteredData.length !=0) {
            loadTableData(filteredData);
        }
        else {
            tbody.html("");
            tbody.append("tr").append("tb").text("No data found under this shape")
        
        }
    }
            console.log(filteredData);
            /*
            filteredData.forEach((UFOReport) => {
            var row = tbody.append("tr");
            Object.entries(UFOReport).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
            }); */
        filteredData.forEach(function(selection) {
            console.log(selection);
            var row = tbody.append("tr");

            Object.entries(selection).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
            });
        });
   
  };
  




