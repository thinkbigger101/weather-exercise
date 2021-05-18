import axios from 'axios';
//import moment from "moment";

const config = {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
};

export const fetchApi = (selectedCategory) => {

    const dateHandler = () => {
        const tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);
    return `${tomorrow.getFullYear()}/${tomorrow.getMonth() + 1}/${
        tomorrow.getDate()
    }`;

        // let today = moment();
        // let tomorrow = today.add('days', 1);
        // return moment(tomorrow).format("YYYY/MM/DD");
    }

    const dat = dateHandler();
    return axios.get(`search/?query=${selectedCategory}`,config)
        .then((data) => {
            return axios.get(`${data.data[0].woeid}/${dat}/`)
        })
        .then(res => {
            return res

        })
        .catch((error) => {
            console.log("ERROR==>", error);
            alert("cors issue");
        });
}
