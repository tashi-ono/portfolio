# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day   | Deliverable                                  | Status   |
| ----- | -------------------------------------------- | -------- |
| Day 1 | Project Description                          | Complete |
| Day 1 | Wireframes / Priority Matrix / Timeline      | Complete |
| Day 3 | Core Application Structure (HTML, CSS, etc.) | Complete |
| Day 4 | MVP & Bug Fixes                              | Complete |
| Day 5 | Final Touches                                | Complete |
| Day 6 | Present                                      | Complete |

## Project Description

This is my personal portfolio website to showcase my skills and how I have applied them to projects from General Assembly.

Skills:
HTML5,
CSS3,
Javascript,
jQuery,
Bootstrap

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

| Component                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------ | :------: | :------------: | :-----------: | :---------: |
| HTML/CSS Content         |    H     |      2 hr      |     6 hr      |    8 hr     |
| Mobile Pop-up Nav        |    H     |      2 hr      |     2 hr      |    1 hr     |
| Contact Icons            |    L     |     1.5 hr     |     2 hr      |    1 hr     |
| Skills Flexbox           |    H     |      2 hr      |     1 hr      |    1 hr     |
| Portfolio Grid           |    H     |      4 hr      |     2 hr      |    5 hr     |
| Contact Form             |    H     |      2 hr      |     2 hr      |   0.5 hr    |
| Regular Nav Bar          |    H     |      1 hr      |     2 hr      |    2 hr     |
| Footer                   |    M     |      1 hr      |     2 hr      |    1 hr     |
| Homepage Buttons         |    L     |      2 hr      |     0 hr      |    0 hr     |
| Responsive Porfolio Grid |    H     |      3 hr      |     3 hr      |    4 hr     |
| API & Research/Review    |    H     |      4 hr      |     2 hr      |    2 hr     |
| Bootstrap                |    H     |      4 hr      |     2 hr      |    1 hr     |
| Total                    |    H     |     30 hrs     |    26 hrs     |  26.5 hrs   |

#### PostMVP

| Component               | Priority | Estimated Time | Time Invested | Actual Time |
| ----------------------- | :------: | :------------: | :-----------: | :---------: |
| Nav Button Hover        |    H     |      2 hr      |     3 hr      |   0.5 hr    |
| Make Own Icon           |    L     |      2 hr      |     0 hr      |    0 hr     |
| Slide Mobile Nav Window |    M     |      2 hr      |     0 hr      |    0 hr     |
| Project Grid Hover      |    H     |      2 hr      |     3 hr      |   3.5 hr    |
| Javascript Timer Quotes |    L     |      3 hr      |     3 hr      |   2.5 hr    |
| Total                   |    H     |     11 hrs     |     9 hrs     |   6.5 hrs   |

## Additional Libraries

For languages:
Bootstrap was used for my navigation bar. JQuery and JSON was used to dynamically add my projects from a Google Sheet.

For design:
I used TransparentTextures.com to enhance background colors.
All icons were from Icon8.com and CleanPNG.com
I also used FreeFrontend.com to get ideas for my button animation and overlays.

## Code Snippet

I am proud of the entire code block for addProjectsToDOM function because I had to write out how I was going to layer my figure and ficaption tags with a bunch of other tags dynamically. I wrote out my code in HTML to visualize how I wanted jQuery to do this. I did all this before I learned from a teammate that I can use template literals to create large HTML blocks that would have simplified my life. Still I am proud of what I did.

```
  function addProjectsToDOM(projectsArr) {
      let $projectImg = $("<img>").attr({
        src: project.image,
        alt: project.title,
      });
      let $projectLink = $("<a>").attr({
        href: project.url,
        target: "_blank",
      });
      let $figure = $("<figure>").addClass("grid-item thumbnail");
      $figure.appendTo(".portfolio-grid");
      $projectLink.append($projectImg).appendTo($figure);
      let $projectTitle = $("<h4>").text(project.title);
      let $projectDesc = $("<p>").text(project.description);
      let $figcaption = $("<figcaption>").addClass(
        "grid-item title-description"
      );
      $figcaption.insertAfter($figure);
      $projectTitle.appendTo($figcaption);
      $projectDesc.appendTo($figcaption);
    }


In contrast, I'm proud of is this tiny code snippet because I thought it was pretty impressive, despite being super simple.

.skills-icon:hover {
  transform: rotateY(360deg);
  transition: 2s;
}
```

## Issues and Resolutions

- Overlaying header text on homepage background. I had to put my header text into a word container div and set it to relative position so that I could manipulate it on top of the header background photo.
- I had an issue with my navigation bar disappearing after I tried to make the position fixed. I fixed this by making the z-index: 1, which told the header navbar that it is the first element that will be layered on top of other elements.
- I had an issue with the Bootstrap nav not allowing me to change the background-color even though it allowed me to add background texture. I was able to bypass this by adding "!important" after my color hex code.
- Having issue with clicking on a section under the hamburger icon and not having the navigation buttons scroll back up. This was resolved by simply using .collapse('hide').
- Had an issue with my navbar in that when it would take me to a section, it would cover that section's title. I simply fixed this by padding the top of that section so the title would appear below the navbar.

- I ran into an issue with my live website not registering my projects even though VS Code's Live Server was showing them.

**ERROR**:

Mixed Content: The page at 'https://tashi-ono.github.io/seir_526_portfolio_project/' was loaded over HTTPS, but requested an insecure script 'http://code.jquery.com/jquery-3.5.1.min.js'. This request has been blocked; the content must be served over HTTPS.

Uncaught TypeError: Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.

**RESOLUTION**: Replace jquery javascript with - https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js
