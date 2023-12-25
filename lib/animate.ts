export const animate = {
	hidden: {
		opacity: 0,
		y: 100,
		transition: {
			duration: 1,
			type: 'spring'
		}
	},
	show: (i: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.05,
			duration: 1,
			type: 'spring',
		}
	})
}

export const animateModal = {
	hidden: {
		opacity: 0,
		y: '100%',
		transition: {
			duration: 1,
			type: 'spring'
		}
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			type: 'spring'
		}
	}
}