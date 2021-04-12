# Ionic Training Lab - Angular

This project is the starting point for the Angular based self-guided trainings provided by Ionic. These trainings provide information for the use of the following products:

- Identity Vault
- Auth Connect

## The Base Application

The base application consists of a basic three-tabs application:

- tab1: provides current information about the logged in status of the user, as well as the logout button
- tab2: accesses a backend service that requires authentication
- tab3: does nothing

A login page is also included. It supports the entry of an email address and password, but it is not hooked up to any authentication, so "logging in" simply takes the user to tab1 at this point.

The tab2 route is guarded but the guard will currently allow anyone through since there is no "Authentication" or "Identity" service that would inform the guard of a login.

There are two HTTP interceptors included in the application:

- auth: this interceptor will add the appropriate token to outgoing requests when we have such a thing
- unauth: this interceptor redirects the user to the login page upon receiving a 401 error

Currently, if the user clicks on tab2, the auth interceptor will fail to add a token to the outgoing request, because we do not have one. This will result in a 401 error. The unauth interceptor will then redirect the user to the login page. This makes tab2 completely inaccessible, and that is what the trainings will rectify via the use of Auth Connect and Identity Vault.

## Trainings

### Identity Vault

### Auth Connect
