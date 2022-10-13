//next several lines connect html elements to the JS
let characterImg = document.getElementById("characterImg")
let buttonUp = document.getElementById("buttonUp")
let buttonDown = document.getElementById("buttonDown")
let buttonLeft = document.getElementById("buttonLeft")
let buttonRight = document.getElementById("buttonRight")
let buttonGo = document.getElementById("buttonGo")
let buttonIdk = document.getElementById("buttonIdk")
let currentTopVal = characterImg.style.top
let currentBorderColor = characterImg.style.border
let rowHeight = 50
let columnWidth = 47
let style = getComputedStyle(characterImg)

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

buttonGo.addEventListener("click", (e) => {})

buttonIdk.addEventListener("click", (e) => {})
// erics thoughts
//make a function accepts a number, number corelates to the character
//by using mod and divide, return the pixel cordinates
