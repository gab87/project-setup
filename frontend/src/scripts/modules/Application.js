import Menu from './Menu';
import Layout from './Layout';

class Application {
	constructor() {
		this.layout = new Layout();

		new Menu({
			onClickEvent: (id) => {
				this.layout.show(id);
			}
		});

		this.init();
	}

	init() {
		this.layout.init('one');
	}
}

export default Application;