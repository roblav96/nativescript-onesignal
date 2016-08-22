// 

import * as application from 'application'
declare var OneSignal: any



export class TnsOneSignal {

	constructor() {
		global.tnsconsole.log('TnsOneSignal > constructor')
		global.tnsconsole.dump('OneSignal', OneSignal)
	}

}




