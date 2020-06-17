# Dr. J Web

[VuePress](https://vuepress.vuejs.org/) Site for Static Public Dr. J Web

## Running Locally

### Configure your machine

* Install [Node](https://nodejs.org/en/download/)
* Install dependencies by running `npm i`


### Running the site locally

Execute `npm run dev:docs` to start a webserver with the current site

## Editing the Site

### Editing Content
Content is in the `.md` files in the `docs` folder. See [VuePress docs on how to add new content](https://vuepress.vuejs.org/guide/directory-structure.html#default-page-routing) and how routing to those pages works

### Editing the Layout
Layout is in the `./vuepress/theme/Layout.vue` file. All content shares the same layout. The `<Content>` tag determines where the page content goes.

## Misc

* If a content page has html (and they all do right now) and when you view it half the page is normal and the rest looks like code double check the file for empty linebreaks. Those will screw up the markdown renderer into thinking you aren't writing HTML code but rather are trying to display the code as content.
* Production build is ran by `npm run docs:build`
