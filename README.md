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
