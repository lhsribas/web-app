# 3Scale Integrated with RH-SSO

## Requirements

1. 3scale 2.2
2. Red Hat SSO 7.2

## Installation

### Red Hat SSO

* Access the [RH-SSO Installation](https://access.redhat.com/documentation/en-us/red_hat_single_sign-on/7.2/html-single/red_hat_single_sign-on_for_openshift/#getting_started)

### 3scale

* Access the [3scale AMP On-premises Installation Guide](https://access.redhat.com/documentation/en-us/red_hat_3scale/2.2/html-single/infrastructure/#onpremises-installation)

## Configuration

* In other to configure the integration between RH-SSO and 3scale access [OIDC Integration with RH-SSO](https://access.redhat.com/documentation/en-us/red_hat_3scale/2.2/html-single/api_authentication/#rhsso)

## Post Configuration Steps

### Configure the API

1. Access the 3scale Admin Portal (e.g. [https://3scale-admin.DOMAIN/]())

2. Click in the `API` in the top menu

3. Click in the `Integration` option on your *API*

4. Select the `OpenID Connect` option in Integration settings section

5. Edit the integration details putting the `Private Base URL` of the *API*

6. Add the following `Mapping Rules`:
    
    1. Product List
       * Verb: `GET`
       * Pattern: `/api/v1/product`
    2. Order
       * Verb: `POST`
       * Pattern: `/api/v1/order`

7. In Authentication Settings add the URL of the ClientID to make the Integration between 3scale and RH-SSO using the following pattern:

    ```
    https://<CLIENT_ID>:<CLIENT_SECRET>@<HOST>:<PORT>/auth/realms/<REALM_NAME>
    ```

    e.g. `http://3scale-admin:ce973454-234-234-2344-0c6d9ded63a9@sso-rhsso.DOMAIN/auth/realms/3scale-sso`

8. In credentials location select `HTTP headers`

9. In Policies add the CORS with the following configuration:
    
    * Enabled: `Checked`
    * allow_credentials: `Checked`
    * Allowed Methods: `GET`, `PUT`, `POST`
    * allow_origin: `*` (which means any origin)

10. Click `Submit`

11. Move the CORS added to the **TOP** of the list of policies

12. Click in *Update the Staging Environment*

### Configure the Application

1. Access the 3scale Admin Portal (e.g. [https://3scale-admin.DOMAIN/]())

2. Click in the `Applications` in the top menu

3. Click in the `Application Name` in the list

4. Click in the `Client secret` button in the list

5. Edit the `Redirect URL` clicking in `Change` and add the application URL to redirect after a successful login (e.g. http://localhost:8080/*)

6. Take note of the `ClientID`, we will use it later

### Configure the Client in RH-SSO

1. Access the RH-SSO Admin Portal with a Admin Account

2. Click in the `clients` item in the menu

3. Wait until the `Client ID` from the previous section is created here

4. Click in the `Client ID` to edit it's configuration

5. Check the `Implicit Flow Enabled` is `ON`

6. Add a Base URL with the application URL (e.g. http://localhost:8080)

7. Add a `Web Origin` with the application URL (e.g. http://localhost:8080)

8. Click in the `Roles` in the menu

9.  Add the following Roles to the Realm
    * Role Admin
        * Role Name: `admin`
    * Role User
        * Role Name: `user`

10. Create a user accessing the item `User` in the main menu.
    * Add the following user:
        * User name: `test-adm`
        * Add the role: `admin`
    * Add the following user:
        * User name: `test-user`
        * Add the role: `user`
11. In the client's *Installation* tab, select the option *Keycloak OIDC JSON*, download the JSON file, and save it into `src/external`.

12. Format the downloaded file as describe bellow:

    ```
    const keycloak_conf = {
        //Include the JSON properties here

        //Add the following properties
        "url": "[this property has have the same value of auth-server-url]",
        "clientId": "partner-frontend"
    }

    export default keycloak_conf
    ```

13. Download the Javascript Adapter [https://RH-SSO-Host/auth/js/keycloak.js]()

14. Test the application running `npm dev run`.

15. Access the application's login URL [http://localhost:8080/login]() and click the button *Login with Single Sign-On*.

    **NOTE**: If you see errors in the API call, check if there are errors in the Browser Console. Perhaps you need to accept the server certificate of the API.