const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			signup: async (data) => {
				try {
					let response = await getActions().apiFetch("signup", 'POST', data)
					if (response.ok){
						let responseJson = await response.json();
						return responseJson.message + ". Please continue with the login";
					}
					else {
						let responseJson = await response.json();
						if (responseJson != undefined) return responseJson.message;
						else return "Internal error";
					}
				}
				catch(error){
					console.error({error})
				}
      },
			login: async (data) => {
				const store = getStore()
				try{
					let response = await getActions().apiFetch("login", 'POST', data)
					if (response.ok){
						let responseJson = await response.json()
						setStore({ token: responseJson.token }); //se resetea todo el store
						let infoRequest = await getActions().apiFetch("checkout")
						if (infoRequest.ok){
							let userInfo = await infoRequest.json()
							setStore({ ...store, user: userInfo.name }); //se añadela info del ususario al token
							return "ok"
						}
						else return "Access revoked" //
					}
					else {
						let responseJson = await response.json();
						if (responseJson != undefined) return responseJson.message;
						else return "Internal error";
					}
						//console.log(responseJson.token);
				}
				catch(error){
					console.error({error})
				}
      },
			apiFetch: async (endpoint, metodo='GET', data=null) => {
				const store = getStore()
				let url = process.env.BACKEND_URL;
				let headers = {"Content-Type": "application/json", "Access-Control-Allow-Origin": "*",}
				console.log(store.token)
				if (store.token){
					headers["Authorization"] = "Bearer " + store.token
				}
				let request = {
					method: metodo,
					headers,
				}
				if (data){
					request.body = JSON.stringify(data)
				}
				return await fetch(url + "/api/" + endpoint, request);
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
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
			}
		}
	};
};

export default getState;
