  console.log("ran");
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
    window.open (url, name,`menubar=no,status=no,location=no,width=40,height=40,toolbar=no,scrollbars=no,top=${y},left=${x}`);
  }
  /**
   * Listen for messages from the background script.
   * Call "popup()"
  */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "popup") {
      openAllWindows()
    } /** structure to add more functions
      else (message.command === "popupless"){
      function()
    } */
  })
