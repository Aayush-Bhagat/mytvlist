import puppeteer from 'puppeteer'
import cheerio from 'cheerio'

const newShows = [];

const wik = 'https://en.wikipedia.org/wiki/List_of_American_television_programs'
const gog = 'https://www.google.com/advanced_image_search'

async function configureBrowser(URL){
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto(URL);
    return page;
}

async function getTitle(page){
    await page.reload();
    let html = await page.evaluate(() => document.body.innerHTML);
    const $ = cheerio.load(html)

    $('tr', html).each( function() {
        let show = $('td', $(this))
        if(show.length ===  6){
            let showText = show.text().trim()
            let texts = showText.split('\n')
            console.log(texts[0]);

            newShows.push({
                title: texts[0],
                description: '', 
                years: texts[2],
                category: texts[3],
                network: texts[4],
                image: '',
            });
        }
    })
}

async function getImage(page){
    await page.reload()
    for(let i = 0; i < newShows.length; ++i){
        page = await configureBrowser(gog)
        await page.reload()
        await page.keyboard.type(`${newShows[i].title} tv show poster`);
        console.log(newShows[i].title);
        await Promise.all([ 
            page.click('input[type=submit]'), // submit the form
            page.waitForNavigation(), // wait for the page to load
        ]).catch(e => console.log(e)); 
        console.log(page.url())  
        let html = await page.evaluate(() => document.body.innerHTML)
        const $ = cheerio.load(html)
        let img = $('img', html)
        let imgLink = img.attr('src')
        newShows[i].image = imgLink;
        console.log(newShows[i].image);
    }
}

async function monitor(){
    let page = await configureBrowser(wik);
    await getTitle(page);
    page = await configureBrowser(gog);
    await getImage(page);
}

monitor()
export default async () => {
    await monitor()
    return newShows;
};
