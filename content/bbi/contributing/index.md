---
layout: layout-sidebar
order: 6
name: Contributing
description: Description here.
icon: fa fa-sitemap
---

# Contributing to BBI

## How BBI is built

BBI changes its form many times through its initialization cycle. The available methods change depending on which hook you tap into.

### Extensions

The namespace consists of several extensions. Each extension has a specific purpose. For example, the "helper" methods are contained in an extension named "helper". 

`BBI.extension(args)`

    - alias
    - defaults
    - directive

`BBI.instantiate(nameOfExtension, options)`

### Hooks

    `BBI.on(slug, function)`
        - preload
        - init
        - complete

## GitHub workflow

BBI uses GitHub for version control. Updates and bug fixes operate under Pull Requests. You'll need to fork the entire GMBU_Interactive_Services repository and make Pull Requests for any changes. The GitHub administrator will be notified and will merge the changes, if appropriate.
