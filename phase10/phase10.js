var c=document.getElementById("p10Canvas");
var ctx=c.getContext("2d");

ctx.font="30px serif";
ctx.fillText("Phase10 Application",250,50);

function addFunction(n1, n2, n3, n4, n5, n6, t1, t2, t3, t4, t5, t6){
	var temp;
	temp = parseInt(t1.value || 0);
    temp += parseInt(n1);
    t1.value = temp;
	
	temp = parseInt(t2.value || 0);
	temp += parseInt(n2);
	t2.value = temp;

	temp = parseInt(t3.value || 0);
	temp += parseInt(n3);
	t3.value = temp;

	temp = parseInt(t4.value || 0);
	temp += parseInt(n4);
	t4.value = temp;

	temp = parseInt(t5.value || 0);
	temp += parseInt(n5);
	t5.value = temp;

	temp = parseInt(t6.value || 0);
	temp += parseInt(n6);
	t6.value = temp;

	n1.value = 0;
	n2.value = 0;
	n3.value = 0;
	n4.value = 0;
	n5.value = 0;
	n6.value = 0;

}
