import { getPodcasts } from './api';

const podCastContainer = document.querySelector('.section--podlist-pods');

//let i = 0;

export async function createHtml(): Promise<void> {
    const podCasts = await getPodcasts();

    podCasts.programs.forEach((podcast) => {
        const innerArticle = createInnerArticle();
        const textDiv = createTextDiv(innerArticle);

        createImg(podcast, innerArticle);
        createHeader(podcast, textDiv);
        createP(podcast, textDiv);
        createLink(podcast, textDiv);
    });

    function createInnerArticle(): HTMLElement {
        const innerArticle = document.createElement('article');
        innerArticle.className = 'article--inner-article';
        innerArticle.tabIndex = 1;
        podCastContainer.appendChild(innerArticle);
        return innerArticle;
    }

    function createTextDiv() {
        const textDiv = document.createElement('div');
        textDiv.className = 'section--article-div';  
        innerArticle.appendChild(textDiv);
        return textDiv;
    }

    function createLink (podcast: Podcast, container: HTMLElement): void {
        const linkPlacement = document.createElement('a');
        linkPlacement.href = podcast.programurl;
        linkPlacement.textContent = 'Lyssna här';
        container.appendChild(linkPlacement)
    }

    function createImg(podcast: Podcast, container: HTMLElement): void {
        const imgPlacement = document.createElement('img');
        imgPlacement.src = podcast.socialimage;
        imgPlacement.width = 100;
        imgPlacement.height = 100;
        container.appendChild(imgPlacement);
    }

    function createP(podcast: PeriodicWaveConstraints, container: HTMLElement): void {
    const descPlacement = document.createElement('p');
    descPlacement.textContent = podcast.description;
    container.appendChild(descPlacement);
}

function createHeader(podcast: Podcast, container: HTMLElement): void {
    const headerPlacement = document.createElement('h2');
    headerPlacement.textContent = podcast.name;
    container.appendChild(headerPlacement);
}
}

export default createHtml;