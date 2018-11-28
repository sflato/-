openAllWindows()
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
