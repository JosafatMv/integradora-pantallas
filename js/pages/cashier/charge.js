import { creditCard } from '../../components/creditCard.js';

const cashMethodInput = document.getElementById('cash');
const creditMethodInput = document.getElementById('credit');
const chargeBtn = document.getElementById('charge-btn');

const form = document.querySelector('#method-form');

chargeBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if (cashMethodInput.checked) {
		Swal.fire({
			title: 'COBRO EN EFECTIVO',
			html: `<input type="number" id="cashGiven" class="swal2-input" placeholder="Efectivo">
                    <input type="number" id="exchange" class="swal2-input" placeholder="Cambio">`,
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Finalizar',
			cancelButtonText: 'Cancelar',
			focusConfirm: false,
		}).then((result) => {
			if (result.isConfirmed) {
				form.submit();
			}
		});
	} else if (creditMethodInput.checked) {
		Swal.fire({
			title: 'AGREGAR TARJETA',
			html: creditCard(),
			text: '¡No podrás revertir esta acción!',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#E9EFF4;',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Pagar',
			cancelButtonText: 'Cancelar',
			focusConfirm: false,
			preConfirm: () => {
				form.submit();
			},
		});
	}
});
