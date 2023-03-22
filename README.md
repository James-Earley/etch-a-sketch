<h1>Etch-a-sketch</h1>

This project was completed as part of the Odin's Project's foundation course. It initialises a simple etch-a-sketch game and gives the user the option to resize the grid density of the playing area by clicking a button and entering the disired dimension. 


Usage

To use Grid Maker, simply open the HTML file in a web browser. The default grid size is 16x16, but the user can set a custom grid size by clicking the "et Number of Squares" button and entering a number.

Functions

gridMaker(userinput)
This function creates the grid of squares. It takes an optional userinput parameter that sets the size of the grid (default is 16). The function creates a container div with id "container", then creates userinput number of columns with class "gridColumn", and userinput number of cells with class "cell" inside each column.

hoverEffect()
This function adds the hover effect to the cells. It adds a mouseover event listener to each cell that adds the class "hover" to the cell, causing it to change color.

userButton()
This function adds a click event listener to the "Set Size" button. When the button is clicked, the function removes the current grid and prompts the user for a new grid size. It then calls the gridMaker() function with the new size.

removeGridmaker()
This function removes the current grid by setting the innerHTML property of the container element to an empty string.
