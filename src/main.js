import { createApp } from 'vue';
import { createStore } from 'vuex';
import { db } from "./db";


import App from './App.vue';


const store = createStore({
    state() {
        return {
            lists: [],

            listKeys: [],

            filter: "",

            activeList: ""
        };
    },

    //die eigentlichen "setter"
    //alle Veränderungen am store.state laufen über mutations
    mutations: {

        deleteItem(state, toDelete) {
            store.getters.getActiveList.list = store.getters.getActiveList.list.filter(item => {
                return item.name !== toDelete;
            });
        },
        updateFilter (state, filter) {
            state.filter = filter;
        },
        addItem(state, newItem) {
            store.getters.getActiveList.list.push({ name: newItem });
        },
        setActiveList(state, newActiveList) {
            state.activeList = newActiveList;
        },
        deleteList(state) {
            state.lists = state.lists.filter(list => !list.active);
            if (state.lists.length > 0) {
                state.lists[0].active = true;
            }
        },
        addList(state, newList) {
            if (state.lists.length > 0) {
                state.lists.forEach(list => list.active = false);
            }
            state.lists.push({ name: newList, list: [], active: true });
            
        },
        loadLists(state,  data) {
            // state.listKeys = keys;
            state.lists = data;
        },
        loadListKeys(state, keys) {
            state.listKeys = keys;
        }
    },

    //brauchen wir für asynchronen Code -> IMMER verwenden ist gute Praxis!
    actions: {
        deleteItem(context, toDelete) {
            context.commit("deleteItem", toDelete);
        },
        updateFilter(context, filter) {
            context.commit("updateFilter", filter);
        },
        addItem(context, newItem) {
            context.commit("addItem", newItem);
        },
        setActiveList(context, list) {
            console.log("setActiveList fired")
            context.commit("setActiveList", list);
        },
        deleteList(context) {
            console.log(context.state.lists);
            context.state.lists.forEach((list, index) => {
                if (list.name === context.state.activeList) {
                    const key = context.state.listKeys[index];
                    db.ref(`lists/${key}`).remove();
                }
            });            
        },
        addList(context, newList) {
            db.ref("lists").push({
                name: newList
            });
        },
        loadLists(context) {
            db.ref("lists").on("value", (snapshot) => {
                const data = snapshot.val();
                if (data !== null) {
                    const dataArray = Object.values(data);
                    const keyArray = Object.keys(data);
                    context.commit("loadLists", dataArray);
                    context.commit("loadListKeys", keyArray);
                }
                else {
                    context.commit("loadLists", []);
                    context.commit("loadListKeys", []);
                }
            });
        },
    },
    

    //sind wie computed properties in components
    //führen immer irgendwelche Berechnungen oÄ durch
    getters: {
        getListByName(state) {
            return (listName) => {
                const list = state.lists.filter((list) => list.name === listName);
                return list[0];
            };
        },
        
    }
});

const app = createApp(App);
app.use(store);
app.mount('#app');
