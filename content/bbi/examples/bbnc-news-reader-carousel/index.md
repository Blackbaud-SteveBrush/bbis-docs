---
layout: layout-sidebar
name: BBNC News Reader Carousel
---

# NetCommunity News Reader Carousel

Creates a horizontally scrolling carousel of recent news.

## HTML

<pre class="line-numbers"><code class="language-markup">&lt;div 
    data-bbi-app="MyApp" 
    data-bbi-action="newsReaderScroll"
    data-jcarousel="true"
    id="news-carousel">
&lt;/div></code></pre>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("newsReaderScroll", function (app, bbi, $) {
    this.init = function (options, element) {
        if (bbi.isPageEditor()) {
            return;
        }
        $(function () {
        
            // Convert News Reader into unordered list
            var list = $("<ul />");
            var $carousel = $('#news-carousel');
            
            $('.NewsReaderResultsList')
                .find("tr")
                .each(function () {
                    var p = $(this).children().map(function() {
                        return "<p>" + $(this).html() + "</p>";
                    });
                    list.append("<li>" + $.makeArray(p).join("") + "</li>");
                });
                
            $carousel
                .append(list);
                .find('p > img')
                .parent()
                .addClass("image");
            
            // Turn News Reader into scrolling carousel
            $carousel
                .on('jcarousel:reload jcarousel:create', function () {
                    var carousel = $(this);
                    var width = carousel.innerWidth();
                    if (width >= 600) {
                        width = width / 3;
                    } else if (width >= 350) {
                        width = width / 2;
                    }
                    carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
                })
                .jcarousel({ wrap: 'circular' });
            
            $('.jcarousel-control-prev')
                .jcarouselControl({ target: '-=1' });
            
            $('.jcarousel-control-next')
                .jcarouselControl({ target: '+=1' });
            
            $('.jcarousel-pagination')
                .on('jcarouselpagination:active', 'a', function () {
                    $(this).addClass('active');
                })
                .on('jcarouselpagination:inactive', 'a', function () {
                    $(this).removeClass('active');
                })
                .on('click', function (e) {
                    e.preventDefault();
                })
                .jcarouselPagination({
                    perPage: 1,
                    item: function (page) {
                        return '<a href="#' + page + '">' + page + '</a>';
                    }
                });
        });
    };
});</code></pre>
