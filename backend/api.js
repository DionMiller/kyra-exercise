// const sdk = require('api')('@fsq-developer/v1.0#5ht27ul9n9ebnn');

// sdk.auth('fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE=');
// sdk.placeSearch()
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));


const express = require("express")
const app = express()
const port = 4000
const cors = require("cors")
const sdk = require('api')('@fsq-developer/v1.0#5ht27ul9n9ebnn')
'fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE='
const fetchPlacesPictures = () =>{
    sdk.auth('fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE=');
    sdk.placePhotos({limit: '1', classifications: 'outdoor', fsq_id: '5b684dab112c6c002cfd309d'})
      .then(({ data }) => console.log(data))
      .catch(err => console.error(err));
}


async function fetchPlaces() {
    try {
        const searchParams = new URLSearchParams({
          query: 'coffee',
          open_now: 'true',
          sort: 'DISTANCE'
        });
        const results = await fetch(
          `https://api.foursquare.com/v3/places/search?${searchParams}`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              Authorization: 'fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE=',
            }
          }
        );
        const data = await results.json();
        console.log(JSON.stringify(data.results))
        // console.log(data.results)
        return data.results;
    } catch (err) {
        console.error(err);
    }
}
app.use(cors())
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})

app.get("/",cors(),async(req,res)=>{
	let places = fetchPlaces()
    // places.then(res.send.bind(res))
    fetchPlaces()
        .then(data =>res.status(200).send(data))
    
    // res.send("hi")
    // console.log(places)
})
