import puppeteer from 'puppeteer'
import $ from 'cheerio'

const newShows = [];

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

            newShows.push({
                title: texts[0],
                description: '', 
                years: texts[2],
                category: texts[3],
                network: texts[4],
            });
        }
    })
}

async function monitor(){
    let page = await configureBrowser();
    await getTitle(page);
}

export default async () => {
    await monitor()
    return newShows;
};
