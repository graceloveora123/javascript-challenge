// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
console.log(data);

data.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


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
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(person => person.datetime === inputValue);
  
    console.log(filteredData);
    /*
    filteredData.forEach((UFOReport) => {
      var row = tbody.append("tr");
      Object.entries(UFOReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });*/
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

