import { Stack, Box, Typography } from '@mui/material'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useSelector } from 'react-redux';


gsap.registerPlugin(ScrollTrigger);

export default function LogoAnimation() {

    const ImageRef = useRef();
    const TextRef = useRef();

    useEffect(() => {
        gsap.to(ImageRef.current, {
            translateX: "500px",
            duration: 1,
            scrollTrigger: {
                toggleActions: "restart restart play play",
                trigger: ImageRef.current,
                start: "top 90%",
                end: "top 10%",
                scrub:1,
                markers: true,
            }
        });
        gsap.to(TextRef.current, {
            fontSize:"80px",
            duration: .8,
            delay: 0,
            scrollTrigger: {
                toggleActions: "play reverse play reverse",
                trigger: TextRef.current,
                start: "top 90%",
                end: "top 20%",
            }
        });
    }, []);

    return (
        <>
            <Stack sx={{ height: "100vh", alignItems:'center',justifyContent:"center",backgroundColor: "secondary.main" }}>
                <Typography variant='h1' ref={TextRef} sx={{fontSize:"0px",letterSpacing:"-.1em",textAlign:"center",lineHeight:"80%",color:"text.main"}}>Hello I am under
                    <br />
                    the water.</Typography>
            </Stack>
            <Stack sx={{ height: "100vh", backgroundColor: "text.main" }}>
                <Box sx={{ width: "200px", height: "200px", backgroundColor: "white" }} ref={ImageRef}></Box>
            </Stack>
            <Stack sx={{ height: "100vh", backgroundColor: "secondary.main" }}></Stack>
        </>
    )
}
