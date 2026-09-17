/**
 * Mirrors packages/app/helpers/password-validation.ts in the live app, regex for
 * regex, so the prototype accepts and rejects exactly what the real app does.
 * The five booleans are RG-5's five requirement lines, in order.
 */
export function validatePassword(password, confirmPassword) {
  const hasUppercaseAndLowercase = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasNumber = /\d/.test(password);
  const isPasswordValid = password.length >= 8;
  const isConfirmPasswordValid = !!confirmPassword.length && confirmPassword === password;

  return {
    hasUppercaseAndLowercase,
    hasSpecialCharacter,
    hasNumber,
    isPasswordValid,
    isConfirmPasswordValid,
  };
}

/** RG-5 copy, in the doc's order. */
export function passwordRules(password, confirmPassword) {
  const v = validatePassword(password, confirmPassword);
  return [
    { label: "Uppercase & lowercase letters", ok: v.hasUppercaseAndLowercase },
    { label: "At least one special character", ok: v.hasSpecialCharacter },
    { label: "At least one number", ok: v.hasNumber },
    { label: "Minimum of 8 characters", ok: v.isPasswordValid },
    { label: "Passwords must match", ok: v.isConfirmPasswordValid },
  ];
}

export function allRulesMet(password, confirmPassword) {
  return passwordRules(password, confirmPassword).every((r) => r.ok);
}

/** Matches the email check the enrollment form uses before enabling Continue. */
export function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}
