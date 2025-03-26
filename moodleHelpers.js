
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

/* bruges på en button som her:
<p>
<button class="btn btn-secondary RepoButton" type="button"> Template repository</button>
  <script src="https://bo-nicolaisen.github.io/moodle-hacks/moodleHelpers.js"></script>
  <script>
    setupButton(document.currentScript.parentElement,'github.com/bo-nicolaisen/moodle-hacks/blob/main/moodleHelpers.js','.RepoButton');
  </script>
</p>
*/

/* lottie files setup  kræver et link til lottie player

eks:
<section style="width: 200px; height: 200px; display: inline-block; float: left; padding-right: 50px;">
  <script src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" type="module"></script>
    <script src="https://bo-nicolaisen.github.io/moodle-hacks/moodleHelpers.js"></script>
  <script>
    SetupLottie(document.currentScript.parentElement);
  </script>

</section>
*/
var SetupLottie = (myParent) => {
  let myLottieElement = document.createElement("section");

  myLottieElement.innerHTML =
    '<dotlottie-player src="https://nicolaisen.digital/lotties/js101/functions.json" background="transparent" speed="1"" loop autoplay></dotlottie-player>';



  myParent.appendChild(myLottieElement);
}
