chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			console.log("Deredactie.be video enlarger plugin started!");

			//var videoCategory = document.querySelector('div.vidcategory');
			var videoCategory = $("div.vidcategory");

			var videoEnlargmentButton = $("<p>", {id: "foo", id: "videoEnlargmentButton"});
			videoEnlargmentButton.html("ENLARGE VIDEO PLAYER");
			videoEnlargmentButton.css("width", "172px");
			videoEnlargmentButton.css("padding-left", "3px");
			videoEnlargmentButton.css("padding-right", "3px");
			videoEnlargmentButton.css("margin-top", "15px");
			videoEnlargmentButton.css("font-weight", "bold");
			videoEnlargmentButton.css("color", "#ffffff");
			videoEnlargmentButton.css("background-color", "#84c803");
			videoEnlargmentButton.css("cursor", "pointer");
			videoEnlargmentButton.click(clickHandler);
			videoCategory.append(videoEnlargmentButton);
			
			function clickHandler() {
				console.log("Enlarging video player...");
				var width = 1000;
				
				//Calculations and preparations
				var videoWidth = width - 22;
				var videoHeight = width / 1.77777;

				videoWidth = videoWidth + "px";
				videoHeight = videoHeight + "px";
				width = width + "px";

				//Remove unwanted elements
				$("#masthead").remove();
				$("#topnav").remove();
				$("#bottom").remove();
				$("#vrtfoot").remove();

				$("#container").find("hr").each(function() {
				  $(this).remove();
				});

				$(".splitter.split24").each(function () { 
					$(this).remove() 
				});

				$(".col.span-8").each(function() {
					$(this).remove();
				});

				$(".splitter.split16-8").find(".span-8.last").each(function() {
					$(this).remove();
				});

				$(".videolist.program_videos").each(function() {
					$(this).remove()
				});
				$(".videoarticle-socialsharing").each(function() {
					$(this).remove();
				});
				$(".hnav.nav2").each(function() {
					$(this).remove();
				});

				$("#permalinkInfoPopup").remove();
				$("#infoPopup").remove();

				//CSS edits
				$("body").css('background', '#CCCCCC');

				$(".col.span-16.first").each(function() {
					$(this).css('border-right', '0px');
					$(this).css('padding-right', '0px');
					$(this).css('width', width);
				});

				$(".media.flashPlayer.bigMediaItem").each(function() {
					$(this).css('width', videoWidth);
					$(this).css('height', videoHeight);

					$(this).filter('div');
				});

				$(".media.flashPlayer.bigMediaItem").children().each(function() {
					$(this).css('width', videoWidth);
					$(this).css('height', videoHeight);
				});

				$(".colContainer").each(function(){
					$(this).css('width', width);
					$(this).css('max-width', '');
				});

				$("#videoEnlargmentButton").remove();
			}
		}
	}, 10);
});