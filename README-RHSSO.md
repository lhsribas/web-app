# RH-SSO Integration For Local Testing

1. Install RH-SSO as documented in this link [RH-SSO Installation](https://access.redhat.com/documentation/en-us/red_hat_single_sign-on/7.2/html/red_hat_single_sign-on_for_openshift/getting_started#using_the_rh_sso_for_openshift_image_streams_and_application_templates).

2. Login as `admin` in RH-SSO

3. Create a realm for the application (e.g demo).

4. Create a new client accessing the item `Client` in the main menu.

5. Fill fields with the following values:
    * ID: `partner-frontend` 
    * Root URL: `[application URL. Ex: http://localhost:8080]`

6. In *Settings* select the following options:
    * Access Type: `Public`
    * Implicit Flow Enabled: `On`

7. In the application *roles* access the tab `Roles`.
    * Role Admin
        * Role Name: `admin`
    * Role User
        * Role Name: `user`
 
8. Create a user accessing the item `User` in the main menu.
    * Add the following user:
        * User name: `test-adm`
        * Add the role: `admin`
    * Add the following user:
        * User name: `test-user`
        * Add the role: `user`

9.  In the client's *Installation* tab, select the option *Keycloak OIDC JSON*, download the JSON file, and save it into `src/external`.

10. Format the downloaded file as describe bellow:

    ```
    const keycloak_conf = {
        //Include the JSON properties here

        //Add the following properties
        "url": "[this property has have the same value of auth-server-url]",
        "clientId": "partner-frontend"
    }

    export default keycloak_conf
    ```

11. Download the Javascript Adapter [https://RH-SSO-Host/auth/js/keycloak.js]()

12. Test the application running `npm dev run`.

13. Access the application's login URL [http://localhost:8080/login]() and click the button *Login with Single Sign-On*.