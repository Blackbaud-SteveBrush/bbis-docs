---
layout: layout-sidebar
name: Font Resizer
---

# Font Resizer

## HTML

<pre class="line-numbers"><code class="language-javascript">&lt;p 
    data-bbi-app="MyApp" 
    data-bbi-action="fontResizer">
    &lt;a class="font-larger" href="#">+&lt;/a>
    &lt;a class="font-smaller" href="#">-&lt;/a>
&lt;/p></code></pre>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("fontResizer", function (app, bbi, $) {
    this.init = function (options, element) {
    	bbi.require(['cookie'], function ($) {
            $(function() {
                
                var maxSize = 150;
                var minSize = 50;
                var text = $('#wrapContentOuter');
                var textWrapper, size, sizeInt, newSize, fontSize;
                
                if ($.cookie('font-size')) {
                    text.css('fontSize', parseInt($.cookie('font-size')) + '%');
                } else {
                    text.css('fontSize', '100%');
                }
                
                $(element).find('.font-larger').on("click", function(e) {
                    e.preventDefault();
                    
                    textWrapper = text[0];
                    size = textWrapper.style.fontSize;
                    sizeInt = size.replace('%', '');
                    newSize = parseInt(sizeInt) + 10;
                    fontSize = newSize + '%';
                    
                    if (newSize < maxSize) {
                        $(textWrapper).css('fontSize', fontSize);
                        $.cookie('font-size', fontSize);
                    }
                    
                    return false;
                });
                
                $(element).find('.font-smaller').on("click", function() {
                    e.preventDefault();
                    
                    textWrapper = text[0];
                    size = textWrapper.style.fontSize;
                    sizeInt = size.replace('%', '');
                    newSize = parseInt(sizeInt) - 10;
                    fontSize = newSize + '%';
                    
                    if (newSize > minSize) {
                        $(textWrapper).css('fontSize', fontSize);
                        $.cookie('font-size', fontSize);
                    }
                    
                    return false;
                });
            });
        });
    };
});</code></pre>
