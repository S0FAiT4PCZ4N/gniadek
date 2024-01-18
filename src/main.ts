{
let moneydiv = document.getElementById("money");
let gensdiv = document.getElementById("generators");
let facsdiv = document.getElementById("factories");
let mgrdiv = document.getElementById("managers");
let hrdiv = document.getElementById("hrs");

let money = 0;
let gens = 0;
let facs = 0;
let mgrs = 0;
let hrs = 0;

function tick(): void {
    money += gens;
    gens += facs;
    facs += mgrs;
    mgrs += hrs;

    if(moneydiv) {
        moneydiv.innerHTML = money + "";
    }

    if(gensdiv) {
        gensdiv.innerHTML = gens + "";
    }

    if(facsdiv) {
        facsdiv.innerHTML = facs + "";
    }

    if(mgrdiv) {
        mgrdiv.innerHTML = mgrs + "";
    }

    if(hrdiv) {
        hrdiv.innerHTML = hrs + "";
    }
}

function gniadek(): void {
    money++;

    if(moneydiv) {
        moneydiv.innerHTML = money + "";
    }
}

function buygen(): void {
    if(money >= 100) {
        money -= 100;
        gens++;

        if(moneydiv) {
            moneydiv.innerHTML = money + "";
        }

        if(gensdiv) {
            gensdiv.innerHTML = gens + "";
        }
    }
}

function buyfac(): void {
    if(money >= 10000) {
        money -= 10000;
        facs++;

        if(moneydiv) {
            moneydiv.innerHTML = money + "";
        }

        if(facsdiv) {
            facsdiv.innerHTML = facs + "";
        }
    }
}

function buymgr(): void {
    if(money >= 1e6) {
        money -= 1e6;
        mgrs++;

        if(moneydiv) {
            moneydiv.innerHTML = money + "";
        }

        if(mgrdiv) {
            mgrdiv.innerHTML = mgrs + "";
        }
    }
}

function buyhr(): void {
    if(money >= 1e9) {
        money -= 1e9;
        hrs++;

        if(moneydiv) {
            moneydiv.innerHTML = money + "";
        }

        if(hrdiv) {
            hrdiv.innerHTML = hrs + "";
        }
    }
}

setInterval(tick, 1e3);
}
