import { privateLog } from './logger';

const toggleLightModeButton = document.querySelector('.podlist__button--toggle')!;
toggleLightModeButton.addEventListener('click', toggleLightMode);

export function toggleLightMode(): void {
    document.body.classList.toggle('darkmode');
    if (document.body.classList.contains('darkmode')) {
        toggleLightModeButton.innerHTML = 'Välj mörkt läge';
        privateLog('Mörkt läge på');
    } else {
        toggleLightModeButton.innerHTML = 'Välj ljust läge';
        privateLog('Ljust läge på');
    }
}

export default toggleLightMode;