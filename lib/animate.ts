const animate = {
	hidden: {
		opacity: 0,
		y: 100
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

export default animate;