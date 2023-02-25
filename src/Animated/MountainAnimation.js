import React, { useEffect } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MountainData } from './MountainData.js';

gsap.registerPlugin(ScrollTrigger);

export default function MountainAnimation() {

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
        <Stack sx={{ background: "linear-gradient(#fcebfc,#eda3f0)", width: "100%", height: "100vh", position: "relative", overflow: "hidden" }} className='main'>
            {
                MountainData.map((curr, indx) => (
                    <img className={curr.className} src={curr.image} style={{ width: "100%", position: "absolute", bottom: curr.bottom, zIndex: curr.zIndex }} key={indx} />
                ))
            }
        </Stack>
    )
}
