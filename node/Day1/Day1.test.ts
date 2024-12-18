import { expect, test, describe } from 'bun:test'

import { day1A, day1B, parseInput } from './Day1A'

describe('Day 1', () => {
	const testInput = `3   4
		4   3
		2   5
		1   3
		3   9
		3   3`
	test('Should correctly parse an input text into number lists', () => {
		expect(parseInput(testInput)).toStrictEqual({
			listA: [3, 4, 2, 1, 3, 3],
			listB: [4, 3, 5, 3, 9, 3],
		})
	})

	test('Should correctly calculate the total distance between the left and right lists', () => {
		expect(day1A(testInput)).toBe(11)
	})

	test('Should correctly calculate the similarity score between the left and right lists', () => {
		expect(day1B(testInput)).toBe(31)
	})

	// const testInput = `7 6 4 2 1
	//     1 2 7 8 9
	//     9 7 6 2 1
	//     1 3 2 4 5
	//     8 6 4 4 1
	//     1 3 6 7 9`

	// const testInput2 = `0 1 2 3 4 5 6 8
	//     45 47 48 51 54 56 54
	//     76 79 81 84 84
	//     30 32 35 36 38 40 44
	//     72 74 77 78 85
	//     54 55 58 57 60
	//     61 64 67 66 68 67
	//     5 7 6 9 12 14 16 16`

	// test('Should correctly parse a full report into levels', () => {
	// 	expect(day1B.parseReportIntoLevels(testInput)).toEqual([
	// 		[7, 6, 4, 2, 1],
	// 		[1, 2, 7, 8, 9],
	// 		[9, 7, 6, 2, 1],
	// 		[1, 3, 2, 4, 5],
	// 		[8, 6, 4, 4, 1],
	// 		[1, 3, 6, 7, 9],
	// 	])
	// })

	// test('should return false if level direction is not respected', () => {
	// 	// expect(day1B.lavelIsSafe([0, 1, 2, 3])).toEqual(true)
	// 	expect(day1B.main(testInput2)).toBe(1)
	// })
})
