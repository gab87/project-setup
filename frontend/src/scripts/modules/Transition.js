import {TweenMax, TimelineMax, Power3} from 'gsap';

class Transition {
	constructor(onCompleteCallback) {
		this.config = {
			leftToRight: {
				duration: 2,
				in: {
					set: {
						x: '-100%',
						ease: Power3.easeInOut
					},
					to: {
						x: 0,
						ease: Power3.easeInOut
					}
				},
				out: {
					to: {
						x: '100%',
						ease: Power3.easeInOut
					}
				}
			}
		};

		this.onCompleteCallback = onCompleteCallback;
	}

	animate(type, elIn, elOut) {
		let tl = new TimelineMax({onComplete: () => {this.onCompleteCallback();}});
		console.log(elIn);
		console.log(elOut);

		TweenMax.set(elIn, this.config[type].in.set);

		tl.to(elOut, this.config[type].duration, this.config[type].out.to, '-=' + this.config[type].duration)
			.to(elIn, this.config[type].duration, this.config[type].in.to);
	}
}

export default Transition;