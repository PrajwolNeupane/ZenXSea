import First_Mountain from '../images/Mountains/First_Mountain.svg';
import Second_Mountain from '../images/Mountains/Second_Mountain.svg';
import Third_Mountain from '../images/Mountains/Third_Mountain.svg';
import Fourth_Mountain from '../images/Mountains/Fourth_Mountain.svg';
import Fifth_Mountain from '../images/Mountains/Fifth_Mountain.svg';
import Sixth_Mountain from '../images/Mountains/Sixth_Mountain.svg';
import Left_Cloud from '../images/Mountains/Left_Cloud.svg';
import Right_Cloud from '../images/Mountains/Right_Cloud.svg';
import Center_Cloud from '../images/Mountains/Center_Cloud.svg';
import Sun from '../images/Mountains/Sun.svg';
import Birds from '../images/Mountains/Birds.svg';

export const MountainData = [
    {
        image: Birds,
        zIndex: 1,
        bottom: "-15%",
        className: "birds",
        delay:1.2,
        Anibottom:"-130%",
        EndBottom:"130%"
    },
    {
        image: Sun,
        zIndex: 0,
        bottom: "-20%",
        className: "sun",
        delay:1.1,
        Anibottom:"-130%",
        EndBottom:"130%"
    },
    {
        image: Center_Cloud,
        zIndex: 0,
        bottom: "-25%",
        className: "center-cloud",
        delay:1,
        Anibottom:"-120%",
        EndBottom:"130%"
    },
    {
        image: Right_Cloud,
        zIndex: 0,
        bottom: "-25%",
        className: "right-cloud",
        delay:.9,
        Anibottom:"-110%",
        EndBottom:"130%"
    },
    {
        image: Left_Cloud,
        zIndex: 0,
        bottom: "-25%",
        className: "left-cloud",
        delay:.8,
        Anibottom:"-110%",
        EndBottom:"130%"
    },
    {
        image: Sixth_Mountain,
        zIndex: 0,
        bottom: "-20%",
        className: "sixth-mountain",
        delay:.7,
        Anibottom:"-100%",
        EndBottom:"130%"
    },
    {
        image: Fifth_Mountain,
        zIndex: 0,
        bottom: "-20%",
        className: "fifth-mountain",
        delay:.6,
        Anibottom:"-90%",
        EndBottom:"130%"
    },
    {
        image: Fourth_Mountain,
        zIndex: 0,
        bottom: "-15%",
        className: "fourth-mountain",
        delay:.5,
        Anibottom:"-80%",
        EndBottom:"130%"
    },
    {
        image: Third_Mountain,
        zIndex: 0,
        bottom: "-15%",
        className: "third-mountain",
        delay:.4,
        Anibottom:"-70%",
        EndBottom:"130%"
    },
    {
        image: Second_Mountain,
        zIndex: 0,
        bottom: "-5%",
        className: "second-mountain",
        Anibottom:"-60%",
        EndBottom:"130%",
        delay:.30
    },
    {
        image: First_Mountain,
        zIndex: 0,
        bottom: "-5%",
        className: "first-mountain",
        delay:.20,
        Anibottom:"-50%",
        EndBottom:"130%"
    },
]