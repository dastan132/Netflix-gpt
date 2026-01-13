export const checkValidData = (email, password, firstName, lastName) => {
  // 1️⃣ Required field checks
  if (!firstName?.trim()) return "First name is required";
  if (!lastName?.trim()) return "Last name is required";
  if (!email?.trim()) return "Email is required";
  if (!password?.trim()) return "Password is required";

  // 2️⃣ Regex patterns
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/;

  const nameRegex =
    /^[A-Za-z]+(['-][A-Za-z]+)*$/;

  // 3️⃣ Validations
  if (!nameRegex.test(firstName)) return "First name is not valid";
  if (!nameRegex.test(lastName)) return "Last name is not valid";
  if (!emailRegex.test(email)) return "Email ID is not valid";
  if (!passwordRegex.test(password)) return "Password is not valid";

  return null;
};
