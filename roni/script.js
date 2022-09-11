values = {
	"red": {
		backgroundColor: "#ffb3b3",
		answer: "1357",
		title: "הקבוצה האדומה"
	},
	"blue": {
		backgroundColor: "#7af5ef",
		answer: "4573",
		title: "הקבוצה הכחולה"
	},
	"green": {
		backgroundColor: "#7af5a1",
		answer: "4779",
		title: "הקבוצה הירוקה"
	},
	"gray": {
		backgroundColor: "#918e90",
		answer: "8354",
		title: "הקבוצה האפורה"
	},
	"yellow": {
		backgroundColor: "#e4fa23",
		answer: "1982",
		title: "הקבוצה הצהובה"
	},
	"pink": {
		backgroundColor: "pink",
		answer: "2544",
		title: "הקבוצה הורודה"
	},
	"orange": {
		backgroundColor: "orange",
		answer: "2743",
		title: "הקבוצה הכתומה"
	},
	"white": {
		backgroundColor: "white",
		answer: "8763",
		title: "הקבוצה הלבנה"
	},	
};
myvalue = {};

function init(team) {
	myvalue = values[team];
	document.body.style.backgroundColor = myvalue.backgroundColor;	
	document.title = myvalue.title;
}

 function clearText() {
	document.getElementById("token").focus();
	document.getElementById("token").value="";
 }
 function checkNumber() {
	if (document.getElementById("token").value==myvalue.answer) {
		$("#successModal").modal();
	}
	else {
		$("#failModal").modal();
		clearText();		
	}
 }