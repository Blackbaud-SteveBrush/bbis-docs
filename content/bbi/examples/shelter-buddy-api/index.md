---
layout: layout-sidebar
name: Shelter Buddy API
---

# ShelterBuddy API (JavaScript)

## Dependencies

<p><a href="https://shelterbuddy.atlassian.net/wiki/display/SbApi/ShelterBuddy+API+V1.0.0.0" target="_blank">ShelterBuddy API Documentation</a></p>
<ul>
	<li>ShelterBuddy API Username and Password</li>
	<li>ShelterBuddy API shortname (e.g., "http:[shortname].shelterbuddy.com/api/v1/")</li>
</ul>

## HTML

<pre class="line-numbers"><code class="language-markup">&lt;div 
    data-bbi-app="[APP ALIAS]" 
    data-bbi-action="GetAnimals">
&lt;/div>
</code></pre>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.scope(function (app, bbi, $) {

    var cookie = null;
    var proxy = '//api.blackbaud.com/services/proxy/';

    var credentials = {
        username:  '[USERNAME]',
        password:  '[HASHED PASSWORD]',
        shortname: '[SHORTNAME]'
    };

    var endpoints = {
        cookie:  'http://' + credentials.shortname + '.shelterbuddy.com/api/v1/authenticate?username=' + credentials.username + '&password=' + credentials.password,
        animals: 'http://' + credentials.shortname + '.shelterbuddy.com/api/v1/animals?animalSearchTypeId=4&PageSize=12&Page=1'
    };

    function login(callback) {
        var url = proxy + '?check_password=1&url=' + encodeURIComponent(endpoints.cookie);
        $.getJSON(url, null, function (res) {
            if (res.contents) {
                cookie = res.contents;
                callback.call({}, {res});
            } else {
                console.log('[ShelterBuddy API ERROR] ', res);
                throw new Error('Login failed.');
            }
        });
    }

    function get(url, callback) {
        $.ajax(url, {
            headers: {
                'Set-Cookie': '.ASPXAUTH=' + cookie
            },
            success: callback,
            type: 'GET',
            dataType: 'json'
        });
    }

    function getAnimals(callback) {
        var url = proxy + '?send_cookies=1&url=' + encodeURIComponent(endpoints.animals);
        get(url, callback);
    }

    return {
        cookie: cookie,
        credentials: credentials,
        proxy: proxy,
        login: login,
        getAnimals: getAnimals
    };
});

app.action("GetAnimals", function (app, bbi, $) {

    var scope = app.scope;

    return {
        init: function (options, element) {
            if (bbi.isPageEditor()) {
                return;
            }
            scope.login(function (r) {
                scope.getAnimals(function (data) {
                    console.log("ANIMALS: ", data.contents);
                });
            });
        }
    };
});</code></pre>
