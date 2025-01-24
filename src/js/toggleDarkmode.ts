const toggleLightModeButton = document.querySelector('.podlist__button--toggle')!;
toggleLightModeButton.addEventListener('click', toggleLightMode);

export function toggleLightMode(): void {
    document.body.classList.toggle('darkmode');
    if (document.body.classList.contains('darkmode')) {
        toggleLightModeButton.innerHTML = 'Välj mörkt läge';
    } else {
        toggleLightModeButton.innerHTML = 'Välj ljust läge';
    }
}

export default toggleLightMode;