const summa = 100
const min = 4
const max = 10
// 3 perem: summa elementov, min chislo elem, max chislo elem

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max+1);
  return Math.floor(Math.random() * (max - min)) + min;
}


function main (summa, min, max) {
	let array = []

	function sum () {
		let a = 0
		for (let i = 0; i < array.length; i++){
			a += array[i]
		}
		return a
	}

	while (true) {
		if (array.length < min) {
			array.push(getRandomInt(1, 100))
		}
		else if (array.length <= max && sum() < summa) {
			array.push(getRandomInt(1, 100))
		}
		else if (array.length <= max && sum() === summa) {
			return array
		}
		else if (array.length <= max && sum() > summa) {
			array.pop()
			array.push(summa - sum())
			return array
		}
		else {
			return "imposible"
		}
	}
}

console.log(main(summa, min, max))