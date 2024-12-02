/**
 * 1. Pair up the lowest numbers of each list, then the scond lowest, etc
 * 2. Within each pair, figure out how far apart the two numbers are.
 * 3. Add upp all of those distances
 */

export const day1A = (listA: number[], listB: number[]) => {
	const sortedListA = listA.sort((a, b) => a - b)
	const sortedListB = listB.sort((a, b) => a - b)

	return sortedListA
		.map((num, index) => [num, sortedListB[index]])
		.map(pair => Math.abs(pair[0] - pair[1]))
		.reduce((acc, curr) => acc + curr, 0)
}
