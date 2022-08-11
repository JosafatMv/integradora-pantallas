// import Notify from 'simple-notify';
// import 'simple-notify/dist/simple-notify.min.css';

const pushNotify = (e) => {
	e.preventDefault();

	Toastify({
		text: 'Registro realizado con éxito',
		duration: 100000,
		close: true,
		className: 'info',
		gravity: 'top', // `top` or `bottom`
		position: 'left', // `left`, `center` or `right`
		stopOnFocus: true, // Prevents dismissing of toast on hover
	}).showToast();
};

const btn = document.querySelector('.button-custom');

const form = document.querySelector('#form-register');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	Swal.fire({
		title: '¿Seguro que quieres registrarlo?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Registrar',
		cancelButtonText: 'Cancelar',
	}).then((result) => {
		if (result.isConfirmed) {
			form.submit();
		}
	});
});
