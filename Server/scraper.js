const puppeteer = require('puppeteer');
const $ = require('cheerio');

const url = 'https://en.wikipedia.org/wiki/List_of_American_television_programs'

async function configureBrowser(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto(url);
    return page;
}

async function getTitle(page){
    await page.reload();
    let html = await page.evaluate(() => document.body.innerHTML);

    $('tr', html).each( function() {
        let show = $('td', $(this))
        if(show.length ===  6){
            let showText = show.text().trim()
            let texts = showText.split('\n')
            console.log("title: " +  texts[0]);
            console.log("year: " + texts[2]);
            console.log("catergory: " + texts[3]);
            console.log("Network: " + texts[4]);
            console.log("\n")
        }
    })
}

async function monitor(){
    let page = await configureBrowser();
    await getTitle(page);
}

monitor()