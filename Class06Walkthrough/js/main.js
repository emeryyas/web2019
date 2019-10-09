var students = ["Lina", "Karlo", "Sophia", "Adrienne", "Yasmin", "Katherine", "Oleg", "Jaywhy", "Mikayla", "Siwoo", "Justine", "Andrea", "Kyle", "Alleesa", "Oanh", "Sabrina", "Jillian", "Allison", "Cole", "Christine"]
var rS = Math.floor(Math.random() * students.length)


// console.log(students[rS])


// $("body").html(randomColor())


var i = 0;
while (i < students.length){
	// console.log(students[i])
	$("<div class='greeting'></div>")
		.attr("id",students[i])
		.text("Wait, "+students[i]+"?!")
		.appendTo("body")
		.css({
			"background":randomColor()
		})
		.draggable()

		.click(function(){
			$(this).css({
				"background":randomColor()
			})
			// moveRandomly($(this).attr("id"))

		})

	i = i+1;
}


//explaining RANDOM.


$(document).click(function(){
	moveRandomly();
})


$(document).keydown(function(g){
	// alert("typed!")
	if(g.keyCode == 74) {
		alert("you pressed J!");
	}
})



function moveRandomly(studentID){

	var randomX = Math.floor(Math.random() * $(window).width() )
	var randomY = Math.floor(Math.random() * $(window).height() )

	// $(".circle").show()
	$("#"+studentID).css({
		"position":"fixed",
		"top":randomY,
		"left":randomX
	})
}


// console.log( randomX, randomY )



function randomColor() {
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)

	var rgb = "rgb("+r+","+g+","+b+")"
	return rgb;

	// console.log (r, g, b)


}