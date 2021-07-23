import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light:
            {
                primary: '#4caf50',
                secondary: '#009688',
                accent: '#03a9f4',
                error: '#f44336',
                warning: '#ffc107',
                info: '#607d8b',
                success: '#cddc39'
            },
        },
    }
});
