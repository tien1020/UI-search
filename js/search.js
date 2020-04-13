$.ajax({
    url: "https://quze-intern-test.s3.us-east-2.amazonaws.com/course-data.json",
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response[0].courseId);
    for (var i = 0; i < 20; i++) {

        var eventDiv = $("<div class='eventDiv'>");
        var imageURL = response[i].imgUrl;
        var image = $("<img>");
        image.attr("src", imageURL);
        eventDiv.append(image);
        $("#events-display").append(eventDiv);
        var eventName = $("<div>");
        eventName.html(response[i].title);
        eventName.attr("style","font-weight: bold;");
        eventDiv.append(eventName);

        $("#events-display").append(eventDiv);

        var venueAddress = $("<div>");
        venueAddress.html(response[i].shortDescription);
        eventDiv.append(venueAddress);

        $("#events-display").append(eventDiv);

        var dateAndTime = $("<div>");
        dateAndTime.html("Level: "+response[i].level);
        eventDiv.append(dateAndTime);


        $("#events-display").append(eventDiv);

        var btn = $("<button>");
        btn.addClass("event-btn");
        var eventURL = response[i].url;
        console.log(eventURL);
        btn.attr("onClick", `window.open("${eventURL}")`);
        btn.text("See more");
        eventDiv.append(btn);

        $("#events-display").append(eventDiv);
 
    }
  });