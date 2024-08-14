import {new_arrival, best_selling, collection} from "./str";
import { useRef, useReducer } from "react";


function Home () {
    return (
        <section className="pt-[50px] w-[100%] flex flex-col items-center">
            <Sec1/>
            <Sec2/>
            <Sec3/>
            <Sec4/>
            <Sec5/>
        </section>
    )
}

function Sec1 () {
    return (
        <section className="flex flex-col justify-center items-center border-b border-black w-[100%] gap-y-[13vh] pb-[5vh]">
            <div className="bg-[url('/public/sec1-img.jpeg')] w-[80%] aspect-[1/0.6] bg-cover bg-no-repeat bg-[top-center] border border-black"></div>
           <Head heading="New Arrival"/>
        </section>
    )
}

function Sec2() {
    return (
        <section className="flex flex-col justify-center items-center w-[100%] pt-[50px] pb-[30px] border-b border-black">
            <div className="flex flex-row flex-wrap w-[80%] gap-x-[4%] gap-y-[48px] pb-[60px]">
                {new_arrival.map((arrival) =>(
                    <div className="flex flex-col w-[48%] aspect-[1/0.9] gap-y-[10px]">
                        <div style={{background: `url(${arrival.img})`, backgroundPosition: "top-center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}} className="bg-cover bg-no-repeat bg-center w-[100%] aspect-[1/0.8] border border-black"></div>
                        <div className="w-[100%] aspect-[1/0.09] flex flex-row">
                            <div className="pl-[20px] w-[80%] flex justify-start items-center border border-black">
                                <p className="text-[1.1vw] font-semibold">{arrival.product}</p>
                            </div>
                            <div className="w-[20%] flex items-center border border-black justify-center">
                                <p className="text-[1.2vw] font-semibold">{arrival.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex flex-col w-[48%] aspect-[1/0.8] items-start justify-between pt-[4%]">
                    <p className="text-[1.2vw]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu mi sed felis hendrerit laoreet. Suspendisse tristique facilisis orci, in laoreet felis vestibulum eget.
                    </p>
                    <button className="w-[25%] aspect-[1/0.3] bg-black text-white text-[1.2vw]">Shop Now</button>
                    <div className="flex flex-row justify-end w-[100%] aspect-[1/0.45] items-end">
                        <div className="relative w-[30%] aspect-[1/1]">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="48"/>
                                <line x1="50" y1="68" x2="50" y2="80" stroke="#fff" strokeWidth="1%"/>
                                <polyline points="45,75 50,80 55,75" fill="none" stroke="#fff" strokeWidth="1%"/>
                            </svg>
                            <p className="text-[1.2vw] font-semibold absolute z-10 text-white top-[40%] left-[15%]">Discover More</p>
                        </div>
                    </div>
                </div>
            </div>
            <Head heading="Collection"/>
        </section>
    )
}

function Sec3() {
    return (
        <section className="flex flex-col justify-center items-center w-[100%] pt-[50px] pb-[30px] border-b border-black">
            <section className="pt-[50px] w-[80%] flex flex-row flex-wrap gap-x-[4%] pb-[60px]">
                <div className="flex flex-col pl-[1%] py-[0.5%] justify-between w-[48%] border border-black aspect-[1/0.8] bg-[url('/public/sec1-img.jpeg')] bg-no-repeat bg-cover bg-[top-center]">
                    <p className="text-[0.8vw] font-semibold text-white">SW-20</p>
                    <p className="text-[0.8vw] font-semibold text-white">OG X Summer</p>
                </div>
                <div className="flex flex-col w-[48%] aspect-[1/0.8] justify-between">
                    <Sec3Content collection="SW-20" type="OG X Summer"/>
                    <Sec3Content collection="SW-20" type="OG X Summer"/>
                </div>
            </section>
            <Head heading="Best Selling"/>
        </section>
    )
}


function reducer(state, action) {
    if (action.type === 'prev') {
        
    }
}

function Sec4() {

    let slide = useRef(null);

    function previous() {
        slide.current.scrollLeft -= 250;
        console.log(slide.current.scrollLeft);
        console.log('prev');
    }
    
    function next() {
        slide.current.scrollLeft += 350;
        console.log(slide.current.scrollLeft);
        console.log('next');
    }

    const [state, dispatch] = useReducer(reducer, best_selling);

    return (
        <section className="flex flex-col items-center w-[100%] pt-[50px] pb-[5vh] gap-y-[4vh] border-b border-black">
            <div className="flex flex-col items-start content-center flex-wrap w-[80%] aspect-[1/0.43] gap-x-[2.7vw] overflow-hidden" ref={slide}>
                {best_selling.map((best) => (
                    <div className="flex flex-col w-[31%] gap-y-[1vh]">
                        <div style={{background: `url(${best.img})`, backgroundPosition: "top-center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}} className="bg-cover bg-no-repeat bg-center w-[100%] aspect-[1/1.2] border-[0.1vw] border-black"></div>
                        <div className="w-[100%] aspect-[1/0.14] flex flex-row">
                            <div className="pl-[1vw] w-[80%] flex justify-start items-center border-[0.1vw] border-black">
                                <p className="text-[1.2vw] font-semibold">{best.product}</p>
                            </div>
                            <div className="w-[20%] flex items-center border-t-[0.1vw] border-b-[0.1vw] border-r-[0.1vw] border-black justify-center">
                                <p className="text-[1.2vw] font-semibold">{best.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row justify-between w-[80%] items-center">
                <div className="w-[8%] flex flex-row justify-between">
                    <div className="w-[50%] aspect-square">
                        <svg className="prev" viewBox="0 0 50 50" onClick={previous}>
                            <circle cx="25" cy="25"  r="22" fill="#000"/>
                            <polyline points="25,18 18,25 25,32" stroke="#fff" strokeWidth="3"/>
                            <line x1="18" y1="25" x2="32" y2="25" stroke="#fff" strokeWidth="3"/>
                        </svg>
                    </div>
                    <div className="w-[50%] aspect-square">
                        <svg className="next" viewBox="0 0 50 50" onClick={next}>
                            <circle cx="25" cy="25"  r="22" fill="#000"/>
                            <polyline points="25,18 32,25 25,32" stroke="#fff" strokeWidth="3"/>
                            <line x1="18" y1="25" x2="32" y2="25" stroke="#fff" strokeWidth="3"/>
                        </svg>
                    </div>
                </div>
                <p className="text-[1.2vw] font-bold">3/10</p>
            </div>
            <button className="w-[10%] aspect-[1/0.4] bg-black text-white text-[1.2vw] flex justify-center items-center">Shop Now</button>
            <Head heading="Hack&Tack"/>
        </section>
    )
}

function Sec5() {
    return (
        <section className="flex flex-col justify-center items-center w-[100%]">
            {collection.map((cl)=>(
                <div className="w-[100%] h-[100px] pl-[10%] pr-[10%] flex flex-row items-center border-black border border-t-0 border-r-0 border-l-0 justify-between ">
                    <p className="text-[1.5rem] font-bold">{cl.name}</p>
                    <svg className={cl.cls} width="50" height="50">
                        <line x1="20" y1="25" x2="40" y2="25" stroke="#000" strokeWidth="2.4" strokeLinecap="round"/>
                        <polyline points="30,18 40,25 30,32" stroke="#000" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            ))}
            <div className="flex flex-row justify-between w-[100%] h-[50px] pl-[10%] pr-[10%] items-center">
                <div className="flex flex-row gap-x-[20px] items-center">
                    <p className="text-[1rem]">©2024 Hack&Tack clothing. All Right Reserved</p>
                </div>
                <div className="flex flex-row gap-x-[20px] items-center">
                    <select className="w-[75px]">
                        <option>English</option>
                        <option>French</option>
                    </select>
                    <p className="text-[1rem]">Privacy Reserved</p>
                </div>
            </div>
        </section>
    )
}




function Head(props) {
    return (
        <div className="flex flex-row justify-between items-center aspect-[1/0.05] w-[80%]">
            <p className=" text-[1.7vw] font-bold">{props.heading}</p>
            <div className="flex flex-row justify-between items-center aspect-[1/0.2] w-[10%]">
                <p className="text-[1.1vw] font-semibold">SEE ALL</p>
                <div className="w-[45%] aspect-square ">
                    <svg className="" viewBox="0 0 50 50">
                        <line x1="2" y1="25" x2="40" y2="25" stroke="#000" strokeWidth="2.2" strokeLinecap="round"/>
                        <polyline points="25,18 40,25 25,32" stroke="#000" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

function Sec3Content(props) {
    return(
        <div className="flex flex-col pl-[1%] py-[0.5%] justify-between w-[100%] aspect-[1/0.38] bg-[url('/public/sec1-img.jpeg')] bg-no-repeat bg-cover bg-[top-center]">
            <div className="flex flex-row w-[90%] justify-start">
                <p className="text-[0.8vw] font-semibold text-white">{props.collection}</p>
            </div>
            <div className="flex flex-row w-[96%] justify-between">
                <p className="text-[0.8vw] font-semibold text-white">{props.type}</p>
                <p className="text-[0.8vw] font-semibold text-white">SW-20</p>
            </div>
        </div>
    )
}

export default Home;