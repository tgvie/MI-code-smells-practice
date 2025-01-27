import '../css/style.scss';
import { createHtml } from './createHtml';
import { toggleLightMode } from './toggleDarkmode';
import { privateLog } from './logger';

function init(): void {
  privateLog('Appen startar...');
  toggleLightMode();
  createHtml();
}

init();