// JavaScript Document
'use strict';
const noScroll=(e)=>{e.preventDefault();}//スクロール禁止
const noSc=()=>{
	document.addEventListener('mousewheel', noScroll, { passive: false });
	document.addEventListener("touchmove", noScroll, { passive: false });
}
noSc();

const test=()=>{
		//ここでローディング画像を表示していたDIVを非表示にする
		document.getElementById('load').classList.add('fade');
		//ここで本体を表示にさせる
		document.getElementById('input').style.display = 'block';
}
const canSc=()=>{
	document.removeEventListener("mousewheel",noScroll,{ passive: false });
	document.removeEventListener("touchmove",noScroll, { passive: false });
}//スクロール禁止を消す関数

const log0 =document.getElementById('log0');
let count = 100;
let countDown=()=>{log0.textContent =-count--;}//-100からカウントダウン

if (window.performance.navigation.type === 1) {	//リロード時
	test();
	canSc();
} else {	//リロード以外のページ読み込み時
	//50m秒ごとに繰り返し
	const intervalId = setInterval(() =>{
		countDown();
		//0になったらロード画面消してスクロール可能
		if(count<0){
			clearInterval(intervalId);
			setTimeout(test, 1000);
			setTimeout(canSc, 1000);
		}	//intervalIdをclearIntervalで指定
	}, 50);
}

const z_index1 = document.getElementById("z-index1");
const z_index2 = document.getElementById("z-index2");
const z_index3 = document.getElementById("z-index3");
const z_index5 = document.getElementById("z-index5");
const z_index6 = document.getElementById("z-index6");
const z_index11 = document.getElementById("z-index11");

const z5 = document.getElementById("z-index5");
const z5_style = z5.style;
z5_style.transform = "scale( "+0.5+" , "+0.5+" )";	//意匠展縮小

const ImgPa=document.getElementById('imgPa');
const Img=document.getElementById('img');
const IshoutenSc= document.getElementsByClassName('ishouten')[0];
const InfoSc= document.getElementsByClassName('info')[0];
const sinkSc= document.getElementsByClassName('sink')[0];

sinkSc.classList.add('sinkSc');
IshoutenSc.classList.add('ishoutenSc');

z_index2.style.display = 'none';
z_index3.style.display = 'none';
z_index6.style.display = 'none';
z_index11.style.display = 'none';
if(window.innerWidth > window.innerHeight) {	//pc
	z_index5.style.opacity = 0.3;
	z_index5.style.transform = "scale( "+0.3+" , "+0.3+" )";
	z_index5.style.filter = "blur("+10+"px)";
}
else{	//スマホ
	z_index5.style.opacity = 1;
	z_index5.style.transform = "scale( "+1+" , "+1+" )";
}
const log = document.getElementById('log');	//scroll:0

