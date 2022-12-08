import { Box, Button, createTheme, Grid, makeStyles, ThemeProvider, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import axios from "axios";
import { red } from "@mui/material/colors";
import { maxWidth } from "@mui/system";
import Loader from "./Loader";
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: true;
    md: false;
    lg: false;
    xl: false;

  }
}
type PlaceType =
{
  id: string,
  created_at: string,
  prefix: string,
  suffix: string,
  width: number,
  height: number,
  name: string,
}
  


  const theme = createTheme({
    breakpoints: {
      values: {
        sm: 750,
      },
    }
  })
  theme.typography.h3 ={
    color:"white",
   
  }
  theme.typography.h4 ={
    color:"white",
   
  }
const LocationCard = () =>{
    const [places,setPlaces] = useState<PlaceType[]>([])
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
        <ThemeProvider theme={theme}>

        <Box
          sx={{
            backgroundColor: "#000000",
            color: "white",
            width: "(800px, 100%)",
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
    
          <Box sx={{display:"flex"}}>
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
            justifyContent="center"
            alignContent="center"
            spacing={0.5}
            >
            {places.map((item, index) => (
              <Grid item sm={6} key={index}>
                <Box
                  sx={{
                    backgroundImage: `linear-gradient(
                      to bottom,
                      rgba(0, 0, 0, 0),
                      rgba(0, 0, 0, 0.6)
                      ), url(${item.prefix}250x250${item.suffix})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: 300,
                      width: 300,
                      marginLeft: index % 2 === 0 ? "auto" : "default",
                      // marginRight: index === places.length - 1 && "auto",
                      position: "relative",
                      display:"flex"
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
        </ThemeProvider>
      );
    }

export default LocationCard