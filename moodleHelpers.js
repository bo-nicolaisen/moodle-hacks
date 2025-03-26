
var setupButton = (myParent,url) => {
    console.log(myParent)
    let myButton = myParent.querySelectorAll(".RepoButton")[0];

    console.log(myButton)

    myButton.addEventListener('click', () => {
      window.open(url, "_blank");
    })

  }
  