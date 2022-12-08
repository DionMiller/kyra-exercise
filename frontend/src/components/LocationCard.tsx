import { Box, Button, createTheme, Grid, makeStyles, ThemeProvider, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import axios from "axios";
import { red } from "@mui/material/colors";
import { maxWidth } from "@mui/system";
import Loader from "./Loader";
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


  const theme = createTheme()
  theme.typography.h3 ={
    color:"white",
   
  }
  theme.typography.h4 ={
    color:"white",
   
  }
const LocationCard = () =>{
    const [places,setPlaces] = useState<any[]>([])
    const [lattLongitude, setlattLongitude] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        setIsLoading(true)
        axios.get("http://localhost:4000/").then(response => {
        setPlaces(response.data);

       
        axios.get('https://geolocation-db.com/json/').then(response => {
            setlattLongitude(`(${response.data.latitude}, ${response.data.longitude})`)
        }).then(()=>setIsLoading(false))
            
        
          
    })
    
    },[])
    return isLoading ? (
        <Box m ={"auto"} width="100%" justifyContent="center">
            <Loader />
        </Box> 
      ) : (
        <Box
          sx={{
            backgroundColor: "#242424",
            color: "white",
            width: "min(800px, 100%)",
            marginInline: "auto",
            padding: "2rem 3rem",
          }}
        >
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Foursquare in your Location
          </Typography>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", marginBottom: "1.5rem" }}
          >
            {lattLongitude}
          </Typography>
    
          <Box>
            <Button sx={{
              display: "block",
              width: "max-content",
              fontSize: "2rem",
              marginInline: "auto",
              padding: "12px",
              border: "1px solid #fff",
              borderRadius: "18px",
              marginBottom: "2.5rem",
              color:"white"
            }}
            onClick={()=>{
                window.location.reload();
             }}>
            Search Location
                </Button> 
          </Box>
    
          <Grid
            container
            // justifyContent="center"
            alignContent="center"
            spacing={0.5}
          >
            {places.map((item, index) => (
              <Grid item md={6} key={index}>
                <Box
                  sx={{
                    backgroundImage: `linear-gradient(
                      to bottom,
                      rgba(0, 0, 0, 0),
                      rgba(0, 0, 0, 0.6)
                    ), url(${item.prefix}300x300${item.suffix})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: 300,
                    width: 300,
                    marginLeft: index % 2 === 0 ? "auto":"default",
                    // marginRight: index === places.length - 1 && "auto",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      position: "absolute",
                      left: "10px",
                      bottom: "10px",
                      fontSize: "1.6rem",
                    }}
                  >{`${item.name}`}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      );
    }

export default LocationCard