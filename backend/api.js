// const sdk = require('api')('@fsq-developer/v1.0#5ht27ul9n9ebnn');

// sdk.auth('fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE=');
// sdk.placeSearch()
//   .then(({ data }) => console.log(data))
//   .catch(err => console.error(err));


const express = require("express")
const app = express()
const axios = require('axios');
const cors = require("cors")
const dotenv = require('dotenv');
const { response } = require("express");
dotenv.config()
const sdk = require('api')('@fsq-developer/v1.0#5ht27ul9n9ebnn')

// 'fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE='
const fetchPlacesPictures = async () =>{
    sdk.auth(process.env.FSQ_API_KEY);
    sdk.placePhotos({limit: '1', classifications: 'outdoor', fsq_id: '5b684dab112c6c002cfd309d'})
      .then(({ data }) => console.log(data))
      .catch(err => console.error(err));
}
const locationOptions = {
    method: 'GET',
    url: 'https://api.foursquare.com/v3/places/search?query=coffee',
    headers: {
        accept: 'application/json',
        Authorization: 'fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE='
    }
    };

const locations = async (locationReq) => {
    let locationDetails = axios.request(locationReq).then(response => response.data.results)
    let requestDetails =  await locationDetails
    requestDetails = requestDetails.map((location)=>{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE='
            }
    }
        options.url = `https://api.foursquare.com/v3/places/${location.fsq_id}/photos?limit=1`
        
        return (options)
    }
    
    )
    
    // console.log("reqis",requestDetails)
    // console.log("loqis",locationDetails)
    return[locationDetails,requestDetails]
    }
// const pictures = async (locationReq) =>{
//     let data = locationReq.map((picture) => axios.request(picture).then(response=>response.data))
//     console.log(data)
//     }

const picQuery = async (query) =>{
    query.map((location)=>{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE='
            }
    }
        options.url = `https://api.foursquare.com/v3/places/${location.fsq_id}/photos?limit=1`
        
        return (options)
    }

    )
    }

    const pictures = async (locationReq) =>{
        return locationReq.map((picture => axios.request(picture).then(response=>{
            console.log(response.data)
            return(response.data)
        }
            )))
        
    
    }
    


        
const fetchAxios = async () =>{
    console.log("running")
    const [reqDetails,locDetails] = await locations(locationOptions)
   
    // let pictureList = pictures(locationlist).then(data=>{
    //     // console.log("data is",JSON.stringify(data))
    // })
    
    const picJSON = await pictures(locDetails)

    
    // (async () => {
    //     const pics = await picQuery(locationlist)
    //     console.log(pics)
    // })()
    // return(await pictureList)
}

    

// async function fetchPlaces() {
//     try {
//         const searchParams = new URLSearchParams({
//           query: 'coffee',
//           open_now: 'true',
//           sort: 'DISTANCE'
//         });
//         const results = await fetch(
//           `https://api.foursquare.com/v3/places/search?${searchParams}`,
//           {
//             method: 'GET',
//             headers: {
//               Accept: 'application/json',
//               Authorization: 'fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE=',
//             }
//           }
//         );
//         const data = await results.json();
//         console.log(JSON.stringify(data.results))
//         // console.log(data.results)
//         return data.results;
//     } catch (err) {
//         console.error(err);
//     }
// }
app.use(cors())
app.listen(process.env.PORT, () => {
	console.log(`Listening at http://localhost:${process.env.PORT}`)
})

app.get("/",cors(),async(req,res)=>{

    fetchAxios()
        .then(data =>res.status(200).send(JSON.stringify(data)))
})














    // return axios.request(locationOptions).then(response => console.log(response.data))
// axios.all([locationRequest, pictureRequest]).then((data) => {
//     data.forEach(item=> console.log(item.data))
//  }).catch(error => {
//     console.error(error)
// })

// const optionList = await locations()
// console.log(optionList)

//   const newlists =[axios.request(newlist[0]),axios.request(newlist[1])]
// axios.all(newlists.map((endpoint) => axios.request(endpoint))).then(
//     axios.spread(function (...res){
//         console.log(res.data)}
//   ))
  

    
//   axios.request(testReq).then(response=> console.log(response.data))
// const fetchAllLocations = async (list) => {axios.all(list.map(option => {axios.request(option)}))
// .then((data) => {
//         data.forEach(item=> console.log(item))
//         })
// .catch(error => {
//         console.error(error)
// })}

    // await locations().then(fetchAllLocations(locations()))
    // console.log( await locations())

    // await (fetchAllLocations(locations()))

    
    



// axios
//   .request(locationOptions)
//   .then(function (response) {
  
//     // console.log(response.data.results);
//     // let arr1 = response.data.results.map((location)=>location.fsq_id)
//     axios
//     .all(response.data.results.map((fsq_id)=>axios.request({
//         method: 'GET',
//         url: `https://api.foursquare.com/v3/places/${fsq_id}/photos?limit=1&classifications=outdoor`,
//         headers: {
//           accept: 'application/json',
//           Authorization: 'fsq3Wy3+RUvdvcRLm4DkXbqHwQjIUUjaZcaQNxBWYjuZGhE='
//         }
//       })))
//     .then(
//         (data)=>data.forEach(item=> console.log(item))
//     )
//     .catch(error => {
//             console.error(error)
//         })
//     console.log(arr1)
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
  