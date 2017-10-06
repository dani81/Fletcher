/*var Lab2 = function() {
  var self = this;

  self.lab2URL = '/lab2/weather.html'; //Your URL must end in this (and only this to work)
  //Make sure that your URL is in the form: xxx.xxx/lab2/weather.html

  self.cityInput = $("#cityField"); //The ID for your city input field
  self.suggestionsList = $("#txtHint"); //The ID for your suggestions list (should be a ul)
  self.allSuggestions = $$("#txtHint li"); //This will grab all of the suggestions in your list - assuming your ul has the correct ID
  self.weatherButton = $("#weatherButton"); //The ID for your submit button that will pull the weather data
  self.cityTextArea = $("#displayCity"); //The ID for the text area that displays the city name that was submitted
  self.weatherText =$("#weather"); //The ID for the weather results section


  self.stackSearchInput = $("#searchStack"); //The ID for the input field to search stack exchange
  self.stackSearchButton = $("#searchButton"); //The ID for the button that will start the search
  self.stackSearchResults = $("#searchResults"); //The ID for the area that contains the stack exchange search results

}

module.exports = new Lab2();
*/
/**
 * For more information about the test driver used, check out: protractortest.org
 * For information about page objects: http://www.protractortest.org/#/page-objects
 */



/*
  var items = [356, 627, 1145, 953, 184, 1364, 327, 895, 1103, 1067, 1451, 1367, 793, 999, 451, 1695, 1295, 1639, 1489, 1489, 1489, 1489, 1475, 1403, 932, 954, 954, 954, 954, 954, 1047, 1138, 1045, 1400, 1132];
  console.log("start");    
  $('#searchButton').click(function(){
      console.log("Click");
      var myurl= "http://dynamic.xkcd.com/api-0/jsonp/comic/" + items[Math.floor(Math.random()*items.length)];
      console.log(myurl);  
    $.ajax({
        url : myurl,
        crossDomain: true,
        dataType : "jsonp",
        success : function(parsed_json) {
          console.log(parsed_json);
          $("#comic").html(JSON.stringify(parsed_json["alt"]));
          $("#xkcdcontent").append(
            $("<h1/>").text(parsed_json.title),
            $("<img/>").attr({
              src: parsed_json.img,
              title: parsed_json.alt,
              alt: parsed_json.title
            })
          );
        },
        error : function(){
          $("#comic").html("It seems your comic was not loaded.);
        }
      });
    });

*/
