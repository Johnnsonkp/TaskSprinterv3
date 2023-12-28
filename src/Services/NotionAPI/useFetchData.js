// export async function getData(url, method) {
//   try {
//     const res = await fetch(url, {
//       method: method,
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     });
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

export async function getData(url, method) {
  try {
    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (res.ok) {
      console.log("res.ok", res.ok);
      return res.json();
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
export async function removeData(url, method, data, pageReload) {
  try {
    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      console.log("Success");
      return res.json();
    }
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
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data && data),
    });
    // const data = await response.json();
    console.log("Success", response);
    console.log("response.ok", response.ok);
    // return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

// export async function removeData(url, method, data) {
//   console.error("data:", data);
//   console.error("data.page_id:", data.page_id);
//   try {
//     return await fetch(url, {
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
