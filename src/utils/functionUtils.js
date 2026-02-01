
export function validateUserInfo(username, email, password) {
   let fullname_trimmed = username.trim();
   let email_trimmed = email.trim();
   let password_trimmed = password.trim();


   const fullname_pattern = /^([a-zA-Z-]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)(,? (?:[JS]r\.?|II|III|IV))?$/g;
   const email_pattern = /^[!A-Z0-9#$&?*^~_%+-]+(\.[A-Z0-9!_%+-^]+)*?@[A-Z0-9-]+([A-Z0-9.-])*\.[A-Z]{2,}$/i;

   const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,32}$/i;
   const lowercase_pattern = /^(?=.*[a-z])/g;
   const uppercase_pattern = /^(?=.*[A-Z])/g;
   const digit_pattern = /^(?=.*\d{1,})/g;
   const special_pattern = /(?=.*[-+_!@#$%^&*?])/g;


   /************************* fullname conditional statements *************************/

   if (fullname_trimmed.length === 0) {
      return {isValid: false, error: 'First and last name are required!'};

   } else {
      if (!fullname_trimmed.match(fullname_pattern)) {
         return {isValid: false, error: 'Enter a valid first and last name!'};
      }
   }

   /************************* email conditional statements *************************/

   if (email_trimmed.length === 0) {
      return {isValid: false, error: 'Email is required!'};

   } else {
      if (!email_trimmed.match(email_pattern)) {
         return {isValid: false, error: 'Enter a valid email!'};
      }
   }

   /************************* password conditional statements *************************/

   if (password_trimmed.length === 0) {
      return {isValid: false, error: 'Password is required!'};

   } else if (!password_trimmed.match(lowercase_pattern)) {
      return {isValid: false, error: 'Password must contain at least one lowercase letter!'};

   } else if (!password_trimmed.match(uppercase_pattern)) {
      return {isValid: false, error: 'Password must contain at least one uppercase letter!'};

   } else if (!password_trimmed.match(digit_pattern)) {
      return {isValid: false, error: 'Password must contain at least one number!'};

   } else if (!password_trimmed.match(special_pattern)) {
      return {isValid: false, error: `Password must include at least one: '-+_!@#$%^&*?'!`};

   } else if (!password_trimmed.match(password_pattern)) {
      return {isValid: false, error: 'Password must be between 8 and 32 characters long!'};

   } else {
      return {isValid: true};
   }

}