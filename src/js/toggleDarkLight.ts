import { privateLog } from './logger';

const toggleDarkLightBtn = document.querySelector('.podlist__button--toggle')!;

toggleDarkLightBtn.addEventListener('click', toggleDarkLight);

export function toggleDarkLight(): void {
    document.body.classList.toggle('darkmode');
    if (document.body.classList.contains('darkmode')) {
        toggleDarkLightBtn.innerHTML = '<span class="material-symbols-outlined">light_mode</span>';
        privateLog('Mörkt läge på');
    } else {
        toggleDarkLightBtn.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>';
        privateLog('Ljust läge på');
    }
}

export default toggleDarkLight;