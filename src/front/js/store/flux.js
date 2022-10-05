const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: "",
      refresh_token: "",
      loginDate: 0,
      user: "",
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      restorePOST: async (data) => {
        const store = getStore()
        try {
          let response = await getActions().apiFetch("restore", "POST", data);
          if (response.ok) {
            let responseJson = await response.json()
            setStore({user: responseJson.email,})
            return responseJson
          } else {
            let responseJson = await response.json()
            return responseJson
          }
        } catch (error) {
          console.error({ error })
        }
      },
      restorePATCH: async (data) => {
        const store = getStore()
        let password = data.password.replaceAll(/\s/g, "")
        if (password.length > 7){
          data = {...data, email:store.user}
          try {
            let response = await getActions().apiFetch("restore", "PATCH", data)
            if (response.ok) {
              let responseJson = await response.json()
              setStore({user:""})
              return responseJson
            } else {
              let responseJson = await response.json()
              return responseJson;
            }
          } catch (error) {
            console.log("en el error")
            console.error({ error });
          }
        } else return "Invalid password"
      },
      signup: async (data) => {
        for (const key in data) {
          if (data[key] == "") return "Complete all spaces in the form";
        }
        let password = data.password.replaceAll(/\s/g, "");
        if (password.length > 7) {
          try {
            let response = await getActions().apiFetch("signup", "POST", data);
            if (response.ok) {
              let responseJson = await response.json();
              return {
                message:
                  responseJson.message + ". Please continue with the login",
                validation: "ok",
              };
            } else {
              let responseJson = await response.json();
              if (responseJson != undefined) return responseJson.message;
              else return "Internal error";
            }
          } catch (error) {
            console.error({ error });
          }
        } else return "Invalid password"
      },
      login: async (data) => {
        const store = getStore()
        try {
          let response = await getActions().apiFetch("login", "POST", data);
          if (response.ok) {
            let responseJson = await response.json();
            setStore({
              token: responseJson.token,
              refresh_token: responseJson.refresh_token,
              loginDate: Date.now(),
            }); //se resetea el store con los tokens
            let infoRequest = await getActions().apiFetch("checkout");
            if (infoRequest.ok) {
              let userInfo = await infoRequest.json();
              setStore({ ...store, user: userInfo.name }); //se añadela info del ususario al token
              return "ok";
            } else return "Access revoked";
          } else {
            let responseJson = await response.json();
            if (responseJson != undefined) return responseJson.message;
            else return "Internal error";
          }
        } catch (error) {
          console.error({ error });
        }
      },
      logout: async () => {
        const store = getStore();
        try {
          let firstResponse = await getActions().apiFetch("logout", "POST");
          if (firstResponse.ok) {
            let accessTokRevoked = await firstResponse.json()
            let refresh_token = store.refresh_token
            setStore({ token: refresh_token})
            let secondResponse = await getActions().apiFetch("logout", "POST");
            if (secondResponse.ok) {
              let refreshTokRevoked = await secondResponse.json()
              setStore({ token: "", refresh_token: "", loginDate: 0, user: "" }); //se resetea todo el store
              return "ok";
            }
            else {
              let refreshTokRevoked = await secondResponse.json()
            if (refreshTokRevoked != undefined) return refreshTokRevoked.message;
            else return "Internal error";
            }
            //console.log(accessTokRevoked.msg);
          } else {
            let accessTokRevoked = await firstResponse.json()
            if (accessTokRevoked != undefined) return accessTokRevoked.message;
            else return "Internal error";
          }
        } catch (error) {
          console.error({ error });
        }
      },
      protectedTest: async () => {
        const store = getStore();
        let validation = await getActions().tokenTimeValidation();
        //console.log(validation);
        if (validation === "Token has expired") {
          setStore({
            token: "",
            refresh_token: "",
            loginDate: 0,
						user: ""
          });
          return "Sesion expired";
        }
				if (validation === "Missing Authorization Header") return "Sesion expired"
        if (validation === "Refresh successful" || "Token still valid") {
          try {
            let response = await getActions().apiFetch("checkout");
            if (response.ok) {
              return "ok";
            } else {
              let responseJson = await response.json();
              return responseJson;
            }
          } catch (error) {
            console.error({ error });
          }
        }
      },
      tokenTimeValidation: async () => {
        const store = getStore();
        let loginDate = store.loginDate;
        let timeSession = process.env.JWT_ACCESS_TOKEN_EXPIRES_MINUTES*60000
        if (loginDate + timeSession < Date.now()) {
          let refresh_token = store.refresh_token;
          setStore({ token: refresh_token });
          try {
            let response = await getActions().apiFetch("refresh", "POST");
            if (response.ok) {
							console.log("Refreshing token")
              let responseJson = await response.json();
              setStore({
                token: responseJson.token,
                refresh_token: responseJson.refresh_token,
                loginDate: Date.now(),
              });
              return "Refresh successful";
            } else {
              let responseJson = await response.json();
              if (responseJson != undefined) return responseJson.msg;
              else return "Token has expired";
            }
          } catch (error) {
            console.error({ error });
            return "Token has expired";
          }
        } else return "Token still valid";
      },
      apiFetch: async (endpoint, metodo = "GET", data = null) => {
        const store = getStore();
        let url = process.env.BACKEND_URL;
        let headers = {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        };
        if (store.token) {
          headers["Authorization"] = "Bearer " + store.token;
        }
        let request = {
          method: metodo,
          headers,
        };
        if (data) {
          request.body = JSON.stringify(data);
        }
        return await fetch(url + "/api/" + endpoint, request);
      },
/*
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },*/
    },
  };
};

export default getState;
