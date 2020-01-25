import React, { Component } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activePanel: 'home',
			clothes: [
				{
					img: require('./img/winter.png'),
					text: {
						type: 'Зимний',
						description: 'Ваш бомж получит сопротивление холоду +10 за каждый элемент одежды из этого набора',
						items: [
							'Шапка The Norht Face – 80$',
							'Пуховик The Norht Face – 500$',
							'Утепленные штаны Ralph Louren – 400$',
							'Зимние ботинки Balenciaga – 900$',
							'TOTAL: 1880$',
						],
					},
				},
				{
					img: require('./img/casual.png'),
					text: {
						type: 'Casual',
						description: 'Кэжуал – повседневный стиль, предполагающий удобство и практичность. Ваш бомж будет выглядеть просто и даже немного легкомысленно',
						items: [
							'Бейсболка Vans – 50$',
							'Футболка ТВОЕ – 300₽',
							'Шорты Lacoste - 250$',
							'Кеды Vans – 100$',
							'TOTAL: 405$',
						],
					},
				},
			],
			popout: null,
		};
		this.closePopout = this.closePopout.bind(this);
	}
	componentDidMount() {

	}
	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};
	closePopout = () => {
		this.setState({ popout: null });
	}
	render() {
		return (
			<View activePanel={this.state.activePanel} popout={this.state.popout}>
				<Home id='home' go={this.go} clothes={this.state.clothes} />
			</View>
		);
	}
}

export default App;

