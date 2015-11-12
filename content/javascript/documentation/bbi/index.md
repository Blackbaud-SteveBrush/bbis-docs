---
layout: layout-sidebar
name: BBI methods
---

# BBI Methods

These methods are considered the "meat and potatoes" of BBI, as they create many efficiencies for your customizations.

BBI methods are called as immediate child properties of the global BBI object. Any of the following methods is acceptable (the example below is domonstrating the BBI method, <code>attach</code>).

<pre><code class="language-javascript">// Method 1: Global object
BBI.attach(callback);

// Method 2: bbiGetInstance
window.bbiGetInstance().attach(callback);

// Method 3: Inside an application's action
function myAction(app, bbi, $) {
    return {
        init: function () {
            bbi.attach(callback);
        }
    };
}
</code></pre>
