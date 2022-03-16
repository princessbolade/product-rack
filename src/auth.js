const url = "https://bookshelf-api-1.herokuapp.com/api";

async function UrlClient(endpoint, data, method) {
  const config = {
    method,
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(`${url}/auth/${endpoint}`, config);
  if (response.ok) {
    const data = response.json();
    return data;
  } else {
    throw Error;
  }
}

const localStorageKey = "access-token";

async function getToken() {
  return localStorage.getItem(localStorageKey);
}

function handleResponse(user) {
  localStorage.setItem(localStorageKey, user.token);
  return user;
}

async function signIn(body, method) {
  const data = await UrlClient("signin", body, method);
  return handleResponse(data);
}

async function signUp(body, method) {
  const data = await UrlClient("signup", body, method);
}

async function logOut() {
  return localStorage.removeItem(localStorageKey);
}

export default { getToken, signIn, signUp, logOut, localStorageKey };
