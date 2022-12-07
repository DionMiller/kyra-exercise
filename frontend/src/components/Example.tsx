import { Box, createTheme, Grid, makeStyles, ThemeProvider, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import axios from "axios";
import { red } from "@mui/material/colors";
import { maxWidth } from "@mui/system";

const data1 =[
    {
      id: '5d8de0a63cbfe900088584a6',
      created_at: '2019-09-27T10:12:54.000Z',
      prefix: 'https://fastly.4sqi.net/img/general/',
      suffix: '/66618330_jF9da8201w-aL23I3d21wx6UOcNUWThkw_Q8qGYWM90.jpg',
      width: 1440,
      height: 1920,
      classifications: [ 'food' ],
      name: 'The Garden'
    },
    {
      id: '5df3da1480d83900083476ab',
      created_at: '2019-12-13T18:36:04.000Z',
      prefix: 'https://fastly.4sqi.net/img/general/',
      suffix: '/447973754_Ph7lpZIlTsFX9J8d9dl5-FESQxplq4KS8ri91ph8EBM.jpg',
      width: 1440,
      height: 1920,
      classifications: [ 'indoor' ],
      name: 'Avocado and Coffee'
    },
    {
      id: '5267e0aa498e16a8a9788368',
      created_at: '2013-10-23T14:43:54.000Z',
      prefix: 'https://fastly.4sqi.net/img/general/',
      suffix: '/55850905_T8MfP-E_cu3Rd0W3EagxvyVfB8Kfl2i6p9Oiki1t_0E.jpg',
      width: 720,
      height: 960,
      name: 'Caffè Nero'
    },
    {
      id: '60cf37e136c80152faffa86b',
      created_at: '2021-06-20T12:43:13.000Z',
      prefix: 'https://fastly.4sqi.net/img/general/',
      suffix: '/58860953_c3KNOw8QZdUt5ZbBWxw5LEaUEQff6MRWhH9U5QVT72k.jpg',
      width: 1440,
      height: 1920,
      name: 'Parkside Café & Terrace'
    },
    {
      id: '62b43a8eb5dded6e692978ee',
      created_at: '2022-06-23T10:03:58.000Z',
      prefix: 'https://fastly.4sqi.net/img/general/',
      suffix: '/56750378_GbDU56FhJO6ROSobG_ZYarbJOb5Zh9Jc8UftNQdu6Ws.jpg',
      width: 1440,
      height: 648,
      name: 'Galley Café Bar'
    },
    {
      id: '51657067e4b0c1c41899d18d',
      created_at: '2013-04-10T14:00:07.000Z',
      prefix: 'https://fastly.4sqi.net/img/general/',
      suffix: '/7467861_UhXrxJE-fHYeJNFuNoa3mJwvS5cDKn_7Ws566R8D8JM.jpg',
      width: 960,
      height: 720,
      name: "Heap's Sausages"
    },
    {
      id: '5dcd10c1a270670008137e20',
      created_at: '2019-11-14T08:30:57.000Z',
      prefix: 'https://fastly.4sqi.net/img/general/',
      suffix: '/5080516_-w-TZRqUO40Uh7KeXMem_XC81wxC_QKE-_TZ5qxKR0c.jpg',
      width: 1440,
      height: 1920,
      classifications: [ 'food' ],
      name: 'Greenwich West Cafe'
    },
    {
      id: '513b1ce8e4b0fce93781c6a7',
      created_at: '2013-03-09T11:28:40.000Z',
      prefix: 'https://fastly.4sqi.net/img/general/',
      suffix: '/49854462_1iGjLCxPKxgZlUYhS_ITKxLBYBwevrx_Civ9mZEBIqs.jpg',
      width: 960,
      height: 720,
      name: 'Cafe Dee Eltham'
    },
    {
      id: '505475c1e4b084591526a106',
      created_at: '2012-09-15T12:34:09.000Z',
      prefix: 'https://fastly.4sqi.net/img/general/',
      suffix: '/381666_AJnpBmd2F8WBFoqdRcpU30aas9h5zOoIQHx02EK9PtA.jpg',
      width: 720,
      height: 720,
      name: 'The Waiting Room'
    }
  ]

const LocationCard = () =>{
    const [places,setPlaces] = useState<any[]>([])
    const [langLong, setLangLong] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        
        
        setPlaces(data1);
        setLangLong(`51.5153, 0.0566)`)
        },[])
    return( isLoading?(
        <h1>loading...</h1>

    ):    

    <Box sx={{ flexGrow: 1, justifyItems:"center"}}>
                    <Typography variant="h3">Foursquare in your Location</Typography>
        <Typography variant="h3">{langLong}</Typography>        
        <Box sx={{ flexGrow: 1, justifyItems:"center"}}>

      <Grid container justifyContent="center" alignContent="center" width="1000" spacing={0.5}>
      {places.map((item,index)=>(
            
            <Grid item xs="auto" sm="auto" key={index} >
            <Box sx={{
                backgroundImage:`url(${item.prefix}300x300${item.suffix})`,
                backgroundSize:"cover",
            height:300,
            width:300,
            justifyContent:"flex-end",
            alignItems:"flex-end"
                
            }} >
            
            <Typography variant="h4">{`${item.name}`}</Typography>
            </Box>
            </Grid>
            ))}
        
        
   
        </Grid>
        </Box>
            </Box>
    )
    
    
}