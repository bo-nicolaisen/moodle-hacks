
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


/* build copy code button */
/* script tagget skal være på samme sibling niveau som code tagget

  <script src="https://bo-nicolaisen.github.io/moodle-hacks/moodleHelpers.js"></script>
  <script>buildCopyCodeButton(document.currentScript.parentElement);</script>
*/

var buildCopyCodeButton = (myContainer) => {
  // find pre element
  
  let myElement = document.createElement('div');
  myElement.innerHTML ='<img style="cursor: pointer;" src="https://moodle.techcollege.dk/draftfile.php/289107/user/draft/142615763/copy%20icon.svg"alt ="copy" width="20 ">';


  myElement.addEventListener('click', (e) => {

    let myCont = e.target.parentElement.parentElement;
    
    let copyElement = myCont.querySelectorAll("code")[0];

    navigator.clipboard.writeText(copyElement.innerText);
    alert("Koden er kopieret");
  });

  myContainer.querySelectorAll('section')[0].prepend(myElement)
}
