import { test, expect } from '@jest/globals';
import { convertingPhoneNumber } from '../convertingPhoneNumber';

test.each([
  [ '7 (915) 000-00-00', '+79150000000' ],
  [ '8 (927) 000-00-00', '+79270000000' ],
  [ '+7 960 000 00 00', '+79600000000' ],
  [ '+86 000 000 0000', '+860000000000' ]
])(('Testing the `convertingPhoneNumber()` function'),
  (phoneNumber, expected) => {
    const result = convertingPhoneNumber(phoneNumber);
    expect(result).toBe(expected);
  });
