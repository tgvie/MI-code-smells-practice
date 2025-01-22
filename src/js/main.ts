import '../css/style.scss';
import { createHtml } from './createHtml';
import { toggleLightMode } from './toggleDarkmode';

function init(): void {
  toggleLightMode();
  createHtml();
}

init();