import Footer from './Footer';
import View from './View';
import Aside from './Aside';
import Transition from './Transition';
import enterAnimation from '../config/enter-animation';
import * as dat from 'dat.gui';

class Layout {
	constructor() {
		this.gui = new dat.GUI();

		this.view = new View({
			viewClass: '.section',
			visibleClass: 'is-visible'
		});

		this.footer = new Footer({
			footerClass: '.footer',
			footerItemClass: '.footer__item',
			visibleClass: 'is-visible'
		});

		this.aside = new Aside({
			elementClass: '.aside',
			visibleClass: 'is-visible'
		});

		this.layout = {
			one: (id) => {
				this.view.showView(id);
				this.footer.hide();
				this.aside.hide();
			},
			two: (id) => {
				this.view.showView(id);
				this.footer.show(id);
				this.aside.hide();
			},
			three: (id) => {
				this.view.showView(id);
				this.footer.hide();
				this.aside.show();
			},
			four: (id) => {
				this.view.showView(id);
				this.footer.show(id);
				this.aside.show();
			}
		};

		this.transition = new Transition(enterAnimation);
		this.gui.add(enterAnimation, 'duration', 0.4, 3);
	}

	init(id) {
		this.layout[id](id);
		this.view.activeView = id;
	}

	show(id, type) {
		console.log(id);
		console.log(type);

		this.view.activeView = id;
		this.transition.animate(type , this.view.activeView, this.view.previousView, () => {this.layout[id](id);});
		// this.layout[id](id);
	}
}

export default Layout;