
window.onload = openAllWindows;

function openAllWindows() {
  let links = document.body.querySelectorAll("a")
  for (let i = 0; i < 10; i++) {
    let href = links[i].href
    openWindow(href,i)

  }
}

  //places each popup window in a random location
  //inside the bounds of the screen size

function openWindow (url, i){
  let x =  Math.floor((Math.random() * window.screen.width) + 1)
  let y =  Math.floor((Math.random() * window.screen.height) + 1)
  let width = Math.floor((Math.random() * 500) + 1)
  let height = Math.floor((Math.random() * 500) + 1)
  //gives each window a new name
  let name = `window${i}`
  // --> `` <-- required to pass numbers into method
  window.open (url, name,`menubar=no,status=no,location=no,
    width=${width},height=${height},toolbar=no,scrollbars=no,
    top=${y},left=${x}`);
}


/**
window.onload = newDownloadLink;
const mainLink = ('#downloadLink')

function newDownloadLink() {
  let link = document.createElement('a')
  link.setAttribute('href','poop')
  link.style.position = 'absolute'
  link.style.left = Math.random()*innerWidth + 'px'
  link.style.top = Math.random()*innerHeight + 'px'
  document.body.appendChild( link )

}
function generateRandomLinks(newDownloadLink){
  while (true) {
    newDownloadLink()
  }
}
*/
