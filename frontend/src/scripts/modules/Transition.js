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
						ease: Power3.easeInOut
					},
					to: {
						x: '0%',
						ease: Power3.easeInOut,
						autoAlpha: 1
					}
				},
				out: {
					to: {
						x: '100%',
						ease: Power3.easeInOut,
						autoAlpha: 0
					}
				}
			},
			rightToLeft: {
				duration: .4,
				in: {
					set: {
						x: '100%',
						y: '0%',
						ease: Power3.easeInOut
					},
					to: {
						x: '0%',
						ease: Power3.easeInOut,
						autoAlpha: 1
					}
				},
				out: {
					to: {
						x: '-100%',
						ease: Power3.easeInOut,
						autoAlpha: 0
					}
				}
			},
			bottomToTop: {
				duration: .4,
				in: {
					set: {
						x: '0%',
						y: '-100%',
						ease: Power3.easeInOut
					},
					to: {
						y: '0%',
						ease: Power3.easeInOut,
						autoAlpha: 1
					}
				},
				out: {
					to: {
						y: '100%',
						ease: Power3.easeInOut,
						autoAlpha: 0
					}
				}
			},
			topToBottom: {
				duration: .4,
				in: {
					set: {
						x: '0%',
						y: '100%',
						ease: Power3.easeInOut
					},
					to: {
						y: '0%',
						ease: Power3.easeInOut,
						autoAlpha: 1
					}
				},
				out: {
					to: {
						y: '-100%',
						ease: Power3.easeInOut,
						autoAlpha: 0
					}
				}
			}
		};
	}

	animate(type, elIn, elOut, layout, id) {
		let tl = new TimelineMax({onComplete: () => { layout[id](id); }});

		tl.set(elIn, this.config[type].in.set)
			.to(elOut, this.config[type].duration, this.config[type].out.to)
			.to(elIn, this.config[type].duration, this.config[type].in.to, '-=' + this.config[type].duration);
	}
}

export default Transition;