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
			background:'#e5dcd0 url(./assets/images/index-bg.jpg) no-repeat center bottom',
			backgroundSize:'cover'
		}
		return (
			<div className={'lt-index-main-ui lt-full '+(this.state.mainHide?'hide':'')} ref='lt-index-main-ui' style={mainStyle}>
					<div className={'lt-index-title lt-pos-a '+(this.state.titleShow?'active':'')}>
							<img src='./assets/images/title.png'/>
					</div>
					<div className={'lt-person lt-pos-a '+ (this.state.bookShow?'active':'')}>
							<img src='./assets/images/minfa.png'/>
					</div>
					<div className={'lt-word lt-pos-a '+(this.state.tiziShow?'active':'')}>
						<img src='./assets/images/word.png'/>
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
							tiziShow:true
						});
				},1500);
		 })
		 let {obserable} = this.props;
		 swipe(this.refs['lt-index-main-ui'],'up').fnUp = function(){
		 			s.setState({mainHide:true});
		 			obserable.trigger({type:'indexShow'});
		 }

		
	}
}
export default PubCom(IndexApp);