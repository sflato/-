
  function openWindow (url, i){
    let x =  Math.floor((Math.random() * window.screen.width) + 1)
    let y =  Math.floor((Math.random() * window.screen.height) + 1)
    let name = `window${i}`
    window.open (url, name,`menubar=no,status=no,location=no,width=40,height=40,toolbar=no,scrollbars=no,top=${y},left=${x}`);
  }

  function openAllWindows() {
    let links = document.body.querySelectorAll("a")
    for (let i = 0; i < links.length; i++) {
      let href = links[i].href
      openWindow(href,i)

    }
  }
openAllWindows()
  /**
   * Listen for messages from the background script.
   * Call "beastify()" or "reset()".
  */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "popup") {
      openAllWindows()
    }
  })
