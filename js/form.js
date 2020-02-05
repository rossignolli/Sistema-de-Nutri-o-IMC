var addPaciente = document.querySelector("#adicionar-paciente");

addPaciente.addEventListener("click", poup);

function poup(){ event.preventDefault();
	var form = document.querySelector("#form-adiciona");
	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;
	var pacienteTr = document.createElement("tr");
	var nomeTd = document.createElement("td");
	var pesoTd = document.createElement("td");
	var alturaTd = document.createElement("td");
	var gorduraTd = document.createElement("td");
	var imcTd = document.createElement("td");
	nomeTd.textContent = nome;
	pesoTd.textContent = peso;
	alturaTd.textContent = altura;
	gorduraTd.textContent = gordura;
	imcTd.textContent = calcularImc(peso, altura);
	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);


	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Paciente adicionado com sucesso',
		showConfirmButton: false,
		timer: 1500
	})


}