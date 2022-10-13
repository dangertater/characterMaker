//next several lines connect html elements to the JS
let characterImg = document.getElementById("characterImg")
let buttonUp = document.getElementById("buttonUp")
let buttonDown = document.getElementById("buttonDown")
let buttonLeft = document.getElementById("buttonLeft")
let buttonRight = document.getElementById("buttonRight")
let currentTopVal = characterImg.style.top
let currentBorderColor = characterImg.style.border
let selectedRow = 0
let selectedColumn = 0
let rowHeight = 50
let columnWidth = 47
let style = getComputedStyle(characterImg)
// let removeTopPx = style.top.replace("px", "")
// let removeLeftPx = style.top.replace("px", "")

//cycles the user back to top/bottom/left/right if they try to select a char that is off grid
let cycleBack = () => {
	let removeTopPx = style.top.replace("px", "")
	let removeLeftPx = style.left.replace("px", "")
	if (Number(removeTopPx) > 340) {
		characterImg.style.top = `190px`
	} else if (Number(removeTopPx) < 190) {
		characterImg.style.top = `340px`
	} else if (Number(removeLeftPx) > 562) {
		characterImg.style.left = `327px`
	} else if (Number(removeLeftPx) < 327) {
		characterImg.style.left = `562px`
	}
}

// less than 327
// greater than 562
//TODO all four buttons could have global variables instead, will need to make it a functiont
//----to allow for the 'onClick'to occur. otherwise the variables (and assosciated functions)
//----will only be triggered once on initialization\

buttonUp.addEventListener("click", (e) => {
	let removePx = style.top.replace("px", "")
	let top = Number(removePx)
	characterImg.style.top = `${top - rowHeight}px`
	cycleBack()
})

buttonDown.addEventListener("click", (e) => {
	let removePx = style.top.replace("px", "")
	let top = Number(removePx)
	characterImg.style.top = `${top + rowHeight}px`
	cycleBack()
})

buttonLeft.addEventListener("click", (e) => {
	let removePx = style.left.replace("px", "")
	let left = Number(removePx)
	characterImg.style.left = `${left - columnWidth}px`
	cycleBack()
})

buttonRight.addEventListener("click", (e) => {
	let removePx = style.left.replace("px", "")
	let left = Number(removePx)
	characterImg.style.left = `${left + columnWidth}px`
	cycleBack()
})

//remove px from string
//use capital N to convert string into a number

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
