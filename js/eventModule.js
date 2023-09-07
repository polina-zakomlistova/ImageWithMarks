function updateButtonPosition(idImage, idMark) {
    const imageElement = document.getElementById(idImage);
    const marksElement = document.getElementById(idMark);
    //размеры изображения
    const imageHeight = imageElement.clientHeight;
    const imageWidth = imageElement.clientWidth;

    const marksList = marksElement.children;

    for (let mark of marksList) {
        //отступ в процентах
        const top = mark.dataset.top;
        const left = mark.dataset.left;

        const leftPosition = (imageWidth * left) / 100;
        const topPosition = (imageHeight * top) / 100;

        mark.style.top = `${topPosition}px`;
        mark.style.left = `${leftPosition}px`;
    }
}

function toggeleTextMark(event) {
    if (event.target.tagName === 'BUTTON') {
        const markId = event.target.id;
        const mark = document.getElementById(markId);
        if (mark.innerText === mark.dataset.text) {
            closeMark(mark);
        } else {
            openMark(mark, mark.dataset.text);
        }
    } else {
        const marksElementAll =
            document.getElementsByClassName('imageBlock-marks');
        for (let i = 0; i < marksElementAll.length; i++) {
            let marks = marksElementAll[i];
            for (const mark of marks.children) {
                closeMark(mark);
            }
        }
    }
}

function openMark(markEl, textMark = '+') {
    markEl.innerText = textMark;
    markEl.classList.add('mark--open');
}

function closeMark(markEl) {
    markEl.innerText = '+';
    markEl.classList.remove('mark--open');
}

export { updateButtonPosition, toggeleTextMark };
