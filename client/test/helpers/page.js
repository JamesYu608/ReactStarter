const puppeteer = require('puppeteer')

class CustomPage {
  static async build () {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox']
    })

    const page = await browser.newPage()
    const customPage = new CustomPage(page)

    return new Proxy(customPage, {
      get: function (target, property) {
        return customPage[property] || browser[property] || page[property]
      }
    })
  }

  constructor (page) {
    this.page = page
  }

  async getContentsOf (selector) {
    return this.page.$eval(selector, el => el.innerHTML)
  }
}

module.exports = CustomPage
