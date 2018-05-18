class Aside {
	constructor({elementClass = '.aside', visibleClass = '.is-visible'}) {
		this.aside = document.querySelector(elementClass);
		this.visibleClass = visibleClass;
	}

	show() {
		this.aside.classList.add(this.visibleClass);
	}

	hide() {
		this.aside.classList.remove(this.visibleClass);
	}
}

export default Aside;