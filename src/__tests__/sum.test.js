// A test suite refers to a single .test.js file
// A test refers to a test function

const sum = require('../components/sum')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3)
})

// Expect(2 + 2) returns an "expectation" object,
// to which we normally call matchers (toBe) on
test('two plus two equals 4', () => {
  expect(2 + 2).toBe(4)
})

// toBe tests for exact equality; toEqual checks the
// value of an object instead
test('3 + 5 = 8', () => {
  expect(3 + 5).toBe(8)
})

test('object assignment', () => {
  const data = {one: 1}
  data['two'] = 2
  expect(data).toEqual({one: 1, two: 2})
})

test('adding positive numbers != 0', () => {
  let sum = 0
  for (let i = 0; i <= 3; i++) {
    sum ++
  }
  expect(sum).toBe(4)
})

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

test('2 + 2', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeLessThanOrEqual(10)
  expect(value).toBeLessThan(6)
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

test('add floating point numbers', () => {
  const value = 0.1 + 0.2
  expect(value).toBeCloseTo(0.3)
})

// toMatch() tests regular expressions in strings
test('there is no e in Ralph', () => {
  expect('Ralph').not.toMatch(/e/)
  expect('Ralph').toMatch(/al/)
})

// toContain() to check if an array contains something
const shoppingList = [
  'diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'
]

test('shopping list has milk in it, not beer or sugar', () => {
  expect(shoppingList).toContain('milk')
  expect(shoppingList).not.toContain('beer')
  expect(shoppingList).not.toContain('sugar')
})

// Check to see if a function throws a particular error
function compileAndroidCode() {
  throw new ConfigError('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow()
})

// You want to check if one method executes BEFORE or AFTER another method

    // beforeEach(() => {
    //   initializeCityDatabase()
    // })
    // afterEach(() => {
    //   clearCityDatabase()
    // })

    // beforeAll(() => {
    //   return initializeCityDatabase()
    // })
    // afterAll(() => {
    //   return clearCityDatabase()
    // })

function forEach(items, callback) {
  for (let i = 0; i < items.length; i++) {
    callback(items[i])
  }
}
const mockCallback = jest.fn(x => 42 + x)
forEach([0, 1], mockCallback)

// Expect the callback function to be called twice
expect(mockCallback.mock.calls.length).toBe(2)
// Expect the first argument of the array to be 0
expect(mockCallback.mock.calls[0][0]).toBe(0)
expect(mockCallback.mock.calls[1][0]).toBe(1)
expect(mockCallback.mock.results[0].value).toBe(42)


const myMock = jest.fn()

const a = new myMock()
const b = {}
const bound = myMock.bind(b)
bound()
console.log(myMock.mock.instances)
