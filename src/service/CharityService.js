import axios from 'axios';

// updated to skip a few steps while calling data in the component
export default {
    getCharitiesSmall: function() {
        return axios.get('assets/demo/data/charities-small.json')
            .then(res => res.data.data)
            .catch(err => console.log(err))
    },

    getCharitiesMedium: function() {
        return axios.get('assets/demo/data/charities-medium.json')
        .then(res => res.data.data)
        .catch(err => console.log(err))
    },

    getCharitiesLarge: function() {
        return axios.get('assets/demo/data/charities-large.json')
            .then(res => res.data.data)
            .catch(err => console.log(err))
    }
}