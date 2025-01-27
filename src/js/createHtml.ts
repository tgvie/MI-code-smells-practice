import { getPodcasts, Podcast } from './api';
import { privateLog } from './logger';

const podCastContainer = document.querySelector('.podlist__pods')!;
const podsErrorMsg = document.querySelector('#podsError') as HTMLElement;

export async function createHtml(): Promise<void> {
    privateLog('Skapar HTML-innehåll för podcaster.');

    try {
       const podCasts = await getPodcasts();

        podCasts.programs.forEach((podcast: Podcast) => {
            const innerArticle = createInnerArticle();
            const textDiv = createTextDiv(innerArticle);

            createHeader(podcast, textDiv);
            createP(podcast, textDiv);
            createImg(podcast, innerArticle);
            createLink(podcast, textDiv);
        }); 
    } catch (error) {
        privateLog('Fel vid hämtning av podcaster: ', error);

        podsErrorMsg.textContent = 'Kunde inte ladda podcast-listan. Försök igen senare.';
    }
}


function createInnerArticle(): HTMLElement {
    const innerArticle = document.createElement('article');
    innerArticle.className = 'podlist__pods-article';
    innerArticle.tabIndex = 0;
    podCastContainer.appendChild(innerArticle);
    return innerArticle;
}

function createHeader(podcast: Podcast, container: HTMLElement): void {
    const headerPlacement = document.createElement('h2');
    headerPlacement.textContent = podcast.name;
    container.appendChild(headerPlacement);
}

function createTextDiv(innerArticle: HTMLElement): HTMLElement {
    const textDiv = document.createElement('div');
    textDiv.className = 'pods-article__div';  
    innerArticle.appendChild(textDiv);
    return textDiv;
}

function createP(podcast: Podcast, container: HTMLElement): void {
    const descPlacement = document.createElement('p');
    descPlacement.textContent = podcast.description;
    container.appendChild(descPlacement);
}

function createLink (podcast: Podcast, container: HTMLElement): void {
    const linkPlacement = document.createElement('a');
    linkPlacement.href = podcast.programurl;
    linkPlacement.textContent = 'Lyssna här';
    container.appendChild(linkPlacement);
}

function createImg(podcast: Podcast, container: HTMLElement): void {
    const imgPlacement = document.createElement('img');
    imgPlacement.src = podcast.socialimage;
    imgPlacement.width = 100;
    imgPlacement.height = 100;
    imgPlacement.alt = `Bild för podcasten ${podcast.name}. Den handlar om: ${podcast.description}`;
    container.appendChild(imgPlacement);
}

export default createHtml;