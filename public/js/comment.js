$(function() {
  //Submit comment listener
  $("#submitComment").on("click", function(event) {
    event.preventDefault();
    const newComment = {
      name: $("#user").val().trim(),
      comment: $("#newComment").val().trim()
    };


    }
  })
});