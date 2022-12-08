
const express = require("express")
const app = express()
const axios = require('axios');
const cors = require("cors")
const dotenv = require('dotenv');
const { response } = require("express");
dotenv.config()
const sdk = require('api')('@fsq-developer/v1.0#5ht27ul9n9ebnn')

const locationRequestOptions = {
    method: 'GET',
    url: `${process.env.URL}`,
    headers: {
        accept: 'application/json',
        Authorization: `${process.env.FSQ_API_KEY}`
    }
    };

const pictureList = async (locationReq) =>{
    let picList = locationReq.map((picture => axios.request(picture).then(response=>{
        (response.data)

        return(response.data)
    }
        )
        ))

        let results = (await Promise.all(picList)).flat()
    return(results)
    

}
const locationsList = async (locationReq) => {
    let locationDetails = axios.request(locationReq).then(response => response.data.results)
    let requestDetails =  await locationDetails
    requestDetails = requestDetails.map((location)=>{
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `${process.env.FSQ_API_KEY}`
            }
    }
        options.url = `https://api.foursquare.com/v3/places/${location.fsq_id}/photos?limit=1`
        
        return (options)
    }
    
    )

    return[locationDetails,requestDetails]
    }

        
const fetchData = async () =>{
    
    const [loctionQueryList,pictureRequestList] = await locationsList(locationRequestOptions)
    let locationDetailsList = await pictureList(pictureRequestList)
    let locationNameList = (await loctionQueryList).map((x=>x.name))

    locationDetailsList = locationDetailsList.map((value,index)=>({...value,name:locationNameList[index]}))
    

    return(locationDetailsList)

}

    
app.use(cors())
app.listen(process.env.PORT, () => {
	console.log(`Listening at http://localhost:${process.env.PORT}`)
})

app.get("/",cors(),async(req,res)=>{
    console.log("Fetching Data...")
    fetchData()
        .then(data =>res.status(200).send(data))
        
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
  