---
layout: layout-sidebar
name: Online Express
icon: fa fa-credit-card
description: Embeddable forms for posts and pages
---

# Online Express

<p class="alert alert-warning">
    <span class="label label-warning">Note:</span> This plugin requires the Plugin Assistant! Please <a href="/wordpress-plugins/plugins/blackbaud-assistant/">install the Plugin Assistant</a> before continuing.
</p>

## What it does

The Online Express Forms plugin makes it easy to catalog your various embed code snippets and display them in various capacities on your WordPress website. Using this plugin, you can insert your Donation, Membership, and Events forms on any page, post, or widget using a simple shortcode.

<h3>Features:</h3>

- Shortcodes to represent each Online Express embed code
- Editor button to allow you to easily add an Online Express form to your posts and pages
- Social sharing capabilities on the various confirmation screens

## How to install

___

<a href="http://api.blackbaud.com/services/wordpress/updater/plugins/blackbaud-olx.zip" target="_blank" class="btn btn-primary"><i class="fa fa-download"></i> Download blackbaud-olx.zip</a>

### Installing via FTP

1. Download the plugin package (above) and save to your Desktop
1. Extract the contents of the package and delete the original zip file
1. Open FileZilla (or any other FTP Client) and login to the server housing your WordPress install
1. Drag the "blackbaud-olx" folder from your Desktop into the plugins directory of your WordPress install
1. Login to the WordPress dashboard and go to the Plugins page. You should see the "Blackbaud: Online Express" plugin listed.
1. Click "Activate" under the plugin's name

### Installing via WordPress dashboard

1. Download the plugin package (above) and save to your Desktop
1. Login to the WordPress dashboard and go to Plugins > Add New. 
1. Click the button to upload your zip file into WordPress
1. After the upload is complete, click "Activate" under the plugin's name

## Setup

<h3>Adding a form to the WordPress Dashboard</h3>

1. Using the Online Express platform, configure your form as needed.
1. Copy the Embed Code to your clipboard (Ctrl+C or Cmd+C).
1. On your WordPress Dashboard, click on <em>Online Express Forms > Add New</em>.
1. Paste the embed code into the "Embed Code" field (Ctrl+V or Cmd+V), and fill out the rest of the form as needed.

<h3>Adding a form to a post or page</h3>

1. Edit the post or page that will display an Online Express Form (or, create a new post or page).
1. Determine where you want your form to be placed by clicking somewhere in the main Content Area. (The form can appear above or below other paragraphs or images, but it must be on its own line.)
1. Next, click on the Content Area's "OLX" editor button and select a form from the dropdown.
1. You should now see a <a href="https://en.support.wordpress.com/shortcodes/" target="_blank">WordPress Shortcode</a> in the Content Area representing your Online Express Form.
1. Save the post/page and preview it, making sure that the form appears correctly.

### How to overwrite the HTML used for the social sharing popup

These are the templates used by this plugin, which can be overwritten in your theme. To do so, you will need to duplicate the desired file from the plugin's "template" directory, and move it to your theme's "template" directory (if your theme doesn't have a "templates" directory, you'll need to create one).

#### Templates:

<div class="table-responsive">
	<table class="table table-parameters">
	    <thead>
	        <tr>
	            <th>File</th>
	            <th>Description</th>
	        </tr>
	    </thead>
	    <tbody>
			<tr>
				<td class="file">app-data-attributes.blackbaud-olx.php</td>
				<td>Contains the HTML needed to call the BBI Application</td>
			</tr>
			<tr>
				<td class="file">sharing-modal.blackbaud-olx.hbs</td>
				<td>Contains a Handlebars template for the social sharing popup HTML</td>
			</tr>
		</tbody>
	</table>
</div>
