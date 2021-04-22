import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: [],
        todoList: [],
    },
    mutations: {
        setCategories(state, categories) {
            state.categories = categories
        },
        seTodoList(state, todoList) {
            state.todoList = todoList
        },
        addNewTotoItem(state, todoItem) {
            state.todoList.push(todoItem)
        },
        setCheckedDone(state, id) {
            const xId = state.todoList.findIndex(item => item.id === id)
            console.log(xId);
            Vue.set(state.todoList[xId], 'done', !state.todoList[xId].done)
        },
    },
    getters: {
        getCategories: state => {
            return state.categories
        },
        getTodoList: state => {
            return state.todoList
        },
        fetchAllById(state) {
            return (id) => state.todoList.filter(todo => todo.categoriesId === id)
        },
        fetchAllById1: (state) => (id) => {
            return state.todoList.filter(todo => todo.categoriesId === id)
        },
        fetchAll: state => {
            return state.todoList
        }
    }
});
