---
layout: layout-sidebar
name: Back to Top Link
---

# Back to Top Link

## Dependencies

## HTML

<p><strong>Add to your style sheet:</strong></p>
<pre class="line-numbers"><code class="language-markup">&lt;style>
    .back-to-top {
        background: none;
        margin: 0;
        position: fixed;
        bottom: 10px;
        right: 10px;
        width: 40px;
        height: 45px;
        z-index: 100;
        display: none;
        text-decoration: none;
        color: #ffffff;
    }
    
    .back-to-top i {
        font-size: 45px;
    }
&lt;/style></code></pre>

<p><strong>Add the link to the page:</strong></p>

<pre class="line-numbers"><code class="language-markup">&lt;a class="back-to-top" style="display: none;" href="#">
    &lt;i class="fa fa-arrow-circle-up"></i>
&lt;/a></code></pre>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("backToTop", function (app, bbi, $) {
    var offset = 250;
    var duration = 300;
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });
    
    $('.back-to-top').on("click", function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });
});</code></pre>
