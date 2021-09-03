function calcular() {
	var name, time,monthly, interestRate;
	var interestRate = 0.03;
	
	

	name= String(document.getElementById('name').value);
	time= Number(document.getElementById('time').value);
	monthly= Number(document.getElementById('monthly').value);

	

	 var total =(monthly*((1+ interestRate)^time-1))/ interestRate;


	document.getElementById('nameresult').innerHTML = `${name}`;
	document.getElementById('mensalidaderesult').innerHTML = `${monthly}`;
	document.getElementById('formula').innerHTML = `${total.toFixed(3)}`;
	document.getElementById('data').innerHTML = `${monthly.toFixed(2)}`;
	document.getElementById('calc_form').classList.add('d-none');
	document.getElementById('result').classList.remove('d-none');
	
}
