function listenForClicks() {
   browser.tabs.sendMessage(tabs[0].id, {
     command: "popup",
   })
  console.log("running");
}


 browser.tabs.executeScript({file: "/content_scripts/popup.js"})
 .then(listenForClicks)
console.log("Hello world");
