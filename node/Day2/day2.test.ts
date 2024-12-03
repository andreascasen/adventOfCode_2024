import { expect, test, describe } from 'bun:test'
import { levelIsSafe, parseReportIntoLevels } from './day2'

describe('Day 2', () => {
	const testInput = `7 6 4 2 1
        1 2 7 8 9
        9 7 6 2 1
        1 3 2 4 5
        8 6 4 4 1
        1 3 6 7 9`

	test('Should correctly parse a full report into levels', () => {
		expect(parseReportIntoLevels(testInput)).toEqual([
			[7, 6, 4, 2, 1],
			[1, 2, 7, 8, 9],
			[9, 7, 6, 2, 1],
			[1, 3, 2, 4, 5],
			[8, 6, 4, 4, 1],
			[1, 3, 6, 7, 9],
		])
	})

	test('Should correctly check if a level is safe', () => {
		const safeLevel = [-1, 2, 4, 5, 8]
		expect(levelIsSafe(safeLevel, 0)).toBe(true)

		const levelWithTooBigDiff = [1, 2, 4, 5, 9]
		expect(levelIsSafe(levelWithTooBigDiff, 0)).toBe(false)

		const levelWithSameValues = [1, 2, 3, 3, 1]
		expect(levelIsSafe(levelWithSameValues, 0)).toBe(false)

		const directionChanges = [9, 8, 7, 10, 11]
		expect(levelIsSafe(directionChanges, 0)).toBe(false)
	})
})
