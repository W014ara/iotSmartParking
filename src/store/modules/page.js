export default {
    state: {
        page__Size: 'mobile'
    },
    mutations: {
        changePageSize(state){
            let width = window.screen.width;
            width >= 1024 ? state.page__Size = 'desktop' : state.page__Size = 'mobile'
        }
    },
    getters: {
        getPageSize(state){
            return state.page__Size;
        }
    }
}