import {TimelineMax, Power3} from 'gsap';

class Transition {
	constructor() {
		this.config = {
			leftToRight: {
				duration: .4,
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
				duration: .4,
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
				duration: .4,
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
				duration: .4,
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
	}

	animate(type, elIn, elOut, onComplete) {
		let tl = new TimelineMax({ onComplete });

		tl.set(elIn, this.config[type].in.set)
			.to(elOut, this.config[type].duration, this.config[type].out.to)
			.to(elIn, this.config[type].duration, this.config[type].in.to, '-=' + this.config[type].duration);
	}
}

export default Transition;