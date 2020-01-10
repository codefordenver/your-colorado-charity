import axios from 'axios';

export class CharityService {
    
    getCharitiesSmall() {
        return axios.get('assets/demo/data/charities-small.json')
                .then(res => res.data.data);
    }

    getCharitiesMedium() {
        return axios.get('assets/demo/data/charities-medium.json')
                .then(res => res.data.data);
    }

    getCharitiesLarge() {
        return axios.get('assets/demo/data/charities-large.json')
                .then(res => res.data.data);
    }
}