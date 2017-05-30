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



## Build

```sh
$ npm run build

> google-cloud-functions-start@1.0.0 build /Users/kanziw/dev/google-cloud-functions-start
> babel source.js -o index.js
```



## Deploy to local

```fsharp
$ functions start
Starting Google Cloud Functions Emulator...
Google Cloud Functions Emulator STARTED
No functions deployed ¯\_(ツ)_/¯. Run functions deploy --help for how to deploy a function.
$ functions deploy testfunction --trigger-http
Copying file:///var/folders/mm/bv_d3ph101l98c6kssl0gx800000gn/T/us-central1-testfunction-21195fIi5mKwg2JJa.zip...
Waiting for operation to finish...done.
Deploying function......done.
Function testfunction deployed.
┌────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Property   │ Value                                                                                                  │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Name       │ testfunction                                                                                           │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Trigger    │ HTTP                                                                                                   │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Resource   │ http://localhost:8010/kanziw/us-central1/testfunction                                                  │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Timeout    │ 60 seconds                                                                                             │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Local path │ /Users/kanziw/dev/google-cloud-functions-start                                                         │
├────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Archive    │ file:///var/folders/mm/bv_d3ph101l98c6kssl0gx800000gn/T/us-central1-testfunction-21195fIi5mKwg2JJa.zip │
└────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────┘
$ functions deploy testfunction2 --trigger-http
Copying file:///var/folders/mm/bv_d3ph101l98c6kssl0gx800000gn/T/us-central1-testfunction2-211985b89SErW7x4R.zip...
Waiting for operation to finish...done.
Deploying function......done.
Function testfunction2 deployed.
┌────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ Property   │ Value                                                                                                   │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Name       │ testfunction2                                                                                           │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Trigger    │ HTTP                                                                                                    │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Resource   │ http://localhost:8010/kanziw/us-central1/testfunction2                                                  │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Timeout    │ 60 seconds                                                                                              │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Local path │ /Users/kanziw/dev/google-cloud-functions-start                                                          │
├────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│ Archive    │ file:///var/folders/mm/bv_d3ph101l98c6kssl0gx800000gn/T/us-central1-testfunction2-211985b89SErW7x4R.zip │
└────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────────────┘
```



## Testing

```sh
$ functions call testfunction
ExecutionId: f365dd81-18b3-4073-a45a-c6b076d0f927
Result: Success!
$ functions call testfunction2
ExecutionId: 9169d55c-e67a-41ac-8501-31ee39fa29dd
Result: [test2] Success!!!!!!!!
```

