class Menu {
	constructor({el = '.js-menu', childEl = '.js-change-section', onClickEvent = (id = 'clicked') => {console.log(id);}}) {
		this.el = document.querySelector(el);
		this.linksArray = this.el.querySelectorAll(childEl);

		this.linksArray.forEach((el) => {
			el.onclick = () => {
				this.selectMenuLink(el);
				onClickEvent(el.getAttribute('data-show-section'), el.getAttribute('data-transition'));
			};
		});
	}

	selectMenuLink(el) {
		this.linksArray.forEach((el) => {
			el.classList.remove('is-selected');
		});

		el.classList.add('is-selected');
	}
}

export default Menu;