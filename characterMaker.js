let characterImg = document.getElementById("characterImg")
let buttonUp = document.getElementById("buttonUp")
let buttonDown = document.getElementById("buttonDown")
let buttonLeft = document.getElementById("buttonLeft")
let buttonRight = document.getElementById("buttonRight")
let currentTopVal = characterImg.style.top
let currentBorderColor = characterImg.style.border
let selectedRow = 0
let rowHeight = 50
let style = getComputedStyle(characterImg)
let removePxString = style.top.replace("px", "")

buttonUp.addEventListener("click", (e) => {
	let top = Number(removePxString)
	characterImg.style.cssText = `top: ${top - 50}px`
})

buttonDown.addEventListener("click", (e) => {
	let top = Number(removePxString)
	characterImg.style.cssText = `top: ${top + 50}px`
})

// characterImg.style.cssText = `top: ${selectedRow * rowHeight}px`
//this code switched the img file to original locationb ack and forth forever
//----characterImg.style.cssText = `top:${cssTopProperty - 50}px`

//funkybiz probs delete

// let moveUp = offsetTop; 50px;
// let moveDown =
// let moveLeft =
// let moveRight =
// let currentValue

//Pseudocode guide
// ----Make image ‘position: absolute;
// ----Each button has onclick event, up down left right
// ----Create function at 2 minute mark of video

//erics thoughts for project
// ----in positoing abosolute vs relative etc, height refers to the divs containers height in manimpulating the img
// ----another porperty referencing it's own height called transform>translate(google that shit)
//----a common one you will see to center absolute thing is 'top 50% transform>translate - 50%' < not accurate code but something like that

//format to manipulate css from JS made with eric
// ----buttonUp.addEventListener("click", (e) => {
// ----	console.log("top button clicked", characterImg.style.top)
// ----	characterImg.style.border = "  border: solid 1px blue"
// ----	console.log(characterImg)
// ----})
