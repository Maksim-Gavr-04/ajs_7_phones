export function convertingPhoneNumber(phoneNumber) {
  const replacedSevenOrEightToPlusSeven = phoneNumber.replace(/^(7|8)/, '+7');
  const convertedPhoneNumber = replacedSevenOrEightToPlusSeven.replace(/[^+0-9]/g, '');
  return convertedPhoneNumber;
}