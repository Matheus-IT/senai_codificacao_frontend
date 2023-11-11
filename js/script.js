//efeito do botão voltar ao Topo
$('#back-to-top').on('click', goToTop);

function goToTop() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
}
//Validação de Login

//Ativar alert no botão cadastrar
