---
layout: layout-sidebar
name: eTapestry Form
icon: fa fa-file-text
description: No-scrollbar iFrames for your DIY forms
---

# eTapestry Form

<p class="alert alert-warning">
    <span class="label label-warning">Note:</span> This plugin requires the Plugin Assistant! Please <a href="/wordpress-plugins/plugins/blackbaud-assistant/">install the Plugin Assistant</a> before continuing.
</p>

## What it does

The eTapestry Form plugin adds eTapestry DIY iFrame forms to your WordPress site. eTapestry Forms are added to the page in the form of shortcodes.

<h3>Features:</h3>

- Shortcodes to output eTapestry Forms
- Editor button to allow you to easily add a form to your posts and pages
- Auto-updates the height of the iframe, to avoid scrollbars

## How to install

___
<a href="http://api.blackbaud.com/services/wordpress/updater/plugins/blackbaud-etap-form.zip" target="_blank" class="btn btn-primary"><i class="fa fa-download"></i> Download blackbaud-etap-form.zip</a>

### Installing via FTP

1. Download the plugin package (above) and save to your Desktop
1. Extract the contents of the package and delete the original zip file
1. Open FileZilla (or any other FTP Client) and login to the server housing your WordPress install
1. Drag the "blackbaud-etap-forms" folder from your Desktop into the plugins directory of your WordPress install
1. Login to the WordPress dashboard and go to the Plugins page. You should see the "Blackbaud: eTapestry Form" plugin listed.
1. Click "Activate" under the plugin's name

### Installing via WordPress dashboard

1. Download the plugin package (above) and save to your Desktop
1. Login to the WordPress dashboard and go to Plugins > Add New. 
1. Click the button to upload your zip file into WordPress
1. After the upload is complete, click "Activate" under the plugin's name

## Setup

After you've installed the eTapestry Form plugin, you should see the menu item "eTap Forms" on the dashboard's sidebar.

### How to add a new eTapestry Form

1. Go to eTap Forms > Add New
1. Fill in the iFrame Source field, derived from the DIY form's iFrame embed code.
1. Click the "Publish" button

### How to add a eTapestry form to a post or page

1. Go to eTap Forms
1. Next to the desired form, you should see a shortcode. Copy this code to your clipboard.
1. Edit the post or page that will display a form (or, create a new post or page).
1. Determine where you want your form to be placed by clicking somewhere in the main Content Area.
1. Next, paste the shortcode you copied from Step 2 into the Content Area.
1. Save the post/page and preview it, making sure that the form appears correctly.

### How to overwrite the HTML used for a survey

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
				<td class="file">iframe.blackbaud-flyer.php</td>
				<td>Contains the HTML for the iFrame, as well as the custom JavaScript that auto-updates the height of the iframe, to avoid scrollbars.</td>
			</tr>
		</tbody>
	</table>
</div>
