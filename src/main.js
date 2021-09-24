import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state() {
        return {
            list: [{ name: "Kaffee" }, { name: "Äpfel" }, { name: "Bananen" }],
            filter: ""
        };
    },

    //die eigentlichen "setter"
    mutations: {
        deleteItem(state, toDelete) {
            state.list = state.list.filter(item => {
                return item.name !== toDelete;
            });
        },
        updateFilter (state, filter) {
            state.filter = filter;
        },
        addItem(state, newItem) {
            state.list.push({ name: newItem });
        }
    },

    //brauchen wir für asynchronen Code -> IMMER verwenden!
    actions: {
        deleteItem(context, toDelete) {
            context.commit("deleteItem", toDelete);
        },
        updateFilter(context, filter) {
            context.commit("updateFilter", filter);
        },
        addItem(context, newItem) {
            context.commit("addItem", newItem);
        }
    }
});


const app = createApp(App);
app.use(store);
app.mount('#app');
