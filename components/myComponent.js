import config from "../storage/config.js";
export default{
    getData(){
        config.dataMyComponent();
        Object.assign(this, JSON.parse(localStorage.getItem("myComponent")))
        async function getPokemon(){
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281')
                const data = await response.json();
                return data
            }catch (error){
                console.error(error);
            }
        }
    }
}
