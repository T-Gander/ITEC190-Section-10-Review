"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Review Assignment

   Author: Thomas Gander
   Date:   04/03/2023

	
*/

var thisDay = new Date("October 1, 2021");
var tableHTML = "<table id='eventTable'> <caption>Upcoming Events</caption> <tr><th>Date</th><th>Event</th><th>Price</th></tr>";
var endDate = new Date(thisDay);
endDate.setDate(thisDay.getDate()+14);

for (var i = 0; i < eventDates.length-1; i++){

   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleDateString();

   if(thisDay <= eventDate && eventDate <= endDate){
      tableHTML += "<tr> <td>" + eventDay + " @ " + eventTime + "</td> <td>" + eventDescriptions[i] + "</td> <td>" + eventPrices[i] + "</td> </tr>";
   }
}
tableHTML += "</table>";


