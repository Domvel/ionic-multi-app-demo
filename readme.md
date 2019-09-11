# Ionic 4 Multi-App Example App

> Created for github issue purposes. No maintenance or support here. It's not recommended to use this.

This is a multi-app way using Angular multi-app system but with a touch of my way to reduce code repetition.
The DRY (Don't Repeat Yourself) principle also affects to the project setup.
Sadly the Angular configuration file is a JSON (angular.json). So I have to use same code for each app declaration. But it is planned to generate the angular.json by a node script or 3rd party libs like [NX](https://nx.dev).

**But anyway, this demo is for the representation of using Ionic in an Angular multi-app workspace.**
We have two (later more) apps which uses the same base app. The only differs by the dashboard and some other stuff.
Therefore we do not want to have the same project configuration each for each app. We only want the same config base.
In Angular, only the app.module.ts which is bootstrapped in the main.ts is necessary to differ an app.
That's all. No repetitions of code and configuration files. Only the necessary and maybe a bit more. But not the overload of conventional multi-apps.

We use one Android setup for both app. Later a Jenkins job just replaces some data / files e.g. app-id by profiles. You also can do this manually or by a node script.
This should not the problem here. Just background about the project setup. ...
Btw. we do not use lazy-load or Angular modules for pages or other stuff for several reasons. One of them is because of problem with ngx-translate etc.
And we do not want to have laggy page loads for often uses pages. We uses arrays to collect your pages to avoid repetition.

This project was created from a real world workspace. Removed some code here, changed some names there and so on. Sorry if I missed something.
If you think: Hey App 1 and App 2 is more or less equal, why separate? A: This is only in this reduced project. Don't think about this. :)

[Issue](https://github.com/ionic-team/ionic-cli/issues/4121): Ionic Cordova Android does not work in Angular multi-app system. ng serve works well.

Error on executing e.g. `ionic cordova run android --project=app1`

> Sorry! ionic cordova run can only be run in an Ionic project directory.

That's a lie! :D
If I run `ionic init` it will not change anything, because it already exists.
The question is: Why does Ionic think that this is not an Ionic repo? Maybe the project argument is ignored.
But what are the checks for this? ionic.config.json is present.

## Reproduce

1. Run the app with the npm scripts in package json. Try the `ng serve` script.
2. Do the same from 1. but with Ionic Cordova Android.

See the scripts in the `package.json`

```bash
npm run serve:app1
npm run serve:app2
npm run android:app2
npm run android:app2
```
