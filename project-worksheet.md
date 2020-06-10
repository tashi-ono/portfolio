# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day   | Deliverable                                  | Status     |
| ----- | -------------------------------------------- | ---------- |
| Day 1 | Project Description                          | Incomplete |
| Day 1 | Wireframes / Priority Matrix / Timeline      | Complete   |
| Day 3 | Core Application Structure (HTML, CSS, etc.) | Incomplete |
| Day 4 | MVP & Bug Fixes                              | Incomplete |
| Day 5 | Final Touches                                | Incomplete |
| Day 6 | Present                                      | Incomplete |

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

Personal portfolio website to showcase my projects from General Assembly.

## Google Sheet

Include link to your google sheet [here.](https://docs.google.com/spreadsheets/d/1sQCREZyXOxO30tPfAtXGL0KJA8iJAL9lCyuUTLvV-LI/edit?usp=sharing)

## Wireframes

- [Mobile - Homepage](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1591634488/Portfolio%20Wireframes/20200608_093433_cyt9km.jpg)
- [Mobile - Nav & About](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1591634682/Portfolio%20Wireframes/20200608_093457_cqygfx.jpg)
- [Mobile - Porfolio & Contact](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1591637355/Portfolio%20Wireframes/20200608_093349_jsllo6.jpg)
- [Tablet - Homepage](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1591637511/Portfolio%20Wireframes/20200608_071820_myt7f3.jpg)
- [Desktop - Homepage](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1591637431/Portfolio%20Wireframes/20200608_071758_knizi7.jpg)
- [Desktop - About](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1591637581/Portfolio%20Wireframes/20200608_071802_odfz6n.jpg)
- [Desktop - Portfolio](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1591637712/Portfolio%20Wireframes/20200608_071812_gkrogj.jpg)
- [Desktop - Contact](https://res.cloudinary.com/gaseir526-tashiono/image/upload/v1591637771/Portfolio%20Wireframes/20200608_071817_z6lvow.jpg)

## Time/Priority Matrix

[Link](https://docs.google.com/spreadsheets/d/1CR7Lmojcq8MD6HO9E3x_PFL2CEnhediGxXCAZakexzo/edit?usp=sharing)

### MVP/PostMVP

## Functional Components

#### MVP

| Component                | Priority | Estimated Time | Time Invetsted | Actual Time |
| ------------------------ | :------: | :------------: | :------------: | :---------: |
| HTML/CSS Content         |    H     |      2hr       |      -hr       |     -hr     |
| Mobile Pop-up Nav        |    H     |      2hr       |      -hr       |     -hr     |
| Contact Icons            |    L     |     1.5hr      |      -hr       |     -hr     |
| Skills Flexbox           |    H     |      2hr       |      -hr       |     -hr     |
| Portfolio Grid           |    H     |      4hr       |       hr       |     -hr     |
| Contact Form             |    H     |      2hr       |      -hr       |     -hr     |
| Regular Nav Bar          |    H     |      1hr       |      -hr       |     -hr     |
| Footer                   |    M     |      1hr       |       hr       |     -hr     |
| Homepage Buttons         |    L     |      2hr       |      -hr       |     -hr     |
| Responsive Porfolio Grid |    H     |      3hr       |      -hr       |     -hr     |
| API & Research/Review    |    H     |      4hr       |      -hr       |     -hr     |
| Bootstrap                |    H     |      4hr       |      -hr       |     -hr     |
| Total                    |    H     |     30hrs      |      -hrs      |    -hrs     |

#### PostMVP

| Component                 | Priority | Estimated Time | Time Invetsted | Actual Time |
| ------------------------- | :------: | :------------: | :------------: | :---------: |
| Nav Button Hover          |    H     |      2hr       |      -hr       |     -hr     |
| Make Own Icon             |    L     |      2hr       |      -hr       |     -hr     |
| Slide Mobile Nav Window   |    M     |      2hr       |      -hr       |     -hr     |
| Project Grid Hover        |    H     |      2hr       |      -hr       |     -hr     |
| Animated Homepage Buttons |    L     |      3hr       |      -hr       |     -hr     |
| Total                     |    H     |     11hrs      |      -hrs      |    -hrs     |

## Additional Libraries

Use this section to list all supporting libraries and thier role in the project.
Bootstrap was used for my navigation bar.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions

- Overlaying header text on homepage background. I had to put my header text into a word container div and set it to relative position so that I could manipulate it on top of the header background photo.
- I had an issue with my navigation bar disappearing after I tried to make the position fixed. I fixed this by making the z-index: 1, which told the header navbar that it is the first element that will be layered on top of other elements.
- I had an issue with the Bootstrap nav not allowing me to change the background-color even though it allowed me to add background texture. I was able to bypass this by adding "!important" after my color hex code.

#### SAMPLE.....

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier  
**RESOLUTION**: Missing comma after first object in sources {} object
