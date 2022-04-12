import { TestScheduler } from 'jest';
import coinCounter from '../src/coin-counter.js';

describe('coinCounter', () => {

  test('should return if input is NaN', () => {
    let output = coinCounter(NaN);
    expect(output).toEqual(undefined);
  });

  test('should return object if input is 0', () => {
    let output = coinCounter(0);
    expect(output.quarters).toEqual(0);
    expect(output.dimes).toEqual(0);
    expect(output.nickels).toEqual(0);
    expect(output.pennies).toEqual(0);
  });

  test('should return number of quarters based on input', () => {
    let output = coinCounter(4.99);
    expect(output.quarters).toEqual(19);
  });

  test('should return number of dimes based on input', () => {
    let output = coinCounter(4.99);
    expect(output.dimes).toEqual(2);
  });

  test('should return number of nickels based on input', () => {
    let output = coinCounter(4.80);
    expect(output.nickels).toEqual(1);
  });

  test('should return number of pennies based on input', () => {
    let output = coinCounter(4.99);
    expect(output.pennies).toEqual(4);
  });
});