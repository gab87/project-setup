import {TimelineMax, Power3} from 'gsap';


class Transition {
	constructor(config) {
		this.config = config;
	}

	animate(type, elIn, elOut, onComplete) {
		let tl = new TimelineMax({ onComplete });

		tl.set(elIn, this.config[type].in.set)
			.to(elOut, this.config.duration, this.config[type].out.to)
			.to(elIn, this.config.duration, this.config[type].in.to, '-=' + this.config.duration);
	}
}

export default Transition;