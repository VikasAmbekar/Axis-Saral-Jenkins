export const logOut = () => {
  localStorage.clear();
  alert("Logged Out");
};

export const isLogIn = () => {
  if (JSON.parse(localStorage.getItem("managerLogin"))) {
    return true;
  }
  return false;
};
