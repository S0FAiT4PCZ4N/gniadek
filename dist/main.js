"use strict";
let moneydiv = document.getElementById("money");
let gensdiv = document.getElementById("generators");
let facsdiv = document.getElementById("factories");
let money = 0;
let gens = 0;
let facs = 0;
function tick() {
    money += gens;
    gens += facs;
    if (moneydiv) {
        moneydiv.innerHTML = money + "";
    }
    if (gensdiv) {
        gensdiv.innerHTML = gens + "";
    }
    if (facsdiv) {
        facsdiv.innerHTML = facs + "";
    }
}
function gniadek() {
    money++;
    if (moneydiv) {
        moneydiv.innerHTML = money + "";
    }
}
function buygen() {
    if (money >= 100) {
        money -= 100;
        gens++;
        if (moneydiv) {
            moneydiv.innerHTML = money + "";
        }
        if (gensdiv) {
            gensdiv.innerHTML = gens + "";
        }
    }
}
function buyfac() {
    if (money >= 10000) {
        money -= 10000;
        facs++;
        if (moneydiv) {
            moneydiv.innerHTML = money + "";
        }
        if (facsdiv) {
            facsdiv.innerHTML = facs + "";
        }
    }
}
setInterval(tick, 1e3);
