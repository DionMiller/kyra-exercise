import { Box } from "@mui/material"
import { useEffect, useState } from "react";

async function placeSearch() {
    try {
        const searchParams = new URLSearchParams({
            query: 'coffee',
            ll: '41.8781,-87.6298',
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
        return data;
    } catch (err) {
        console.error(err);
    }
    }


const LocationCard = () =>{
    const [places,setPlaces] = useState<any[]>([])
    useEffect(()=>{
        async function placeSearch() {
            try {
                const searchParams = new URLSearchParams({
                    query: '',
                    ll: '41.8781,-87.6298',
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
                setPlaces(data.results)
                return data;
            } catch (err) {
                console.error(err);
            }
            }
            placeSearch()
    },[])
    return(
        
        <>
        {places.map((item,index)=>{
            return(
            <Box key={index}>
                <img
                    src={`${item.categories[0].icon.prefix}`+"120"+`${item.categories[0].icon.suffix}`}
                
                    alt={item.name}
                    loading="lazy"
                />
                <h2>{item.name}</h2>
                <h2>{`${item.categories[0].icon.prefix}`+"120"+`${item.categories[0].icon.suffix}`}</h2>
            </Box>
        )})}
      
        </>
    )
}
/**
 * map with text over image
 */
 
  
export default LocationCard