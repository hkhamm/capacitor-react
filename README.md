# capacitor-react

## Setup Environment

https://capacitor.ionicframework.com/docs/getting-started/dependencies

## Build

```
yarn build
```

## Run

### iOS

First build the app, then open in Xcode.

```
yarn open:ios
```

Then, click the play button to run your app on a Simulator or Device.

### Android

First build the app, then open in Android Studio.

```
yarn open:android
```

Then, click the Run button to run your app on a device or emulator.

## Live Reload

```
yarn start
```

Then, follow the iOS or Android instrucions above and run the app in the Xcode simulator or Android emulator. The app in your simulator or emulator will now be running from `http://localhost:3000` as configured in `capacitor.config.json`. Any changes you make will be visible immediately.

## Deployment

Remove the `server` section from `capacitor.config.json`. Follow these instructions for creating a production build.

### iOS

https://www.joshmorony.com/deploying-capacitor-applications-to-ios-development-distribution/

### Android

https://www.joshmorony.com/deploying-capacitor-applications-to-android-development-distribution/
