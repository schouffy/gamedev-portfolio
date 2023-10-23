# What is this ?
This is a portfolio template that you can use to showcase your work, especially if it's comprised of projects that should be shown in a very visual way.

Looking for a game developer job, I needed a portfolio to present my work to recruiters. I found a lot of custom made portfolios, but no easy to use template unless I used Wordpress. Which was overkill to me because a static HTML/JS website would do fine.

So i created my own using VueJS, keeping in mind that I wanted it to be easily customisable so other people can use this as a base to make their own. It's very simple, static, fast and responsive.

For a real world use case, check my portfolio: https://scheefer.me


# How to use

1. Install

    - Fork or duplicate the repository
    - npm install
    - npm run dev

2. Customize
* For the content
    - Except for the projects pages, everything is static HTML that you can edit directly in the views and components files
    - For the projects pages, the page is dynamically populated at runtime using data stored in Typescript files (data/GameProjectsData.ts and data/OtherProjectsData.ts). Make the changes directly in these .ts files
    - Static files (images, icons, downloadables,..) should be placed in /public folder.
    - Make the necessary changes in the .env file (this is mostly the site metadata). You need to "npm run dev"/
    "npm run build" again when updating this file.

* For the style
    - The basic colors can be edited in the css/variables.less file.
    - The rest of the CSS can be edited, if need be, directly inside each view and component.
    - If you place custom CSS in your projects HTML data (that will be displayed in an overlay dialog), you must add the definition for this CSS in the css/projects.less file

* Additional info & optimizations
    - Images will be loaded on-demand when you switch tabs. It means if you have big images or animated gifs, you may want to preload them so the user sees them faster when they change tabs. To do this, you can call Helpers.preloadImages in app.vue to preload heavy images.

3. Deploy

    - npm run build
    - copy the content of the "dist" folder (created by "npm run build") to the publish location.
    - Check this example if you want to deploy to GitHub pages or some other major static content host: https://vitejs.dev/guide/static-deploy.html


# License

This is GNU LGPL, check the LICENSE file.

Please consider keeping the link to this repository at the bottom of your portfolio, so other people can find and use this template too. Of course it's not mandatory though.
