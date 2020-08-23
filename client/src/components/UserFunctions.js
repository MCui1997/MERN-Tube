import axios from "axios";

export const register = (newUser) => {
  return axios
    .post("users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    })
    .then((response) => {
      console.log("Registered");
    });
};

export const login = (user) => {
  return axios
    .post("users/login", {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", response.data);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProfile = (user) => {
  return axios
    .get("users/profile", {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUrl = (user) => {
  return axios
    .post("users/upload", {
      url: user.url,
      title: user.title,
      description: user.description,
      id: user.id,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getVid = (user) => {
  return axios
    .get("users/upload", {})
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getOneVid = (user) => {
  let id = user;
  return axios
    .get("users/upload" + id, {})
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
