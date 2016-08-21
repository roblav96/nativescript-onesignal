// 

import {Observable} from 'data/observable';
import {TnsOneSignal} from 'nativescript-onesignal';

import * as application from 'application'
declare var OneSignal: any



export class HelloWorldModel extends Observable {
	public message: string;

	constructor() {
		super();
		this.message = 'onesignal'

		global.tnsconsole.log('TnsOneSignal', TnsOneSignal)
		// let tnsonesignal = new TnsOneSignal()
		// global.tnsconsole.dump('tnsonesignal', tnsonesignal)
		// let mydelegate = new MyDelegate()
		// global.tnsconsole.dump('mydelegate', mydelegate)
		// global.tnsconsole.dump('application', application)
		// global.tnsconsole.dump('application.ios', application.ios)



	}
}


