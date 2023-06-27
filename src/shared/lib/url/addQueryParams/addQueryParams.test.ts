import { addQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
  let windowSpy: jest.SpyInstance;

  beforeAll(() => {
    windowSpy = jest.spyOn(window.history, 'pushState');
    windowSpy.mockImplementation();
  });

  afterAll(() => {
    windowSpy.mockRestore();
  });

  test('one param', () => {
    addQueryParams({
      test: 'value',
    });
    expect(windowSpy).toHaveBeenCalledWith(null, '', '?test=value');
  });

  test('two param', () => {
    addQueryParams({
      test: 'value',
      second: '2',
    });
    expect(windowSpy).toHaveBeenCalledWith(null, '', '?test=value&second=2');
  });

  test('with undefined', () => {
    addQueryParams({
      test: 'value',
      second: undefined,
    });
    expect(windowSpy).toHaveBeenCalledWith(null, '', '?test=value');
  });
});
