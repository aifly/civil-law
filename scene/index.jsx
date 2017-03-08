import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';

class SceneApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			iNow:0,//当前问题索引
			score:0,//分数。
			show:true,
			len : 6,
			questionList:[
				{
					imgSrc:'./assets/images/q1.png',
					questionTitle:'调皮的小明偷偷用妈妈手机发出去1000元红包，妈妈能要回来吗？',
					A:'这个真没有，只能给老妈',
					B:'这个可以有',
					C:'不关心',
					right:0
				},{
					imgSrc:'./assets/images/q2.png',
					questionTitle:'１０００元红包，妈妈能要回来吗？',
					A:'必须滴',
					B:'想啥呢,发出去还能要回来',
					C:'此处应该有红包',
					right:1
				},{
					imgSrc:'./assets/images/q3.png',
					questionTitle:'小明“Ｑ”币被盗，他要去报警，会有人管吗？',
					A:'“Ｑ”币被盗，你找“ＱＱ”',
					B:'来吧，警察叔叔为你撑腰',
					C:'请先告诉我啥叫“Ｑ”币',
					right:1
				},{
					imgSrc:'./assets/images/q4.png',
					questionTitle:'小明需要承担民事责任吗',
					A:'“承担，扶的时候你就该想到',
					B:'不承担，好人该有好报',
					C:'不知道，我有点懵圈儿',
					right:1
				},{
					imgSrc:'./assets/images/q5.png',
					questionTitle:'小明能获得法人身份吗',
					A:'法人不是你想当，想当就能当',
					B:'ＹＥＳ，ＯＦ　ＣＯＵＲＳＥ',
					C:'申请求助场外观众',
					right:1
				},{
					imgSrc:'./assets/images/q6.png',
					questionTitle:'小明能否成为被监护人',
					A:'啥？被监护的不都是孩子吗',
					B:'最美不过夕阳红，老人就得有人管',
					C:'我不知道答案，祝老人家健康长寿',
					right:1
				}
			]
		};
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {
		
		var questionStyle = {
			background:"url(./assets/images/q-bg.png) no-repeat center top",
			backgroundSize:'contain'
		}
		return (
			<div  className={'lt-full lt-scene-ui ' + (this.state.show?'active':'')}>
					<ul ref='lt-question-list' style={{height:this.viewH*6,WebkitTransform:'translate3d(0,-'+this.state.iNow*this.viewH+'px,0)'}}>

						{this.state.questionList.map((item,i)=>{
							return <li style={{height:this.viewH}} key={i}>
									<img src={item.imgSrc}/>
									<div className='lt-question-content' style={questionStyle}>
											{item.questionTitle}
									</div>
									<ol className='lt-question-answer'>
											<li onTouchTap={this.answer.bind(this,0)}>A:<span>{item.A}</span></li>
											<li onTouchTap={this.answer.bind(this,1)}>B:<span>{item.B}</span></li>
											<li onTouchTap={this.answer.bind(this,2)}>C:<span>{item.C}</span></li>
									</ol>									
									<img src='./assets/images/minfa.png' className='lt-minfa'/>
									{this.state.questionList.length-1 !== i && false && <span className='lt-info'>
										<img src='./assets/images/info.png'/>
									</span>}
								</li>
								})}
					</ul>
			</div>
		);
	}

	answer(index){
		alert(index)
	}

	componentDidMount() {
	
		let {obserable} = this.props;

		obserable.on("indexShow",()=>{
				this.setState({show:true});
		});
		var s=  this;
		swipe(s.refs['lt-question-list'],'up').fnUp = function(){
			var iNow = s.state.iNow + 1;
			if(s.state.iNow >= s.state.questionList.length -1){
					iNow = s.state.questionList.length - 1;
			}
			s.setState({
				iNow : iNow
			});
		};
		swipe(s.refs['lt-question-list'],'down').fnDown = function(){
			var iNow = s.state.iNow - 1;
			if(iNow<=0){
				iNow = 0;
			}
			s.setState({
				iNow : iNow
			});
		}
	}
}
export default PubCom(SceneApp);