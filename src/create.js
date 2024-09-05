const make={
    createParagraph(content){
        const paragraph=document.createElement("p");
        paragraph.textContent=content;
        return paragraph;
    },
    
    createH1(content){
        const paragraph=document.createElement("h1");
        paragraph.textContent=content;
        return paragraph;
    },
    
    createH2(content){
        const paragraph=document.createElement("h2");
        paragraph.textContent=content;
        return paragraph;
    },
    
    createH3(content){
        const paragraph=document.createElement("h3");
        paragraph.textContent=content;
        return paragraph;
    },

    createUl(...li){
        const ul=document.createElement("ul");
        for (let i=0; i<li.length; i++){
            const list=document.createElement("li");
            list.textContent=li[i];
            ul.appendChild(list);
        }
        return ul;
    },
}


export default make;