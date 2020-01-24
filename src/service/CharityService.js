//import axios from 'axios';
import Tabletop from 'tabletop';

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1c-quiL2cLVvJ0uvZTkSB_E7pr8ktQXBHSmrib-6yym4/edit';
// function init() {
//     var funcobj = new Tabletop.init( { 
//         key: public_spreadsheet_url,
//         callback: getSheet,
//         simpleSheet: false
//     });
//     return funcobj;
// }

// function getSheet(data, tabletop) {
//     var charities; 
//     charities = tabletop.sheets()['data'].elements;
//    // console.log(charities);
//    // charities.forEach(getImage);
//    return charities;
// }

// function getImage(element, index, charities) {
//     console.log(charities[index].imageURL);
//     var url = charities[index].imageURL;
//     fetch(url)
//     .then(res => charities[index].image = res);
//     // axios.get(url, { headers: {
//     //     'Access-Control-Allow-Origin': '*',
//     //   },crossdomain: true, mode: 'no-cors' })
//     //     .then(res => charities[index].image = res);
//      console.log(charities[index]);
// }

// updated to skip a few steps while calling data in the component
export default {
     getCharities: function() {
        var charities = [];
        var charityFunc = {
        getSheet: function () {Tabletop.init( { 
            key: public_spreadsheet_url,
            callback: (data, tabletop) => {
                this.charities = tabletop.sheets()['data'].elements;
                // tabletop.sheets()['data'].elements.forEach(element => {
                //     console.log(element);
                //     this.charities = this.charities + element;
                // });
            // charities.forEach(getImage);
            },
            simpleSheet: false
        })}};
        charityFunc.getSheet.call(charities);
        console.log(charities);
        return charities;
    }
}