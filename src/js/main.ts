import '../css/style.scss';
import { createHtml } from './createHtml';
import { toggleDarkLight } from './toggleDarkLight';
import { privateLog } from './logger';

const toggleDarkLightBtn = document.querySelector('.podlist__button--toggle')!;

toggleDarkLightBtn.addEventListener('click', toggleDarkLight);

function init(): void {
  privateLog('Appen startar...');
  createHtml();
}

init();