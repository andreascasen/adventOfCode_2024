/**
 * Day 1 A: Result = 2113135
 */

export const day1A = inputString => {
	const { listA, listB } = parseInput(inputString)
	const sortedListA = listA.sort((a, b) => a - b)
	const sortedListB = listB.sort((a, b) => a - b)

	// console.log('Sorted => ', { sortedListA, sortedListB })

	const result = sortedListA
		.map((num, index) => [num, sortedListB[index]])
		.map(pair => Math.abs(pair[0] - pair[1]))
		.reduce((acc, curr) => acc + curr, 0)

	// console.log({ result })
	return result
}

const parseInput = (input: string): { listA: number[]; listB: number[] } => {
	const lists = {
		listA: [],
		listB: [],
	}

	input
		.split('\n')
		.map(line => line.trim())
		.map(trimmedLine => trimmedLine.split('   '))
		.forEach(listPair => {
			lists.listA.push(parseInt(listPair[0]))
			lists.listB.push(parseInt(listPair[1]))
		})
	return lists
}
