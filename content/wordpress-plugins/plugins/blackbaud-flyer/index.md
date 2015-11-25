---
layout: layout-sidebar
name: Flyer
icon: fa fa-newspaper-o
description: Popups to display static content, images, or shortcodes
---

# Flyer

<p class="alert alert-warning">
    <span class="label label-warning">Note:</span> This plugin requires the Plugin Assistant! Please <a href="/wordpress-plugins/plugins/blackbaud-assistant/">install the Plugin Assistant</a> before continuing.
</p>

## What it does

The Flyer plugin creates the HTML (and CSS/JS) necessary for a fully-functional Twitter Boostrap Modals (or popups). Flyers are added to the page in the form of shortcodes.

<h3>Features:</h3>

- Shortcodes to output a fully-featured modal
- Editor button to allow you to easily add a modal to your posts and pages
- Each modal has configurable options for:
    - Title
    - Body content
    - Image
    - Excerpt
    - Call to action button
    - Image as flyer background
    - Launch automatically when page loads
    - Launch automatically only once
    - Launcher button
    - Custom CSS class
    - Custom HTML

## How to install

___
<a href="http://api.blackbaud.com/services/wordpress/updater/plugins/blackbaud-flyer.zip" target="_blank" class="btn btn-primary"><i class="fa fa-download"></i> Download blackbaud-flyer.zip</a>

### Installing via FTP

1. Download the plugin package (above) and save to your Desktop
1. Extract the contents of the package and delete the original zip file
1. Open FileZilla (or any other FTP Client) and login to the server housing your WordPress install
1. Drag the "blackbaud-flyer" folder from your Desktop into the plugins directory of your WordPress install
1. Login to the WordPress dashboard and go to the Plugins page. You should see the "Blackbaud: Flyer" plugin listed.
1. Click "Activate" under the plugin's name

### Installing via WordPress dashboard

1. Download the plugin package (above) and save to your Desktop
1. Login to the WordPress dashboard and go to Plugins > Add New. 
1. Click the button to upload your zip file into WordPress
1. After the upload is complete, click "Activate" under the plugin's name

## Setup

After you've installed the Flyer plugin, you should see the menu item "Flyers" on the dashboard's sidebar.

### Updating the plugin's global settings

1. Go to Flyers > Settings
1. If you want to style your flyers from scratch, uncheck the "Include default style sheet"
1. If your theme already includes the Bootstrap CSS/JS files, uncheck "Include Twitter Bootstrap"
1. Click "Save Changes"

### How to create a new flyer

1. Go to Flyer > Add New
1. Fill in the form's fields, as needed
1. Click the "Publish" button

### How to add a flyer to a post or page

1. Edit the post or page that will display a Flyer (or, create a new post or page).
1. Determine where you want your flyer to be placed by clicking somewhere in the main Content Area.
1. Next, click on the Content Area's "Flyer" editor button and select a flyer from the dropdown.
1. You should now see a <a href="https://en.support.wordpress.com/shortcodes/" target="_blank">WordPress Shortcode</a> in the Content Area representing your Flyer.
1. Save the post/page and preview it, making sure that the flyer appears correctly.

### How to overwrite the HTML used for a flyer

There is one template used by this plugin, which can be overwritten in your theme. To do so, you will need to duplicate the desired file from the plugin's "template" directory, and move it to your theme's "template" directory (if your theme doesn't have a "templates" directory, you'll need to create one).

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
				<td class="file">modal.blackbaud-flyer.php</td>
				<td>Contains the HTML for the modal popup</td>
			</tr>
		</tbody>
	</table>
</div>
