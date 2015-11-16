---
layout: layout-sidebar
name: BBNC Styled Dates
---

# NetCommunity News Reader & Event Calendar Highlights - Styled Dates

This customization will add a stylized date block to News Reader and Event Calendar Highlights parts.

## HTML

Add the following HTML to any page that contains a News Reader or Event Calendar Highlights part.

<pre class="line-numbers"><code class="language-markup">
&lt;div data-bbi-app="MyApp" data-bbi-action="NewsReaderDate">&lt;/div>
&lt;div data-bbi-app="MyApp" data-bbi-action="CalendarHighlightsDate">&lt;/div></code></pre>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("CalendarHighlightsDate", function (app, bbi, $) {
    return {
        init: function (options, element) {
            bbi.attach(function () {
                $(function () {
                    $('.HighlightEventDate').each(function () {
                        var $span = $(this);
                        var dateArray = $span.html().split(' ');
                        var newDate = [
                            '&lt;span class="month">' + dateArray[2].replace(",", "") + '&lt;/span>',
                            '&lt;span class="day">' + dateArray[1] + '&lt;/span>',
                            '&lt;span class="year">' + dateArray[3] + '&lt;/span>'
                        ];
                        $span.html(newDate.join(''));
                    });
                });
            });
        }
    };
});

app.action("NewsReaderDate", function (app, bbi, $) {
    return {
        init: function (options, element) {
            bbi.attach(function () {
                $(function () {
                    $('.NewsReaderItemDate').each(function () {
                        var $span = $(this);
                        var dateArray = $span.html().split(' ');
                        var abbr = "";
                        switch (dateArray[1]) {
                        case "January":
                            abbr = "Jan";
                            break;
                        case "February":
                            abbr = "Feb";
                            break;
                        case "March":
                            abbr = "Mar";
                            break;
                        case "April":
                            abbr = "Apr";
                            break;
                        case "May":
                            abbr = "May";
                            break;
                        case "June":
                            abbr = "Jun";
                            break;
                        case "July":
                            abbr = "Jul";
                            break;
                        case "August":
                            abbr = "Aug";
                            break;
                        case "September":
                            abbr = "Sept";
                            break;
                        case "October":
                            abbr = "Oct";
                            break;
                        case "November":
                            abbr = "Nov";
                            break;
                        case "December":
                            abbr = "Dec";
                            break;
                        }
                        var newDate = [
                            '&lt;span class="month">' + abbr + '&lt;/span>',
                            '&lt;span class="day">' + dateArray[2].replace(",", "") + '&lt;/span>',
                            '&lt;span class="year">' + dateArray[3] + '&lt;/span>'
                        ];
                        $span.html(newDate.join(''));
                    });
                });
            });
        }
    };
});</code></pre>
