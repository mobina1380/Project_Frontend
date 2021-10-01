$(document).ready(function(){
   setTimeout(function () {
   
		$('.loader_bg').fadeToggle();
	},2000);
   $('.thumbnails a').click(function(e){
      e.preventDefault();
      $('.imageGallary img').attr('src', $(this).attr('href'));
   });
   $(".imageGallary img").on("click", function () {
      var imageSource = $(this).attr("src");
      $("<div class='overlay'></div>").prependTo("body");
      $("<img class='image-gallary' src=" + imageSource + ">").prependTo("body");
      
      $("body").css("overflow", "hidden");
      $(".overlay").not(".image-gallary").click(function () {
        $(this).remove();
        $(".image-gallary").remove();
        $("body").css("overflow", "auto");
      });
    });
   // var c=1;
//     function setimage(c){
//      $("image-gallary img").attr("src");
//       alert($(".thumbnails a").attr('href'))
//     }
//     var c=1;
//     setInterval(()=>{
       
//        c++;
//      setimage(c)
//   // alert(c)
//   } , 4000)
  
  
////////////



    
});