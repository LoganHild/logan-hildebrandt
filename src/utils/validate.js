//function for validating email
export function validateEmail(email) {
    const verifiedEmail =/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return verifiedEmail.test(String(email).toLowerCase());
  }