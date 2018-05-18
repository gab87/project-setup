class Footer {

	constructor({footerClass = '.footer', footerItemClass = '.footer__item', visibleClass = '.is-visible'}) {
		this.footerEl = document.querySelector(footerClass);
		this.footerItemClass = footerItemClass;
		this.visibleClass = visibleClass;
	}

	show(id) {
		this.footerEl.classList.add(this.visibleClass);
		this.showFooterContent(id);
	}

	hide() {
		this.footerEl.classList.remove(this.visibleClass);
	}

	showFooterContent(id) {
		const footerItem = document.querySelector(this.footerItemClass + '--' + id);
		const footerItemArray = document.querySelectorAll(this.footerItemClass);

		footerItemArray.forEach((el) => {
			el.classList.remove(this.visibleClass);
		});

		footerItem.classList.add(this.visibleClass);
	}
}

export default Footer;