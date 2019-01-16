describe('define mock per test', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('uses mocked module', () => {
    jest.doMock('../components/fruit', () => ({
      apple: 'mocked apple',
      default: jest.fn(() => 'mocked fruit'),
      strawberry: jest.fn(() => 'mocked strawberry')
    }))
    const { apple, strawberry, default: defaultExport } = require('../components/fruit')

    const defaultExportResult = defaultExport()
    expect(defaultExportResult).toBe('mocked fruit')
    expect(defaultExport).toHaveBeenCalled()

    expect(apple).toBe('mocked apple')
    expect(strawberry()).toBe('mocked strawberry')
  })

  it('uses actual module', () => {
    jest.dontMock('../components/fruit')
    const { apple, strawberry, default: defaultExport } = require('../components/fruit')

    const defaultExportResult = defaultExport()
    expect(defaultExportResult).toBe('banana')
    expect(apple).toBe('apple')
    expect(strawberry()).toBe('strawberry')
  })
})
