# NativeScript-OneSignal
A Nativescript plugin that wraps the iOS and Android OneSignal Push Notifications SDK.

## Contributors

[OneSignal-iOS-SDK](https://github.com/OneSignal/OneSignal-iOS-SDK)

[OneSignal-Android-SDK](https://github.com/OneSignal/OneSignal-Android-SDK)

## Supported Platforms
- iOS
- Android

## Installation
```bash
tns plugin add nativescript-onesignal
```

### iOS

Does not need any configuration.

### Android

In your `app.gradle`:

```
dependencies {
	compile "com.onesignal:OneSignal:3.+@aar"
	compile "com.google.android.gms:play-services-gcm:+"
	compile "com.google.android.gms:play-services-location:+"
}

android {
	defaultConfig {
		applicationId "org.nativescript.demo"
		manifestPlaceholders = [
			manifestApplicationId: "${applicationId}",
			onesignal_app_id: "b2f7f966-d8cc-11e4-bed1-df8f05be55ba",
			onesignal_google_project_number: "703322744261"
		]
	}
}
```

## Usage
### Typescript

```typescript
var TnsOneSignal = require('nativescript-onesignal').TnsOneSignal
```

### iOS

`TnsOneSignal` is the native iOS `OneSignal` class.

In your `main.ts`:

```typescript
import * as application from 'application';
var TnsOneSignal = require('nativescript-onesignal').TnsOneSignal

if (application.ios) {
	class MyDelegate extends UIResponder implements UIApplicationDelegate {

		public static ObjCProtocols = [UIApplicationDelegate]

		private applicationDidFinishLaunchingWithOptions(app: UIApplication, launchOptions: NSDictionary): boolean {

			try {

				console.dump('TnsOneSignal', TnsOneSignal)
				TnsOneSignal.initWithLaunchOptionsAppId(launchOptions, 'b2f7f966-d8cc-11e4-bed1-df8f05be55ba')

			} catch (error) {
				console.error('error', error)
			}

			return true
		}

	}
	application.ios.delegate = MyDelegate
}
```

### Android

`TnsOneSignal` is the native Android `com.onesignal.OneSignal` class.

In your `main.ts`:

```typescript
import * as application from 'application';
var TnsOneSignal = require('nativescript-onesignal').TnsOneSignal

if (application.android) {
	application.on(application.launchEvent, function(args: application.ApplicationEventData) {

		try {

			console.dump('TnsOneSignal', TnsOneSignal)
			TnsOneSignal.startInit(application.android.context).init()

		} catch (error) {
			console.error('error', error)
		}

	})
}
```

## API Reference
[iOS API Reference](https://documentation.onesignal.com/docs/ios-sdk-api)

[Android API Reference](https://documentation.onesignal.com/docs/android-sdk-api)

## Typescript Typings

[iOS](https://github.com/roblav96/nativescript-onesignal/blob/master/typings/OneSignal.ios.d.ts)

Android - In the works...

## Demo
```bash
npm run setup
# iOS
npm run demo.ios
# Android
npm run demo.android
```











