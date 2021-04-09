The application is a simulation of Pacman moving on in a grid, of dimensions 5 units x 5 units.

Pacman is free to roam around the surface of the grid, but is prevented to move off the grid. Any instruction that will move the Pacman off the grid will be disregarded.

Application can only read the instructions:
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT

PLACE should be the first valid instruction to place the Pacman on the grid (X,Y) and facing the direction EAST, NORTH, WEST or SOUTH.
All instructions before a valid PLACE instruction will be disregarded.

MOVE will move the Pacman one unit forward in the facing direction.

LEFT and RIGHT will rotate the Pacman 90 degrees in the specified direction without changing the position of Pacman.

REPORT will display the current position and facing direction of the Pacman in the Output box.

Input can be entered on the textbox provided and only valid instructions will be displayed on the "Input History".


Test Data for the application:

Sample 1:
PLACE 1,2,NORTH

MOVE

RIGHT

REPORT

Output: 1,3,EAST


Sample 2:
PLACE 5,5,SOUTH
MOVE 
MOVE
RIGHT
MOVE 
MOVE
LEFT
REPORT

Output: 3,3,SOUTH


Sample 3:
PLACE 0,0,EAST
RIGHT
MOVE
LEFT
MOVE
LEFT
MOVE
REPORT

Output: 0,1,NORTH
