const orderTotal = require('../components/dragon')

it('works', () => {
  expect(3+3).toBe(6)
})

it('Qauntity', () => {
  expect(orderTotal({
    items: [
      {
        'name': 'Dragon candy',
        'price': 2,
        'quantity': 3
      }
    ]
  })).toBe(6)
})

it('No quantity specified', () => {
  expect(orderTotal({
    items: [
      {
        'name': 'Dragon candy',
        'price': 2
      }
    ]
  })).toBe(2)
})
