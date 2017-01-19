// 

import * as application from 'application'
import { Observable, EventData } from 'data/observable'
import { Page, NavigatedData } from 'ui/page'
import { View } from 'ui/core/view'
// import { OneSigImpl } from './dev/onesig'



export function onLoaded(args: EventData) {
	let page = args.object as Page
	page.bindingContext = new Index()
}

export function onUnloaded(args: EventData) {
	let page = args.object as Page
}

class Index extends Observable {

	constructor() {
		super()
	}

}



// class OneSigCommon extends OneSigImpl {

// 	constructor() {
// 		super()
// 		console.keys('this', this)
// 	}

// }

export function doit(args: EventData) {
	let view = args.object as View
	let page = view.page as Page
	let context = page.bindingContext as Index

	// let onesig = new OneSigCommon()
	// console.keys('onesig', onesig)

}














