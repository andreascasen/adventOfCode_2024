import { expect, test } from 'bun:test'
import { day1A } from './Day1'

test('Day1', async () => {
	const exampleListA = [3, 4, 2, 1, 3, 3]
	const exampleListB = [4, 3, 5, 3, 9, 3]
	expect(day1A(exampleListA, exampleListB)).toBe(11)
})
