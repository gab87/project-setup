class View {

	constructor(config) {
		this.viewClass = config.viewClass;
		this.visibleClass = config.visibleClass;
		this.footerClass = config.footerClass;
		this.currentView;
		this.prevView;
	}

	showView(id) {
		const view = document.querySelector(this.viewClass + '--' + id);
		const viewArray = document.querySelectorAll(this.viewClass);

		viewArray.forEach((el) => {
			el.classList.remove(this.visibleClass);
		});

		view.classList.add(this.visibleClass);

		this.activeView = id;
	}

	set activeView(id) {
		this.previousView = this.currentView;
		this.currentView = id;
	}

	get activeView() {
		return document.querySelector('.section--' + this.currentView);
	}

	set previousView(id) {
		this.prevView = id;
	}

	get previousView() {
		return document.querySelector('.section--' + this.prevView);
	}
}

export default View;