const Page = require('../helpers/page')

let page

beforeEach(async () => {
  page = await Page.build()
  await page.goto('http://localhost:8050')
})

afterEach(async () => {
  await page.close()
})

test('Hello, world!', async () => {
  const text = await page.getContentsOf('.container div')
  expect(text).toEqual('Hello, world!')
})
