
# sails-oauth2
a sails project with oauth2 integration

a [Sails](http://sailsjs.org) application

## Test Auth Service

###Section A. Basic Test

1. In terminal, run `sails lift`

2. In your browser, go to `http://localhost:1336/users`

3. If you see the message `Unauthorized`, then you have succeeded.


###Section B. Advanced Test

1. Launch Server

    1. In terminal, run:

     ```shell
     sails lift
     ```

2. Register a “Client”

    1. Ensure that the custom settings are completed
        1. Security Config (Step 5) contains valid GMail credentials
        2. Connections Config (Step 9) contains valid Mongo server details

    2. Using Postman, post to `http://localhost:1336/clients/register` with `x-www-form-urlencoded` key:value pairs:

        ```shell
        email : <your email>
        ```

        where `<your email>` is your actual email (without the < >s).

    3. You should receive a response as such:

        ```json
        {
            "url": "http://localhost:1336/clients/verify/<your email>?code=gqjH6igH6Z89ROEoVRFmEiVYuEfEZ1kQ"
        }
        ```

    4. Provided you set the correct credentials in step 5.ii you should now receive an email that reads as such:

        ```text
        Hello!
        Please visit the verification link to complete the registration process.

        Account with Client ID : <received client id>

        Verification Link
        ```

    5. You can click the verification link now. The resulting page in your browser should read as such:

        ```json
        {
          "verified": true,
          "email":    "<your email>"
        }
        ```

3. Register a User

    1. Using Postman, post to `http://localhost:1336/users/register` with `x-www-form-urlencoded` key:value pairs:

        ```shell
        username : <your username>
        password : <your password>
        email    : <your email>
        ```

        Filling out the credentials as appropriate (without the < >s).

    2. You should receive a response as such:

        ```json
        {
            "url": "http://localhost:1336/users/verify/<your email>?code=Y087VfF3bbHmNrQaRsAfOB8srfNB0gDW"
        }
        ```

    3.  You should now receive an email that reads as such:

        ```text
        Hello!
        Please visit the verification link to complete the registration process.

        Account with Username : <your username>

        Verification Link
        ```

    4. You can click the verification link now. The resulting page in your browser should read as such:

        ```json
        {
          "verified": true,
          "email":    "<your email>"
        }
        ```

4. Request Token

    1. In order to request a token, you require a registered client and a registered user (see above).

    2. Using Postman, post to `http://localhost:1336/oauth/token` with `x-www-form-urlencoded` key:value pairs:

        ```shell
        grant_type : password
        client_id  : <received client id>
        username   : <your username>
        password   : <your password>
        ```

        Filling out the credentials as appropriate, but leaving the grant_type as “password”.

    3.  Make note of the access_token value (`<received access token>`). You should receive a response as such:

        ```json
        {
            "access_token":  "<received access token>",
            "refresh_token": "<received refresh token>",
            "expires_in":    3600,
            "token_type":    "Bearer"
        }
        ```

5. Request Resource with Token

    1. Using Postman, request with GET `http://localhost:1336/users/current` with custom authorization header key:value pair:

        ```shell
        Authorization : Bearer <received access token>
        ```

        Replacing the `<received access token>` value with the one you received.

    2.  You should receive a response similar to:

        ```json
        {
            "identity": {
                "username": "<your username>",
                "email":    "<your email>"
            }
        }
