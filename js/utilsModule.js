const idImageBlock = (id) => {
    return `imageBlock-${id}`;
};

const idImage = (id) => {
    return `image-${id}`;
};

const idMarks = (id) => {
    return `marks-${id}`;
};

const idMark = (id) => {
    return `mark-${id}`;
};

const textMark = (text) => {
    return `- ${text}`;
};

export { idImageBlock, idImage, idMarks, idMark, textMark };
