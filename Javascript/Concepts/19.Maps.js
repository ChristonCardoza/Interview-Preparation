const map = new Map()
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)
map.set(null, 4)
map.set(undefined, 5)
const key = { x: 10 }
map.set(key, 'point');

console.log("map: ",map)
console.log('\n')

console.log('map.get(null): ',map.get(null))                  // 4
console.log('map.get(a): ',map.get('a'))                      // 1
console.log('map.get(key): ',map.get(key))                    // point
console.log('\n')

console.log('map.has(c): ',map.has('c'))                // true
console.log('map.has(undefined): ',map.has(undefined))  // true
console.log('\n')

console.log('map.delete(b): ',map.delete('b'))            // true
console.log('\n')

console.log('map.size: ',map.size)                             // 5
console.log('\n')

console.log('map',map)
console.log('\n')

for( let [key, value] of map) {
  console.log(key + ' = ' + value)
}
console.log('\n')

for( let key of map.keys()) {
  console.log(key)
}
console.log('\n')

for( let value of map.values()){
  console.log(value)
}
console.log('\n')

for( let [key, value] of map.entries()) {
  console.log(key + ' <=> ' + value)
}
console.log('\n')

map.forEach((value, key) => {
  console.log(key + ' --- ' + value)
})

