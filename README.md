# personal-site
[trevorcorc.com](https://trevorcorc.com)

## Description

This repository contains a static website built in Flask. The goal is to have a place
to display programming projects, writing projects, and anything else I find meaningful.  
I am not a huge fan of social media as the sole place of hosting my works, so this website will serve as the primary
point that the things I create and do will be shown.

I want to keep this site light, as my [last attempt](https://github.com/SuperShadowPlay/personal-site-old) at a personal website was a behemonth made in Vue2, which was not the right
tooling I should have been using for an application such as this.

## Tools
* [Flask](https://flask.palletsprojects.com/en/stable/) => Web Framework
* [Poetry](https://python-poetry.org/) => Dependency Management

If you do not already have it, install Poetry. This can be done with `pip` or preferrably `pipx`.
With poetry installed, run `poetry install` to install dependencies.  
At the moment this just installs Flask, so feel free to install that manually if you must.

## Development

To open a development server, run `make` in the root directory.

## Resources

Here is a list of resources I am referencing as I build this website.

* https://flask.palletsprojects.com/en/stable/tutorial/layout/
* https://flask.palletsprojects.com/en/stable/quickstart/
