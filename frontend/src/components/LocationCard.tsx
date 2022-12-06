import { Box, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import axios from "axios";
type PlaceType =
{
    fsq_id: string;
    categories: Array<{id:number,name:string,icon:{prefix:string,suffix:string}}>;
    chains: Array<object>;
    distance: number;
    geocodes: { main: [Object], roof: [Object] };
    link: string;
    location: {
      address: string;
      admin_region: string;
      country: string;
      formatted_address: string;
      locality: string;
      neighborhood: Array<string>;
      post_town: string;
      postcode: string;
      region: string;
    };
    name: string;
    related_places: {},
    timezone: string
  }
const LocationCard = () =>{
    const [places,setPlaces] = useState<PlaceType[]>([])
    useEffect(()=>{
        // const fetchPlaces = async () => {
        //     fetch("http://localhost:4000/")
        //     .then(res =>setPlaces(res as unknown as PlaceType[]))
        //     .catch(err=>err)
        // }
        // fetchPlaces()
        axios.get("http://localhost:4000/").then(response => {
        setPlaces(response.data);
    })
    },[])
    return(
        
        <>
        <Grid container spacing ={3} >
        
        {places.map((item,index)=>{
            return(
                <Grid item xs={6} key={index}>
                <Box>
                <img
                    src={`${item.categories[0].icon.prefix}`+"120"+`${item.categories[0].icon.suffix}`}
                    
                    alt={item.name}
                    loading="lazy"
                    />
                <Typography>{item.name}</Typography>
                <Typography>{`${item.categories[0].icon.prefix}`+"120"+`${item.categories[0].icon.suffix}`}</Typography>
                </Box>
            </Grid>
        )})}
        </Grid>
      
        </>
    )
}
/**
 * add laoding screen
 * create dummy data
 * overlay image with text
 * responsive/mobile set up
 * hover effect
 * 
 * fix backend
 * 
 * change category dropdown
 */
 
  
export default LocationCard