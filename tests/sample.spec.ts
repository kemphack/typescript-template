import getLogMessage from "../lib";

describe('sample_test', () => {
    test('index', () => {
        expect(getLogMessage()).toBe("hello world");
    });
})