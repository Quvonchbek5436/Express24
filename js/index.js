

console.log(dataFirst)
const row1=document.querySelector('#row1')
const row2=document.querySelector('#row2')
const body=document.getElementsByTagName('body')[0];

const getElement = (elementName, attrs = {}, father) => {
    const element = document.createElement(elementName);

    for (const attrsKey in attrs) {
        element[attrsKey] = attrs[attrsKey];
    }

    father && father.append(element);

    return element;
};




const renderQilish = () => {
    console.log("salom")
    row1.innerHTML="";
    row2.innerHTML="";
    dataFirst.map((item)=>{
        const cardOne=getElement('div',{className: 'col-xs-12 col-md-6 col-lg-4 col-xl-3 p-3',innerHTML:''},row1);
        const cardOneCard=getElement('div',{className: 'cards',innerHTML:''},cardOne);
        const cardOneCardRasm=getElement('div',{className: 'rasm',innerHTML:''},cardOneCard);
        const cardOneCardRasmImg=getElement('img',{src:`${item.imgUrl}`},cardOneCardRasm);
        const cardOneCardRasmDiv=getElement('div',{className:'qoshish',innerHTML:''},cardOneCardRasm);
        const cardOneCardRasmDivBtn=getElement('button',{className:'btn btn-warning',innerHTML:"Qo\'shish"},cardOneCardRasmDiv);
        const cardOneCardH4=getElement('h4',{className: 'my-2 mx-3',innerHTML:`${item.name}`},cardOneCard);
        const cardOneCardSpan=getElement('span',{className: 'my-2 mx-3',innerHTML:`${item.narxi}`},cardOneCard);
    })
    dataSecond.map((item)=>{
        const cardTwo=getElement('div',{className: 'col-xs-12 col-md-6 col-lg-4 col-xl-3 p-3',innerHTML:''},row2);
        const cardTwoCard=getElement('div',{className: 'cards',innerHTML:''},cardTwo);
        const cardTwoCardRasm=getElement('div',{className: 'rasm',innerHTML:''},cardTwoCard);
        const cardTwoCardRasmImg=getElement('img',{src:`${item.imgUrl}`},cardTwoCardRasm);
        const cardTwoCardRasmDiv=getElement('div',{className:'qoshish',innerHTML:''},cardTwoCardRasm);
        const cardTwoCardRasmDivBtn=getElement('button',{className:'btn btn-warning',innerHTML:"Qo\'shish"},cardTwoCardRasmDiv);
        const cardTwoCardH4=getElement('h4',{className: 'my-2 mx-3',innerHTML:`${item.name}`},cardTwoCard);
        const cardTwoCardSpan=getElement('span',{className: 'my-2 mx-3',innerHTML:`${item.narxi}`},cardTwoCard);
    })



}
console.log(dataSecond)
body.onload = () => {
    console.log("xayir")
    renderQilish();
}