$(function() {
  //Submit comment listener
  $("#submitComment").on("click", function(event) {
    event.preventDefault();
    const newComment = {
      name: $("#user").val().trim(),
      comment: $("#newComment").val().trim()
    };
    const articleId = $("#submitComment").attr("data-id");

    //Send post to server with new comment
    $.ajax("/comment/" + articleId, {
      type: "POST",
      data: newComment
    }).then(postResponse => {
      console.log("Post Response Below", postResponse);
      location.reload();
    }).catch(error => {
      console.log(error);
    })
  })
});