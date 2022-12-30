const puppeteer = require('puppeteer');
const express = require('express');
const router = express.Router();
async function scrapeProduct(url){
    const browser = await puppeteer.launch()
    const page = await browser.newPage();
    await page.goto(url);
    console.log(url);
    const [el]= await page.$x('//*[@id="yw1"]/table/tbody') //destructring
    console.log(el);
    const trel = await el.$$('tr');
    console.log(trel.length);
    for (let i = 0; i <  trel.length; i++) {
        console.log("e_inner_bas");
        const inner_trel = await (await trel[i].getProperty('textContent')).jsonValue();

        console.log(inner_trel);
        console.log("e_inner_Son");
    }


    const treltxt = await trel.getProperty('textContent');
    const trelrawTxt = await treltxt.jsonValue();
    console.log("ebrar " + trelrawTxt + "guler");
    for (let i = 0; i <  el.getProperty('tr').length; i++) {
        console.log("e_inner_bas");
        const inner_el = await (await el[i].getProperty('textContent'));
        console.log(inner_el);
        console.log("e_inner_Son");
      }
    const txt = await el.getProperty('textContent');
    const rawTxt = await txt.jsonValue();
    console.log("eboş");
    console.log({rawTxt});

    browser.close();
}
//*[@id="yw1"]/table/tbody/tr[7]/td[1]/table/tbody/tr[1]/td[2]/a
//*[@id="yw1"]/table/tbody/tr[4]/td[1]/table/tbody/tr[1]/td[2]/a
//*[@id="yw1"]/table/tbody/tr[11]/td[1]/table/tbody/tr[1]/td[2]/a
//*[@id="yw1"]/table/tbody/tr[1]/td[1]/table/tbody/tr[1]/td[2]/a


scrapeProduct("https://www.transfermarkt.us/super-lig/schiedsrichter/wettbewerb/TR1/saison_id/2022");

