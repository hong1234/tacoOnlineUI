export const reqOptions = () => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      //   Accept: "application/json",
    },
    auth: {
      username: 'admin',
      password: 'admin',
    },
  };
  return options;
};
