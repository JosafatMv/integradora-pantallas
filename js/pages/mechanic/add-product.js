const productCards = document.querySelectorAll('.card-product');
const form = document.querySelector('#form-register');

let productCardArr = [];

console.log(productCards);

productCards.forEach((productCard) => {
	productCard.addEventListener('click', () => {
		const serviceId = productCard.id;

		if (productCardArr.length === 1) {
			productCardArr.pop();
			productCardArr.push(serviceId);
			productCards.forEach((productCard) => {
				productCard.classList.remove('card-product-active');
			});
			productCard.classList.toggle('card-product-active');
		}

		if (productCardArr.length === 0) {
			productCardArr.push(serviceId);
			productCard.classList.toggle('card-product-active');
		}
	});
});
