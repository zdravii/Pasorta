export default {
    getDogs(state){
        return state.dogsList;
    },
    getOneDog:(state) => (payload) => {
        return state.dogsList.find(x=>x.id == payload)
    }
}