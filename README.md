This project was completed as part of the Odin's Project's foundation course. It initialises a simple etch-a-sketch and gives the user the option to resize the grid density of the playing area by clicking a button and entering the disired dimension. 

It is comprised of three functions:

Function: gridMaker(userinput)

This function takes an optional input userinput which defaults to 16 if no value is provided. It creates a grid of size userinput by userinput by creating a div container element with id "container" and adding it to the DOM. The function then creates userinput number of div elements with class "gridColumn" and appends them to the container. For each column, it creates userinput number of div elements with class "cell" and appends them to the column.

Function: hoverEffect()
This function adds a hover effect to each of the div elements with class "cell" by adding a mouseover event listener to each element. When the mouse is over the element, the function adds class "hover" to the element.

Function: userButton()
This function adds a click event listener to a button with id "button". When the button is clicked, the function removes the current grid by calling the removeGridmaker() function and prompts the user for a new grid size. The function then calls the gridMaker() function with the user's input.

Function: removeGridmaker()
This function removes the current grid by setting the innerHTML property of the container element to an empty string.
