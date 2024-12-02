import { expect, test } from 'bun:test'
import { day1A } from './Day1'
import testInput from './testInput'

test('Day1', async () => {
	expect(day1A(testInput)).toBe(11)
})
