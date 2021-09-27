import { createApp } from 'vue';
import { createStore } from 'vuex';
import { vuexfireMutations, firebaseAction } from 'vuexfire';
import { db } from "./db";


import App from './App.vue';


const store = createStore({
    state() {
        return {
            lists: [],

            filter: ""
        };
    },

    //die eigentlichen "setter"
    //alle Veränderungen am store.state laufen über mutations
    mutations: {

        ...vuexfireMutations,
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
        },
        bindListsRef: firebaseAction(context => {
      // context contains all original properties like commit, state, etc
      // and adds `bindFirebaseRef` and `unbindFirebaseRef`
      // we return the promise returned by `bindFirebaseRef` that will
      // resolve once data is ready
            
            return context.bindFirebaseRef('lists', db.ref('lists'));
        }),
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
        },
        getLists(state) {
            return state.lists;
        }
    }
});

const app = createApp(App);
app.use(store);
app.mount('#app');
