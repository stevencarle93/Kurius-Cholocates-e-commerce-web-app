import Swal from 'sweetalert2'


const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: "",
      refresh_token: "",
      loginDate: 0,
      user: "",
      message: null,
      order: { "": "" },
      products: [],
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
      carrito: [

      ],

    },
    actions: {

      addCarrito: (product) => {
        const store = getStore()
        for (let i = 0; i < store.carrito.length; i++) {
          if (product.id === store.carrito[i].id) {
            Swal.fire({
              title: "Tu producto ya está en el carrito",
              text: "Selecciona uno diferente para agregar",
              icon: "error",
              confirmButtonText: "Aceptar",
              confirmButtonColor: "#6c7239",
              timer: "4000",
              background: "#f2ebe1"
            })
            return
          }
        }
        setStore({ carrito: [...store.carrito, product] })
      },
      deleteCarrito: (product) => {
        const store = getStore()
        setStore({
          carrito : store.carrito.filter(item => item.id != product.id)
        })
      },
      loadProducts: async () => {
        try {
          let result = await getActions().apiFetch("products", "GET");
          if (result.ok) result = await result.json()
          else return
          const store = getStore()
          setStore({
            ...store,
            products: result
          })
        } catch (error) {
          console.error(error)
        }
      },
      // Use getActions to call a function within a fuction
      crearOrden: async (data) => {
        const store = getStore()
        try {
          let response = await getActions().apiFetch("order", "POST", data);
          if (response.ok) {
            let responseJson = await response.json()
            setStore({ order: responseJson, })
            console.log(responseJson)
            return "ok"
          } else {
            let responseJson = await response.json()
            return responseJson.message
          }
        } catch (error) {
          console.error({ error })
        }
      },
      /* orderDetails: async (data) => {
        const store = getStore()        
        try {
          let response = await getActions().apiFetch("order_details", "POST", data);
          if (response.ok) {
            let responseJson = await response.json()
            setStore({order: responseJson,})
            console.log(responseJson)
            return "ok"
          } else {
            let responseJson = await response.json()
            return responseJson.message
          }
        } catch (error) {
          console.error({ error })
        }
      }, */
      restorePOST: async (data) => {
        const store = getStore()
        try {
          let response = await getActions().apiFetch("restore", "POST", data);
          if (response.ok) {
            let responseJson = await response.json()
            setStore({ user: responseJson.email, })
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
        if (password.length > 7) {
          data = { ...data, email: store.user }
          try {
            let response = await getActions().apiFetch("restore", "PATCH", data)
            if (response.ok) {
              let responseJson = await response.json()
              setStore({ user: "" })
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
          if (data[key] == "") return "Completa todos los campos del formulario";
        }
        let password = data.password.replaceAll(/\s/g, "");
        if (password.length > 7) {
          try {
            let response = await getActions().apiFetch("signup", "POST", data);
            if (response.ok) {
              let responseJson = await response.json();
              return {
                message:
                  responseJson.message + ". Ahora puedes iniciar sesión",
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
        } else return "La clave debe tener mínimo 8 caratéres y sin espacios"
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
            setStore({ token: refresh_token })
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
      /* protectedTest: async () => {
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
      }, */
      tokenTimeValidation: async () => {
        const store = getStore();
        let loginDate = store.loginDate;
        let timeSession = process.env.JWT_ACCESS_TOKEN_EXPIRES_MINUTES * 60000
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
    },
  };
};

export default getState;
