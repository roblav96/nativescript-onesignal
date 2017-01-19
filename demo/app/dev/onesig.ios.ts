// 

import { EventEmitter } from 'eventemitter3'
import * as application from 'application'



export = class OneSigImpl {

	private static _inited = false
	private static parseJson(dict: NSDictionary<any, any>) {
		if (!dict) {
			return dict
		}
		let data = NSJSONSerialization.dataWithJSONObjectOptionsError(dict, NSJSONWritingOptions.PrettyPrinted)
		let results = NSString.alloc().initWithDataEncoding(data, NSUTF8StringEncoding)
		return JSON.parse(<any>results)
	}

	init(this: any, opts: IOneSigOpts) {
		if (OneSigImpl._inited == true) {
			console.error('OneSignal > you have already initialized!')
		}
		OneSigImpl._inited = true

		let settings = NSMutableDictionary.new()
		settings.setValueForKey(false, 'kOSSettingsKeyAutoPrompt')
		settings.setValueForKey(false, 'kOSSettingsKeyInAppLaunchURL')
		settings.setValueForKey(OSNotificationDisplayType.None, 'kOSSettingsKeyInFocusDisplayOption')
		OneSignal.initWithLaunchOptionsAppIdHandleNotificationReceivedHandleNotificationActionSettings(
			opts.launchOptions,
			opts.appId,

			(notification: OSNotification) => {
				this.onReceived({
					title: notification.payload.title,
					body: notification.payload.body,
					data: OneSigImpl.parseJson(notification.payload.additionalData),
				})
			},

			(result: OSNotificationOpenedResult) => {
				this.onOpened({
					opened: result.action.type == OSNotificationActionType.Opened,
					data: OneSigImpl.parseJson(result.notification.payload.additionalData),
				})
			},

			settings
		)

		OneSignal.IdsAvailable(this.idsAvailable)
		OneSignal.setSubscription(true)

	}

	registerForPushNotifications() {
		OneSignal.registerForPushNotifications()
	}

}

