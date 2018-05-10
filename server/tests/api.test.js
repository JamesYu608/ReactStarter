import axios from 'axios'

describe('api', () => {
  test('/', async () => {
    const result = await axios.get('http://localhost:8050/api')
    expect(result.data.greeting).toEqual('hello, world!')
  })
})
