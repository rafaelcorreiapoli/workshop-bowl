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


export const START = 0
export const END = 1
export const getDirection = (i, j) => {
  // cima = 0
  // direita = 1
  // baixo = 2
  // esquerda = 3

  if  (i === 0 || i % 4 === 0) {
    return START
  } else if ((i - 2) % 4 === 0) {
    return END
  } else if ((i - 3) % 4 === 0 && j === 0) {
    return START
  } else if ((i - 3) % 4 === 0 && j === 1) {
    return END
  } else if ((i - 1) % 4 === 0 && j === 0) {
    return END
  } else if ((i - 1) % 4 === 0 && j === 1) {
    return START
  }
}
