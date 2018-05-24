const enterAnimation = {
	duration: .4,
	leftToRight: {
		in: {
			set: {
				x: '-100%',
				y: '0%',
				ease: Power3.easeInOut,
				autoAlpha: 1
			},
			to: {
				x: '0%',
				ease: Power3.easeInOut
			}
		},
		out: {
			to: {
				x: '100%',
				ease: Power3.easeInOut
			}
		}
	},
	rightToLeft: {
		in: {
			set: {
				x: '100%',
				y: '0%',
				ease: Power3.easeInOut,
				autoAlpha: 1
			},
			to: {
				x: '0%',
				ease: Power3.easeInOut
			}
		},
		out: {
			to: {
				x: '-100%',
				ease: Power3.easeInOut
			}
		}
	},
	bottomToTop: {
		in: {
			set: {
				x: '0%',
				y: '-100%',
				ease: Power3.easeInOut,
				autoAlpha: 1
			},
			to: {
				y: '0%',
				ease: Power3.easeInOut
			}
		},
		out: {
			to: {
				y: '100%',
				ease: Power3.easeInOut
			}
		}
	},
	topToBottom: {
		in: {
			set: {
				x: '0%',
				y: '100%',
				ease: Power3.easeInOut,
				autoAlpha: 1
			},
			to: {
				y: '0%',
				ease: Power3.easeInOut
			}
		},
		out: {
			to: {
				y: '-100%',
				ease: Power3.easeInOut
			}
		}
	}
};

export default enterAnimation;