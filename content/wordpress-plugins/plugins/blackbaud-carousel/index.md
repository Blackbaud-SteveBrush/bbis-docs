---
layout: layout-sidebar
name: Carousel
icon: fa fa-film
description: Twitter Bootstrap Carousels with many configurations
---

# Carousel

<p class="alert alert-warning">
    <span class="label label-warning">Note:</span> This plugin requires the Plugin Assistant! Please <a href="/wordpress-plugins/plugins/blackbaud-assistant/">install the Plugin Assistant</a> before continuing.
</p>

## What it does

The Carousel plugin creates the HTML necessary for a fully-functional Twitter Boostrap Carousel. Carousels are added to the page in the form of shortcodes.

<h3>Features:</h3>

- Shortcodes to output a fully-featured carousel
- Editor button to allow you to easily add a carousel to your posts and pages
- Each carousel has configurable options for:
    - Transition type
    - Transition speed
    - Time between slides
    - Navigation buttons
    - Multiple slides per iteration
    - Custom CSS classes
    - Auto-play
    - Loop
    - Pause on-hover
    - Slide images as backgrounds
    - Randomize starting slide
- Each carousel's slide has the following fields:
    - Image
    - Heading
    - Subheading 1
    - Subheading 2
    - Content
    - Primary button
    - Secondary button
    - Custom CSS class
    - Custom HTML after the slide

## How to install

___

<a href="http://api.blackbaud.com/services/wordpress/updater/plugins/blackbaud-carousel.zip" target="_blank" class="btn btn-primary"><i class="fa fa-download"></i> Download blackbaud-carousel.zip</a>

### Installing via FTP

1. Download the plugin package (above) and save to your Desktop
1. Extract the contents of the package and delete the original zip file
1. Open FileZilla (or any other FTP Client) and login to the server housing your WordPress install
1. Drag the "blackbaud-carousel" folder from your Desktop into the plugins directory of your WordPress install
1. Login to the WordPress dashboard and go to the Plugins page. You should see the "Blackbaud: Carousel" plugin listed.
1. Click "Activate" under the plugin's name

### Installing via WordPress dashboard

1. Download the plugin package (above) and save to your Desktop
1. Login to the WordPress dashboard and go to Plugins > Add New. 
1. Click the button to upload your zip file into WordPress
1. After the upload is complete, click "Activate" under the plugin's name

## Setup

After you've installed the Carousel plugin, you should see the menu item "Slides" on the dashboard's sidebar.

### How to create a new carousel

1. Go to Slides > Carousels
1. Fill in the form's fields and click "Add New Carousel"
1. You should see your new carousel listed on the right-hand sidebar

### How to create a new slide for a carousel

1. Go to Slides > Add New
1. Fill in the form's fields, as needed
1. Under "Carousels" (underneath the "Publish" button), select the carousel(s) that should feature this slide
1. Click the "Publish" button

### How to add a carousel to a post or page

1. Go to Slides
1. Find a slide that exists in the desired carousel, and copy the shortcode to your clipboard.
1. Edit the post or page that will display the carousel (or, create a new post or page).
1. Determine where you want your carousel to be placed by clicking somewhere in the main Content Area.
1. Next, paste the shortcode you copied from Step 2 into the Content Area.
1. Save the post/page and preview it, making sure that the carousel appears correctly.

### How to overwrite the HTML used for a carousel or slide

There are three templates used by this plugin, all of which can be overwritten in your theme. To do so, you will need to duplicate the desired file from the plugin's "template" directory, and move it to your theme's "template" directory (if your theme doesn't have a "templates" directory, you'll need to create one).

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
				<td class="file">carousel.blackbaud-carousel.php</td>
				<td>Contains the carousel wrapper HTML</td>
			</tr>
			<tr>
				<td class="file">slide.blackbaud-carousel.php</td>
				<td>Contains the HTML responsible for a normal slide</td>
			</tr>
			<tr>
				<td class="file">thumbnail.blackbaud-carousel.php</td>
				<td>Contains the HTML for multiple slides per iteration (e.g., 3 slides at a time)</td>
			</tr>
		</tbody>
	</table>
</div>
