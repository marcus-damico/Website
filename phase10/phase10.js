var c=document.getElementById("p10Canvas");
var ctx=c.getContext("2d");

ctx.font="30px serif";
ctx.fillText("Phase10 Application",250,50);

var ntr = document.getElementById("ntrButton");

// This function calculates the score when the enter button is pushed while 
// the cursor is in the textboxes
function handle(e, n1, n2, n3, n4, n5, n6, t1, t2, t3, t4, t5, t6){
	var temp;

	if (e.keyCode == 13) {
		e.preventDefault();

	temp = parseInt(t1.value || 0);
    temp += parseInt(n1.value);
    t1.value = temp;
	
	temp = parseInt(t2.value || 0);
	temp += parseInt(n2.value);
	t2.value = temp;

	temp = parseInt(t3.value || 0);
	temp += parseInt(n3.value);
	t3.value = temp;

	temp = parseInt(t4.value || 0);
	temp += parseInt(n4.value);
	t4.value = temp;

	temp = parseInt(t5.value || 0);
	temp += parseInt(n5.value);
	t5.value = temp;

	temp = parseInt(t6.value || 0);
	temp += parseInt(n6.value);
	t6.value = temp;

	n1.value = 0;
	n2.value = 0;
	n3.value = 0;
	n4.value = 0;
	n5.value = 0;
	n6.value = 0;
	}
}

//Calculates the numbers into a textbox and resets the input values
//when the enter button is clicked
function addFunction(n11, n21, n31, n41, n51, n61, t11, t21, t31, t41, t51, t61){

	var temp;
	temp = parseInt(t11.value || 0);
    temp += parseInt(n11.value);
    t11.value = temp;
	
	temp = parseInt(t21.value || 0);
	temp += parseInt(n21.value);
	t21.value = temp;

	temp = parseInt(t31.value || 0);
	temp += parseInt(n31.value);
	t31.value = temp;

	temp = parseInt(t41.value || 0);
	temp += parseInt(n41.value);
	t41.value = temp;

	temp = parseInt(t51.value || 0);
	temp += parseInt(n51.value);
	t51.value = temp;

	temp = parseInt(t61.value || 0);
	temp += parseInt(n61.value);
	t61.value = temp;

	n11.value = 0;
	n21.value = 0;
	n31.value = 0;
	n41.value = 0;
	n51.value = 0;
	n61.value = 0;

}
