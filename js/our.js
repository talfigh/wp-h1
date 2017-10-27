$( document ).ready(function(){
	$(".button-collapse").sideNav();
});

function open1() {
	document.getElementById("a2").style.display = "none"
	document.getElementById("a1").style.display = "block"
	document.getElementById("upgrade").style.display = "block"
	document.getElementById("side-navbar").style.height = "calc(100% - 48px - 104px)"
	document.getElementById("side-navbar").style.width = "256px"
	aaa = document.getElementsByClassName("c5e-nav-heading")
	for (var i = 0; i < aaa.length; i++) {
		aaa[i].style.display = "block"
	  }
	  aaa = document.getElementsByClassName("divider")
	  for (var i = 0; i < aaa.length; i++) {
		  aaa[i].style.display = "none"
		}
		document.getElementById("main1").style.paddingLeft = "300px"
		
}

function close1() {
	document.getElementById("a2").style.display = "block"
	document.getElementById("a1").style.display = "none"
	document.getElementById("upgrade").style.display = "none"
	document.getElementById("side-navbar").style.height = "calc(100% - 48px - 44px)"
	document.getElementById("side-navbar").style.width = "68px"
	aaa = document.getElementsByClassName("c5e-nav-heading")
	for (var i = 0; i < aaa.length; i++) {
		aaa[i].style.display = "none"
	  }
	  aaa = document.getElementsByClassName("divider")
	  for (var i = 0; i < aaa.length; i++) {
		  aaa[i].style.display = "block"
		}	
		document.getElementById("main1").style.paddingLeft = "112px"
		
	
}