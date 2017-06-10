
// defining all lis
var goal = document.querySelectorAll("li");


// making lis green when mouseover and back to black when moving mouse away

for(i=0; i < goal.length; i++) {

	goal[i].addEventListener("mouseover", function(){

		this.classList.add("green");

	});


	goal[i].addEventListener("mouseout", function() {

		this.classList.remove("green");

	});
//text linethrough when clicking

	goal[i].addEventListener("click", function(){

		this.classList.toggle("done");

	});
}