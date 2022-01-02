$(document).ready(function() {

  setContent('introduction');

  $("div").click(function(event) {

    if(!$(event.target).hasClass("example-toolbar")) {
      return;
    }

    var parent = $(event.target).parent();
    var expandBox = $(parent).children(".example-expandation");

    console.log(event.target);

    if($(event.target).hasClass("expanded")) {

      $(event.target).removeClass("expanded");
      $(expandBox).removeClass("expanded");

    } else {

      $(event.target).addClass("expanded");
      $(expandBox).addClass("expanded");

    }



  });

    $(".selector-item").click(function(event) {
        
      var val = $(event.target).text();
      changeActiveStatus(event.target);
      setContent(val);
  
    });

  });
  
  function setContent(content__tag) {
    $("#content-box").load("./contents/" + content__tag + ".html");
  }
  
  function changeActiveStatus(element) {
    $('.active').removeClass('active');
    $(element).addClass('active');
  }


