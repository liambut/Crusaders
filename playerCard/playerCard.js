var playerCardTimeouts = [];
function playerHover(img, playerDetails){
	img.style = "border-radius: 0%; transition: border-radius 0.5s;";
	position = playerDetails.querySelector('#position');
	DOB = playerDetails.querySelector('#DOB');
	height = playerDetails.querySelector('#height');
	weight = playerDetails.querySelector('#weight');
	teams = playerDetails.querySelector('#teams');
	stat1 = playerDetails.querySelector('#stat1');
	stat2 = playerDetails.querySelector('#stat2');
	stat3 = playerDetails.querySelector('#stat3');
	stat4 = playerDetails.querySelector('#stat4');
	stat5 = playerDetails.querySelector('#stat5');
	stat1Position = playerDetails.querySelector('#stat1Position');
	stat2DOB = playerDetails.querySelector('#stat2DOB');
	stat3Height = playerDetails.querySelector('#stat3Height');
	stat4Weight = playerDetails.querySelector('#stat4Weight');
	stat5Teams = playerDetails.querySelector('#stat5Teams');
	if(playerCardTimeouts.length > 0){
		for (var i = 0; i < playerCardTimeouts.length; i++) {
			clearTimeout(playerCardTimeouts[i]);
		}
		playerCardTimeouts = [];
	}
	stat1Position.style = "transform: translateX(100%); transition: transform ease-out 0.5s;";
	stat2DOB.style = "transform: translateX(100%); transition: transform ease-out 0.5s;";
	stat3Height.style = "transform: translateX(100%); transition: transform ease-out 0.5s;";
	stat4Weight.style = "transform: translateX(100%); transition: transform ease-out 0.5s;";
	stat5Teams.style = "transform: translateX(100%); transition: transform ease-out 0.5s;";
	playerCardTimeouts.push(setTimeout(() => {stat1Position.style = "transform: translateX(-100%);";}, 495));
	playerCardTimeouts.push(setTimeout(() => {stat2DOB.style = "transform: translateX(-100%);";}, 495));
	playerCardTimeouts.push(setTimeout(() => {stat3Height.style = "transform: translateX(-100%);";}, 495));
	playerCardTimeouts.push(setTimeout(() => {stat4Weight.style = "transform: translateX(-100%);";}, 495));
	playerCardTimeouts.push(setTimeout(() => {stat5Teams.style = "transform: translateX(-100%);";}, 495));
	playerCardTimeouts.push(setTimeout(() => {stat1Position.innerHTML = stat1.innerHTML;}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat1Position.style = "transform: translateX(0); transition: transform ease-out 0.5s;";}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat2DOB.innerHTML = stat2.innerHTML;}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat2DOB.style = "transform: translateX(0); transition: transform ease-out 0.5s;";}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat3Height.innerHTML = stat3.innerHTML;}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat3Height.style = "transform: translateX(0); transition: transform ease-out 0.5s;";}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat4Weight.innerHTML = stat4.innerHTML;}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat4Weight.style = "transform: translateX(0); transition: transform ease-out 0.5s;";}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat5Teams.innerHTML = stat5.innerHTML;}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat5Teams.style = "transform: translateX(0); transition: transform ease-out 0.5s; font-size:medium;";}, 500));
}
function playerHoverOff(img, playerDetails){
	img.style = "border-radius: 50%; transition: border-radius 0.5s;";
	position = playerDetails.querySelector('#position');
	DOB = playerDetails.querySelector('#DOB');
	height = playerDetails.querySelector('#height');
	weight = playerDetails.querySelector('#weight');
	teams = playerDetails.querySelector('#teams');
	stat1 = playerDetails.querySelector('#stat1');
	stat2 = playerDetails.querySelector('#stat2');
	stat3 = playerDetails.querySelector('#stat3');
	stat4 = playerDetails.querySelector('#stat4');
	stat5 = playerDetails.querySelector('#stat5');
	stat1Position = playerDetails.querySelector('#stat1Position');
	stat2DOB = playerDetails.querySelector('#stat2DOB');
	stat3Height = playerDetails.querySelector('#stat3Height');
	stat4Weight = playerDetails.querySelector('#stat4Weight');
	stat5Teams = playerDetails.querySelector('#stat5Teams');
	if(playerCardTimeouts.length > 0){
		for (var i = 0; i < playerCardTimeouts.length; i++) {
			clearTimeout(playerCardTimeouts[i]);
		}
		playerCardTimeouts = [];
	}
	stat1Position.style = "transform: translateX(100%); transition: transform ease-out 0.5s;";
	stat2DOB.style = "transform: translateX(100%); transition: transform ease-out 0.5s;";
	stat3Height.style = "transform: translateX(100%); transition: transform ease-out 0.5s;";
	stat4Weight.style = "transform: translateX(100%); transition: transform ease-out 0.5s;";
	stat5Teams.style = "transform: translateX(100%); transition: transform ease-out 0.5s; font-size:medium;";
	playerCardTimeouts.push(setTimeout(() => {stat1Position.style = "transform: translateX(-100%);";}, 495));
	playerCardTimeouts.push(setTimeout(() => {stat2DOB.style = "transform: translateX(-100%);";}, 495));
	playerCardTimeouts.push(setTimeout(() => {stat3Height.style = "transform: translateX(-100%);";}, 495));
	playerCardTimeouts.push(setTimeout(() => {stat4Weight.style = "transform: translateX(-100%);";}, 495));
	playerCardTimeouts.push(setTimeout(() => {stat5Teams.style = "transform: translateX(-100%); ";}, 495));
	playerCardTimeouts.push(setTimeout(() => {stat1Position.innerHTML = position.innerHTML;}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat1Position.style = "transform: translateX(0); transition: transform ease-out 0.5s;";}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat2DOB.innerHTML = DOB.innerHTML;}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat2DOB.style = "transform: translateX(0); transition: transform ease-out 0.5s;";}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat3Height.innerHTML = height.innerHTML;}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat3Height.style = "transform: translateX(0); transition: transform ease-out 0.5s;";}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat4Weight.innerHTML = weight.innerHTML;}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat4Weight.style = "transform: translateX(0); transition: transform ease-out 0.5s;";}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat5Teams.innerHTML = teams.innerHTML;}, 500));
	playerCardTimeouts.push(setTimeout(() => {stat5Teams.style = "transform: translateX(0); transition: transform ease-out 0.5s;";}, 500));
}