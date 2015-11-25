---
layout: layout-sidebar
name: Theme & Plugin Updater
order: 4
icon: fa fa-cloud-download
description: Learn how the updater works with the themes and plugins
---

# Theme & Plugin Updater

## How it works

WordPress will automatically check plugins for updates if they are hosted by wordpress.org. However, Blackbaud does not host their plugins on wordpress.org; instead, they live on api.blackbaud.com.

To tell WordPress to check a different domain for an update, you have to sabotage the update check through certain filters (<a href="https://www.wproute.com/2013/09/wordpress-collect-display-plugin-updates/" target="&#95;blank">pre&#95;set&#95;site&#95;transient&#95;update&#95;plugins</a> and <a href="http://code.tutsplus.com/tutorials/create-a-license-controlled-plugin-and-theme-update-system-part-3-doing-the-update--cms-22675" target="&#95;blank">pre&#95;set&#95;site&#95;transient&#95;update&#95;themes</a>, respectively). These filters will give you access to an array that stores each plugin/theme and their versions. The Blackbaud Updater makes a remote request and compares the version numbers in the array to the version numbers in the package.json file (stored on api.blackbaud.com). If there is an updated version, Blackbaud Updater tells WordPress to transfer the package to the WordPress server, unpack it, and install.

<p class="alert alert-info">WordPress does not check for updates on every page refresh; rather, it checks it periodically, so you may not see your update right away.</p>

## Plugins

The Blackbaud Plugin Updater operates as a separate class named Updater, which lives in the Plugin Assistant plugin (plugins/blackbaud-assistant/classes/Updater.php).

### How to publish a plugin update

1. Fork the <a href="https://github.com/convio/GMBU&#95;Interactive&#95;Services" target="_blank">GMBU&#95;Interactive&#95;Services repository</a> to your GitHub account
1. Next, clone the fork to your local machine
1. Using Terminal, change your directory to the plugin you wish to change.
1. Make any desired changes to the plugin and commit your changes to your fork.
1. Next, create a new zip file from the plugin's folder and move it to the services/wordpress/updater/plugins/ directory (GMBU&#95;Interactive&#95;Services fork)
1. Using Terminal, git commit the zip file to your fork.
1. Next, you'll need to <a href="https://help.github.com/articles/creating-a-pull-request/" target="_blank">issue a pull request</a> at GitHub.com for both the plugin source files and your new zip file.
1. Once the pull request has been approved and merged into the master branch, the api.blackbaud.com administrator will need to pull the changes onto the server. (If you are not an administrator, ignore the remaining steps.)
1. Open Terminal and type `ssh root@api.blackbaud.com`. You'll be asked for the password.
1. Next, type `api`, which is an alias for a specific directory.
1. Finally, type `git pull` and wait for all the changes to be migrated from GitHub into api.blackbaud.com.

## Themes

The Blackbaud Theme Updater operates as a separate class named ThemeUpdater which should be saved in your parent theme's "lib" directory (themes/bbpress/lib/theme-updater.php).

The source files for the theme updater exist on the GMBU&#95;Interactive&#95;Services GitHub repository, under <a href="https://github.com/convio/GMBU&#95;Interactive&#95;Services/tree/master/packages/themes/wordpress/blackbaud-theme-updater" target="&#95;blank">packages/themes/wordpress/blackbaud-theme-updater/</a>.

### How to publish a theme update

1. Fork the <a href="https://github.com/convio/GMBU&#95;Interactive&#95;Services" target="_blank">GMBU&#95;Interactive&#95;Services repository</a> to your GitHub account
1. Next, clone the fork to your local machine
1. Using Terminal, change your directory to the theme you wish to change.
1. Make any desired changes to the theme and commit your changes to your fork.
1. Next, create a new zip file from the theme's folder and move it to the services/wordpress/updater/themes/ directory (GMBU&#95;Interactive&#95;Services fork)
1. Using Terminal, git commit the zip file to your fork.
1. Next, you'll need to <a href="https://help.github.com/articles/creating-a-pull-request/" target="_blank">issue a pull request</a> at GitHub.com for both the theme source files and your new zip file.
1. Once the pull request has been approved and merged into the master branch, the api.blackbaud.com administrator will need to pull the changes onto the server. (If you are not an administrator, ignore the remaining steps.)
1. Open Terminal and type `ssh root@api.blackbaud.com`. You'll be asked for the password.
1. Next, type `api`, which is an alias for a specific directory.
1. Finally, type `git pull` and wait for all the changes to be migrated from GitHub into api.blackbaud.com.
1. Login to WordPress and go to Dashboard > Updates. Click the "Check Again" button to force an update check. Your theme should now notify you of an update!

### How to link your theme to the update service

1. View the <a href="https://github.com/convio/GMBU_Interactive_Services/tree/master/packages/themes/wordpress/blackbaud-theme-updater" target="_blank">demo theme</a> on GitHub.
1. Open functions.php and copy the contents of the file to your clipboard.
1. Open your own theme's functions.php file and paste the code at the bottom of the file.
1. Go back to GitHub and download the "lib" folder to your Desktop.
1. Open your own theme's directory and add the theme-updater.php file to your theme's "lib" folder.
