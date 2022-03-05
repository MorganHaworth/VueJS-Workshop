# Vue Project Description

## Start Vue Project

npm install -g @vue/cli
    - Requires NodeJs 8.9+
    - if needed, npm update -g @vue/cli

vue create restaurant-app
    - Manually Select Features
        - Babel, TypeScript, Router, 
        Linter
    - Version 3.x
    - No to class-style component syntax
        - We are going to use Composition API style. It's a little different than the class-style, called Options API. Composition API is new to Vue version 3. 
        - Options is class-style using 'this' keyword. It has options like 'data', 'methods', and 'mounted'
        - With Composition API, our reactive data is written in a hook called 'setup'. With setup() it's easier to group code by logic. With Options, you need to implement more complex approaches to share code
    - Yes Babel alongside Typescript
    - Yes to history mode
        - For now, we are enabling history mode because Vue Router uses hashes in the URL otherwise cuz tbh it doesn't look good or standard with the hashes
    - ESLint with error prevention only
    - Lint on save
    - In dedicated config files (Babel, ESLint, etc)
    - No don't save preset

## Spin up App

cd restaurant-app
npm run serve

## File Structure

node_modules: saves all downloaded packages (dependencies)from npm - created from npm install or vue create
package.json: tracks projects information (description, license, scripts, dependency versions)
package-lock.json: records exact version of your installed packages
babel.config.js: babel makes javascript more older-browser-compatible
public: contains static assets published on your live application. 
    - index.html: Vue dynamically changes in browser, but this index.html is served. Don't worry about any changes here. Vue controls the UI. At runtime, Vue mounts to the div id="app" in here.
src: contains all our Vue code
    - main.ts: specify root App component and DOM element controlled by Vue (div id="app"). We are using a router
    - shims-vue.d.ts: Allows TypeScript to understand and use the .vue file extension we'll see
    - App.vue: Vue files are known as Single-File-Components. That means everything you need to place/template, style, and program for the component is in this one file. 
        - We have the <template></template> element which resembles HTML and constructs the template we'll use for this component.
        - All our logic goes into <script></script> element. There are two ways to structure our logic. The Composition API, which is what we will use. And the Options API which resembles a class-syntax. The Options API is built on the Composition API. Composition API is considered cleaner, and more readable. I believe its also the common choice for larger industry applications.
        - <style></style> contains all our styling. I'll be using CSS today.
        - ESLint prefers one child element to the <template></template> element. We'll fix this by surround it with a class=app div.
    - router: contains index.ts which defines our router. Vue creates Single Page Applications (it only displays one page but Vue updates the page with new data as we interact with it). The router lets us move between different paths and view components at those paths.
        - We can see our array of routes. Each route has a URL path, the route name, and the primary component it renders.
        - Components are re-usable custom elements with data and methods.
        - A view is another component except its purpose is to be what a router navigates to. This view can contain many other components for what you'd see on the page. Sometmies you'll see 'pages' instead of 'views'
        - A route's components can be lazy-loaded where it's only loaded when its needed.
        - The router is created with the routes and the history object we enabled. And we export it to access it in our main.ts where we attach it to our app.
    - App.vue: back to our app, we can see create-vue command created navigation links in our <template></template>. Clicking these <router-link></router-link> will take us to the path specified in "to". The <router-view></router-view> displays the component corresponding to the current URL.
    - views: contains those route components we specify. We will add more here and get rid of the AboutView.vue. Each of these .vue files is structured the same with a template, script, and style.
        - The HomeView.vue file contains a Vue component. <HelloWorld /> and an image loaded from the assets folder. I think we are familiar with the idea of an assets folder. Please correct me if that's not the case.
            - To use a Vue component we create, we need to make sure to import it and add it to the list of components our current component contains.
        - AboutView.vue displays when we navigate to /about.
    - components: contains all our Vue components.
        - HelloWorld.vue contains a lot of content in the <template></template>.
            - script lang="ts": defineComponent includes the 'props' key where we specify fields for passing data down to children components. Here we accept a 'msg' prop of type string. We can see in HomeView.vue that we pass a value into 'msg' via the 'msg' attribute in the component. We can display those props with data binding using double curly brackets, or, mustache syntax. It updates to the value of 'msg' as 'msg' updates.
            - style scoped attribute means the styles defined here don't propogate to children components. For example, if we add 'scoped' to the App's style, our root element. All the styling on the children components disappear.

Any questions before we take a look at a project we'll be working on today?

## Show the Project

Show the Vue app we'll be working towards, might not finish. This may be rather optimistic. 

## Create the Project

### Add Routes

Replace /about route with Menu route path: /menu, name: menu-and-order
Add Reviews Route: path: /reviews, name: reviews
Add Contact Us Route: path: /contact-us, name: contact-us
Add 404 Route: path: /:catchAll(.*), name: page-404
/* catchAll is a dynamic segment and (.*) is regex to match against anything */
Our route will land here if none of the previous route paths match what's in the URL.

We can 'import' the non-existent files above too.