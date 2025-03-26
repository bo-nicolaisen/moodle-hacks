
var setupButton = (myParent,url,classIdentifier) => {
    console.log(myParent)
    let myButton = myParent.querySelectorAll(classIdentifier)[0];

    console.log(myButton)

    myButton.addEventListener('click', () => {
      window.open('https://'+url, "_blank");
    })

  }
