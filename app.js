console.log("jQuery is working", $);

$(() => {
  // sheetUrl is shared url...anyone with tha url can open the sheet in Google Sheets
  const sheetUrl =
    "https://docs.google.com/spreadsheets/d/1sQCREZyXOxO30tPfAtXGL0KJA8iJAL9lCyuUTLvV-LI/edit?usp=sharing";

  //sheetAsJSON is how we will pull the data as JSON (javascript object notation)

  //const sheetAsJSON = 'https://spreadsheets.google.com/feeds/list/ YOUR ID GOES HERE /od6/public/values?alt=json'

  const sheetAsJSON =
    "https://spreadsheets.google.com/feeds/list/1sQCREZyXOxO30tPfAtXGL0KJA8iJAL9lCyuUTLvV-LI/od6/public/values?alt=json";

  console.log("running before ajax");

  // You will see ajax run after the last javascript console log since javascript cannot wait
  // We don't know how long it will take to pull data from the Google sheet
  // .ajax returns a "Promise" saying that it will run after the javascript runs, which is resolved using then()

  $.ajax({
    url: sheetAsJSON,
  })
    .then((data) => {
      console.log("data: ", data);
      // When data is logged, go to feed, then entry, which is 1 object with all details of our project entries
      // data is object
      // feed is object
      // entry is an object array
      const projects = data.feed.entry.map((project) => {
        return {
          title: project.gsx$title.$t,
          image: project.gsx$image.$t,
          description: project.gsx$description.$t,
          url: project.gsx$url.$t,
        };
      }); // map ends

      //   console.log('projects', projects)
      addProjectsToDOM(projects);
    })

    // What if Google is down or Google link ID is wrong???
    // .catch is meant to handle errors
    .catch((err) => console.log("err: ", err));

  console.log("running after ajax");

  function addProjectsToDOM(projectsArr) {
    console.log("projectsArr to be added to DOM: ", projectsArr);
    projectsArr.forEach((project) => {
      // create thumbnail by first creating an img tag
      let $projectImg = $("<img>").attr({
        src: project.image,
        alt: project.title,
      });

      // then create an anchor tag that will wrap around img tag
      let $projectLink = $("<a>").attr({
        href: project.url,
        target: "_blank",
      });

      // finally create figure tag that will wrap around anchor tag
      let $figure = $("<figure>").addClass("grid-item thumbnail");

      // append figure tag to portfolio grid
      $figure.appendTo(".portfolio-grid");

      // nest img in anchor tag and append that into figure tag
      $projectLink.append($projectImg).appendTo($figure);

      // create h5 for project title
      let $projectTitle = $("<h4>").text(project.title).css({
        color: "#eef1dc",
        "font-family": "'Bellota', serif",
      });

      // create p tag for description
      let $projectDesc = $("<p>")
        .text(project.description)
        .css({ "font-weight": "600" });

      // create figcaption that will house project title and description
      let $figcaption = $("<figcaption>")
        .addClass("grid-item title-description")
        .css({ color: "#E4DFD7", "text-align": "center" });

      // // append figcaption after figure
      $figcaption.insertAfter($figure);
      // append title and description to figcaption
      $projectTitle.appendTo($figcaption);
      $projectDesc.appendTo($figcaption);
    });
  }

  // upon clicking a link in the nav bar, hide the nav bar
  $(".navbar-collapse a").on("click", () => {
    $(".navbar-collapse").collapse("hide");
  });
});
