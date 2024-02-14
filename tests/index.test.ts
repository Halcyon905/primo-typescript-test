import { merge } from '../src/index';

describe('testing index file', () => {
    test('passing 3 empty arrays should result in empty array', () => {
        expect(merge([], [], [])).toStrictEqual([]);
    });

    test('passing 3 sorted arrays with equal length should result in 1 sorted array', () => {
        expect(merge([1, 2], [3, 4], [6, 5])).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });

    test('passing 3 sorted arrays with different lengths should result in 1 sorted array', () => {
        expect(merge([1, 2, 11, 12], [3, 4], [6, 5, 0])).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 11, 12]);
    });
    
    test('passing 2 sorted arrays and an empty array should result in 1 sorted array', () => {
        expect(merge([], [3, 4], [6, 5, 0])).toStrictEqual([0, 3, 4, 5, 6]);
        expect(merge([1, 3], [], [6, 5, 0])).toStrictEqual([0, 1, 3, 5, 6]);
        expect(merge([1, 3], [3, 4], [])).toStrictEqual([1, 3, 3, 4]);
    });

    test('passing 1 sorted array and 2 empty arrays should result in 1 sorted array', () => {
        expect(merge([], [], [6, 5, 0])).toStrictEqual([0, 5, 6]);
        expect(merge([1, 3], [], [])).toStrictEqual([1, 3]);
        expect(merge([], [3, 4], [])).toStrictEqual([3, 4]);
    });

    test('passing 3 sorted arrays with negatives should result in 1 sorted array', () => {
        expect(merge([-1, 3, 4], [-10, 2], [6, 5, 0, -3])).toStrictEqual([-10, -3, -1, 0, 2, 3, 4, 5, 6]);
    });
});