const color = {
    green: '#6ABF4B',
    blue: '#3877EE',
};
const imagesWithMarks = [
    {
        id: 1,
        url: '../img/img1.png',
        marks: [
            {
                id: 1,
                top: 25, //процент отступа от верхнего края контейнера
                left: 30, //процент отступа от левого края контейнера
                text: 'text1 text1 text1 text1',
                color: '#3877EE',
            },
            { id: 2, top: 45, left: 35, text: 'text2', color: color.green },
            { id: 3, top: 70, left: 20, text: 'text3', color: color.blue },
            { id: 4, top: 38, left: 58, text: 'text4', color: color.green },
            { id: 5, top: 58, left: 53, text: 'text5', color: color.blue },
            { id: 6, top: 75, left: 55, text: 'text6', color: color.green },
            { id: 7, top: 63, left: 65, text: 'text7', color: color.green },
            { id: 8, top: 20, left: 70, text: 'text8', color: color.blue },
            { id: 9, top: 45, left: 75, text: 'text9', color: color.blue },
            { id: 10, top: 68, left: 83, text: 'text10', color: color.blue },
        ],
    },
];

function getImagesWithMarksFromId(id) {
    return imagesWithMarks.find((img) => img.id === id);
}

export { imagesWithMarks, getImagesWithMarksFromId };
