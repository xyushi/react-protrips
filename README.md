![Image description](https://i1.faceprep.in/ProGrad/prograd-logo.png)

# ProGrad Lab | REACT - PROBIBO

## Learning Goals

In this exercise, the goal is to learn routing and forms in react:

- routing,
- forms

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

## Instructions
In this lab we will try to work with routing in react and also try to use basic forms. The main idea of this lab is to store down the trip details of the form and display it. We have three components 
- HomeComponent
- AddTripComponent
- ListComponent

Path to Components
- / -> HomeComponent
- /add -> AddComponent
- /list -> ListComponent

The entire application looks like this
![Screenshot](https://i1.faceprep.in/ProGrad/l5-homecomponent.png)
![Screenshot](https://i1.faceprep.in/ProGrad/l5-tripcomponent.png)
![Screenshot](https://i1.faceprep.in/ProGrad/l5-listcomponent.png)

### PROGRESSION 1 | CREATE A HOME COMPONENT

Create a home component and design it as per the screenshot shown below. The home button should display the home component and 


![Screenshot](https://i1.faceprep.in/ProGrad/)


### PROGRESSION 2 | Add New Random Prostars

In your application, create a "*Add Random Prostart* button so that every time you click on this button it adds a new random actor.

First randomly select a prostars from the larger `prostars` array. Then add that prostar the array of 5 in your state. Don't forget to `setState()` to cause React to re-render the app.

At the end of this iteration, your website will probably look like this:

![Screenshot](https://i1.faceprep.in/ProGrad/pro2.PNG)


### PROGRESSION 3 | Sort By Name

The producer asked you to add two new buttons to help them to sort their prostars. When you click on one of the buttons it should **sort the table by `name`** (alphabetically) and when click the other it should **sort by `popularity`** (highest first).

Don't forget to `setState()` after you sort!

This is what you may have at the end of this iteration:

![Screenshot](https://i1.faceprep.in/ProGrad/pro3.PNG)

### PROGRESSION 4 | Sort By Popularity

The producer asked you to add two new buttons to help them to sort their prostars. When you click on one of the buttons it should **sort by `popularity`** (highest first).

Don't forget to `setState()` after you sort!

This is what you may have at the end of this iteration:

![Screenshot](https://i1.faceprep.in/ProGrad/pro4.PNG)

### Bonus | Remove Prostars

The producer also would like to remove some of their prostars. Implement a "*Delete*" button on each row of your `<table>` that will let the user remove the contact they clicked.

When they click, you should get the index of the array of that actor and use it to remove the contact from the array. Don't forget to `setState()` after you remove the prostars!

At the end of this iteration, your web page may look like this after playing a little bit with the "*Delete*" buttons.

## Submission

If you didn't add, commit and push the changes you made, this is the last call. :smile:

please share your github links with your Mentors. Your Mentor's will check up your work and provide feedback. 

## Summary

If you managed to do it, good job! :trophy:

We are proud of you!

Happy Coding ProGrad ❤️!

