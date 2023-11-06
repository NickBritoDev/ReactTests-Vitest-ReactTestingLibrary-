import { describe, expect, it } from "vitest";
import { range } from "./utils";

describe('utils', () => {
  describe('range', () => {
    it('returns correct range for 1-6', () => {
      const result = range(1, 6)
      const expected = [1, 2, 3, 4, 5]
      expect(result).toEqual(expected)
      
    })

    it('returns correct range for 41-45', () => {
      const result = range(41, 45)
      const expected = [41, 42, 43, 44]
      expect(result).toEqual(expected)

    })
  })
})