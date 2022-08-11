const serviceCards = document.querySelectorAll('.service-info');
const form = document.querySelector('#form-register');

let serviceCardArr = [];

serviceCards.forEach((serviceCard) => {
	serviceCard.addEventListener('click', () => {
		const serviceId = serviceCard.id;

		if (serviceCardArr.length === 1) {
			serviceCardArr.pop();
			serviceCardArr.push(serviceId);
			serviceCards.forEach((serviceCard) => {
				serviceCard.classList.remove('service-info-active');
				serviceCard.classList.add('service-info-disabled');
			});
			serviceCard.classList.toggle('service-info-active');
			serviceCard.classList.remove('service-info-disabled');
		}

		if (serviceCardArr.length === 0) {
			serviceCardArr.push(serviceId);
			serviceCards.forEach((serviceCard) => {
				serviceCard.classList.add('service-info-disabled');
			});
			serviceCard.classList.toggle('service-info-active');
			serviceCard.classList.remove('service-info-disabled');
		}
	});
});
