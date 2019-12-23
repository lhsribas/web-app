# Partner Front-end

This application will be created using [Vue](https://vuejs.org/).

## Building the application

1. Create an application using the front-end components framework [bootstrap-vue](https://bootstrap-vue.js.org/).

    ```
    $ vue init bootstrap-vue/webpack-simple <project-name>
    ```

2. Install all basic dependencies to test it

    ```
    $ npm install
    ```

3. Test the application running the following command, and access [http://localhost:8080]()

    ```
    $ npm run dev
    ```

4. *[Optional]* - In case you see errors while executing the command above `'npm run dev'`, it's possible that some libraries are missing. Use the following commands to install some possible ones:

    ```
    $ npm i -s postcss-import
    $ npm i -s postcss-url
    ```

5. Add the [vue-router](https://router.vuejs.org) to control the routing within the application

    ```
    $ npm i -s vue-router
    ```
    
6. Add the [vuex](https://vuex.vuejs.org/) which will be the *Centralized State Management* for this application

    ```
    $ npm i -s vuex
    ```

7. Add the [vuex-router-sync](https://github.com/vuejs/vuex-router-sync) which will be router state synchronization mechanism

    ```
    $ npm i -s vuex-router-sync
    ```

8. Add the [vue-resource](https://github.com/pagekit/vue-resource) which will be used to execute the remote calls to the API's

    ```
    $ npm i -s vue-resource
    ```

9. Add support for [ES2015](https://babeljs.io/docs/en/babel-preset-es2015).

    ```
    $ npm i -s babel-preset-es2015
    ```

10. Add support for [Rest Spread](https://babeljs.io/docs/en/babel-plugin-transform-es2015-spread)

    ```
    $ npm i -s babel-plugin-transform-object-rest-spread
    ```

11. Add support for [Destructuring](https://babeljs.io/docs/en/babel-plugin-transform-es2015-destructuring)

    ```
    $ npm i -s babel-plugin-transform-es2015-destructuring
    ```

12. Add support for [HTML-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
    
    ```
    $ npm install --save-dev html-webpack-plugin
    ```
    
13. Add support for [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)

    ```
    $ npm install --save-dev copy-webpack-plugin
    ```

14. To build the application for production use the following command

    ```
    $ npm run build
    ```