let axios = require('axios');
const envior = require('../../../config');

const get = (req, res) => {
    let {city} = req.query
    let config = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants%20in%20${city}&key=${envior.MAPS_GOOGLE_KEY}`,
        headers: { }
      };
    
    axios(config)
    .then(function (response) {
        //console.log(JSON.stringify(response.data));
        res.json(response.data);
    })  
    .catch(function (error) {
        console.log(error);
    });
}

module.exports = {get}
