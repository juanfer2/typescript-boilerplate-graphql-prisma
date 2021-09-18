import bcrypt from "bcrypt";

export const encryptPassword = async(password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export const comparedPassword = async(sentPassword: string, currentPassword: string) => {
  return await bcrypt.compare(sentPassword, currentPassword);
}
