// 

import * as application from 'application'
import eyes = require('eyes')
import style = require('ansi-styles')



declare global {
	export var _: any
	export interface Console {
		dump(desc: string, obj: any): void
		keys(desc: string, obj: any): void
	}
}



(function() {

	let dumping = false
	const colorsMap = {
		log: 'blue',
		info: 'green',
		error: 'red',
	}

	function getStamp(): string {
		let now: Date = new Date()
		return (now.getHours() % 12 || 12) + ':' + now.getMinutes() + ':' + now.getSeconds() + ':' + now.getMilliseconds()
	}

	function getStack(): string {
		let index = (application.ios) ? 0 : 1
		let stack = new Error().stack.toString()
		stack = stack.replace(/^([^\n]*?\n){2}((.|\n)*)$/gmi, '$2')
		stack = stack.split('\n')[index]
		stack = stack.replace('file:///', '')
		let split = stack.split('@')
		let sendi = split[0]
		if (application.ios) {
			sendi = sendi + '@' + split[1]
		}
		return sendi.trim()
	}

	function inspectIt(arg: any): string {
		return style.cyan.open + eyes.inspect(arg)
	}



	const log = console.log
	console.log = function(...args: Array<any>) {
		if (dumping == true) {
			log.call(this, ...args)
			return
		}

		let start = 0
		if (typeof args[0] == 'string') {
			args[0] = style.underline.open + args[0] + style.underline.close
			start++
		}

		let i: number, len: number = args.length
		for (i = start; i < len; i++) {
			args[i] = inspectIt(args[i])
			// let inspected: string = eyes.inspect(args[i]) as any
			// if (inspected.indexOf('\n') == -1) {
			// args[i] = eyes.inspect(args[i])
			// }
		}

		args.unshift('\n' + style.blue.open + '[LOG]' + style.blue.close + ' ' + getStamp() + ' ' + getStack() + '\n')
		args.push('\n \n')

		log.call(this, ...args)
	}



	const warn = console.warn
	console.warn = function(...args: Array<any>) {
		if (dumping == true) {
			warn.call(this, ...args)
			return
		}

		let start = 0
		if (typeof args[0] == 'string') {
			args[0] = style.underline.open + args[0] + style.underline.close
			start++
		}

		let i: number, len: number = args.length
		for (i = start; i < len; i++) {
			args[i] = inspectIt(args[i])
			// let inspected: string = eyes.inspect(args[i]) as any
			// if (inspected.indexOf('\n') == -1) {
			// args[i] = eyes.inspect(args[i])
			// }
		}

		args.unshift('\n' + style.yellow.open + '[WARN]' + style.yellow.close + ' ' + getStamp() + ' ' + getStack() + '\n')
		args.push('\n \n')

		warn.call(this, ...args)
	}





	const error = console.error
	console.error = function(...args: Array<any>) {

		let start = 0
		if (typeof args[0] == 'string') {
			args[0] = style.underline.open + args[0] + style.underline.close
			start++
		}

		let i: number, len: number = args.length
		for (i = start; i < len; i++) {
			// args[i] = style.cyan.open + eyes.inspect(args[i])
			// let inspected: string = eyes.inspect(args[i]) as any
			// console.info('inspected', inspected)
			// // console.info('args[i].toString()', args[i].toString())
			// console.info('typeof inspected', typeof inspected)
			// console.info('inspected.indexOf()', inspected.indexOf('\\n '))
			// if (inspected.indexOf('\\n ') == -1) {
			// args[i] = style.cyan.open + eyes.inspect(args[i])
			// }

			if (application.android) {
				let arg = args[i]
				if (arg instanceof java.lang.Exception) {
					let nstack = ''
					let trace = arg.getStackTrace()
					let ii: number, lenn: number = trace.length
					for (ii = 0; ii < lenn; ii++) {
						nstack = nstack + trace[ii].toString() + '\n'
					}
					let jstack = new Error().stack.toString()
					let message = arg.getMessage()
					args[i] = message + '\n' + jstack + '\n' + nstack
				} else if (arg.message || arg.stack) {
					let same = false
					if (typeof arg.message == 'string' && typeof arg.stack == 'string') {
						let mes = (arg.message as string).substring(0, 16)
						same = arg.stack.indexOf(mes) != -1
					}
					if (same == true) {
						args[i] = arg.stack
					} else {
						args[i] = 'Message: ' + eyes.inspect(arg.message) + '\nStack: ' + arg.stack
					}
				} else {
					if (typeof arg == 'string' && arg.indexOf('\n  ')) {
						// do nothing
					} else {
						args[i] = inspectIt(args[i])
					}
				}
			}

			if (application.ios) {
				args[i] = inspectIt(args[i])
			}

		}

		args.unshift('\n' + style.red.open + style.bold.open + '[ERROR]' + style.bold.close + ' ' + getStamp() + ' ' + getStack() + style.red.close + '\n')
		args.push('\n \n')

		error.call(this, ...args)
	}



	const dump = console.dump
	console.dump = <any>function(desc: string, obj: any) {
		dumping = true
		console.log('\n' + style.blue.open + '▼ ▼ ▼ ▼  ' + style.underline.open + desc + style.underline.close + '  ▼ ▼ ▼ ▼' + style.blue.close + ' ' + getStack())
		dump.call(this, obj)
		console.log('\n' + style.blue.open + '▲ ▲ ▲ ▲  ' + style.underline.open + desc + style.underline.close + '  ▲ ▲ ▲ ▲' + style.blue.close + '\n \n')
		dumping = false
	}



	console.keys = function(desc: string, obj: any) {
		dumping = true
		console.log('\n' + style.blue.open + '▼ ▼ ▼ ▼  ' + style.underline.open + desc + style.underline.close + '  ▼ ▼ ▼ ▼' + style.blue.close + ' ' + getStack())
		if (_.isUndefined(obj)) {
			console.log('\n' + style.red.open + 'IS UNDEFINED' + style.red.close)
		} else if (_.isNull(obj)) {
			console.log('\n' + style.red.open + 'IS NULL' + style.red.close)
		} else {
			let sendi: string = '\n'
			let fns: Array<string> = _.functionsIn(obj)
			let _fns: Array<string> = []
			let keys: Array<string> = _.difference(_.keysIn(obj), fns)
			let _keys: Array<string> = []

			{
				let i: number, len: number = keys.length
				for (i = 0; i < len; i++) {
					if (keys[i].charAt(0) == '_') {
						_keys.push(keys[i])
					}
				}
			}
			keys = _.difference(keys, _keys)

			{
				let i: number, len: number = keys.length
				if (len > 0) {
					sendi = sendi + '\n' + style.blue.open + 'KEYS' + style.blue.close + '\n'
				}
				for (i = 0; i < len; i++) {
					sendi = sendi + keys[i] + '\n'
				}
			}

			{
				let i: number, len: number = _keys.length
				if (len > 0) {
					sendi = sendi + '\n' + style.blue.open + '_PRIVATE KEYS' + style.blue.close + '\n'
				}
				for (i = 0; i < len; i++) {
					sendi = sendi + _keys[i] + '\n'
				}
			}

			{
				let i: number, len: number = fns.length
				for (i = 0; i < len; i++) {
					if (fns[i].charAt(0) == '_') {
						_fns.push(fns[i])
					}
				}
			}
			fns = _.difference(fns, _fns)

			{
				let i: number, len: number = fns.length
				if (len > 0) {
					sendi = sendi + '\n' + style.blue.open + 'FUNCTIONS' + style.blue.close + '\n'
				}
				for (i = 0; i < len; i++) {
					sendi = sendi + fns[i] + '()\n'
				}
			}

			{
				let i: number, len: number = _fns.length
				if (len > 0) {
					sendi = sendi + '\n' + style.blue.open + '_PRIVATE FUNCTIONS' + style.blue.close + '\n'
				}
				for (i = 0; i < len; i++) {
					sendi = sendi + _fns[i] + '()\n'
				}
			}

			console.log(sendi + '\n \n')
		}
		console.log('\n' + style.blue.open + '▲ ▲ ▲ ▲  ' + style.underline.open + desc + style.underline.close + '  ▲ ▲ ▲ ▲' + style.blue.close + '\n')
		dumping = false
	}






} ())


