// 

var colors = require('ansicolors')
var styles = require('ansistyles')



class TnsConsole {

	private logit(type: string, args: any[]): void {
		let errs = []
		let str = '\n'
		{
			let i, len = args.length
			for (i = 0; i < len; i++) {
				let arg // cause args[i] = JSON.stringify(args[i]) would overwrite the original object
				if (typeof args[i] == 'object') {
					if (args[i] instanceof Error) {
						errs.push(args[i])
					}
					arg = JSON.stringify(args[i])
				} else if (i == 1 && typeof args[i] == 'string') {
					arg = styles.underline(args[i])
				} else {
					arg = args[i]
				}
				if (i == 0) {
					str = str + arg
				} else if (i == len - 1) {
					str = str + arg
				} else {
					str = str + arg + ' > '
				}
			}
		}
		str = str + '\n \n'
		console[type](str)
		{
			let i, len = errs.length
			for (i = 0; i < len; i++) {
				console.error(errs[i])
				console.dump(errs[i])
				this.dumpit('ERROR', errs[i])
			}
		}
	}

	public log(...args: any[]): void {
		args.unshift(colors.blue('[LOG] '))
		this.logit('log', args)
	}

	public info(...args: any[]): void {
		args.unshift(colors.green('[INFO] '))
		this.logit('info', args)
	}

	public warn(...args: any[]): void {
		args.unshift(colors.yellow('[WARN] '))
		this.logit('warn', args)
	}

	public error(...args: any[]): void {
		args.unshift(colors.red('[ERROR] '))
		if (typeof args[1] == 'string') {
			args[1] = colors.red(args[1])
		}
		this.logit('error', args)
	}

	private dumpit(def: string, obj: any): void {
		console.log('\n' + colors.green('▼ ▼ ▼ ▼  ' + styles.underline(def) + '  ▼ ▼ ▼ ▼'))
		console.dump(obj)
		console.log('\n' + colors.green('▲ ▲ ▲ ▲  ' + styles.underline(def) + '  ▲ ▲ ▲ ▲\n'))
	}
	public dump = this.dumpit
	public dir = this.dumpit

}

global.tnsconsole = new TnsConsole()


