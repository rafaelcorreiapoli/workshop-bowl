import { gridify, getDirection, START, END } from '@lib/gridifyArray'


describe('Gridify function', () => {
  test('Undefined', () => {
    const array = undefined
    const expected = []
    const value = gridify(array)
    expect(value).toEqual(expected)
  });

  test('Empty array', () => {
    const array = []
    const expected = []
    const value = gridify(array)
    expect(value).toEqual(expected)
  });

  test('Array with 1 item', () => {
    const array = [0]
    const expected = [
      [0]
    ]
    const value = gridify(array)
    expect(value).toEqual(expected)
  });

  test('Array with 2 items', () => {
    // se é a par e o ultimo tem 0 ou 1, cria um novo
    const array = [0, 1]
    const expected = [
      [0],
      [1]
    ]

    const value = gridify(array)
    expect(value).toEqual(expected)
  });

  test('Array with 3 items', () => {
    const array = [0, 1, 2]
    const expected = [
      [0],
      [1, 2]
    ]
    const value = gridify(array)
    expect(value).toEqual(expected)
  });


  test('Array with 4 items', () => {
    const array = [0, 1, 2, 3]
    const expected = [
      [0],
      [1, 2],
      [3]
    ]
    const value = gridify(array)
    expect(value).toEqual(expected)
  });

  test('Array with 5 items', () => {
    const array = [0, 1, 2, 3, 4]
    const expected = [
      [0],
      [1, 2],
      [3],
      [4]
    ]
    const value = gridify(array)
    expect(value).toEqual(expected)
  });

  test('Array with 6 items', () => {
    const array = [0, 1, 2, 3, 4, 5]
    const expected = [
      [0],
      [1, 2],  //1
      [3],    //2
      [4, 5], //3
    ]
    const value = gridify(array)
    expect(value).toEqual(expected)
  });
})



describe('Directions function', () => {
  test('Array with 1 items', () => {
    const array = [
      [0],
    ]

    const value = array.map((arr, i) => arr.map((v, j) => getDirection(i, j)))
    const expected = [
      [START],
    ]
    expect(value).toEqual(expected)
  })

  test('Array with 2 items', () => {
    const array = [
      [0],
      [1]
    ]

    const value = array.map((arr, i) => arr.map((v, j) => getDirection(i, j)))
    const expected = [
      [START],
      [END]
    ]
    expect(value).toEqual(expected)
  })

  test('Array with 3 items', () => {
    const array = [
      [0],
      [1, 2]
    ]

    const value = array.map((arr, i) => arr.map((v, j) => getDirection(i, j)))
    const expected = [
      [START],
      [END, START]
    ]
    expect(value).toEqual(expected)
  })

  test('Array with 4 items', () => {
    const array = [
      [0],
      [1, 2],  //1
      [3],    //2
    ]

    const value = array.map((arr, i) => arr.map((v, j) => getDirection(i, j)))
    const expected = [
      [START],
      [END, START],  //1
      [END],    //2
    ]
    expect(value).toEqual(expected)
  })
})
