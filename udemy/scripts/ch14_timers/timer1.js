// bouncing ball using setTimeout
var
	body = document.getElementsByTagName("body")[0],
	ball = document.getElementById("ball");
var
	bx = ball.offsetLeft, by = ball.offsetTop, 
	bw = ball.offsetWidth, bh = ball.offsetHeight,
	dx = 5, dy = 5, active = true;

// move ball	
function AnimateBall() {

	bx += dx;
	by += dy;
	ball.style.left = bx + "px";
	ball.style.top = by + "px";
	
	if (bx + dx < 0 || bx + bw + dx > body.offsetWidth) dx = -dx;
	if (by + dy < 0 || by + bh + dy > body.offsetHeight) dy = -dy;
	
	if (active) setTimeout(AnimateBall, 10);
}

// start animation after 1 second, setTimeout only called once
var st = setTimeout(AnimateBall, 1000);

// stop ball on click
ball.addEventListener( "click", function() { clearTimeout(st); active = false; } );