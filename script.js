// coded by Mohammad Zefri
// contact me on mdzefri.code@gmail.com


let wildCard = document.querySelectorAll("*");
wildCard.forEach((ele) => ele.style.cssText = `-webkit-tap-highlight-color: transparent; box-sizing: border-box; user-select: none; margin: 0px; padding: 0px;`);


let con = document.createElement("div");
con.setAttribute("id", "con");

let selectCon = document.createElement("div");
selectCon.setAttribute("id", "select-con");

let select = document.createElement("div");

let title = document.createElement("div");
title.setAttribute("id", "title");
let arrow = document.createElement("div");
arrow.appendChild(document.createTextNode("▾"));

let textOptionOne = document.createElement("div");
textOptionOne.appendChild(document.createTextNode("ein/kein/mein,dein,ihr.. + Adj. + Nomen"));
textOptionOne.style.cssText = "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;";

title.appendChild(textOptionOne);
title.appendChild(arrow);

let optionOne = document.createElement("div");
optionOne.setAttribute("id", "option-1");
optionOne.appendChild(document.createTextNode("ein/kein/mein,dein,ihr.. + Adj. + Nomen"));



let optionTwo = document.createElement("div");
optionTwo.setAttribute("id", "option-2");
optionTwo.appendChild(document.createTextNode("der/die/das + Adj. + Nomen"));

let optionThree = document.createElement("div");
optionThree.setAttribute("id", "option-3");
optionThree.appendChild(document.createTextNode("Adj. + Nomen"));

let optionFour = document.createElement("div");
optionFour.appendChild(document.createTextNode("ein/kein/mein,dein,ihr.. + Nomen"));
optionFour.setAttribute("id", "option-4");


let options = [optionOne, optionTwo, optionThree, optionFour];



title.style.cssText = "display: flex; flex-direction: row; justify-content: space-between; cursor: pointer; padding: 7px 0px;";
selectCon.style.cssText = "background-color: rgb(238 233 233); border: none; margin-top: 37px;";
select.style.cssText = "display: none;";


let dispalyNone = true;
title.addEventListener("click", function(){
    if (dispalyNone) {
        select.style.display = "block";
        dispalyNone = false;
    } else {
        select.style .display = "none";
        dispalyNone = true;
    };
});



selectCon.appendChild(title);
selectCon.appendChild(select);
con.appendChild(selectCon);



let nav = document.createElement("div");
nav.setAttribute("id", "nav");

let sentencesCon = document.createElement("div");
sentencesCon.setAttribute("id", "sens-con");

let adj = "gut";
let a = document.createElement("div");
a.appendChild(document.createTextNode(""));
let b = document.createElement("div");
b.appendChild(document.createTextNode(""));
let c = document.createElement("div");
c.appendChild(document.createTextNode(""));
let d = document.createElement("div");
d.appendChild(document.createTextNode(""));

let sens = [a, b, c, d];

sens.forEach(function(ele){
    ele.style.cssText = "padding: 5px 0px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;";
    sentencesCon.appendChild(ele);
});

con.appendChild(nav);
con.appendChild(sentencesCon);

let m = document.createElement("div");
let f = document.createElement("div");
let n = document.createElement("div");
let pl = document.createElement("div");
m.setAttribute("id", "m");
f.setAttribute("id", "f");
n.setAttribute("id", "n");
pl.setAttribute("id", "pl");
m.appendChild(document.createTextNode("m."));
f.appendChild(document.createTextNode("f."));
n.appendChild(document.createTextNode("n."));
pl.appendChild(document.createTextNode("pl."));







let navBtns = [m, f, n, pl];


navBtns.forEach(function(ele){
    ele.style.cssText = "width: calc(100% / 4); text-align: center; padding: 13px 0px; cursor: pointer;";
    nav.appendChild(ele);
});



