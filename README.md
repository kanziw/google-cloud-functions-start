# google-cloud-functions-start

## Pre installation

* [nvm](https://github.com/creationix/nvm)

* Node v6.9.1

  * why?

  * ```sh
    $ node --version
    v6.7.0
    $ npm install -g @google-cloud/functions-emulator
    $ functinos start
    Node.js v6.9.1 or greater is required to run the Emulator!
    $ nvm install v6.10.3
    $ npm install -g @google-cloud/functions-emulator
    $ functions start
    Warning: You're using Node.js v6.10.3 but Google Cloud Functions only supports v6.9.1.
    $ nvm install v6.9.1
    $ functions start
    $ functions stop
    ```

* [functions](https://cloud.google.com/functions/docs/emulator) : Cloud Functions Local Emulator

