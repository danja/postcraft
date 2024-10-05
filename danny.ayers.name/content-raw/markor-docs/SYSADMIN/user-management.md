I am setting up a server which will run a variety of different services, including a Solid Community Server. I would like some standard kind of central system for user management like LDAP available on my server to other services. What options are supported by Solid Community Server, ideally that would work out of the box?

---

For user management on my remote Ubuntu server across various services I plan to use the following :
* OpenLDAP for central user management
* Keycloak as OIDC Provider

* WebID-OIDC bridging to Solid, 'old way'?
* Solid-oidc new way?
* 