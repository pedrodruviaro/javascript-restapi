function getProductMovements(movements) {
  const productsMap = {}

  movements.forEach((movement) => {
    const { productId, amount, type, product } = movement

    if (!productsMap[productId]) {
      productsMap[productId] = { name: product.name, amount: 0 }
    }

    const amountChange = type === "in" ? amount : -amount
    productsMap[productId].amount += amountChange
  })

  const products = Object.values(productsMap)

  return { products }
}

module.exports = getProductMovements
