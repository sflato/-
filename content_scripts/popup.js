            /** THIS IS THE SCRIPT THAT IS INJECTED
            INSIDE OF THE WEBPAGE YOU PRESS "START"
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                      // PROTEKNOVANDAL //
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            HAPPY SEARCHING (''/)
            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            */


  /**
    * openAllWindows() selects every <a> tag on the webpage
    * links.length can be changed to modify the amount
    of popup windows that are opened
  */

  function openAllWindows() {
    let links = document.body.querySelectorAll("a")
    for (let i = 0; i < links.length; i++) {
      let href = links[i].href
      openWindow(href,i)

    }
  }
  /**
    *places each popup window in a random location
    inside the bounds of the screen size
  */
  function openWindow (url, i){
    let x =  Math.floor((Math.random() * window.screen.width) + 1)
    let y =  Math.floor((Math.random() * window.screen.height) + 1)
    //gives each window a new name
    let name = `window${i}`
    // --> `` <-- required to pass numbers into method
    window.open (url, name,`menubar=no,status=no,location=no,
      width=200,height=150,toolbar=no,scrollbars=no,
      top=${y},left=${x}`);
  }

  /**this is an example
  of a function I want to run inside of
  a specific child/(popup) window


  function moveWindow1() {
      while (true) {
        window.moveTo(400, 700);
        window.moveTo(550, 500);
        window.moveTo(400, 300);
        window.moveTo(550, 100);
        window.moveTo(550, 300);
        window.moveTo(550, 500);
        window.moveTo(550, 700);
      }
  }

  */

  // selects all '*' generates a random color value
  // at interval of 100
  function flashing() {
    setInterval(()=>{
     document.querySelectorAll('*').forEach(e=>
       e.style.background='#'+Math.floor(Math.random()*16777215)
       .toString(16))
     },100)
  }

  /**
   * Listen for messages from the background script.
   * Call "popup()"
  */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "popup") {
      openAllWindows(), flashing()
    } /** structure to add more functions
      else (message.command === "popupless"){
      randomFunctionName()
    } */
  })
