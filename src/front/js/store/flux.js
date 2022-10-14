import Swal from 'sweetalert2'


const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: "",
      refresh_token: "",
      restore_authorization: "",
      loginDate: 0,
      user: "",
      message: null,
      order: {},
      orders_detail: [],
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
      carrito: [],
      total: 0
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
        return  getActions().getTotal()
      },
      deleteCarrito: (product) => {
        const store = getStore()
        setStore({
          carrito: store.carrito.filter(item => item.id != product.id)
        })
        return  getActions().getTotal()
      },
      suma: (id) => {
        const store = getStore()
        store.carrito.forEach((product) => {
          if (product.id === id) {
            product.quantity += 1;
          }
        })
        setStore({
          carrito: [...store.carrito]
        })
        return  getActions().getTotal()
      },
      resta: (id) => {
        const store = getStore()
        store.carrito.forEach((product) => {
          if (product.id === id) {
            product.quantity === 1 ? (product.quantity = 1) : (product.quantity -= 1);
          }
        })
        setStore({
          carrito: [...store.carrito]
        })
        return  getActions().getTotal() 
      },
      getTotal: () => {
        const store = getStore()
        const res = store.carrito.reduce((prev, product) => 
          prev + (product.price * product.quantity), 0)
        setStore({
            total: res
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
        let validation = await getActions().tokenTimeValidation();
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
            let response = await getActions().apiFetch("order", "POST", data);
            if (response.ok) {
              let responseJson = await response.json()
              setStore({ order: responseJson, })
              console.log(store.order)
              setStore({carrito: [], total: 0})
              return "ok"
            } else {
              let responseJson = await response.json()
              return responseJson.message
            }
          } catch (error) {
            console.error({ error })
          }
        }
      },
      orderDetails: async () => {
        const store = getStore()
        let validation = await getActions().tokenTimeValidation();
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
            let response = await getActions().apiFetch("orders_detail");
            if (response.ok) {
              let responseJson = await response.json()
              setStore({
                orders_detail: responseJson
              })
              return "ok"
            } else {
              let responseJson = await response.json()
              return responseJson.message
            }
          } catch (error) {
            console.error({ error })
          }
        }
      },
      restoreRequest: async (data) => {
        const store = getStore()
        try {
          let response = await getActions().apiFetch("restore", "POST", data);
          if (response.ok) {
            let responseJson = await response.json()
            setStore({user: responseJson.email, restore_authorization:responseJson.restore_URL})
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
        let password = data.password.replaceAll(/\s/g, "")
        if (password.length > 7){
          try {
            let response = await getActions().apiFetch(`restore/${data.authorization}`, "PATCH", data)
            if (response.ok) {
              let responseJson = await response.json()
              return responseJson
            } else {
              let responseJson = await response.json()
              return responseJson
            }
          } catch (error) {
            console.log("en el error")
            console.error({ error });
          }
        } else return "La clave debe tener mínimo 8 caratéres y sin espacios"
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
        let validation = await getActions().tokenTimeValidation();
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
            let firstResponse = await getActions().apiFetch("logout", "POST");
            if (firstResponse.ok) {
              let accessTokRevoked = await firstResponse.json()
              let refresh_token = store.refresh_token
              setStore({ token: refresh_token })
              console.log("access_token revocado")
              let secondResponse = await getActions().apiFetch("logout", "POST");
              if (secondResponse.ok) {
                let refreshTokRevoked = await secondResponse.json()
                setStore({ token: "", refresh_token: "", loginDate: 0, user: "" }); //se resetea todo el store
                console.log("refresh_token revocado")
                return "ok";
              }
              else {
                let refreshTokRevoked = await secondResponse.json()
                if (refreshTokRevoked != undefined) return refreshTokRevoked.message;
                else return "Internal error";
              }
            } else {
              let accessTokRevoked = await firstResponse.json()
              if (accessTokRevoked != undefined) return accessTokRevoked.message;
              else return "Internal error";
            }
          } catch (error) {
            console.error({ error });
          }
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
        let timeSession = (process.env.JWT_ACCESS_TOKEN_EXPIRES_MINUTES - 1) * 60000
        if (loginDate + timeSession < Date.now()) {
          let refresh_token = store.refresh_token;
          setStore({ token: refresh_token });
          try {
            let response = await getActions().apiFetch("refresh", "POST");
            if (response.ok || response.msg === "Token has expired") {
              console.log("Refreshing token")
              let responseJson = await response.json();
              setStore({
                token: responseJson.token,
                refresh_token: responseJson.refresh_token,
                loginDate: Date.now(),
              })
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
