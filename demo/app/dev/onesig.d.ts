// 



declare global {

	export interface IOneSigOpts {
		appId: string
		launchOptions?: any
		
	}

	export interface IOneSigOnRecieved {
		title: string
		body: string
		data: { [key: string]: any }
	}

	export interface IOneSigOnOpened {
		opened: boolean
		data: { [key: string]: any }
	}

	export interface IOneSigImpl {
		idsAvailable(userId: string, pushToken: string)
		onReceived(args: IOneSigOnRecieved)
		onOpened(args: IOneSigOnOpened)
	}

}

import OneSigImpl = require('./onesig.ios')
export = OneSigImpl