//スクロールされた時に実行
window.addEventListener('scroll', ()=>{
	let scrollTop = document.scrollingElement.scrollTop;	//スクロール量取得
	if (document.scrollingElement.scrollTop < 0) {
		scrollTop = 0;
	}
	log0.textContent = Math.floor(scrollTop);	//文字起こし
	
	
	//意匠展
	if(window.innerWidth > window.innerHeight) {	//pcのとき
		let z =(scrollTop+1000)*0.0003;
		function f(z){return -10*z+10;}
		let zd = f(z);
		z_index5.style.filter = "blur("+zd+"px)";
		z_index5.style.opacity = z;
		
		z_index1.style.filter = "blur("+zd+"px)";
		z_index1.style.opacity = 0.7;
		if(z<1){
			z_index5.style.transform = "scale( "+z+" , "+z+" )";
			z_index1.style.transform = "scale( "+z+" , "+z+" )";
		} else{z_index5.style.transform = "scale( "+1+" , "+1+" )"
		       z_index1.style.transform = "scale( "+1+" , "+1+" )"}//1/1で止める
	} else {	//スマホ用
		let z = (scrollTop+100)*0.01;
		function f(z){return z-1;}
		let zd = f(z);
		if(scrollTop>=-15&&scrollTop<400){
		z_index5.style.display = '';
		z_index5.style.transform = "scale( "+z+" , "+z+" )";
		z_index5.style.filter = "blur("+2*zd+"px)";
		}
		else if(scrollTop>=400&&scrollTop<1800){z_index5.style.display = 'none';}
		else{
			z_index5.style.display = '';
			z_index5.style.filter = "blur("+0+"px)";
			z_index5.style.opacity = 1;
			z_index5.style.transform = "scale( "+1+" , "+1+" )";
		}
	}
	
	
	//what
	let scrollTopW = scrollTop-200;
	let x = (scrollTopW+750)*0.001;
	function con(x){return -10*x+10;}
	let xd = con(x);
	z_index11.style.opacity =1;
	z_index11.style.filter = "none";
	
	
	//vis_pc_2
	z_index2.style.opacity =0.7;
	z_index11.style.filter = "none";
	
	if(scrollTopW>=0&&scrollTopW<1000){
		z_index2.style.display = '';//表示
		z_index11.style.display = '';//表示
		if(scrollTopW<150){
			z_index11.style.opacity =scrollTopW/350;
			z_index11.style.transform = "scale( "+0.9+" , "+0.9+" )";
			z_index11.style.filter = "blur("+xd+"px)";
			
			z_index2.style.opacity =scrollTopW/350;
			z_index2.style.filter = "blur("+xd+"px)";
		}//150pxは動かない
		else if(scrollTopW>=150,scrollTopW<250){z_index11.style.transform = "scale( "+x+" , "+x+" )";z_index11.style.filter = "blur("+xd+"px)";
							z_index2.style.transform = "scale( "+1+" , "+1+" )";z_index2.style.filter = "blur("+xd+"px)";}
		else if(scrollTopW>=250,scrollTopW<650){z_index11.style.transform = "scale( "+1+" , "+1+" )";}
		else{
			x = (scrollTopW-550)*0.01;
			z_index11.style.transform = "scale( "+x+" , "+x+" )";
			z_index11.style.filter = "blur("+2*x+"px)";
			
			z_index2.style.transform = "scale( "+x+" , "+x+" )";
			z_index2.style.filter = "blur("+2*x+"px)";
		}
	}
	else{
	    z_index11.style.display = 'none';
	    z_index2.style.display = 'none';
	    }//コンセプト消す
	
	
	
	//concept
	let scrollTopC = scrollTop-950;
	let y = (scrollTopC+750)*0.001;
	function con(y){return -10*y+10;}
	let yd = con(y);
	z_index6.style.opacity =1;
	z_index6.style.filter = "none";
	
	if(scrollTopC>=0&&scrollTopC<900){
		z_index6.style.display = '';
		if(scrollTopC<150){
			z_index6.style.opacity =scrollTopC/350;
			z_index6.style.transform = "scale( "+0.9+" , "+0.9+" )";
			z_index6.style.filter = "blur("+yd+"px)";
		}//150pxは動かない
		else if(scrollTopC>=150,scrollTopC<250){
			z_index6.style.transform = "scale( "+y+" , "+y+" )";
		}
		else if(scrollTopC>=250,scrollTopC<650){z_index6.style.transform = "scale( "+1+" , "+1+" )";}
		else{
			y = (scrollTopC-550)*0.01;
			z_index6.style.transform = "scale( "+y+" , "+y+" )";
			z_index6.style.filter = "blur("+2*y+"px)";
		}
	}
	else{z_index6.style.display = 'none';}
	
	//vis_pc_3
	let scrollTop3 = scrollTop-950;
	let y3 = (scrollTop3+750)*0.001;
	function con(y3){return -10*y3+10;}
	let yd3 = con(y3);
	z_index3.style.opacity =0.7;
	z_index3.style.filter = "none";
	
	if(scrollTop3>=0&&scrollTop3<900){
		z_index3.style.display = '';
		if(scrollTop3<150){
			z_index3.style.opacity =scrollTop3/350;
			z_index3.style.filter = "blur("+yd3+"px)";
		}//150pxは動かない
		else if(scrollTop3>=150,scrollTop3<650){z_index3.style.transform = "scale( "+1+" , "+1+" )";}
		else{
			y3 = (scrollTop3-550)*0.01;
			z_index3.style.transform = "scale( "+y3+" , "+y3+" )";
			z_index3.style.filter = "blur("+2*y3+"px)";
		}
	}
	else{z_index3.style.display = 'none';}
	
	
	//意匠展、開催概要
	const M = document.getElementById("M");
	const scroll=()=>{window.scrollBy(0, 1);} 	//y軸1ずつ自動スクロール
	
	if(scrollTop>1900){
		z_index5.classList.add('ishoutenS');
		if(scrollTop>2021){
			log.classList.add('log2');
			log0.textContent = 2022;
			M.classList.add("depout");
		}
		//if(scrollTop>2050){
		//	z_index0.classList.add('infoS');
		//}
	}
	else{
		log.classList.remove('log2');
		z_index5.classList.remove('ishoutenS');
		//z_index0.classList.remove('infoS');
		M.classList.remove("depout");
	}

	if(scrollTop>3200){
		ImgPa.classList.remove('imgSc');			//css:line:38
		Img.classList.remove('imgSc');				//css:line:37
		IshoutenSc.classList.remove('ishoutenSc');	//css:line:60
		//InfoSc.classList.remove('infoSc');			//css:line:75
		sinkSc.classList.remove('sinkSc');			//css:line:90
	}
	else{
		ImgPa.classList.add('imgSc');
		Img.classList.add('imgSc');
		IshoutenSc.classList.add('ishoutenSc');
		//InfoSc.classList.add('infoSc');
		sinkSc.classList.add('sinkSc');
	}
},false);
