---
layout: layout-sidebar
name: Plugin Assistant
order: 1
icon: fa fa-briefcase
description: The framework and methods used by all Blackbaud plugins
---

# Plugin Assistant

<a href="http://api.blackbaud.com/services/wordpress/updater/plugins/blackbaud-assistant.zip" target="_blank" class="btn btn-primary"><i class="fa fa-download"></i> Download blackbaud-assistant.zip</a>

## What it does

All of Blackbaud's WordPress plugins require the _Plugin Assistant_. The Plugin Assistant is a WordPress plugin by definition, but it doesn't do much by itself. It simply creates a framework on which the other plugins are built upon. The Plugin Assistant is also responsible for linking each plugin to the auto-update service, among other things.

<p class="alert alert-info">All of Blackbaud's offial plugins require that the Plugin Assistant be installed on the same site.</p>

## How to install

### Installing via FTP

1. Download the plugin package (above) and save to your Desktop
1. Extract the contents of the package and delete the original zip file
1. Open FileZilla (or any other FTP Client) and login to the server housing your WordPress install
1. Drag the "blackbaud-assistant" folder from your Desktop into the plugins directory of your WordPress install
1. Login to the WordPress dashboard and go to the Plugins page. You should see the "Blackbaud: Assistant & Libraries" plugin listed.
1. Click "Activate" under the plugin's name

### Installing via WordPress dashboard

1. Download the plugin package (above) and save to your Desktop
1. Login to the WordPress dashboard and go to Plugins > Add New. 
1. Click the button to upload your zip file into WordPress
1. After the upload is complete, click "Activate" under the plugin's name

## Setup

The Plugin Assistant does not have any configuration options.

