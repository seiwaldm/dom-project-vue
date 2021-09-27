import { createApp } from 'vue';
import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';

import App from './App.vue';

const vuexLocal = new VuexPersistence();

const store = createStore({
    state() {
        return {
            lists: [{
                name: "Einkaufsliste",
                list: [{ name: "Kaffee" }, { name: "Äpfel" }, { name: "Bananen" }],
                active: true
                },
                {
                name: "Lernen",
                list: [{ name: "vue" }, { name: "react" }, { name: "angular" }],
                active: false
                }],

            filter: ""
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
        setActive(state, newActiveList) {
            if (state.lists.length > 0) {
                state.lists.forEach(list => list.active = false);
                store.getters.getListByName(newActiveList).active = true;
            }
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
        setActive(context, list) {
            context.commit("setActive", list);
        },
        deleteList(context) {
            context.commit("deleteList");
        },
        addList(context, newList) {
            context.commit("addList", newList);
        }
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
        getActiveList(state) {  
            return state.lists.filter(list => list.active === true)[0];
        }
    },
    plugins: [vuexLocal.plugin]
});

const app = createApp(App);
app.use(store);
app.mount('#app');
