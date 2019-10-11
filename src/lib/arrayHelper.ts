#!/usr/bin/env node
type NullableArray<T> = ArrayLike<T> | null;

export const indeces = {
  empty: 0,
  first: 0,
  lastIndexSubtrahend: 1
};

export const any = <T>(array: NullableArray<T>) => (array && array.length > indeces.empty) || false;

export const isEmpty = <T>(array: NullableArray<T>) => !any(array);

export const firstOrDefault = <T>(array: NullableArray<T>, defaultValue: T | null = null): T | null =>
  (array && array[indeces.first]) || defaultValue;

export const first = <T>(array: NullableArray<T>) => firstOrDefault(array) || undefined;

export const lastOrDefault = <T>(array: NullableArray<T>, defaultValue: T | null = null): T | null =>
  (array && array[array.length - indeces.lastIndexSubtrahend]) || defaultValue;

export const last = <T>(array: NullableArray<T>) => lastOrDefault(array) || undefined;

export const takeWhile = <T>(array: T[], predicate: (item: T) => boolean): T[] => {
  const items: T[] = [];

  for (const item of array) {
    if (!predicate(item)) {
      break;
    }

    items.push(item);
  }

  return items;
};
