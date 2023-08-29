const { hash, compare } = require("bcryptjs");
const { UnauthorizedError } = require("../../shared/errors");

const changePassword = async (password, changePassword) => {
  const match = compare(password, changePassword);
  if (!match) throw new UnauthorizedError();

  const hashPassword = await hash(password, 10);

  return hashPassword;
};

module.exports = changePassword;
