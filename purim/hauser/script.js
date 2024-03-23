values = {
	"benesh": {
		backgroundColor: "#ffb3b3",
		answer: "6522",
		title: "משפחת בנש",
		depnedsOn: "משפחת הירש", 
		yourNum: "5"
	},
	"hauser": {
		backgroundColor: "#7af5ef",
		answer: "8725",
		title: "משפחת האוזר", 
		depnedsOn: "משפחת בנש", 
		yourNum: "8"
	},
	"hiersch": {
		backgroundColor: "#7af5ef",
		answer: "5528",
		title: "משפחת הירש", 
		depnedsOn: "משפחת האוזר", 
		yourNum: "2"
	}
};

function getCurrentIsraelTime() {
    // Get current date and time
    var now = new Date();

    // Adjust for Israel time offset (UTC+3)
    var israelOffset = 3 * 60; // Offset in minutes
    //now.setMinutes(now.getMinutes() + israelOffset);

    // Extract hours and minutes
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // Add leading zeros if necessary
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Return formatted time
    return hours + ':' + minutes;
}

myvalue = {};

function init(team) {
	myvalue = values[team];
	//document.body.style.backgroundColor = myvalue.backgroundColor;	
	document.title = myvalue.title;
	document.getElementById("yourSecret").innerHTML = "הקוד של המשפחה שלכם הוא " + myvalue.yourNum;
}

 function clearText() {
	document.getElementById("token").value="";
 }

 function checkNumber() {	
	if (document.getElementById("token").value==myvalue.answer) {
		document.getElementById("successHeader").innerHTML = " כל הכבוד " + myvalue["title"];
		document.getElementById("successMsg").innerHTML = "שעת ביצוע: " + getCurrentIsraelTime() + "<br>" + "צלמו מסך, ותשלחו בקבוצה";	
		// Assuming you have a reference to the element you want to modify
		var element = document.getElementById('success'); // Replace 'yourElementId' with the ID of your element		
		element.style.display = ''; // This sets it back to the default display value
		element = document.getElementById('fail');
		element.style.display = 'none';
	}
	else {
		var element = document.getElementById('fail');
		element.style.display = '';
		element = document.getElementById('success');
		element.style.display = 'none';
		clearText();		
	}
 }

 