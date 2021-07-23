import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light:
            {
                primary: '#16b26a',
                secondary: '#009688',
                accent: '#6916b2',
                accent2: '165fb2',
                error: '#f44336',
                warning: '#ffc107',
                info: '#607d8b',
                success: '#cddc39'
            },
        },
        options: {
            customProperties: true
        }
    }
});
