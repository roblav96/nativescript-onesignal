// 

import * as application from 'application'

declare let global: any
global.process = { env: { 'NODE_ENV': '', }, }
global._ = require('./lodash.min')
import './console'

import OneSigImpl = require('./dev/onesig')



class OneImpl extends OneSigImpl {

	constructor() {
		super()
		console.keys('this', this)
	}

	idsAvailable() {
		console.log('ZOMG')
	}

}
const One = new OneImpl()



if (application.ios) {
	class Delegate extends UIResponder implements UIApplicationDelegate {
		public static ObjCProtocols = [UIApplicationDelegate]
		applicationDidFinishLaunchingWithOptions(nativeApp: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
			One.init({
				appId: '',
				launchOptions,
			})
			return true
		}
	}
	application.ios.delegate = Delegate
}



application.start({ moduleName: 'index' })

