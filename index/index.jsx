import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';

import $ from 'jquery';

class IndexApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			titleShow:false,
			bookShow:false,
			shadowShow:false,
			tiziShow:false,
			mainHide:false
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {
		var mainStyle = {
			background:'#e5dcd0 url(./assets/images/index-bg.png) no-repeat center top',
			backgroundSize:'cover'
		}
		return (
			<div className={'lt-index-main-ui lt-full '+(this.state.mainHide?'hide':'')} ref='lt-index-main-ui' style={mainStyle}>
					<div className='lt-index-person lt-pos-a'>
							<img src='./assets/images/person.png'/>
					</div>
					<div className={'lt-index-title lt-pos-a '+(this.state.titleShow?'active':'')}>
							<img src='./assets/images/title.png'/>
					</div>
					<div className={'lt-index-book lt-pos-a ' + (this.state.bookShow?'active':'')}>
							<img src='./assets/images/book.png'/>
							<img className={'shadow lt-pos-a '+ (this.state.shadowShow?'active':'') } src='./assets/images/shadow.png'/>
					</div>
					<div className={'lt-index-tizi lt-pos-a '+ (this.state.tiziShow?'active':'')}>
							<img src='./assets/images/tizi.png'/>
					</div>
					{this.state.tiziShow && <span className='lt-info'><img src='./assets/images/info.png'/></span>}
			</div>
		);
	}


	componentDidMount() {
		var s = this;
		　var wait = function(dtd){
　　　　var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
　　　　var tasks = function(){
　　　　　　s.setState({
							titleShow:true
						})
　　　　　　dtd.resolve(); // 改变Deferred对象的执行状态
　　　　};

　　　　setTimeout(tasks,1000);
　　　　return dtd.promise(); // 返回promise对象
　　};
　　$.when(wait()).done(function(){ 
				setTimeout(()=>{
		　　　　s.setState({
							bookShow:true
						});
				},1000);
		 }).done(()=>{
		 	 setTimeout(()=>{
		 	 			s.setState({
							shadowShow:true,
							tiziShow:true
						});
		 	 },3000)
		 })

		 let {obserable} = this.props;
		 swipe(this.refs['lt-index-main-ui'],'up').fnUp = function(){
		 			s.setState({mainHide:true});
		 			obserable.trigger({type:'indexShow'});
		 }

		 s.setState({mainHide:true});
		 obserable.trigger({type:'indexShow'});
	}
}
export default PubCom(IndexApp);