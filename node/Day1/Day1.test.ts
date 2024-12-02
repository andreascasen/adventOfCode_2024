import { expect, test } from 'bun:test'
import * as day1A from './Day1A'

test('Day 1 A', () => {
	const testInput = `3   4
    4   3
    2   5
    1   3
    3   9
    3   3`

	expect(day1A.parseInput(testInput)).toStrictEqual({
		listA: [3, 4, 2, 1, 3, 3],
		listB: [4, 3, 5, 3, 9, 3],
	})
	expect(day1A.main(testInput)).toBe(11)
})

test('Day 1 B', () => {})
