const usersApiUrl = "https://kretogrod-app.firebaseio.com";

export const updateUser = (userId, name, surname) =>
  fetch(usersApiUrl + "/users/" + userId + ".json", {
    method: "PATCH",
    body: JSON.stringify({
      name,
      surname
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
