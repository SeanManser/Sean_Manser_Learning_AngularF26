# Untitled1

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Dog API
The API that I am using is https://dogapi.dog. The documentation can be found here: https://dogapi.dog/docs. 
An example request is: https://dogapi.dog/api/v2/breeds

I chose to use HTTP resource because it returns signals and automatically handles the loading, error and data states.
It also avoids the use of subscribe which can be clunky.

The Edit and Delete methods don't permanently change the records because they aren't sent to the API. Therefore the information never changes and when you reload the page, the information is pulled and untouched from the previous changes.

## Ordering of Interceptors
The order doesn't matter for my app because the errorInterceptor rethrows the error back up the chain and finalize runs regardless of the request failing or succeeding. Both ways the count goes back to zero and the error reaches the code.

## Lazy Loading 
Before:

Initial chunk files | Names         |  Raw size | Estimated transfer size
main-C7X4K65Q.js    | main          | 346.60 kB |                91.24 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 346.60 kB |                91.24 kB

After:

Initial chunk files | Names          |  Raw size | Estimated transfer size
main-GCJYQMOM.js    | main           | 297.20 kB |                81.26 kB
styles-5INURTSO.css | styles         |   0 bytes |                 0 bytes

                    | Initial total  | 297.20 kB |                81.26 kB

Lazy chunk files    | Names          |  Raw size | Estimated transfer size
chunk-C3eYqU7j.js   | dog-form       |  48.30 kB |                10.73 kB
chunk-zqUJA2gg.js   | dog-detail     |   2.40 kB |                 1.11 kB
chunk-Co_mnUCK.js   | dog-by-breed   | 870 bytes |               870 bytes
chunk-CJbPXDwg.js   | page-not-found | 474 bytes |               474 bytes

What Changed: every route except the landing page (/dogs) has been changed to use loadComponent and a dynamic import.
This makes the first page load smaller and routes are only loaded when they are visited.

Landing Page Stays Eager: Because /dogs is the first page the user sees, it would be slower to download main and then make a second request for the DogList chunk.

## Lifecycle

### What happened when you read this.id() in the constructor, and why?:
The detail page failed to load and showed the error `NG0950: Input "id" is required but no value is available yet`.
This happens because the constructor runs while Angular is still creating the component. Since my id is an input.required(), reading it before it has a value throws an error instead of returning undefined.

### What action in your app caused ngOnDestroy to run, and what does that tell you about what the router does with a page when you leave it?:

ngOnDestroy ran whenever I left the detail page. This includes clicking back buttons, nav bar links, or deleting a dog.
this shows that navigating away from a component runs ngOnDestroy. When I opened a dog again, a  new instance was created.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
