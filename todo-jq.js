$(function () {
  $("#box-copyButton").click(function () {
    $(".main-box")
      .first()
      .clone(true, true, true, true)
      .appendTo("#js_todo-contentArea");

    $(".main-box:last-child li").remove();
  });
});

