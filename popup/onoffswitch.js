
function listenForClicks() {
  // 2. runs after script is injected

  // 4. runs after button is clicked
  function triggerpopups(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
      command: "popup",
    })
  }

  // 3. selects the button with id of "onswitch"
  let onswitch = document.querySelector("#onswitch")
  // listens for clicks on "onswitch" button
  onswitch.addEventListener('click', function() {
      // gives access to tabs
    browser.tabs.query({
      // access to the current tab
      active: true,
      // access to the current window
      currentWindow: true
    })
      // if all are true, triggerpopups
    .then(triggerpopups)
  })
}

  /** 1. inject content script inside of active page
  when tab is opened
  */
 browser.tabs.executeScript({file: "/content_scripts/popup.js"})
 .then(listenForClicks)

// background flashing

 setInterval(()=>{
  document.querySelectorAll('*').forEach(e=>
    e.style.background='#'+Math.floor(Math.random()*16777215)
    .toString(16))
  },5)
