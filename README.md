# Partner Front-end

Sample application to exemplify some concepts in the perspective of a front-end JavaScript application.
 * API Gateway
 * Single Sign-On
 * OIDC
 * OAuth2

In this application we use [Vue](https://vuejs.org/) front-end framework.

## Project structure

The project structure follows the patterns and best practices of Vue applications.

```
src/api        -> Backend de API's that will be used by the project
src/assets     -> Images and other assets
src/components -> Vue Components
src/router     -> Routes
src/store      -> Centralized state management
src/external   -> Location for external resources
src/style      -> Styles
main.js        -> Main entrypoint of the application
```

## To deploy in OpenShift

```
    $ ./deploy-to-openshift.sh
```

## Build details

For more information on:

* [How to build](README-HOWTO.md)
* [Test with RH-SSO](README-RHSSO.md)
* [Test with 3scale and RH-SSO](README-3scale-RHSSO.md)

