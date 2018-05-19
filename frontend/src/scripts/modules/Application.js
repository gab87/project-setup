import Menu from './Menu';
import Layout from './Layout';

class Application {
	constructor() {
		this.layout = new Layout();

		new Menu({
			onClickEvent: (id, type) => {
				this.layout.show(id, type);
			}
		});

		this.init();
	}

	init() {
		this.layout.init('one');
	}
}

export default Application;