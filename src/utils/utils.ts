import { VALID_EMAIL_REGEXP } from "@/utils/consts";

const validateEmail = (email: string): boolean => {
  const re = VALID_EMAIL_REGEXP;
  return re.test(email.toLowerCase());
};

const validatePhoneNumber = (phone: string, numberOfDigits = 9): boolean => {
  return !!(phone.match(/\d/g)?.length === numberOfDigits);
};

export const emailValidator = (
  _rule: unknown,
  value: string,
  callback: (arg0?: Error) => void
): void => {
  if (!value) {
    return callback(new Error("Please input your email"));
  }

  if (!validateEmail(value)) {
    return callback(new Error("Please input correct email"));
  }

  return callback();
};

export const phoneValidator = (
  _rule: unknown,
  value: string,
  callback: (arg0?: Error) => void
): void => {
  if (!value) {
    return callback(new Error("Please input your phone"));
  }

  if (!validatePhoneNumber(value)) {
    return callback(new Error("Please input correct phone"));
  }

  return callback();
};
