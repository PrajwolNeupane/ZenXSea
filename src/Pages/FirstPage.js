import React, { useEffect, useRef } from 'react';
import { Stack, Typography } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import first from '../images/first.png';


gsap.registerPlugin(ScrollTrigger);

export default function FirstPage() {

    const TitleRef = useRef();

    useEffect(() => {
        gsap.to(TitleRef.current, {
            fontSize: "200px",
            opacity:1,
            duration: .5,
            scrollTrigger: {
                toggleActions: "play reverse play reverse",
                trigger: TitleRef.current,
                start: "center 95%",
                end: "center 5%",
            }
        });
    }, []);

    return (
        <Stack sx={{ alignItems: "center", height: "100vh", justifyContent: "center",backgroundColor:"text.main",overflow:"hidden" }}>
            <Typography variant='ken' sx={{fontSize:"250px",color:"primary.main",position:"absolute",left:"-1.5em",transform: "rotate(90deg)",overflow:"hidden" }}>G2 ESPORT</Typography>
            <img src={first} style={{width:"100%",height:"100%",objectFit:"cover",zIndex:1}}/>
        </Stack>
    )
}
