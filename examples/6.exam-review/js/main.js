$(function () {
  // put below here what you want done after the page has fully loaded

  $("div.container").mouseover(function () {
    // put below here what you want done when the user mouses over this element
    $("div.container").css({
      "background-color": "black",
      color: "white",
    })
    // put above here what you want done when the user mouses over this element
  })

  $("div.container").mouseout(function () {
    // put below here what you want done when the user mouses over this element
    $("div.container").css({
      "background-color": "pink",
      color: "black",
    })
    // put above here what you want done when the user mouses over this element
  })

  $("div.container").click(function () {
    // put below here what you want done when the user clicks this element
    $(this, "div.container").hide()
    // put above here what you want done when the user clicks this element
  })

  // make the hidden donkey image show up after 3 seconds
  setTimeout(function () {
    $("img#donkey").css({
      display: "block",
    })
  }, 3000)

  // append a new article element to the page every 5 seconds
  setInterval(function () {
    $(
      "<article class='hello'><h1>Hello World!!!</h1><img src='images/donkey.png' /></article>"
    ).appendTo($("body"))
  }, 5000)

  // put above here what you want done after the page has fully loaded
})
