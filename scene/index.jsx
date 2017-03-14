import React, { Component } from 'react';
import {PubCom} from '../components/public/pub.jsx';
import './assets/css/index.css';
import $ from 'jquery';

class SceneApp extends Component {
	constructor(props) {
		super(props);
		this.state={
			iNow:0,//当前问题索引
			
			show:false,
			A:false,
			B:false,
			C:false,
			resultShow:false,
			questionList:[
				{
					imgSrc:'./assets/images/q1.png',
					questionTitle:'在妈妈肚子里的小明是否有接受赠与的权利？',
					A:'这个可以有',
					B:'这个真没有，只能给老妈',
					C:'不关心，反正不是我的',
					right:0,

					style:{
						fontSize:'.5rem',
					},
					background:'#f9c2ff',
					bottom:'2rem',
					remark:'民法总则相关法条规定，涉及遗产继承、接受赠与等胎儿利益的保护，胎儿视为具有民事权利能力。'
				},{
					imgSrc:'./assets/images/q2.png',
					questionTitle:'8岁的小明很调皮，偷偷用妈妈手机发出去1000元红包，妈妈能要回来吗？',
					A:'必须滴，熊孩子发的红包不算数',
					B:'此处应该有红包',
					C:'想啥呢，发出去还能要回来',
					right:2,
					style:{
						fontSize:'.5rem',
					},
					background:'#ffd1b2',
					bottom:'.7rem',
					remark:'按照民法总则相关法条规定，在现阶段将限制民事行为能力人年龄的下限修改为八周岁'
				},{
					imgSrc:'./assets/images/q3.png',
					questionTitle:'正上大一的小明“Ｑ”币被盗，他要去报警，会有人管吗？',
					A:'“Ｑ”币被盗，你找“ＱＱ”呀',
					B:'来吧，警察叔叔为你撑腰',
					C:'请先告诉我啥叫“Ｑ”币',
					right:1,
					style:{
						fontSize:'.5rem',
					},
					background:'#ffc8c1',
					bottom:'2rem',
					remark:'民法总则相关法条规定，民事主体依法享有知识产权，同时列举了作品、专利、商标等９种客体，其中就包括数据信息。'
				},{
					imgSrc:'./assets/images/q4.png',
					questionTitle:'23岁的小明面对突然跌倒的老人，在送往医院途中造成老人轻微损害，需要承担民事责任吗？',
					A:'承担，扶的时候你就该想到',
					B:'不承担，好人该有好报',
					C:'不知道，我有点懵圈儿',
					right:1,
					bottom:'2rem',
					style:{
						fontSize:'.5rem',
					},
					background:'#94d1d7',
					remark:'民法总则相关法条规定，实施紧急救助行为造成受助人损害的，除有重大过失外，救助人不承担民事责任。'
				},{
					imgSrc:'./assets/images/q5.png',
					questionTitle:'已步入中年的小明想开一家敬老院，能获得法人身份吗？',
					A:'法人不是你想当，想当就能当',
					B:'申请求助场外观众',
					C:'那必须的',
					right:2,
					background:'#c5acee',
					bottom:'.7rem',
					style:{
						fontSize:'.5rem',
					},
					remark:'民法总则相关法条规定，以取得利润并分配给其股东或者其他出资人等成员为目的成立的法人，为营利性法人。为公益目的或者其他非营利目的成立的法人，为非营利性法人。'
				},{
					imgSrc:'./assets/images/q6.png',
					questionTitle:'时光飞逝，小明已年逾九旬，失去独立生活能力，他能否成为被监护人？',
					A:'最美不过夕阳红，老人就得有人管',
					B:'不知道，祝老人家健康长寿',
					C:'啥？被监护的不都是孩子吗',
					right:0,	
					background:"#9ab7d0",
					bottom:'.8rem',
					style:{
						fontSize:'12px',
						width:'6rem',
						left:'1rem',
						lineHeight:'.6rem'
					},
					remark:'无民事行为能力或者限制民事行为能力的成年人，由下列有监护能力的人按顺序担任监护人：（一）   配偶；（二）   父母、子女；（三）   其他近亲属；（四）   其他愿意担任监护人的个人或者有关组织，但是须经被监护人住所地的居民委员会、村民委员会或者民政部门同意。'
				}
			]
		};
		this.answers = ['A','B','C'];
		this.score = 0;
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}

