---
layout: layout-sidebar
name: Luminate Survey
---

# Luminate Survey

<a href="http://api.blackbaud.com/services/wordpress/updater/plugins/blackbaud-luminate-survey.zip" target="_blank" class="btn btn-primary"><i class="fa fa-download"></i> Download blackbaud-luminate-survey.zip</a>

## What it does

The Luminate Survey plugin adds API Survey forms to your WordPress site. Luminate Forms are added to the page in the form of shortcodes.

<h3>Features:</h3>

- Shortcodes to output Luminate Survey forms
- Editor button to allow you to easily add a form to your posts and pages

## How to install

### Installing via FTP

1. Download the plugin package (above) and save to your Desktop
1. Extract the contents of the package and delete the original zip file
1. Open FileZilla (or any other FTP Client) and login to the server housing your WordPress install
1. Drag the "blackbaud-luminate-survey" folder from your Desktop into the plugins directory of your WordPress install
1. Login to the WordPress dashboard and go to the Plugins page. You should see the "Blackbaud: Luminate Survey" plugin listed.
1. Click "Activate" under the plugin's name

### Installing via WordPress dashboard

1. Download the plugin package (above) and save to your Desktop
1. Login to the WordPress dashboard and go to Plugins > Add New. 
1. Click the button to upload your zip file into WordPress
1. After the upload is complete, click "Activate" under the plugin's name

## Setup

After you've installed the Luminate Survey plugin, you should see the menu item "Surveys" on the dashboard's sidebar.

### Configuring WordPress to communicate with Luminate API's

1. Go to Surveys > Settings
1. Fill in each field based on the information provided in your Luminate Online's Site Options page.
1. Click "Save Changes"

### How to create a new survey

1. Go to Survey > Add New
1. Fill in the Survey ID derived from an actual Luminate Online Survey
1. Click the "Publish" button

### How to add a survey to a post or page

1. Go to Surveys
1. Next to the desired survey, you should see a shortcode. Copy this code to your clipboard.
1. Edit the post or page that will display a survey (or, create a new post or page).
1. Determine where you want your survey to be placed by clicking somewhere in the main Content Area.
1. Next, paste the shortcode you copied from Step 2 into the Content Area.
1. Save the post/page and preview it, making sure that the survey appears correctly.

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
				<td class="file">survey-init.blackbaud-flyer.php</td>
				<td>Contains the HTML needed to call the BBI Application</td>
			</tr>
			<tr>
				<td class="file">survey.blackbaud-flyer.hbs</td>
				<td>Contains a Handlebars template for the survey's HTML</td>
			</tr>
		</tbody>
	</table>
</div>
