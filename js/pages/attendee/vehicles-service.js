const carCards = document.querySelectorAll('.car-card');
const form = document.querySelector('#form-register');

let idArr = [];

carCards.forEach((carCard) => {
	carCard.addEventListener('click', () => {
		const idCar = carCard.id;

		//Get data from carCard
		const rfcClient = carCard.dataset.rfcclient;

		if (idArr.length === 1) {
			idArr.pop();
			idArr.push({ rfc: rfcClient, idCar: idCar });
			carCards.forEach((carCard) => {
				carCard.classList.remove('card-card-active');
			});
			carCard.classList.toggle('card-card-active');
		}

		if (idArr.length === 0) {
			idArr.push({ rfc: rfcClient, idCar: idCar });
			carCard.classList.toggle('card-card-active');
		}
	});
});

form.addEventListener('submit', (e) => {
	e.preventDefault();

	if (idArr.length === 0) {
		Swal.fire({
			title: '¡No has seleccionado ningún vehículo!',
			icon: 'warning',
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Ok',
		});
	}

	const statusToChange = inputStatus.value;

	if (idArr.length === 1) {
		const idCar = idArr[0].idCar;
		const rfcClient = idArr[0].rfc;

		console.log(idCar, rfcClient);

		const carPlatesInput = document.querySelector('#plates');
		const historyInput = document.querySelector('#historyId');
		const rfcMechanicInput = document.querySelector('#rfcMechanic');
		const rfcClientInput = document.querySelector('#rfcClient');

		console.log(idArr);

		if (statusToChange === 'start') {
			carPlatesInput.value = idCar;
			rfcClientInput.value = rfcClient;
			if (idArr.length === 1) {
				Swal.fire({
					title: 'CONFIRMAR INICIO',
					html: `<input type="text" id="rfcMechanic" class="swal2-input" placeholder="RFC del mecánico">`,
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Iniciar',
					cancelButtonText: 'Cancelar',
					focusConfirm: false,
					preConfirm: () => {
						const rfcMechanic =
							Swal.getPopup().querySelector('#rfcMechanic').value;
						if (!rfcMechanic) {
							Swal.showValidationMessage(
								`Ingrese el RFC del mecánico`
							);
						}
						return { rfcMechanic: rfcMechanic };
					},
				}).then((result) => {
					if (result.isConfirmed) {
						rfcMechanicInput.value = result.value.rfcMechanic;
						form.submit();
					}
				});
			}
		}

		if (statusToChange === 'end') {
			historyInput.value = idCar;
			rfcClientInput.value = rfcClient;
			Swal.fire({
				title: 'FINALIZAR SERVICIO',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Finalizar',
				cancelButtonText: 'Cancelar',
			}).then((result) => {
				if (result.isConfirmed) {
					form.submit();
				}
			});
		}
	}
});
