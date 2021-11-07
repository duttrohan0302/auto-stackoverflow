# UCS757:Building Innovative Systems
## Submitted by:-
### Rohan Dutt
### 101803151
### COE 8

# Projects
## Live Link
https://ucs757-101803151-projects.herokuapp.com

## Home
![Home](home.jpeg)

# Project 3: Auto Stack Overflow Search Tool
## Introduction
We all have faced issues while learning a new language or coding in the same. Well, this tool takes your python file and automatically figures out the errors and open up all the stack overflow pages which might help you.

## Requirements
1. Python
2. Requests
3. NodeJS
4. EJS

## Browser Requirements
Kindly allow popups to allow the app to function properly.

## Live Link
https://ucs757-101803151-projects.herokuapp.com/auto-stackoverflow

## Input Interface
![Interface](interface_auto_stackoverflow.jpeg)

## Input
![Input](input_auto_stackoverflow.jpg)

## Output
![Output](output_auto_stackoverflow.jpeg)

## Flowchart
![Flowchart](flowchart_auto_stackoverflow.jpeg)

## Observations
1. The age groups 0-2, 4-6, 8-13 and 25-32 are predicted with relatively high accuracy. 
2. The output is heavily biased towards the age group 25-32 ( see the row belonging to the age group 25-32 ). This means that it is very easy for the network to get confused between the ages 15 to 43. So, even if the actual age is between 15-20 or 38-43, there is a high chance that the predicted age will be 25-32. 
3. We observed that the accuracy of the models improved if we use padding around the detected face. This may be due to the fact that the input while training were standard face images and not closely cropped faces that we get after face detection.

## Novelty
1. Detecting gender using an image, can also be extended to detect it in a video stream
2. Predicting the age group of all the individuals in an image
3. Using multiple build packs in Heroku for both Node.js and Python and experimenting with amazon ec2 for deployment  

## Limitation
This technique is limited with its efficiency in detecting age, it cannot detect exact age, and can only detect a certain age group. Also, unfortunately, it does not work on non binary genders yet.  
One can also try to use a regression model instead of classification for Age Prediction if enough data is available.


# Project 2: Age and Gender Detection 
## Introduction
The web app takes an image of a person as input and returns the image with the gender and age group details

## Requirements
1. Python
2. OpenCV-Python
3. NodeJS
4. EJS

## Live Link
https://ucs757-101803151-projects.herokuapp.com/age-gender

## Input Interface
![Interface](interface_gad.jpeg)

## Input
![Input](input_gad.jpg)

## Output
![Output](output_gad.jpeg)

## Flowchart
![Flowchart](flowchart_gad.png)

## Observations
1. The age groups 0-2, 4-6, 8-13 and 25-32 are predicted with relatively high accuracy. 
2. The output is heavily biased towards the age group 25-32 ( see the row belonging to the age group 25-32 ). This means that it is very easy for the network to get confused between the ages 15 to 43. So, even if the actual age is between 15-20 or 38-43, there is a high chance that the predicted age will be 25-32. 
3. We observed that the accuracy of the models improved if we use padding around the detected face. This may be due to the fact that the input while training were standard face images and not closely cropped faces that we get after face detection.

## Novelty
1. Detecting gender using an image, can also be extended to detect it in a video stream
2. Predicting the age group of all the individuals in an image
3. Using multiple build packs in Heroku for both Node.js and Python and experimenting with amazon ec2 for deployment  

## Limitation
This technique is limited with its efficiency in detecting age, it cannot detect exact age, and can only detect a certain age group. Also, unfortunately, it does not work on non binary genders yet.  
One can also try to use a regression model instead of classification for Age Prediction if enough data is available.


# Project 1: Mosaic Creator Using Node and Python
## Introduction
Mosaic creator is a web app which takes the target image as input and generates that image using thousands of small images

## Requirements
1. Python
2. NumPy
3. Pillow
4. NodeJS
5. EJS

## Live Link
https://ucs757-101803151-projects.herokuapp.com/mosaic

## Input Interface
![Interface](interface.jpeg)

## Input
![Input](input.jpg)

## Output
![Output](output.jpeg)

## Flowchart
![Flowchart](flowchart.jpeg)

## Novelty
1. Generation of dataset for images(tiles), using extensions and small python scripts  
2. Finding nearest neighbour in terms of colors for each predefined unit of the target image from the data set tiles  
3. Randomization of images to ensure that maximum pixels are covered for each color   
4. Using multiple build packs in Heroku for both Node.js and Python and experimenting with amazon ec2 for deployment  

## Limitation
This technique is dependent on the variety of images in the dataset in terms of colors, higher the number of images in each color, better will be the mosaic.

