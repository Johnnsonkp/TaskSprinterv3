export async function getData(url, method) {
  try {
    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function postData(url, method, data) {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data && data),
    });
    const data = await response.json();
    console.log("Success", response);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// export async function updateData(data) {
//   try {
//     const response = await fetch(url, {
//       method: method,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

export async function removeData(url, method, data) {
  try {
    return await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// export const destroy = (id) => {
//   const authToken = JSON.parse(window.localStorage.getItem("auth"));
//   return fetch(`${baseUrl}tasks/${id}`, {
//     method: "DELETE",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + authToken.token,
//     },
//   });
// };
