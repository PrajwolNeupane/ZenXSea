import React, { useEffect } from 'react';
import { Stack, Typography, Box } from '@mui/material';
import Girl from '../images/Girl_With_Laptop.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export default function MountainAnimation() {


    //Animation for mid text
    useEffect(() => {
        gsap.fromTo('.bg-image-animation', {
            opacity: 0,
            translateX: "-120%",
        }, {
            opacity: 1,
            translateX: "0%",
            duration: .75,
            delay: .25,
            scrollTrigger: {
                trigger: ".bg-image-animation",
                onLeave: () => {
                    gsap.to(".bg-image-animation", {
                        translateX: "120%", opacity: 0
                    });
                },
                onLeaveBack: () => {
                    gsap.to(".bg-image-animation", {
                        translateX: "-120%", opacity: 0
                    });
                },
                onEnterBack: () => {
                    gsap.to(".bg-image-animation", {
                        translateX: "0px", opacity: 1
                    });
                },
                onEnter: () => {
                    gsap.to(".bg-image-animation", {
                        translateX: "0px", opacity: 1
                    });
                },
                end: "center top",
                start: "-70% top"
            }
        })
    }, []);

    //Animation for color text
    useEffect(() => {
        gsap.fromTo(".color-text-animaion", {
            color: "transparent"
        }, {
            duration: .75,
            delay: .5,
            color: "white",
            opacity: .3,
            scrollTrigger: {
                toggleActions: "play reverse play reverse",
                trigger: ".color-text-animaion",
                end: "60% top",
                start: "top top",
                pin: ".color-text-animtaion",
                end: "+=1000",
            }
        })
    }, []);

    //Animation for head-text
    useEffect(() => {
        gsap.fromTo(".header-text", {
            translateY: "80px",
            opacity: 0
        }, {
            delay: .2,
            duration: .5,
            opacity: 1,
            translateY: "0px",
            scrollTrigger: {
                trigger: ".header-text",
                onLeave: () => {
                    gsap.to(".header-text", {
                        translateY: "-80px", opacity: 0
                    });
                },
                onEnterBack: () => {
                    gsap.to(".header-text", {
                        translateY: "0px", opacity: 1
                    });
                },
                end: "-300px top"
            }
        })
        gsap.fromTo(".text", {
            translateY: "80px",
            opacity: 0
        }, {
            delay: .2,
            duration: .5,
            opacity: 1,
            translateY: "0px",
            scrollTrigger: {
                trigger: ".text",
                onLeave: () => {
                    gsap.to(".text", {
                        translateY: "-80px", opacity: 0
                    });
                },
                onEnterBack: () => {
                    gsap.to(".text", {
                        translateY: "0px", opacity: 1
                    });
                },
                end: "-100px top"
            }
        })
    }, []);

    //Animatio for header-image
    useEffect(() => {
        gsap.to(".header-image", {
            keyframes: {
                "0": { clipPath: "inset(20% 0% 0% 24%)" },
                "50": { clipPath: "inset(25% 0% 0% 24%)" },
                "100": { clipPath: "inset(20% 0% 0% 24%)" }
            },
            duration: 10,
            delay: .75,
            repeat: -1,
        })
        gsap.fromTo(".header-image", {
            translateX: "80px",
            opacity: 0
        }, {
            delay: .25,
            duration: .5,
            opacity: 1,
            translateX: "0px",
            scrollTrigger: {
                trigger: ".header-image",
                onLeave: () => {
                    gsap.to(".header-image", {
                        translateX: "80px", opacity: 0
                    });
                },
                onEnterBack: () => {
                    gsap.to(".header-image", {
                        translateX: "0px", opacity: 1
                    });
                },
                end: "220px top"
            }
        })

    }, []);


    return (
        <>
            <Stack sx={{ backgroundColor: "#fcebfc", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', padding: "20px 5%", position: "sticky", top: "0px", zIndex: 5, color: "text.main" }}>
                <Typography variant='han' sx={{ fontSize: "30px" }}>// LOREM</Typography>
                <Stack sx={{ flexDirection: "row", alignItems: 'center', gap: "100px" }}>
                    <Typography variant='h2' sx={{ fontSize: "18px" }}>HOME</Typography>
                    <Typography variant='h2' sx={{ fontSize: "18px" }}>PLACES</Typography>
                    <Typography variant='h2' sx={{ fontSize: "18px" }}>ABOUT US</Typography>
                </Stack>
            </Stack>
            <Stack sx={{ backgroundColor: "#fcebfc", width: "100%", height: "calc(100vh - 75px)", alignItems: "center", justifyContent: "center", position: "relative", overflowX: "hidden" }}>
                <Typography variant='h1' className="text" sx={{ backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/5e69292b2fd0eb1214e018d5/d835c117-0d14-4570-bbe4-386809306ba3/Film+foto.jpg?format=2500w)", fontSize: "120px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundClip: "text", color: "transparent", backgroundPosition: "center", zIndex: 1 }}>LOREM IPSU<span style={{ color: "#281F32" }}>M</span></Typography>
                <Typography variant='h2' className="header-text" sx={{ color: "text.main", fontSize: "16px", zIndex: 1 }}>Aliquip in enim velit labore occaecat tempor tempor cillum cupidatat ad.</Typography>
                <img src={"https://images.squarespace-cdn.com/content/v1/5e69292b2fd0eb1214e018d5/049d7593-bc8e-4dfc-9efe-ab055c41fa4f/Iceberg+of+Greenland+Aerial+photography+Airpixels.jpg?format=500w"} style={{ position: "absolute", clipPath: "inset(20% 0% 0% 24%)", bottom: "0px", right: "0px", zIndex: 0 }} className='header-image' />
            </Stack>
            <Stack sx={{ backgroundColor: "#281F32", width: "90%", height: "calc(100vh - 200px)", alignItems: "flex-start", justifyContent: "center", overflow: "hidden", padding: "100px 5%", position: "relative" }}>
                <Box className="bg-image-animation" sx={{ backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/5e69292b2fd0eb1214e018d5/cc439529-db2c-4bac-a317-e9335721321b/Iceland+Aerial+Photography.jpg?format=750w)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundClip: "text", color: "transparent", backgroundAttachment: "fixed", zIndex: 2 }}>
                    <Typography variant='ken' sx={{ fontSize: "200px", lineHeight: "90%" }}>
                        HELLO
                    </Typography>
                    <br />
                    <Typography variant='ken' sx={{ fontSize: "180px", lineHeight: "90%" }}>
                        I AM UNDER
                    </Typography>
                    <br />
                    <Typography variant='ken' sx={{ fontSize: "180px", lineHeight: "90%" }}>
                        THE MOUNTAINS.
                    </Typography>
                </Box>
                <Typography variant='han' className="color-text-animaion" sx={{ position: "absolute", right: "-50%", fontSize: "400px", lineHeight: "85%", zIndex: 0, WebkitTextStroke: ".2px white" }}>LOR <br />REM</Typography>
            </Stack>
            <Stack sx={{ backgroundColor: "#281F32", width: "90%", height: "calc(100vh - 250px)", padding: "100px 5%", justifyContent: "space-between" ,flexDirection:"row",alignItems:"center"}}>
                <Stack>
                    <Typography variant='ken' sx={{ textTransform: "uppercase", fontSize: "70px", color: "white" }}>Reprehenderit sit</Typography>
                    <Typography variant='h3' sx={{ color: "#fcebfc", fontSize: "20px", width: "100%" }}>
                        Ea tempor mollit adipisicing occaecat anim cupidatat in. Irure exercitation voluptate sit consectetur pariatur cillum. Eiusmod officia officia incididunt exercitation occaecat. Elit irure do culpa dolore elit minim ex.
                        Do veniam sunt irure cillum velit eu eu do cillum commodo consequat anim ad irure. Deserunt officia qui veniam labore aute sint tempor ea elit in. Eu aliqua mollit aliqua eu excepteur consequat veniam aute aliqua dolor. Fugiat irure qui ipsum nostrud magna ut dolore sit ipsum aliquip. Nulla velit quis aute do Lorem.
                        Id pariatur id cillum sit sint laborum occaecat aliqua velit in excepteur Lorem consequat. Et Lorem dolore pariatur do dolor ullamco cillum voluptate eiusmod excepteur. Magna aliqua enim deserunt nulla tempor minim ipsum dolor in amet. Pariatur laborum laborum laboris qui duis. Sit nostrud ipsum labore enim. Nisi dolor proident minim nostrud exercitation commodo anim aliqua. Ad Lorem qui irure esse eiusmod velit incididunt in magna Lorem id excepteur. Aliqua laborum aliquip in eu id adipisicing reprehenderit dolore dolore consectetur incididunt. Dolor occaecat aliquip laborum laborum ipsum minim enim ex sit exercitation irure qui elit. Ut irure voluptate reprehenderit ullamco.
                    </Typography>
                </Stack>
                <img src={Girl} style={{width:"40%"}}/>
            </Stack>
        </>
    )
}