options.forEach(function(el){
    select.appendChild(el);
    el.style.cssText = "cursor: pointer; padding: 7px 0px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;";
    el.addEventListener("mouseenter", function(){
        el.style.backgroundColor = "rgb(160, 160, 160)";
    });
    el.addEventListener("mouseleave", function(){
        el.style.backgroundColor = "initial";
    });
    el.addEventListener("click", function(){
        if (textOptionOne.innerHTML !== el.innerHTML) {
            textOptionOne.innerHTML = el.innerHTML;
        };
        select.style.display = "none";
        dispalyNone = true;
    });
    el.addEventListener("click", function(){
        navBtns.forEach(function(b){
            if (getComputedStyle(b).backgroundColor === "rgb(160, 160, 160)") {
                b.click();
            };
        });
    });
});



navBtns.forEach(function(ele){
    ele.addEventListener("click", function(){
        navBtns.forEach(function(e){
            e.style.backgroundColor = "rgb(96 96 96)";
        });
        this.style.backgroundColor = "rgb(160 160 160)";
        if (textOptionOne.innerHTML === "ein/kein/mein,dein,ihr.. + Adj. + Nomen") {
            if (ele.innerHTML === "m.") {
                a.innerHTML = `<span style="color: yellow;">N.</span> ein ${adj}<span style="text-decoration: underline;">er</span> Mann`;
                b.innerHTML = `<span style="color: yellow;">A.</span> ein<span style="text-decoration: underline;">en</span> ${adj}<span style="text-decoration: underline;">en</span> Mann`;
                c.innerHTML = `<span style="color: yellow;">D.</span> ein<span style="text-decoration: underline;">em</span> ${adj}<span style="text-decoration: underline;">en</span> Mann`;
                d.innerHTML = `<span style="color: yellow;">G.</span> ein<span style="text-decoration: underline;">es</span> ${adj}<span style="text-decoration: underline;">en</span> Mann<span style="text-decoration: underline;">es</span>`;
            } else if (ele.innerHTML === "f.") {
                a.innerHTML = `<span style="color: yellow;">N.</span> ein<span style="text-decoration: underline;">e</span> ${adj}<span style="text-decoration: underline;">e</span> Frau`;
                b.innerHTML = `<span style="color: yellow;">A.</span> ein<span style="text-decoration: underline;">e</span> ${adj}<span style="text-decoration: underline;">e</span> Frau`;
                c.innerHTML = `<span style="color: yellow;">D.</span> ein<span style="text-decoration: underline;">er</span> ${adj}<span style="text-decoration: underline;">en</span> Frau`;
                d.innerHTML = `<span style="color: yellow;">G.</span> ein<span style="text-decoration: underline;">er</span> ${adj}<span style="text-decoration: underline;">en</span> Frau`;
            } else if (ele.innerHTML === "n.") {
                a.innerHTML = `<span style="color: yellow;">N.</span> ein ${adj}<span style="text-decoration: underline;">es</span> Kind`;
                b.innerHTML = `<span style="color: yellow;">A.</span> ein ${adj}<span style="text-decoration: underline;">es</span> Kind`;
                c.innerHTML = `<span style="color: yellow;">D.</span> ein<span style="text-decoration: underline;">em</span> ${adj}<span style="text-decoration: underline;">en</span> Kind`;
                d.innerHTML = `<span style="color: yellow;">G.</span> ein<span style="text-decoration: underline;">es</span> ${adj}<span style="text-decoration: underline;">en</span> Kindes`;
            } else if (ele.innerHTML === "pl.") {
                a.innerHTML = `<span style="color: yellow;">N.</span> kein<span style="text-decoration: underline;">e</span> ${adj}<span style="text-decoration: underline;">en</span> Leute`;
                b.innerHTML = `<span style="color: yellow;">A.</span> kein<span style="text-decoration: underline;">e</span> ${adj}<span style="text-decoration: underline;">en</span> Leute`;
                c.innerHTML = `<span style="color: yellow;">D.</span> kein<span style="text-decoration: underline;">en</span> ${adj}<span style="text-decoration: underline;">en</span> Leute<span style="text-decoration: underline;">n</span>`;
                d.innerHTML = `<span style="color: yellow;">G.</span> kein<span style="text-decoration: underline;">er</span> ${adj}<span style="text-decoration: underline;">en</span> Leute`;
            };
        } else if (textOptionOne.innerHTML === "der/die/das + Adj. + Nomen") {
            if (ele.innerHTML === "m.") {
                a.innerHTML = `<span style="color: yellow;">N.</span> der ${adj}<span style="text-decoration: underline;">e</span> Mann`;
                b.innerHTML = `<span style="color: yellow;">A.</span> den ${adj}<span style="text-decoration: underline;">en</span> Mann`;
                c.innerHTML = `<span style="color: yellow;">D.</span> dem ${adj}<span style="text-decoration: underline;">en</span> Mann`;
                d.innerHTML = `<span style="color: yellow;">G.</span> des ${adj}<span style="text-decoration: underline;">en</span> Mann<span style="text-decoration: underline;">es</span>`;
            } else if (ele.innerHTML === "f.") {
                a.innerHTML = `<span style="color: yellow;">N.</span> die ${adj}<span style="text-decoration: underline;">e</span> Frau`;
                b.innerHTML = `<span style="color: yellow;">A.</span> die ${adj}<span style="text-decoration: underline;">e</span> Frau`;
                c.innerHTML = `<span style="color: yellow;">D.</span> der ${adj}<span style="text-decoration: underline;">en</span> Frau`;
                d.innerHTML = `<span style="color: yellow;">G.</span> der ${adj}<span style="text-decoration: underline;">en</span> Frau`;
            } else if (ele.innerHTML === "n.") {
                a.innerHTML = `<span style="color: yellow;">N.</span> das ${adj}<span style="text-decoration: underline;">e</span> Kind`;
                b.innerHTML = `<span style="color: yellow;">A.</span> das ${adj}<span style="text-decoration: underline;">e</span> Kind`;
                c.innerHTML = `<span style="color: yellow;">D.</span> dem ${adj}<span style="text-decoration: underline;">en</span> Kind`;
                d.innerHTML = `<span style="color: yellow;">G.</span> des ${adj}<span style="text-decoration: underline;">en</span> Kind<span style="text-decoration: underline;">es</span>`;
            } else if (ele.innerHTML === "pl.") {
                a.innerHTML = `<span style="color: yellow;">N.</span> die ${adj}<span style="text-decoration: underline;">en</span> Leute`;
                b.innerHTML = `<span style="color: yellow;">A.</span> die ${adj}<span style="text-decoration: underline;">en</span> Leute`;
                c.innerHTML = `<span style="color: yellow;">D.</span> den ${adj}<span style="text-decoration: underline;">en</span> Leute<span style="text-decoration: underline;">n</span>`;
                d.innerHTML = `<span style="color: yellow;">G.</span> der ${adj}<span style="text-decoration: underline;">en</span> Leute`;
            };
        } else if (textOptionOne.innerHTML === "Adj. + Nomen") {
            if (ele.innerHTML === "m.") {
                a.innerHTML = `<span style="color: yellow;">N.</span> ${adj}<span style="text-decoration: underline;">er</span> Mann`;
                b.innerHTML = `<span style="color: yellow;">A.</span> ${adj}<span style="text-decoration: underline;">en</span> Mann`;
                c.innerHTML = `<span style="color: yellow;">D.</span> ${adj}<span style="text-decoration: underline;">em</span> Mann`;
                d.innerHTML = `<span style="color: yellow;">G.</span> ${adj}<span style="text-decoration: underline;">en</span> Mann<span style="text-decoration: underline;">es</span>`;
            } else if (ele.innerHTML === "f.") {
                a.innerHTML = `<span style="color: yellow;">N.</span> ${adj}<span style="text-decoration: underline;">e</span> Frau`;
                b.innerHTML = `<span style="color: yellow;">A.</span> ${adj}<span style="text-decoration: underline;">e</span> Frau`;
                c.innerHTML = `<span style="color: yellow;">D.</span> ${adj}<span style="text-decoration: underline;">er</span> Frau`;
                d.innerHTML = `<span style="color: yellow;">G.</span> ${adj}<span style="text-decoration: underline;">er</span> Frau`;
            } else if (ele.innerHTML === "n.") {
                a.innerHTML = `<span style="color: yellow;">N.</span>  ${adj}<span style="text-decoration: underline;">es</span> Kind`;
                b.innerHTML = `<span style="color: yellow;">A.</span>  ${adj}<span style="text-decoration: underline;">es</span> Kind`;
                c.innerHTML = `<span style="color: yellow;">D.</span>  ${adj}<span style="text-decoration: underline;">em</span> Kind`;
                d.innerHTML = `<span style="color: yellow;">G.</span>  ${adj}<span style="text-decoration: underline;">en</span> Kind<span style="text-decoration: underline;">es</span>`;
            } else if (ele.innerHTML === "pl.") {
                a.innerHTML = `<span style="color: yellow;">N.</span> ${adj}<span style="text-decoration: underline;">e</span> Leute`;
                b.innerHTML = `<span style="color: yellow;">A.</span> ${adj}<span style="text-decoration: underline;">e</span> Leute`;
                c.innerHTML = `<span style="color: yellow;">D.</span> ${adj}<span style="text-decoration: underline;">en</span> Leute<span style="text-decoration: underline;">n</span>`;
                d.innerHTML = `<span style="color: yellow;">G.</span> ${adj}<span style="text-decoration: underline;">er</span> Leute`;
            };
        } else if (textOptionOne.innerHTML === "ein/kein/mein,dein,ihr.. + Nomen") {
            if (ele.innerHTML === "m.") {
                a.innerHTML = `<span style="color: yellow;">N.</span> ein Mann`;
                b.innerHTML = `<span style="color: yellow;">A.</span> ein<span style="text-decoration: underline;">en</span> Mann`;
                c.innerHTML = `<span style="color: yellow;">D.</span> ein<span style="text-decoration: underline;">em</span> Mann`;
                d.innerHTML = `<span style="color: yellow;">G.</span> ein<span style="text-decoration: underline;">es</span> Mann<span style="text-decoration: underline;">es</span>`;
            } else if (ele.innerHTML === "f.") {
                a.innerHTML = `<span style="color: yellow;">N.</span> ein<span style="text-decoration: underline;">e</span> Frau`;
                b.innerHTML = `<span style="color: yellow;">A.</span> ein<span style="text-decoration: underline;">e</span> Frau`;
                c.innerHTML = `<span style="color: yellow;">D.</span> ein<span style="text-decoration: underline;">er</span> Frau`;
                d.innerHTML = `<span style="color: yellow;">G.</span> ein<span style="text-decoration: underline;">er</span> Frau`;
            } else if (ele.innerHTML === "n.") {
                a.innerHTML = `<span style="color: yellow;">N.</span>  ein Kind`;
                b.innerHTML = `<span style="color: yellow;">A.</span>  ein Kind`;
                c.innerHTML = `<span style="color: yellow;">D.</span>  ein<span style="text-decoration: underline;">em</span> Kind`;
                d.innerHTML = `<span style="color: yellow;">G.</span>  ein<span style="text-decoration: underline;">es</span> Kind<span style="text-decoration: underline;">es</span>`;
            } else if (ele.innerHTML === "pl.") {
                a.innerHTML = `<span style="color: yellow;">N.</span> kein<span style="text-decoration: underline;">e</span> Leute`;
                b.innerHTML = `<span style="color: yellow;">A.</span> kein<span style="text-decoration: underline;">e</span> Leute`;
                c.innerHTML = `<span style="color: yellow;">D.</span> kein<span style="text-decoration: underline;">en</span> Leute<span style="text-decoration: underline;">n</span>`;
                d.innerHTML = `<span style="color: yellow;">G.</span> kein<span style="text-decoration: underline;">er</span> Leute`;
            };
        };
    });
});

document.body.style.cssText = "background-color: rgb(238 233 233);";
con.style.cssText = "width: 85%; margin: 9px auto 0px; background-color: rgb(160 160 160); font-family: sans-serif; user-select: none; border: none;";
nav.style.cssText = "background-color: rgb(96 96 96); display: flex; flex-direction: row; justify-content: space-between;";
sentencesCon.style.cssText = "display: flex; flex-direction: column; padding: 9px 13px;";


document.body.appendChild(con);

m.click();



