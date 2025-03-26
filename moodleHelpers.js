
/* button link*/

var setupButton = (myParent, url, classIdentifier) => {
  console.log(myParent)
  let myButton = myParent.querySelectorAll(classIdentifier)[0];

  console.log(myButton)

  myButton.addEventListener('click', () => {
    let myrealUrl = 'https://' + url;
    window.open(myrealUrl, "_blank");
  })
}

/* brug i moodle, kræver at moodleHelpers.js er linket ind i html'en

<p>
<button class="btn btn-secondary RepoButton" type="button"> Template repository</button>
  <script src="https://bo-nicolaisen.github.io/moodle-hacks/moodleHelpers.js"></script>  // kan undværes hvis det er linket i toppen
  <script>
    setupButton(document.currentScript.parentElement,'github.com/bo-nicolaisen/moodle-hacks/blob/main/moodleHelpers.js','.RepoButton');
  </script>
</p>
*/
