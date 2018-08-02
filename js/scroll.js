

var arrOfId = [
	"home",
	 "services",
	 "about-us",
	 "works",
	 "contact",
	 "blog",
	 "clients",
	 "get-in-touch",
	 "footer"
 ];

var arrOfHeights;

function makeArrayOfHeights (arr) {
	var res = [], el = 0;
		for (var i = 0; i < arr.length; i++) {
			el = el + document.getElementById(arr[i]).clientHeight;
	    	res.push(el);
  		}

  	return res;
}

function prevAndNextSection (curPos, arr) {
	arrOfHeights =  makeArrayOfHeights(arr);
	var list = [], prevSec, curSec, nextSec;
	for (var i = 0; i < arrOfHeights.length; i++) {
		if (curPos<=arrOfHeights[i]) {
			prevSec = arrOfHeights[i-1] || 0;
			curSec = arrOfHeights[i];
			nextSec = arrOfHeights[i+1] || arrOfHeights[i];
			break;
		}
	}
		list.push(prevSec, curSec, nextSec);

		return list;
}

var scrollHeight, y = 0, direction, current, prev, next;

function onScroll() {
	var arrForScroll = makeArrayOfHeights(arrOfId);
	var home = arrForScroll[0]-40;
	var contact = arrForScroll[3]-40;
	var blog = arrForScroll[4]-40;
	var footer = arrForScroll[8]-40;
	var win = window.pageYOffset;
	if ((win > home && win < contact) || (win > blog && win < footer)) {
			document.getElementsByTagName('header')[0].classList.add("header-font-color");
		} else {
			document.getElementsByTagName('header')[0].classList.remove("header-font-color");
		}
}

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function onWheel () {
	scrollHeight = window.pageYOffset;
	var list = prevAndNextSection(scrollHeight, arrOfId);
	var i = scrollHeight;
	current = list[1]-40;
	prev = list[0]+40;

	direction = window.event.wheelDelta;

		if (direction == -120){	
			for(i; i<current;  i++){
				window.scrollTo(0, i);
			}
	
		}

		else {
			for(i; i>=prev;  i--){
				window.scrollTo(0, i);
			}

		}			

}



var t;
function up() {
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,-100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}