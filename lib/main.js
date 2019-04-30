"use strict";

//handle tab click
$(document).ready(function () {
  "use strict"; // let counter = 1;
  // $(".my-btn").on("click", BtnClickHandler);
  // function BtnClickHandler()
  // {
  //     if(counter <= 3) 
  //         alert(`Clicked on button ${counter++} times!`); 
  //     else
  //     $(".my-btn").off("click", BtnClickHandler);
  // }
  //live event binding
  // $(document).on("click", ".my-btn", function()
  // {
  //     alert("Buttona click olundu.");
  // })
  // $(".btn-add").click(function(){
  //     $(".my-btn:first-child").clone().appendTo($(".btn-holder"));
  // })
  // $(document).on("click", ".btn-add", function () {
  //     //$(".test").hide(2000);
  //     // let allTests = $(this).prev().children();
  //     // allTests.eq(Math.floor(allTests.length / 2)).toggle(2000);
  //     const that = this;
  //     $(this).prev().children().first()
  //         .animate({
  //             "width": "+=50px",
  //             "padding": "20px",
  //             "border-width": "10px"
  //         }, 2000, function () {
  //             $(that).text("Changed");
  //         });
  // })
  // $(document).on("click", ".test", function(){
  //     $(this).text(function(i, origText){
  //         console.log(i);
  //         return origText + " Changed"
  //     });
  // })
  // $(document).on("click", ".btn-add", function(){
  //     $(".test").text(function(i, origText){
  //         return "Changed " + i + " " + origText;
  //      })
  // })
  // $(document).on("click", ".btn-add", function(){
  //     // const newP = $("<p>").text("demo").addClass("demo");
  //     $(this).prev().slideUp(2000, function(){
  //         $(this).remove();
  //     });
  // })
  //AJAX

  $(document).on("click", ".btn-load", function () {
    // $.ajax({
    //     url: "https://jsonplaceholder.typicode.com/posts",
    //     type: "GET",
    //     success: function(res){
    //         console.log(res);
    //     }
    // });
    $.get("https://jsonplaceholder.typicode.com/posts", function (res) {
      $(res).each(function (i, el) {
        var div = $("<div>").addClass("col-4");
        $("<h2>").text(el.title.substring(0, 30)).appendTo(div);
        $("<p>").text(el.body.substring(0, 50)).appendTo(div);
        $("#posts").append(div);
      }); // $(res).each((i, el) => {
      //     console.log(i, el);
      // })
    });
  });
});