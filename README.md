# Activity-8---Chapt-6
Activity 8 - Chapt 6 Convert Temps assignment 
Extra 6-1 Develop the Temperature Converter
In this exercise, you’ll use radio buttons to determine whether the conversion is from
Fahrenheit to Celsius or vice versa. You’ll also modify the DOM so the labels change
when a radio button is clicked, and the page displays an error message when the user
enters invalid data.
When the user does a conversion from Fahrenheit to Celsius, it looks like this:
When the user clicks on the second radio button to do a conversion from Celsius to
Fahrenheit, it looks like this:
And if the user enters invalid data, it looks like this:


1. Download the zip file on canvas. It will contain an html file already linked to a css
file and js file that are also provided. Make sure to save them all in the same folder.

2. Note that the JavaScript file has some starting JavaScript code, including the $()
function, three helper functions, three event handler functions, and a
DOMContentLoaded event handler that attaches the three event handlers.

3. Review how the toCelsius() and toFarhenheit() event handler functions call the
toggleDisplay() helper function and pass it strings to display. Also note that the
toggleDisplay() helper function and the convertTemp() event handler function are
incomplete.

4. Code the toggleDisplay() function so it changes the text in the labels for the text
boxes to the values in the parameters that it receives. It should also clear the
disabled text box where the computed temperature is displayed.

5. Code the convertTemp() function without any data validation. It should use the
helper functions to calculate the temperature based on which radio button is
checked. The value returned by the helper functions should be rounded to zero
decimal places.

6. Add data validation to the convertTemp() function. If the entry is note a valid
number, a validation message should be displayed in the element with the id of
“message”.

7. Add any finishing touches to the application whenever that’s appropriate. This can
be things like moving the focus to the first text box and selecting the text, clearing a
previous error message, or clearing a previously computed temperature value.

8. Once all your files are completed you will upload them to a Github Pages repository and
submit a link to your index page so I can test your application. Make sure you test it before
submitting the link.
