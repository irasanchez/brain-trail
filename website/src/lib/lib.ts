// TODO: there is maybe better way to do this, also avoid : any type (generic?)
export function getRandomItem(arr: any) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  console.log(arr[randomIndex])
  return arr[randomIndex]
}