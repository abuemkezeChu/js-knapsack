'use strict'

// items list stored in an array

const itemList = [
  { name: 'Smartphone', weight: 1, value: 50000 },
  { name: 'Laptop', weight: 2, value: 250000 },
  { name: 'Headphones', weight: 1, value: 15000 },
  { name: 'Camera', weight: 5, value: 80000 },
  { name: 'Watch', weight: 1, value: 30000 },
  { name: 'Gaming Console', weight: 2, value: 120000 },
  { name: 'E-book Reader', weight: 1, value: 40000 },
  { name: 'Fitness Tracker', weight: 1, value: 25000 },
  { name: 'Portable Speaker', weight: 1, value: 20000 },
  { name: 'Power Bank', weight: 3, value: 10000 },
  { name: 'Sunglasses', weight: 1, value: 18000 },
  { name: 'Backpack', weight: 1, value: 30000 },
  { name: 'Running Shoes', weight: 1, value: 35000 },
  { name: 'Coffee Maker', weight: 5, value: 60000 },
  { name: 'T-shirt', weight: 1, value: 8000 },
  { name: 'Jeans', weight: 1, value: 15000 },
  { name: 'Water Bottle', weight: 1, value: 5000 },
  { name: 'Umbrella', weight: 2, value: 7000 },
  { name: 'Notebook', weight: 1, value: 3000 },
  { name: 'Pen Set', weight: 1, value: 2500 }
]

const knapsack = (capacity, items) => {
  let totalWeight = 0
  let totalValue = 0
  items.forEach(element => {
    totalWeight += element.weight
    totalValue += element.value
  })
  if (capacity >= totalWeight) {
    const sackContent = {
      capacity,
      items,
      weight: totalWeight,
      value: parseInt(totalValue + 'kg')
    }
    return sackContent
  } else {
    console.log('Sorry, you\'ve exceeded knapsack capacity')
    return ''
  }
}
const ans = knapsack(19, itemList)
console.log(ans)
