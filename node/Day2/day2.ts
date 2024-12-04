import { input1B } from './input1B'

export const main = (input: string): number => {
	const levels = parseReportIntoLevels(input)
	console.log('Levels:', levels.length)
	const safeLevels = levels.filter((level, index) => {
		const isSafe = levelIsSafeV2(level)
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

export const levelIsSafeV2 = (
	level: number[],
	attempt: number = 0
): boolean => {
	let unsafeLevelsFound = 0
	let safeLevel = true

	// Exit early if level is too short
	if (level.length < 2) {
		return false
	}

	// Set direction based on the first two values
	let direction: 'increasing' | 'decreasing' =
		level[1] > level[0] ? 'increasing' : 'decreasing'

	// Loop through the level values, starting at the second one
	for (let i = 1; i < level.length; i++) {
		const currentDiff = level[i] - level[i - 1]

		if (isUnacceptableDiff(currentDiff, direction)) {
			if (attempt === 0) {
				unsafeLevelsFound++
				const retry = levelIsSafeV2(level.toSpliced(i, 1), 1)
				return retry
			}

			return false
		}
	}

	return safeLevel
}

const isUnacceptableDiff = (
	currentDiff: number,
	direction: 'increasing' | 'decreasing'
) => {
	return (
		currentDiff === 0 ||
		(direction === 'increasing' && currentDiff < 0) ||
		(direction === 'decreasing' && currentDiff > 0) ||
		Math.abs(currentDiff) > 3
	)
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
