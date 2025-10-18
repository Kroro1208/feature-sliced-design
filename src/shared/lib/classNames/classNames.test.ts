import { describe, expect, test } from 'vitest';

import { classNames } from './className';

describe('classNames', () => {
  test('一つのクラス引数', () => {
    expect(classNames('class1')).toBe('class1');
  });
  test('複合クラス名', () => {
    expect(classNames('class1', { class2: true })).toBe('class1 class2');
    expect(classNames('class1', { class2: false })).toBe('class1');
  });
  test('undefined,null,空文字は無視される', () => {
    expect(classNames('class1', undefined, null, '', 'class2')).toBe(
      'class1 class2'
    );
  });
});
