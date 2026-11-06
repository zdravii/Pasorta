export default { 
    async loadDogs(context) {
     const response = await fetch("/data/dogs.json");
     const resposneData = await response.json();
     context.commit("SetDogs",resposneData)
    }
}