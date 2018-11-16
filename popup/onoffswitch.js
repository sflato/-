function listenForClicks() {
  document.addEventListener("click", (e) => {

    function popup(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "popup",
        });
      });
    }

  });
browser.tabs.executeScript({file: "/content_scripts/popup.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);
