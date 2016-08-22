// 

import * as application from 'application';
import {TnsOneSignal} from 'nativescript-onesignal'



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



application.start({ moduleName: 'main-page' });
