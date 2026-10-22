//
// JavaScript:  LastModified date
//

var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday");

var monName = new Array("January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December");

var modifDate = document.lastModified;	// See comments below
var modifTime = Date.parse(modifDate);	// Converts modifDate to msec
var modify = new Date();
modify.setTime(modifTime);		// Converts msec to a usable date

var whatYear = modify.getFullYear();
if (whatYear < 1990) {whatYear += 100; modify.setFullYear(whatYear);}

/*
	document.lastModified is a STRING:  mm/dd/yy hh:mm:ss

	The four lines above convert the "last modified" STRING into a
	"last modified" DATE.

	Written by Charles Hu, Class of 1999
	for the MCW Student Assembly
	chuckhu@hotmail.com
*/

if (modifTime == 0) {		// If no "last modified" date is stored
	document.writeln("Unknown");
} else {
	var Year = modify.getYear();
	if ((Year < 300) && (Year > 90)) {Year = Year + 1900}
	if (Year <= 89) {Year = Year + 2000}
		// Year may be stored as 'yy' vs. 'yyyy'

	document.writeln(dayName[modify.getDay()] + ", " +
	monName[modify.getMonth()] + " " + modify.getDate() + ", " + Year);
}
