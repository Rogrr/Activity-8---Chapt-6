"use strict";
const $ = selector => document.querySelector(selector);

/*********************
*  helper functions  *
**********************/
const calculateCelsius = temp => (temp-32) * 5/9;
const calculateFahrenheit = temp => temp * 9/5 + 32;

// 4. Code the toggleDisplay() function so it changes the text in the labels for the text boxes to the values in the parameters that it receives. It should also clear the disabled text box where the computed temperature is displayed.

const toggleDisplay = (label1Text, label2Text) => {

	// when user checks fahrenheit to celsius radio  the toCelsius label runs 
	// when user checks Degree to Celsius  to fahrenheit, the toFahrenheit runs 

// Update the label text to the parameters text or toCelsius parameter, tofahrenheit parameter
$("#degree_label_1").textContent = label1Text;
$("#degree_label_2").textContent = label2Text;

// Clear the computed temperature , or label 2
$("#degrees_computed").value = "";

}

/****************************
*  event handler functions  *
*****************************/
const convertTemp = () => {   
	
	// get the string input and convert it to a interger
	const inputedDegrees = parseFloat($("#degrees_entered").value);
	const messageSpan = $("#message"); 

	// clear any old error message for error and computed values 
	 messageSpan.textContent = ""; 	
	 $("#degrees_computed").value = "";


	// validation if not a number , if it is not a number the message displays if not it returns to the function 
	if (isNaN(inputedDegrees)){
		$("#message").textContent = "You must enter a valid number for degrees.";
        $("#degrees_entered").focus(); // Focus on the input field
        return;
	}
 

	// Code the convertTemp() function without any data validation. It should use the helper functions to calculate the temperature based on which radio button is checked. The value returned by the helper functions should be rounded to zero decimal places

	 if ($("#to_celsius").checked) {
		// declare the result of the calculation to a const variable using the celsius function runing the inputeed degrees
		const result = calculateCelsius(inputedDegrees);
		// round result into zero decimal 
		$("#degrees_computed").value = Math.round(result);
	 }

	 else {
		const result = calculateFahrenheit(inputedDegrees);
		$("#degrees_computed").value = Math.round(result);
		}
	 }

// Helper functions that changes text meant for degrees labels 
const toCelsius = () => toggleDisplay("Enter F degrees:", "Degrees Celsius:");
const toFahrenheit = () => toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:");

document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#convert").addEventListener("click", convertTemp);
    $("#to_celsius").addEventListener("click", toCelsius);
    $("#to_fahrenheit").addEventListener("click", toFahrenheit);
	
	// move focus
	$("#degrees_entered").focus();
});

// 1. Download the zip file on canvas. It will contain an html file already linked to a css file and js file that are also provided. Make sure to save them all in the same folder.

// check

// 2. Note that the JavaScript file has some starting JavaScript code, including the $()function, three helper functions, three event handler functions, and a DOMContentLoaded event handler that attaches the three event handlers.

// check 

//3. Review how the toCelsius() and toFarhenheit() event handler functions call the toggleDisplay() helper function and pass it strings to display.
//  Also note that the toggleDisplay() helper function and the convertTemp() event handler function are incomplete.

// they have parameters that get sent to toggle display function so it changes depending on what is clicked. 


// 4. Code the toggleDisplay() function so it changes the text in the labels for the text boxes to the values in the parameters that it receives. It should also clear the disabled text box where the computed temperature is displayed.

// check , remember modular on function to change parameter one for conversion 


// 5. Code the convertTemp() function without any data validation. It should use the helper functions to calculate the temperature based on which radio button is checked. The value returned by the helper functions should be rounded to zero decimal places.

// use if else state ment to check for celsius or fahrenhiet check. declare a const for the result and then use the Math.round to round up to the 0 decimal place.


// 6. Add data validation to the convertTemp() function. If the entry is note a valid number, a validation message should be displayed in the element with the id of “message”.

// i had to add a span to the HTMl because there was no ID with in the HTML name "message", then when i check the CSS there was a span for red. So I assume that the HTML was missing a span. 


// 7. Add any finishing touches to the application whenever that’s appropriate. This can be things like moving the focus to the first text box and selecting the text, clearing a previous error message, or clearing a previously computed temperature value.


// added focus to before erroring out the message, and after the event handler. Also set message span to "" to clear after error. 

// 8. Once all your files are completed you will upload them to a Github Pages repository and submit a link to your index page so I can test your application. Make sure you test it before submitting the link.


