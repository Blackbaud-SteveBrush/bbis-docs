(function (bbi) {

    var app = bbi.register({});

    app.action('initEventsFeed', function(app, bbi, $) {
        var container;
        return {
        	init: function(options, element) {

        		// Clear our loading message if page editor
        		if (bbi.isPageEditor()) {
        			$(element).html("");
        		}

        		else {
        			bbi.require(["parse-rss"], function ($) {
        				container.parseRSS({

        					debug: true,

        					/* Requests all events now in case they're not in chronological order */
        					eventsToDisplay: -1,
        					ajax: {
        						url: options.feed,
                                error: function (a, b, c) {
                                	alert('Custom error alert.');
                                }
        					},
        					xmlMap: {
        						location: "mc\\:location",
        						locationUrl: "mc\\:locationurl",
        						eventDate: "mc\\:eventdate",
        						allDayEvent: "mc\\:alldayevent",
        						timeStart: "mc\\:startTime",
        						timeEnd: "mc\\:endTime"
        					},
        					template: [
        						"<div class=\"row\">",
        						"	{{# each events }}",
        						"		<div class=\"col-sm-6 col-md-3\">",
        						"			<div class=\"event-wrapper\">",
        						"   			<ul class=\"date\">",
        						"       			<li class=\"day-of-year\">{{ formatDT @key \"DD\" }}</li>",
        						"       			<li class=\"day-of-week\">{{ formatDT @key \"dddd\" }}</li>",
        						"       			<li class=\"month\">{{ formatDT @key \"MMMM\" }}</li>",
        						"   			</ul>",
        						"   			<ul class=\"events\">",
        						"       			{{# each event }}",
        						"           			<li>",
        						"							<ul>",
        						"								<li class=\"event-title\">{{{ title }}}</li>",
        						"								<li class=\"event-location\">{{{ location }}}</li>",
        						"								<li class=\"event-time\">",
        						"									{{# if allDayEvent }}",
        						"										All Day",
        						"									{{ else }}",
        						"										{{{ timeStart }}}</li>",
        						"									{{/ if }}",
        						"								</li>",
        						"							</ul>",
        						"						</li>",
        						"       			{{/ each }}",
        						"   			</ul>",
        						"			</div>",
        						"		</div>",
        						"	{{/ each }}",
        						"</div>"
        					].join(""),

        					/*
        					Group events by date
        					*/
        					beforeUpdate: function (events) {

        						var r = events,
        							dates = {},
        							key = "",
        							limitInner = -1;

        						// See if we're limiting the inner
        						if (typeof options.limitInner !== "undefined") {
        							limitInner = parseInt(options.limitInner);
        						}

        						for (var i = 0, j = events.length; i < j; i++) {

        							// Read the as the key
        							key = events[i].description.dateTimeMoment.format("MM/DD/YYYY");

        							// Catch the first event for this date
        							if (typeof dates[key] === "undefined") {
        								dates[key] = {
        									event: []
        								};
        							}

        							// Convert the "allDayEvent" tag to native boolean
        							if (typeof events[i].allDayEvent === "string") {
        								events[i].allDayEvent = events[i].allDayEvent.toLowerCase() === "true";
        							}

        							// Add our event to the correct date
        							if (limitInner === -1 || dates[key].event.length < limitInner) {
        								dates[key].event.push(events[i]);
        							}
        						}

        						// Limit the size of the object
        						if (typeof options.limit !== "undefined") {
        							var limit = parseInt(options.limit),
        								count = 0;
        							r = {};
        							for (var key in dates) {
        								if (count++ < limit) {
        									r[key] = dates[key];
        								}
        							}
        						}

        						return r;
        					}
        				});
        			});
        		}
        	}
        };
    });


    app.build();

}(window.bbiGetInstance()));
