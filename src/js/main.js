    import tabs from './modules/tabs';
    import modal from './modules/modal';
    import timer from './modules/timer';
    import calc from './modules/calc';
    import forms from './modules/forms';
    import slider from './modules/slider';
    import cards from './modules/cards';
    import {
        openModal
    } from './modules/modal';

    window.addEventListener('DOMContentLoaded', () => {
        const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

        tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
        modal('[data-modal]', '.modal');
        timer('.timer', '2020-11-30');
        calc();
        forms('form', modalTimerId);
        slider();
        cards();
    });