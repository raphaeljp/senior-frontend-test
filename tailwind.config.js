module.exports = {
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				white: '#FFFFFF',
				'dark-gray': '#989EA7',
				'light-gray': '#E8EDF3',
				'dark-blue': '#313E4F',
				'accent-blue': '#33A6BA',
				'accent-red': '#FF7B92',
				'accent-yellow': '#FFC062',
			}
		}
	},
	variants: {
		borderStyle: [ 'hover', 'focus', 'focus-within' ],
		borderColor: [ 'hover', 'focus', 'focus-within' ],
		extend: {
			borderStyle: [ 'hover', 'focus', 'focus-within' ],
			borderColor: [ 'hover', 'focus', 'focus-within' ]
		}
	}
}
