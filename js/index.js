import { getImagesWithMarksFromId } from './dataModule.js';
import { createMarkButton, displayImage } from './displayModule.js';
import { updateButtonPosition, toggeleTextMark } from './eventModule.js';
import { idImageBlock, idImage, idMarks, idMark } from './utilsModule.js';

function initApp() {
    const imageElement = document.getElementById(idImage(1));
    const imageBlockElement = document.getElementById(idImageBlock(1));

    window.addEventListener('resize', () =>
        updateButtonPosition(idImage(1), idMarks(1))
    );
    imageElement.addEventListener('load', () =>
        updateButtonPosition(idImage(1), idMarks(1))
    );

    imageBlockElement.addEventListener('click', (event) =>
        toggeleTextMark(event)
    );

    const imageWithMarks = getImagesWithMarksFromId(1);

    if (imageWithMarks) {
        const idImageEl = idImage(imageWithMarks.id);
        displayImage(idImageEl, imageWithMarks.url);

        for (const mark of imageWithMarks.marks) {
            const markData = {
                id: idMark(mark.id),
                top: mark.top,
                left: mark.left,
                text: mark.text,
                color: mark.color,
            };

            const idMarksEl = idMarks(imageWithMarks.id);

            createMarkButton(idMarksEl, markData);
        }
    }
}

initApp();
