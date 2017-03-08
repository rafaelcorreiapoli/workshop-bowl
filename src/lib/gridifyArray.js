export const gridify = (array = []) =>
   array.reduce((prev, current, i) => {
    const isTop = i % 3 === 0
    const isBottomLeft = (i - 1) % 3 === 0
    const isBottomRight = (i - 2) % 3 === 0

    if (isTop || isBottomLeft) {
      prev.push([current])
    } else {
      const lastItem = prev[prev.length - 1]
      lastItem.push(current)
    }
    return prev
  }, [])


export const getDirection = (i, j) => {
  // cima = 0
  // direita = 1
  // baixo = 2
  // esquerda = 3

  if  (i === 0 || i % 4 === 0) {
    return 3
  } else if ((i - 2) % 4 === 0) {
    return 1
  } else if ((i - 3) % 4 === 0 && j === 0) {
    return 0
  } else if ((i - 3) % 4 === 0 && j === 1) {
    return 2
  } else if ((i - 1) % 4 === 0 && j === 0) {
    return 2
  } else if ((i - 1) % 4 === 0 && j === 1) {
    return 0
  }
}
