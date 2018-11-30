// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed
  console.log('working');
  chrome.tabs.executeScript({
    file: 'popup.js'
  });
});
