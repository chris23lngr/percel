$(document).ready(function() {
  $(".selector-item").click(function(event) {
      
    var val = $(event.target).text();
    changeActiveStatus(event.target);
    setContent(val);

  });
});

function setContent(component) {
  $("#componentBox").load("./components/" + component.toLowerCase() + ".html");
}

function changeActiveStatus(element) {
  $('.active').removeClass('active');
  $(element).addClass('active');
}