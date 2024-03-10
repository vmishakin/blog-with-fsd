import { classNames } from './classNames';

describe('classNames', () => {
  test('one class', () => {
    expect(classNames('simpleClass')).toEqual('simpleClass');
  });

  test('additional class', () => {
    expect(classNames('simpleClass', {}, ['additional'])).toEqual(
      'simpleClass additional',
    );
  });

  test('several additional classes', () => {
    expect(classNames('simpleClass', {}, ['additional1 additional2'])).toEqual(
      'simpleClass additional1 additional2',
    );
  });

  test('mode class true', () => {
    expect(classNames('simpleClass', { mode: true })).toEqual(
      'simpleClass mode',
    );
  });

  test('several mode classes', () => {
    expect(classNames('simpleClass', { mode1: true, mode2: true })).toEqual(
      'simpleClass mode1 mode2',
    );
  });

  test('mod class false', () => {
    expect(classNames('simpleClass', { mode: false })).toEqual('simpleClass');
  });

  test('mod class undefined', () => {
    expect(classNames('simpleClass', { mode: undefined })).toEqual(
      'simpleClass',
    );
  });

  test('mod class mixed', () => {
    expect(classNames('simpleClass', { mode1: true, mode2: false })).toEqual(
      'simpleClass mode1',
    );
  });

  test('class, mods, additional classes', () => {
    expect(
      classNames('simpleClass', { mode1: true, mode2: false }, [
        'additional1',
        'additional2',
      ]),
    ).toEqual('simpleClass additional1 additional2 mode1');
  });

  test('empty', () => {
    expect(classNames('')).toEqual('');
  });

  test('superlong additional', () => {
    const superlong = new Array(100).fill('additional');

    expect(classNames('simpleClass', {}, superlong)).toEqual(
      `simpleClass ${superlong.join(' ')}`,
    );
  });
});
