"use strict";
let moneydiv = document.getElementById("money");
let gensdiv = document.getElementById("generators");
let facsdiv = document.getElementById("factories");
let mgrdiv = document.getElementById("managers");
let hrdiv = document.getElementById("hrs");
{
    let money = 0;
    let gens = 0;
    let facs = 0;
    let mgrs = 0;
    let hrs = 0;
    let savebtn = document.getElementById("save");
    if (savebtn) {
        savebtn.onclick = save;
    }
    let loadbtn = document.getElementById("load");
    if (loadbtn) {
        loadbtn.onclick = load;
    }
    let gniadekbtn = document.getElementById("gniadek");
    if (gniadekbtn) {
        gniadekbtn.onclick = gniadek;
    }
    let buygenbtn = document.getElementById("buygen");
    if (buygenbtn) {
        buygenbtn.onclick = buygen;
    }
    let buyfacbtn = document.getElementById("buyfac");
    if (buyfacbtn) {
        buyfacbtn.onclick = buyfac;
    }
    let buymgrbtn = document.getElementById("buymgr");
    if (buymgrbtn) {
        buymgrbtn.onclick = buymgr;
    }
    let buyhrbtn = document.getElementById("buyhr");
    if (buyhrbtn) {
        buyhrbtn.onclick = buyhr;
    }
    function tick() {
        money += gens;
        gens += facs;
        facs += mgrs;
        mgrs += hrs;
        if (moneydiv) {
            moneydiv.innerHTML = money + "";
        }
        if (gensdiv) {
            gensdiv.innerHTML = gens + "";
        }
        if (facsdiv) {
            facsdiv.innerHTML = facs + "";
        }
        if (mgrdiv) {
            mgrdiv.innerHTML = mgrs + "";
        }
        if (hrdiv) {
            hrdiv.innerHTML = hrs + "";
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
    function buymgr() {
        if (money >= 1e6) {
            money -= 1e6;
            mgrs++;
            if (moneydiv) {
                moneydiv.innerHTML = money + "";
            }
            if (mgrdiv) {
                mgrdiv.innerHTML = mgrs + "";
            }
        }
    }
    function buyhr() {
        if (money >= 1e9) {
            money -= 1e9;
            hrs++;
            if (moneydiv) {
                moneydiv.innerHTML = money + "";
            }
            if (hrdiv) {
                hrdiv.innerHTML = hrs + "";
            }
        }
    }
    function addMoney() {
        money = 0;
        gens = 0;
        facs = 0;
        mgrs = 0;
        hrs = 0;
    }
    function save() {
        let data = {
            money: money,
            gens: gens,
            facs: facs,
            mgrs: mgrs,
            hrs: hrs,
        };
        let json = JSON.stringify(data);
        json = btoa(json);
        json += "32";
        let file = new Blob([json], { type: 'application/json' });
        let a = document.createElement('a');
        let filename = prompt("Podaj nazwę save'a");
        a.download = filename + ".gnd";
        a.href = window.URL.createObjectURL(file);
        a.click();
    }
    function load() {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = _ => {
            if (!input.files) {
                return;
            }
            let file = Array.from(input.files)[0];
            let fileReader = new FileReader();
            fileReader.onload = () => {
                let json = fileReader.result;
                try {
                    json = json + "";
                    let check = json.slice(json.length - 2);
                    if (check != "32") {
                        return;
                    }
                    json = json.slice(0, json.length - 2);
                    json = atob(json);
                    let data = JSON.parse(json);
                    money = data.money;
                    gens = data.gens;
                    facs = data.facs;
                    mgrs = data.mgrs;
                    hrs = data.hrs;
                    if (moneydiv) {
                        moneydiv.innerHTML = money + "";
                    }
                    if (gensdiv) {
                        gensdiv.innerHTML = gens + "";
                    }
                    if (facsdiv) {
                        facsdiv.innerHTML = facs + "";
                    }
                    if (mgrdiv) {
                        mgrdiv.innerHTML = mgrs + "";
                    }
                    if (hrdiv) {
                        hrdiv.innerHTML = hrs + "";
                    }
                }
                catch (e) {
                    console.error(e);
                }
            };
            fileReader.readAsBinaryString(file);
        };
        input.click();
    }
    setInterval(tick, 1e3);
}
