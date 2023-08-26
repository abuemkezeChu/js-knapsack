'use strict'

const sackCapacity = document.getElementById('capacity')
const listOptions = document.getElementById('options')
const knapsackContent = document.getElementById('knapsack-content')
const knapsackState = document.getElementById('knapsack-state')
const doneBtn = document.getElementById('done-btn')

// items list stored in an array

const itemList = [
  {name: 'Item', weight: '', value: ''},
  { name: 'Smartphone', weight: 1, value: 50000 },
  { name: 'Laptop', weight: 2, value: 250000 },
  { name: 'Headphones', weight: 1, value: 15000 },
  { name: 'Camera', weight: 5, value: 80000 },
  { name: 'Watch', weight: 1, value: 30000 },
  { name: 'Gaming Console', weight: 3, value: 120000 },
  { name: 'E-book Reader', weight: 1, value: 40000 },
  { name: 'Fitness Tracker', weight: 1, value: 25000 },
  { name: 'Portable Speaker', weight: 2, value: 20000 },
  { name: 'Power Bank', weight: 3, value: 10000 },
  { name: 'Sunglasses', weight: 1, value: 18000 },
  { name: 'Backpack', weight: 2, value: 30000 },
  { name: 'Running Shoes', weight: 1, value: 35000 },
  { name: 'Coffee Maker', weight: 5, value: 60000 },
  { name: 'T-shirt', weight: 1, value: 8000 },
  { name: 'Jeans', weight: 1, value: 15000 },
  { name: 'Water Bottle', weight: 1, value: 5000 },
  { name: 'Umbrella', weight: 2, value: 7000 },
  { name: 'Notebook', weight: 1, value: 3000 },
  { name: 'Pen Set', weight: 1, value: 2500 }
]

// populate the dropdown list with items

itemList.forEach(element => {
  listOptions.add(new Option(`${element.name} | ${element.weight}kg | ${element.value}XAF`))
})

// allow for selection

listOptions.addEventListener('change', () => {
  const selectedItems = []
  let totalWeight = 0
  let totalValue = 0

  // get max weight
  const maxWeight = parseInt(sackCapacity.value)

  // iterate thought the items
  for (let i = 0; i < listOptions.length; i++) {
    const option = listOptions[i]

    // add selected option
    if (option.selected) {
      const itemIndex = i
      const item = itemList[itemIndex]
      selectedItems.push(item)
    }
  }

  // calculate total weight and value of selected items
  for (let i = 0; i < selectedItems.length; i++) {
    const item = selectedItems[i]
    totalWeight += item.weight
    totalValue += item.value
  }

  // update knapSackContent with selected items as it is on the list
  knapsackContent.innerHTML += selectedItems.map(item => `<p>${item.name} | ${item.weight}kg | ${item.value}XAF</p>`).join('')

  // update the status of the knapsack
  knapsackState.textContent = `Current weight:${totalWeight}kg | Total value:${totalValue}XAF`

})
