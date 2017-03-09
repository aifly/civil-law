import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';

class ShareAPP extends Component {
	constructor(props) {
		super(props);
		this.state={
			level:-1,
			showTeam:false
		};

		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {
		var mainStyle = {
				background:'url(./assets/images/share-bg.png) no-repeat  center center',
				backgroundSize:'cover',
				WebkitTransform:'translate3d(0,'+(this.state.showTeam?'-100%':0)+',0)'
		}
		var teamStyle = {
				background:'url(./assets/images/team.jpg) no-repeat  center bottom',
				backgroundSize:'cover',
			
		}
		return (
			<div ref='lt-share-ui' className={"lt-share-ui lt-full "+ (this.state.level>-1?'active':'')} style={mainStyle}>
				<div>
						{this.state.level>-1 && <img src={'./assets/images/level'+this.state.level+'.png'} className="lt-level" />}
				</div>
				<div className="lt-click-C">
						<a href='#'>
							<img src='./assets/images/light.gif'/>
							<img src='./assets/images/click.png'/>
						</a>
						<span className='lt-info'><img src='./assets/images/info.png' /></span>
				</div>
				<div className='lt-team lt-full' style={teamStyle}>
				</div>
			</div>
		);
	}

	componentDidMount() {
		let {obserable } = this.props;
		obserable.on('setScore',(score)=>{
				this.setState({level:score});
		});
		var s = this;
		swipe(this.refs['lt-share-ui'],'up').fnUp = function(){
				s.setState({showTeam:true})
		}
		swipe(this.refs['lt-share-ui'],'down').fnDown = function(){
				s.setState({showTeam:false})
		}
	}
}
export default PubCom(ShareAPP);