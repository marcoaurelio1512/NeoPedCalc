var ns4 = (document.layers)? true : false;
var ie4 = (document.all)? true : false;
//  var ie4 = (document.all && !document.getElementById)? true : false;
//  var ie5 = (document.getElementById && document.all)? true : false;
var ns6 = (document.getElementById && !document.all)? true: false;
var w3c = (document.getElementById)? true : false;

function bgclr(el,whatColor) {
//	alert (el.id+"\nns4 = "+ns4+"\nie4 = "+ie4+"\nns6 = "+ns6);
	//  if (!ns4) {var elStyle = el.style} else {elStyle = el}
	
	if (whatColor == 2) {
		whatID = el.id;
		whatIDNum = parseInt(whatID);
		isNeg = whatID.indexOf("neg1");
		if (isNeg == -1) {numLoc = whatID.indexOf(whatIDNum);}
			else {numLoc = isNeg;}
		nameID = whatID.slice(0,numLoc);

		changebg(nameID);
		if (nameID == "male") {
			changebg("female");
			scoreEl = eval(getLabel("femaleNum"));
			scoreEl.innerHTML = "&nbsp;";
		}
		if (nameID == "female") {
			changebg("male");
			scoreEl = eval(getLabel("maleNum"));
			scoreEl.innerHTML = "&nbsp;";
		}

		//  Display score
		if (isNeg == -1) {score = whatID.charAt(whatID.length-1);}
			else {
				//  If -1 score selected, check to see if "Plantar" or "Eyes" -2 value selected
				if (nameID == "plantar") {
					if (document.negGest.plantar.value == -2) {score = -2} else {score = -1}
				} else if (nameID == "eye") {
					if (document.negGest.eye.value == -2) {score = -2} else {score = -1}
				} else {score = -1}
			}
		scoreEl = eval(getLabel(nameID + "Num"));
		if (ns4) {}
		if (ie4 || ns6) {scoreEl.innerHTML = score;}
		
		//  Add scores
		addScores();
		
	}

	if (whatColor == 0) {whatColor = "";}
	if (whatColor == 1) {whatColor = "#ffffcc"}
	if (whatColor == 2) {whatColor = "#ccccff"}
	if (ie4 || ns6) {
		//  alert (el.style.backgroundColor);
		if (el.style.backgroundColor != "#ccccff" && el.style.backgroundColor != "rgb(204,204,255)") {
			el.style.backgroundColor = whatColor;
		}
	} else if (ns4) {	//  this doesn't work
		if (el.backgroundColor != "#ccccff") {
			el.backgroundColor = whatColor;
		}
	}
	
	return true;
}

function scoreNum(nameID) {
	//  Identify score of element
	scoreEl = eval(getLabel(nameID + "Num"));
	score = scoreEl.innerHTML;
	return score;
}

function addScores() {
	var posture = parseInt(scoreNum("posture"));
	var square = parseInt(scoreNum("square"));
	var arm = parseInt(scoreNum("arm"));
	var pop = parseInt(scoreNum("pop"));
	var scarf = parseInt(scoreNum("scarf"));
	var heel = parseInt(scoreNum("heel"));
	
	var skin = parseInt(scoreNum("skin"));
	var lanugo = parseInt(scoreNum("lanugo"));
	var plantar = parseInt(scoreNum("plantar"));
	var breast = parseInt(scoreNum("breast"));
	var eye = parseInt(scoreNum("eye"));
	var male = parseInt(scoreNum("male"));
	var female = parseInt(scoreNum("female"));
	
	if (!(isNaN(posture) || isNaN(square) || isNaN(arm) || isNaN(pop) || isNaN(scarf) || isNaN(heel))) {
		var nScore = posture + square + arm + pop + scarf + heel;
		scoreEl = eval(getLabel("nScore"));
		score2El = eval(getLabel("nScore2"));
		scoreEl.innerHTML = nScore;
		score2El.innerHTML = nScore;
	}
	if (!(isNaN(skin) || isNaN(lanugo) || isNaN(plantar) || isNaN(breast) || isNaN(eye) || (isNaN(male) && isNaN(female)))) {
		if (isNaN(male)) {var whichSex = female} else {var whichSex = male}
		var pScore = skin + lanugo + plantar + breast + eye + whichSex;
		scoreEl = eval(getLabel("pScore"));
		score2El = eval(getLabel("pScore2"));
		scoreEl.innerHTML = pScore;
		score2El.innerHTML = pScore;
	}
	if (!(isNaN(pScore) || isNaN(nScore))) {
		var totScore = nScore + pScore;
		scoreEl = eval(getLabel("totScore"));
		scoreEl.innerHTML = totScore;
		
		//  Clear previous rows
		for (x=0; x <= 13; x++) {
			browEl = eval(getLabel("btwn" + x));
			mainRowEl = eval(getLabel("rate" + x));
			
			browEl.style.display = "none";
			if (x != 0) {mainRowEl.style.backgroundColor = "";}
		}
		
		//  Highlight which row
		if (totScore/5 == Math.round(totScore/5)) {
			var lineNum = (totScore / 5) + 3;
			lineEl = eval(getLabel("rate" + lineNum));
			lineEl.style.backgroundColor = "#ccccff";
		} else {
			var lineNum = (totScore / 5) + 3;
			lineNum = Math.floor(lineNum);
			var numWeeks = (totScore * 2 / 5) + 24;
			
			rowEl = eval(getLabel("btwn" + lineNum));
			scoreEl = eval(getLabel("bScore" + lineNum));
			weeksEl = eval(getLabel("bWeeks" + lineNum));
			scoreEl.innerHTML = totScore;
			weeksEl.innerHTML = numWeeks;
			rowEl.style.display = "";
			rowEl.style.backgroundColor = "#ccccff";
		}
	}
	
	return;
}

function getLabel(nameID) {
	var whatTag;
	
	if (ie4) {whatTag = "document.all." + nameID;}
	if (ns6) {whatTag = "document.getElementById(\"" + nameID + "\")";}
	return whatTag;	
}

function changebg(nameID) {
	//  Change color of previously-selected element to blank
	for (i=-1; i <= 5; i++) {
		if (i == -1) {iNum = "neg1"} else {iNum = i}
		if (ie4) {tempEl = eval("document.all." + nameID + iNum);}
			else if (ns6) {tempEl = eval("document.getElementById(\"" + nameID + iNum + "\")");}
		//  alert (tempEl)
		if ((ie4 || ns6) && tempEl) {
			if (tempEl.style.backgroundColor == "#ccccff" || tempEl.style.backgroundColor == "rgb(204,204,255)") {
				tempEl.style.backgroundColor = "";
			}
		}
	}
	return;
}

function roundNum(thisNum,dec) {
	thisNum = thisNum * Math.pow(10,dec)
	thisNum = Math.round(thisNum)
	thisNum = thisNum / Math.pow(10,dec)
	return thisNum
}