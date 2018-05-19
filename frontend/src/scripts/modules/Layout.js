import Footer from './Footer';
import View from './View';
import Aside from './Aside';
import Transition from './Transition';

class Layout {
	constructor() {
		this.view = new View({
			viewContainerClass: '.main',
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

		this.transition = new Transition();
	}

	init(id) {
		this.layout[id](id);
		this.view.activeView = id;
	}

	show(id) {
		this.view.activeView = id;
		this.transition.animate('leftToRight', this.view.activeView, this.view.previousView, this.layout, id);
		// this.layout[id](id);
	}
}

export default Layout;