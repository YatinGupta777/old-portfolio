//check off specific todos by clicking

$("ul").on("click","li",function(){
	//if li is gray
	//console.log($(this).css("color"));
	// if($(this).css("color") === "rgb(128, 128, 128)") {
	// 		//turn it black
	// 	//$(this).css("color","black");
	// 	$(this).css({
	// 	color:"black",
	// 	textDecoration :"none"
	// });
	// }	
	// //else turn it gray
	// else{
	// 	$(this).css({
	// 	color:"gray",
	// 	textDecoration :"line-through"
	// });
	// }
	//$(this).css("text-decoration","line-through");

	$(this).toggleClass("completed");
});


// click on X to delete
$("ul").on("click","span",function(event){
	// parent() shifts it to li from span
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type='text'").keypress(function(event){
	if(event.which ===13){
		var todoText = $(this).val();
		$(this).val("");
		//create an new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+ todoText + "</li>"); 
	}	

});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});