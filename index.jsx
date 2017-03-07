import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SceneApp from './scene/index.jsx';
export class App extends Component {
	constructor(props) {
		super(props);
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}
	render() {
		return (
			<div>
					<SceneApp></SceneApp>
			</div>
		);
	}

	componentWillMount() {
		document.querySelector('html').style.fontSize = this.viewW / 10 +'px';
	}
}
	ReactDOM.render(<App></App>,document.getElementById('fly-main-ui'));

