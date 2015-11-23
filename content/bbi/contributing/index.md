---
layout: layout-sidebar
order: 9
name: Contributing
description: Description here.
icon: fa fa-sitemap
---

# Contributing to BBI

## How BBI is built

The BBI object exists as a public property of the browser's Window object. From there, BBI provided many public methods and properties, which are described in detail in the <a href="../../reference/">API Reference</a>.

Most of these public methods and properties live separately in what are called "extensions". Extensions are separate chunks of code that isolate similar functionality and ease development and debugging.


## Extensions

The namespace consists of several extensions. Each extension has a specific purpose. For example, the "helper" methods are contained in an extension named "helper".

Extensions are first "described" in what's called a directive. The directive holds functions and properties, and determines what is made public to other extensions. Extensions may only be created and instantiated in the "init" hook (see below).

## Hooks

The BBI object changes its form many times through its initialization cycle. Different methods are also made available during each cycle, which is why it's important to extend BBI's functionality at the appropriate time. Because of this, certain hooks were developed to allow code to be inserted at each cycle. You can tap into a certain point in the initialization cycle using the `BBI.on()` method.

## GitHub workflow

The source files for BBI are located in the <a href="https://github.com/convio/GMBU&#95;Interactive&#95;Services/tree/master/bbi" target="_blank">GMBU&#95;Interactive&#95;Services repository on GitHub</a>. If you do not have permission to access this repository, please provide your GitHub handle (or username) to <a href="mailto:andrew.fort@blackbaud.com">Andrew Fort</a> or <a href="mailto:jason.rikard@blackbaud.com">Jason Rikard</a> so they may add you to the list of contributors.

Currently, the process flow for updates mostly looks like the <a href="https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow" target="_blank">Feature Branch Workflow</a>. In other words, all collaborators have a duplicate of the repository on their local machines and open Pull Requests to the master branch for updates. The owner of the master branch will then review the pull request and decide whether or not it should be merged.

<a href="https://help.github.com/articles/creating-a-pull-request/">How to create a Pull Request&nbsp;&rarr;</a>

## Updating BBI

The production versions of BBI (and its various assets) live on the api.blackbaud.com domain. This domain is more or less a mirror image of what exists on the GMBU&#95;Interactive&#95;Services GitHub repository.

To make an update to an existing version of BBI, you'll need to fork the repository to your local machine, create a pull request to GitHub, and then pull the commit down into api.blackbaud.com.

### Steps to update BBI

1. Fork the <a href="https://github.com/convio/GMBU&#95;Interactive&#95;Services" target="_blank">GMBU&#95;Interactive&#95;Services repository</a> to your GitHub account
1. Next, clone the fork to your local machine
1. On your computer, change your directory to bbi/v/ and edit the version of BBI you wish to change
1. Make any changes to BBI's _extension_ files (do NOT change the bbi.all.js or bbi.min.js files because these will get overwritten in the next step)
1. Next, you'll need to compress all the extension files into bbi.all.js. To do this, launch MAMP, and go to http://localhost:8888/path/to/repo/bbi/v/1.1.0/compile. Your version of the URL may have a different port, and will also have a different base directory, depending on where you cloned the repository on your machine.
1. If all goes well, the file bbi.all.js should have been updated. Open this file and copy its contents to your clipboard.
1. Go to <a href="https://closure-compiler.appspot.com/home" target="_blank">Google's Closure Compiler</a> and paste in the code. Click "Compile".
1. Copy the code from the compiler and paste it into the bbi.min.js file.
1. Open Terminal and commit your changes to your fork.
1. Next, you'll need to <a href="https://help.github.com/articles/creating-a-pull-request/" target="_blank">issue a pull request</a> at GitHub.com.
1. Once the pull request has been approved and merged into the master branch, the api.blackbaud.com administrator will need to pull the changes onto the server. (If you are not an administrator, ignore the remaining steps.)
1. Open Terminal and type `ssh root@api.blackbaud.com`. You'll be asked for the password.
1. Next, type `api`, which is an alias for a specific directory.
1. Finally, type `git pull` and wait for all the changes to be migrated from GitHub into api.blackbaud.com.
1. Open a client's site that's using BBI and refresh the page. If all is well, then you're done!
