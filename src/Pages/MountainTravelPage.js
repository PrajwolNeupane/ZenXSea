import React, { useState, useEffect } from 'react'
import MountainAnimation from '../Animated/MountainAnimation.js'
import { Stack, Typography } from '@mui/material'

export default function MountainTravelPage() {

    const [hikeNum, setHikeNum] = useState(0);

    useEffect(() => {
        const increaseHike = () => {
            let i = 0;
            while (i < 92) {
                setHikeNum(i);
                setTimeout(function(){
                    i = i + 1;
                },100)
            }
        }
        //increaseHike();
    }, []);

    return (
        <>
            <MountainAnimation />
            <Stack sx={{ width: "90%", height: "100%", padding: "100px 5%", backgroundColor: "#281F32", gap: "50px" }}>
                <Stack sx={{ flexDirection: "row", gap: "5%", alignItems: 'center' }}>
                    <img src={"https://images.squarespace-cdn.com/content/v1/5e69292b2fd0eb1214e018d5/d1041922-601c-46f6-b789-3bbe85630637/Dolomites+Drone+Photography.jpg?format=750w"} style={{ width: "500px", height: "500px", objectFit: "cover" }} />
                    <Stack sx={{ height: "90%", justifyContent: "space-between" }}>
                        <Typography variant='h1' sx={{ fontSize: "40px", color: "white" }}>ALL YOU NEED<br /> TO KNOW</Typography>
                        <Typography variant='h3' sx={{ fontSize: "17px", color: "white" }}>
                            Yes, we groom our Mountain Travel Experts. What does that mean? Our team of 70 travel professionals is made up of avid skiers and snowboarders who live and breathe mountain culture, and we send them around the world to experience the top ski resorts firsthand.
                            Minim elit nulla quis tempor ad quis ex esse labore pariatur enim. Dolor anim et commodo nulla. Aliqua veniam aliqua pariatur fugiat do ipsum commodo. Ipsum proident aliqua ut amet excepteur aliqua sit veniam do et minim consectetur proident. Labore ut amet sint laborum.<br />
                            Yes, we groom our Mountain Travel Experts. What does that mean? Our team of 70 travel professionals is made up of avid skiers and snowboarders who live and breathe mountain culture, and we send them around the world to experience the top ski resorts firsthand.
                            Minim elit nulla quis tempor ad quis ex esse labore pariatur enim. Dolor anim et commodo nulla. Aliqua veniam aliqua pariatur fugiat do ipsum commodo. Ipsum proident aliqua ut amet excepteur aliqua sit veniam do et minim consectetur proident. Labore ut amet sint laborum.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack sx={{ flexDirection: "row", gap: "5%", alignItems: 'center' }}>
                    <Stack sx={{ height: "90%", justifyContent: "space-between" }}>
                        <Typography variant='h1' sx={{ fontSize: "40px", color: "white", textTransform: "upper" }}>Italy, Territory of Peaks <br />and Pinnacles</Typography>
                        <Typography variant='h3' sx={{ fontSize: "17px", color: "white" }}>
                            In all its territorial variety, Italy boasts a large number of beautiful and evocative mountain localities, ideal for visiting any time of year, whether summer or winter. From north to south, the Italian mountain scene offers tourists a range of landscapes: lakes at high altitutude, incredible forests, enchanting villages and borgoes rich in history, traditions and, of course, gastronomic pleasures.
                            <br />
                            In all its territorial variety, Italy boasts a large number of beautiful and evocative mountain localities, ideal for visiting any time of year, whether summer or winter. From north to south, the Italian mountain scene offers tourists a range of landscapes: lakes at high altitutude, incredible forests, enchanting villages and borgoes rich in history, traditions and, of course, gastronomic pleasures.
                        </Typography>
                    </Stack>
                    <img src={"https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/winter-mountain-photo-jordan-marcellino.jpg"} style={{ width: "500px", height: "500px", objectFit: "cover" }} />
                </Stack>
                <Stack sx={{ flexDirection: "row", gap: "5%", alignItems: 'center' }}>
                    <img src={"https://images.squarespace-cdn.com/content/v1/5e69292b2fd0eb1214e018d5/ad2688f9-353a-4a1e-b380-d271c1a7d33f/Airpixels+Film+%26+Photography+in+Swedish+Lapland.jpg?format=1500w"} style={{ width: "500px", height: "500px", objectFit: "cover" }} />
                    <Stack sx={{ height: "90%", justifyContent: "space-between" }}>
                        <Typography variant='h1' sx={{ fontSize: "40px", color: "white" }}>LOREM IPSUM</Typography>
                        <Typography variant='h3' sx={{ fontSize: "17px", color: "white" }}>
                            Mountain Travel Symposium is the single largest and longest-running annual gathering of mountain travel professionals in the world and has been called the SXSW of ski. Representatives from over 35 countries establish relationships, build their business, and create a stronger mountain business community.<br />
                            Mountain Travel Symposium is the single largest and longest-running annual gathering of mountain travel professionals in the world and has been called the SXSW of ski. Representatives from over 35 countries establish relationships, build their business, and create a stronger mountain business community.
                        </Typography>
                    </Stack>
                </Stack>
                <Stack sx={{ flexDirection: "row", gap: "5%", alignItems: 'center' }}>
                    <Stack sx={{ height: "90%", justifyContent: "space-between" }}>
                        <Typography variant='h1' sx={{ fontSize: "40px", color: "white", textTransform: "uppercase" }}>The Exchanges</Typography>
                        <Typography variant='h3' sx={{ fontSize: "17px", color: "white" }}>
                            MTS is much more than a typical networking event. MTS is well established as the premier North American meeting place for the worldwide mountain travel industry where resort representatives meet in a single location with a wide range of mountain vacation suppliers, buyers and vendors from around the world.
                            <br />
                            MTS is much more than a typical networking event. MTS is well established as the premier North American meeting place for the worldwide mountain travel industry where resort representatives meet in a single location with a wide range of mountain vacation suppliers, buyers and vendors from around the world.
                        </Typography>
                    </Stack>
                    <img src={"https://images.squarespace-cdn.com/content/v1/5e69292b2fd0eb1214e018d5/cc439529-db2c-4bac-a317-e9335721321b/Iceland+Aerial+Photography.jpg?format=2500w"} style={{ width: "500px", height: "500px", objectFit: "cover" }} />
                </Stack>
            </Stack>
            <Stack sx={{ paddingTop: "50px", alignItems: 'center', gap: "30px" }}>
                <Typography variant='han' sx={{ textTransform: "uppercase", fontSize: "50px", color: "#281F32" }}>Doing The Right Things</Typography>
                <Typography variant='h3' sx={{ width: "50%", textAlign: "center", fontSize: "18px", color: "#281F32" }}>
                    Everyday we are continuing on a journey of discovery and improvement, focusing on our environmentally responsible heritage and working hard to ensure all operations represent the very best in sustainable eco-tourism. We want to share this journey with you.
                </Typography>
                <Stack sx={{ flexDirection: "row", width: "70%", margin: "auto auto", justifyContent: "space-between" }}>
                    <Typography variant='h2' sx={{ color: "red", fontSize: "90px", textAlign: 'center' }}>
                        92
                        <br />
                        <Typography variant='h2' sx={{ color: "#281F32", fontSize: "25px", textAlign: 'center' }}>
                            HIKE
                        </Typography>
                    </Typography>
                    <Typography variant='h2' sx={{ color: "red", fontSize: "90px", textAlign: 'center' }}>
                        {hikeNum}
                        <br />
                        <Typography variant='h2' sx={{ color: "#281F32", fontSize: "25px", textAlign: 'center' }}>
                            HIKE
                        </Typography>
                    </Typography>
                    <Typography variant='h2' sx={{ color: "red", fontSize: "90px", textAlign: 'center' }}>
                        92
                        <br />
                        <Typography variant='h2' sx={{ color: "#281F32", fontSize: "25px", textAlign: 'center' }}>
                            HIKE
                        </Typography>
                    </Typography>
                </Stack>
                <img src="https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/f4dbf4446ba5549aa308df03/pexelsphoto355747.png" style={{ width: "100%" }} />
            </Stack>
        </>
    )
}
