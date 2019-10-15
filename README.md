# capacitor-react

## Setup Environment

https://capacitor.ionicframework.com/docs/getting-started/dependencies

## Build

```
yarn build
```

## Run

### Android

First build the app.

```
yarn open:android
```

Then, click the Run button to run your app on a device or emulator.

### iOS

First build the app.

```
yarn open:ios
```

Then, click the play button to run your app on a Simulator or Device.

## Live Reload

```
yarn start
```

Then, follow the Android or iOS instrucions above and run the app in the Xcode simulator or Android emulator. The app in your simulator or emulator will be now be running from `http://localhost:3000` as configured in `capacitor.config.json`. Any changes you make will be visible immediately.

## Deployment

Remove the `server` section from `capacitor.config.json`. Follow these instructions for creating a production build.

### Android

https://www.joshmorony.com/deploying-capacitor-applications-to-android-development-distribution/

### iOS

https://www.joshmorony.com/deploying-capacitor-applications-to-ios-development-distribution/
