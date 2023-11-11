const users = [
	{username: 'matheus', password: 'password123'},
	{username: 'admin', password: '123'},
];

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
$('#login-form').on('submit', handleLogin);

function handleLogin(e) {
	e.preventDefault();
	
	const username = $('#login-form [name=username]').val();
	const password = $('#login-form [name=password]').val();

	const userFound = users.find(u => u.username === username && u.password === password);

	if (userFound) {
		window.location = 'index.html';
	} else {
		alert('Accesso negado. Dados incorretos');
	}
}

//Validação cadastrar
$('#botao-cadastrar').on('click', () => {
	$('#section-login').slideUp();
	$('#section-cadastro').slideDown();
});

$('#back-to-login').on('click', () => {
	$('#section-cadastro').slideUp();
	$('#section-login').slideDown();
});

$('#register-form').on('submit', handleRegister);

function handleRegister(e) {
	e.preventDefault();
	window.location.href = 'index.html';
}
