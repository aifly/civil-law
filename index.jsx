import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SceneApp from './scene/index.jsx';
import IndexApp from './index/index.jsx';
import ShareAPP from './share/index.jsx';
import Obserable from './assets/libs/obserable';
var obserable = new Obserable();
import $ from 'jquery';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
export class App extends Component {
	constructor(props) {
		super(props);
		this.viewW = document.documentElement.clientWidth;
		this.viewH = document.documentElement.clientHeight;
	}
	render() {
		var data  ={
			obserable
		}
		return (
			<div>
					<IndexApp {...data}></IndexApp>
					<SceneApp {...data}></SceneApp>
					<ShareAPP {...data}></ShareAPP>
			</div>
		);
	}

	wxConfig(){
			var levels = ['资深法盲','资深法盲','资深法盲','法学菜鸟','法学达人','法学大师','法学巨擘']
		   var durl = location.href.split('#')[0]; //window.location;
		        var code_durl = encodeURIComponent(durl);
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
                        title: '猛戳“大民”，“点开”影响您一生的故事', // 分享标题
                        link: durl, // 分享链接
                        imgUrl: "http://webapi.zmiti.com/public/civil-law/assets/images/300.jpg", // 分享图标
                        desc: "你是法学大师OR资深法盲？想知道的话，可以跟随“小总”，走完小明的一生。",
                        success: function () { },
                        cancel: function () { }
                    });
                    //朋友
                    wx.onMenuShareAppMessage({
                        title: "猛戳“大民”，“点开”影响您一生的故事", // 分享标题
                        link: durl, // 分享链接
                        imgUrl: "http://webapi.zmiti.com/public/civil-law/assets/images/300.jpg", // 分享图标
                        type: "link",
                        dataUrl: "",
                        desc: "你是法学大师OR资深法盲？想知道的话，可以跟随“小总”，走完小明的一生。",
                        success: function () { },
                        cancel: function () { }
                    });
                    //qq
                    wx.onMenuShareQQ({
                        title: "猛戳“大民”，“点开”影响您一生的故事", // 分享标题
                        link: durl, // 分享链接
                        imgUrl: "http://webapi.zmiti.com/public/civil-law/assets/images/300.jpg", // 分享图标
                        desc: "猛戳“大民”，“点开”影响你一生的故事",
                        success: function () { },
                        cancel: function () { }
                    });
		    	});
		    }
			});
		
	}

	componentWillMount() {
		document.querySelector('html').style.fontSize = this.viewW / 10 +'px';
		this.wxConfig();

		
	}
}
	ReactDOM.render(<App></App>,document.getElementById('fly-main-ui'));

