// RH-SSO DEV Local
// const keycloak_conf = {
//   "realm": "demo",
//   "auth-server-url": "https://localhost:8543/auth",
//   "ssl-required": "external",
//   "resource": "partner-frontend",
//   "public-client": true,
//   "confidential-port": 0,
//   "url": "https://localhost:8543/auth",
//   "clientId": "partner-frontend"
// }

//RH-SSO DEV Cloud
//https://secure-sso-sso-dev.apps.sememeve.com
//const keycloak_conf = {
//  "realm": "master",
//  "auth-server-url": "http://localhost:8180/auth",
//  "url": "http://localhost:8180/auth",
//  "ssl-required": "external",
//  "resource": "partner-frontend",
//  "credentials": {
//    "secret": "bb7c206d-85e5-4c32-b6af-3f42870e6ee9"
//  },
//  "confidential-port": 0,
//  "clientId": "partner-frontend"
//}


//const keycloak_conf = {
//  "realm": "master",
//  "auth-server-url": "http://localhost:8180/auth",
//  "ssl-required": "external",
//  "resource": "partner-frontend",
//  "public-client": true,
//  "confidential-port": 0,
//  "url": "http://localhost:8180/auth",
//  "clientId": "partner-frontend"
//}

const keycloak_conf = {
  "realm": "integration-dev",
  "auth-server-url": "https://secure-sso-sso-dev.apps.sememeve.com/auth",
  "ssl-required": "external",
  "resource": "partner-frontend",
  "public-client": true,
  "confidential-port": 0,
  "url": "https://secure-sso-sso-dev.apps.sememeve.com/auth",
  "clientId": "partner-frontend"
}

export default keycloak_conf