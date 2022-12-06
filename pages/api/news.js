import axios from "axios";

export default async function handler(req, res) {

 

 

const options = {
  method: 'GET',
  url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/coins/get-markets',
  params: {cur2: '12', pair_ID: '1057391', time_utc_offset: '28800', lang_ID: '1'},
  headers: {
    'X-RapidAPI-Key': '3aceb39941mshffdbe34a882d0bbp1afacajsn19b45eaa2370',
    'X-RapidAPI-Host': 'investing-cryptocurrency-markets.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}