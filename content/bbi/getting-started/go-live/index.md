---
layout: layout-sidebar
order: 3
name: Quality Assurance and Go-live
description: Description here.
icon: fa fa-sitemap
---

# Quality Assurance and Go-live

1. Once the Application is working appropriately, upload the Application's JavaScript file to the client's site:
    - **NetCommunity:** Site Explorer &gt; Files
    - **WordPress:** Child theme's JavaScript directory
    - **TeamRaiser:** via FTP
    - **Friends Asking Friends:** Sphere CMS &gt; Site Content &gt; File Gallery
1. Be sure to change the value of the `data-bbi-src` attribute to the location of the newly uploaded script (see Step 2). If at all possible, make sure the script source is _local_ and doesn't include the site's domain.
    - For example, `data-bbi-src="/files/scripts/bbi-houston-humane.js"`
1. If the project is greater than 8 hours, then you probably have a developer assigned to perform the QA. 
    - <a href="http://qa.blackbaud.com/?page_id=919" target="_blank">JavaScript QA Form&nbsp;&rarr;</a>
1. If you don't have QA assigned, please email one of the senior developers to take a second look at your code. (If you're already a senior developer, you're not excluded! Please let another senior developer look at your code.)   
    - <a href="http://meebee/mysite/_layouts/mycontactlinks.aspx?accountname=blackbaud%5CAndrewFo" target="_blank">Andrew Fort's Team&nbsp;→</a>
    - <a href="http://meebee/mysite/_layouts/mycontactlinks.aspx?accountname=blackbaud%5CBen%2EWong" target="_blank">Ben Wong's Team&nbsp;→</a>
1. Once you get the go-ahead from a senior developer, you may then get the client's approval via the Deliverable Acceptance Form.
