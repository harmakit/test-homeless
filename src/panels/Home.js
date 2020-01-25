import React, { Component } from 'react'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel'
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import Slider from 'react-slick'
import './Home.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

class Home extends Component {

	constructor(props) {
		super(props);

		this.state = {
			text: {
				type: '',
				description: '',
				items: [],
			},
		}
	}

  createClothes = () => {
    let images = []
    for (let i = 0; i < this.props.clothes.length; i++) {
      images.push(<img key={i} src={this.props.clothes[i].img} className="cloth"/>)
    }
    return images
  }

  createClothePrices = () => {
    let prices = []
    for (let i = 0; i < this.state.text.items.length; i++) {
			prices.push(<Div key={i} style={{ paddingTop: 10 + 'px' }}>{this.state.text.items[i]}</Div>)
    }
    console.log(prices)
    return prices
  }

  selectCloth = (i) => {
		this.setState({
			text: this.props.clothes[i].text
		});
  }

	componentDidMount = () => {
		this.setState({
			text: this.props.clothes[0].text
		});
	}

  render() {
    return (
      <Panel id={this.props.id} style={{ textAlign: 'center' }}>
        <PanelHeader>Что-то про благотворительность</PanelHeader>

        <div className={'bomzh'}>
          <Slider {...settings} afterChange={this.selectCloth}>
            {this.createClothes()}
          </Slider>
        </div>
        <Div style={{ float: 'right', width: 15 + 'rem', textAlign: 'right', marginRight: 15 + 'px' }}>
					{this.createClothePrices()}
        </Div>
        <Div>
        </Div>
        <Div style={{ height: 25 + 'rem' }}></Div>
        <h2>{this.state.text.type}</h2>
        <p>{this.state.text.description}</p>

      </Panel>
    )
  }
}

export default Home