	render() {
		
		var questionStyle = {
			background:"url(./assets/images/q-bg2.png) no-repeat center top",
			backgroundSize:'contain'
		}
		return (
			<div  className={'lt-full lt-scene-ui ' + (this.state.show?'active':'')}>
					<ul ref='lt-question-list' style={{height:this.viewH*6,WebkitTransform:'translate3d(0,-'+this.state.iNow*this.viewH+'px,0)'}}>

						{this.state.questionList.map((item,i)=>{
							return <li style={{height:this.viewH,background:item.background}} key={i}>
									<img src={item.imgSrc}/>
									<div className='lt-question-content' style={{padding:i===3?'.3rem .55rem':'.5rem .55rem',background:'url(./assets/images/q-bg'+(i+1)+'.png) no-repeat center top',backgroundSize:'contain'}}>
											{item.questionTitle}
									</div>
									<ol className='lt-question-answer'>
											<li className={this.state.A?'active':''} ><span onTouchTap={this.answer.bind(this,0)}><b>A.</b> {item.A}</span></li>
											<li className={this.state.B?'active':''} ><span onTouchTap={this.answer.bind(this,1)}><b>B.</b> {item.B}</span></li>
											<li className={this.state.C?'active':''} ><span onTouchTap={this.answer.bind(this,2)}><b>C.</b> {item.C}</span></li>
									</ol>									
									<img src='./assets/images/minfa.png' className='lt-minfa'/>
									{this.state.questionList.length-1 !== i && false && <span className='lt-info'>
										<img src='./assets/images/info.png'/>
									</span>}
								</li>
								})}
					</ul>
					<section className={'lt-result-C lt-full '+( this.state.resultShow?'active':'')}>
							<div className='lt-result'>
								 <img src='./assets/images/remark-bg.png'/>
								 <div className='lt-result-right'>正确答案：{this.state.questionList[this.state.iNow] && this.answers[this.state.questionList[this.state.iNow].right]}</div>
								 <div className='lt-result-remark' style={this.state.questionList[this.state.iNow] && this.state.questionList[this.state.iNow].style}>
								 		{this.state.questionList[this.state.iNow] && this.state.questionList[this.state.iNow].remark}
								 </div>
								 	<div style={{bottom:this.state.questionList[this.state.iNow] ? this.state.questionList[this.state.iNow].bottom:0}}  className={'lt-next '+ (this.state.next?'active':'')} onTouchTap={this.next.bind(this)}>下一题</div>
							</div>
					</section>
			</div>
		);
	}

	next(){
		this.setState({
			next:true
		})

		let {obserable} = this.props;

		setTimeout(()=>{
			this.setState({
				next:false,
				resultShow:false
			});

			var s = this;
			var iNow = s.state.iNow + 1;
			if(s.state.iNow + 1 > s.state.questionList.length -1){
					iNow = s.state.questionList.length - 1;
					this.score <=0 && (this.score = 1);
					obserable.trigger({
						type:'setScore',
						data:this.score
					});


			}
			
			s.setState({
				iNow : iNow
			});
		},150)
		 
	}

	wxConfig(score){
			var levels = ['资深法盲','资深法盲','资深法盲','法学菜鸟','法学达人','法学大师','法学巨擘']
		   var durl = location.href.split('#')[0]; //window.location;
		        var code_durl = encodeURIComponent(durl);
		        var s = this;
			$.ajax({
				url:'http://api.zmiti.com/weixin/jssdk.php',
				dataType:'jsonp',
				jsonp: "callback",
				data:{
					type:'signature',
					durl:durl
				},
		    jsonpCallback: "jsonFlickrFeed",
		    success(data){
		    	wx.config({
						    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
						    appId: 'wxfacf4a639d9e3bcc', // 必填，公众号的唯一标识
						    timestamp:'1488558145' , // 必填，生成签名的时间戳
						    nonceStr: 'Wm3WZYTPz0wzccnW', // 必填，生成签名的随机串
						    signature: data.signature,// 必填，签名，见附录1
						    jsApiList: [ 'checkJsApi',
													  'onMenuShareTimeline',
													  'onMenuShareAppMessage',
													  'onMenuShareQQ',
													  'onMenuShareWeibo',
													  'hideMenuItems',
													  'showMenuItems',
													  'hideAllNonBaseMenuItem',
													  'showAllNonBaseMenuItem'
								] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
						});

		    	wx.ready(()=>{
		    			 		//朋友圈
                    wx.onMenuShareTimeline({
                        title: "我是" + levels[score] +' 你呢？', // 分享标题
                        link: durl, // 分享链接
                        imgUrl: "http://webapi.zmiti.com/public/civil-law/assets/images/300.jpg", // 分享图标
                        desc: "想知道自己是“法学大师”还是“法盲”吗？快来点开我吧",
                        success: function () { },
                        cancel: function () { }
                    });
                    //朋友
                    wx.onMenuShareAppMessage({
                        title: "我是" + levels[score] +' 你呢？', // 分享标题
                        link: durl, // 分享链接
                        imgUrl: "http://webapi.zmiti.com/public/civil-law/assets/images/300.jpg", // 分享图标
                        type: "link",
                        dataUrl: "",
                        desc: "想知道自己是“法学大师”还是“法盲”吗？快来点开我吧",
                        success: function () { },
                        cancel: function () { }
                    });
                    //qq
                    wx.onMenuShareQQ({
                         title: "我是" + levels[score] +' 你呢？', // 分享标题
                        link: durl, // 分享链接
                        imgUrl: "http://webapi.zmiti.com/public/civil-law/assets/images/300.jpg", // 分享图标
                        desc: "想知道自己是“法学大师”还是“法盲”吗？快来点开我吧",
                        success: function () { },
                        cancel: function () { }
                    });
		    	});
		    }
			});
	}

	answer(index){
		var A = 'A';
		switch(index){
			case 0:
			break;
			case 1:
				A = 'B';
			break;
			case 2:
				A = 'C'
			break;
		}
	
		if(this.state.questionList[this.state.iNow] && index === this.state.questionList[this.state.iNow].right){
			this.score++;//回答正确。
		}
		this.wxConfig(this.score);
		
		this.state[A] = true;
		this.forceUpdate();
		setTimeout(()=>{
			 this.state[A] = false;
			 this.state.resultShow = true;
			 this.forceUpdate();
		},150)
	}

	componentDidMount() {
	
		let {obserable} = this.props;

		obserable.on("indexShow",()=>{
				this.setState({show:true});
		});
		/*var s=  this;
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
		}*/
	}
}
export default PubCom(SceneApp);