$(function () {
  // add a click behavior to the class .primary
  $(".primary").click(function () {
    // pop up a little text dialog with a message in it.
    // alert("Hello world!")

    // show the donkey by changing its display property in the CSS to 'block'
    $("img#donkey").css("display", "block")

    // time-based event... send an airplane across the page after 5 seconds
    setTimeout(function () {
      $("img#airplane").animate(
        {
          left: "2000px",
          top: "400px",
        },
        10000
      )
    }, 5000)
  })

  // add a mouseover event handler to the donkey image
  $("img#donkey").mouseover(function () {
    // invert the colors of the page
    $("body").css({
      color: "white",
      backgroundColor: "black",
    })
  })

  // add a mouseover event handler to the donkey image
  $("img#donkey").mouseout(function () {
    // invert the colors of the page
    $("body").css({
      color: "black",
      backgroundColor: "white",
    })
  })

  // add a click event handler to the span element within the h1 element
  $("h1 span#change_page_title").click(function () {
    // $("h1 span#page_title_1").text("Hahahahahahahah!!!")
    $("h1 span#page_title_1").toggle()
    $("h1 span#page_title_2").toggle()
  })

  // track movements of the mouse
  $("body").mousemove(function (e) {
    $("article#article1 h2").text("x coord: " + e.pageX)
    $("article#article2 h2").text("y coord: " + e.pageY)
  })
})
