import React, { useEffect, useRef } from 'react';
import { Stack, Typography } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger);

export default function FirstPage() {

    const TitleRef = useRef();

    useEffect(() => {
        gsap.to(TitleRef.current, {
            fontSize: "200px",
            opacity:1,
            duration: 1,
            scrollTrigger: {
                toggleActions: "repeat none none none",
                trigger: TitleRef.current,
                start: "center 90%",
                end: "center 10%",
                markers: true,
                scrub:1
            }
        });
    }, []);

    return (
        <Stack sx={{ alignItems: "center", height: "500vh", justifyContent: "flex-start",overflow:"hidden" }}>
            <Typography variant='ken'  sx={{ color: "black", opacity:1,textAlign: "center", fontSize: "2000px", lineHeight: "90%",width:"1000%" }}>WELCOME TO <br />GAME</Typography>
        </Stack>
    )
}
