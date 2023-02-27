import React, { useEffect } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MountainData } from './MountainData.js';

gsap.registerPlugin(ScrollTrigger);

export default function MountainAnimation() {

    //Animation for text
    useEffect(() => {
        gsap.fromTo(".animtion-text", {
            translateY: "100px",
            opacity: 0
        }, {
            translateY: "0px",
            opacity: 1,
            delay: .75,
            duration: .5,
            scrollTrigger: {
                toggleActions: "play reverse play reverse",
                trigger: ".animtion-text",
                start: "-100px bottom",
                end: "100px top"
            }
        })
    }, []);

    //Animation for mountain images
    useEffect(() => {
        {
            MountainData.forEach((curr) => {
                gsap.fromTo(`${"." + curr.className}`, {
                    bottom: curr.Anibottom,
                }, {
                    bottom: curr.bottom,
                    duration: .75,
                    delay: curr.delay,
                    scrollTrigger: {
                        trigger: '.main',
                        toggleActions: "play reverse play reverse",
                        start: `${"-50%" + " top"}`,
                        end: "70% top",
                    }
                })
            })
        }

    }, []);

    return (
        <>
            <Stack sx={{ background: "linear-gradient(#fcebfc,#eda3f0)", width: "100%", height: "100vh", position: "relative", overflow: "hidden", alignItems: "center", justifyContent: "center", gap: "5%" }} className='main'>
                <Typography variant='h2' className='animtion-text' sx={{ color: "#281F32", fontSize: "20px", zIndex: 3, letterSpacing: "5px", backgroundColor: "#eda3f0", padding: "5px 10px" }}>
                    MOUNTAIN TRAVEL EXPERTS
                </Typography>
                <Typography variant='han' className='animtion-text' sx={{ color: "#281F32", fontSize: "80px", textAlign: "center", zIndex: 3, lineHeight: "90%" }}>
                    Your Mountain <br />Travel.
                </Typography>
                {
                    MountainData.map((curr, indx) => (
                        <img className={curr.className} src={curr.image} style={{ width: "100%", position: "absolute", bottom: curr.bottom, zIndex: curr.zIndex }} key={indx} />
                    ))
                }
            </Stack>
        </>
    )
}
