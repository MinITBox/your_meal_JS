import { modalProduct, catalogList } from './elements.js';

import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';
import { navigationListController } from './navigationListController.js';
import { cartInit } from './cart.js';

//============ Opening and closing a modal window (открытие и закрытие модального окна)============

catalogList.addEventListener('click', event => {
	const target = event.target;

	if (target.closest('.product__detail') || target.closest('.product__image')) {
		const id = target.closest('.product').dataset.idProduct;
		openModal(id);
	}
});

modalProduct.addEventListener('click', event => {
	const target = event.target;

	if (target.closest('.modal__close') || target === modalProduct) {
		modalProduct.classList.remove('modal_open');
	}
});

//=================================================================================================

const init = () => {
	renderListProduct();
	navigationListController();
	cartInit();
};
init();
