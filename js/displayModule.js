import { textMark } from './utilsModule.js';

function createMarkButton(idMarks, markData) {
    const marksElement = document.getElementById(idMarks);

    const newMarkButton = document.createElement('button');
    newMarkButton.type = 'button';
    newMarkButton.className = 'mark';
    newMarkButton.id = markData.id;
    newMarkButton.innerText = '+';
    //data-атрибуты
    newMarkButton.dataset.top = markData.top;
    newMarkButton.dataset.left = markData.left;
    newMarkButton.dataset.text = textMark(markData.text);
    //стили
    newMarkButton.style.backgroundColor = markData.color;

    marksElement.appendChild(newMarkButton);

    return newMarkButton.id;
}

function displayImage(idImage, url) {
    const image = document.getElementById(idImage);
    image.src = url;
}
export { createMarkButton, displayImage };
