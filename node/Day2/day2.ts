import { input1B } from './input1B'

export const main = (input: string): number => {
	const levels = parseReportIntoLevels(input)
	const safeLevels = levels.filter((level, index) => {
		const isSafe = levelIsSafe(level, index)
		if (!isSafe) {
			console.log('Unsafe level:', level)
		}
		return isSafe
	})
	// safeLevels.forEach(level => console.log(level))
	return safeLevels.length
}

export const parseReportIntoLevels = (input: string) => {
	const reportLevels = input
		.split('\n')
		.map(line => line.trim())
		.map(line => line.split(' '))
		.map(str => str.map(char => parseInt(char)))

	return reportLevels
}

export const levelIsSafe = (level: number[], index: number): boolean => {
	if (level.length < 2 || level[1] === level[0]) {
		return false
	}

	let safeLevel = true
	let direction = level[1] > level[0] ? 'increasing' : 'decreasing'

	for (let i = 1; i < level.length; i++) {
		const currentDiff = level[i] - level[i - 1]

		if (
			currentDiff === 0 ||
			(direction === 'increasing' && currentDiff < 0) ||
			(direction === 'decreasing' && currentDiff > 0)
		) {
			return false
		}

		if (Math.abs(currentDiff) > 3) {
			return false
		}
	}

	return safeLevel
}

const day1B = main(input1B)
console.log('Res => ', day1B)
