export const logOut = () => {
  localStorage.clear();
  alert("Logged Out");
};

export const isLogIn = () => {
  if (JSON.parse(localStorage.getItem("LoginData"))) {
    return true;
  }
  return false;
};
