// 

import "./tns.console";
import * as application from 'application';
declare var com: any
declare var OneSignal: any



if (application.ios) {
	class MyDelegate extends UIResponder implements UIApplicationDelegate {

		public static ObjCProtocols = [UIApplicationDelegate]

		private applicationDidFinishLaunchingWithOptions(app: UIApplication, launchOptions: NSDictionary): boolean {
			global.tnsconsole.log('applicationDidFinishLaunchingWithOptions >')

			global.tnsconsole.dump('OneSignal', OneSignal)
			// global.tnsconsole.dump('GMSServices', GMSServices)

			// OneSignal.initWithLaunchOptions(launchOptions, appId: "5eb5a37e-b458-11e3-ac11-000c2940e62c")

			return true
		}

	}
	application.ios.delegate = MyDelegate
}



if (application.android) {
	application.on(application.launchEvent, function(args: application.ApplicationEventData) {
		com.onesignal.OneSignal.startInit(application.android.context).init()
	})
}



application.start({ moduleName: 'main-page' });
