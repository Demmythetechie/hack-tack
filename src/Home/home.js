import {new_arrival, best_selling, collection, collections} from "./str";
import { useRef, useState } from "react";


function Home () {
    return (
        <section className="w-[100%] flex flex-col items-center">
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
        <section className="flex flex-col justify-center items-center aspect-[1/0.55] pt-[3%] pb-[4%] w-[100%] gap-y-[5%]">
            <div className="bg-[url('/public/sec1-img.jpeg')] w-[80%] h-[88%] bg-cover bg-no-repeat bg-[top-center] border border-black max-[860px]:w-[92%] max-[860px]:aspect-[1/1]"></div>
           <Head heading="New Arrival"/>
        </section>
    )
}

function Sec2() {
    return (
        <section className="flex flex-col justify-start items-center w-[100%] aspect-[1/0.9] pt-[3%] pb-[3%] border-t border-black gap-y-[3%] max-[860px]:aspect-[1/1.2] max-[601px]:aspect-[1/3.7] max-[601px]:pb-[3%] max-[601px]:gap-y-[1.8%]">
            <div className="flex flex-row flex-wrap w-[80%] h-[91%] gap-x-[4%] gap-y-[4%] max-[860px]:w-[92%] max-[601px]:h-[97%] max-[601px]:gap-y-[1.5%] border border-green-600">
                {new_arrival.map((arrival) =>(
                    <div className="flex flex-col w-[48%] h-[48%] gap-y-[2%] max-[601px]:w-[100%] max-[601px]:h-[27%]">
                        <div style={{background: `url(${arrival.img})`, backgroundPosition: "top-center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}} className="bg-cover bg-no-repeat bg-center w-[100%] h-[88%] border border-black"></div>
                        <div className="w-[100%] h-[10%] flex flex-row">
                            <div className="pl-[20px] w-[80%] flex justify-start items-center border border-black">
                                <p className="text-[3.8vw] font-[HelveticaNeueMedium] text-black min-[601px]:text-[2.3vw] sm:text-[2.2vw] min-[860px]:text-[1.7vw] xl:text-[1.4vw]">{arrival.product}</p>
                            </div>
                            <div className="w-[20%] flex items-center border-t-[0.1vw] border-b-[0.1vw] border-r-[0.1vw] border-black justify-center">
                                <p className="text-[3.8vw] font-[HelveticaNeueMedium] text-black min-[601px]:text-[2.3vw] sm:text-[2.2vw] min-[860px]:text-[1.7vw] xl:text-[1.4vw]">{arrival.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex flex-col w-[48%] h-[48%] items-start justify-between pt-[8%] max-[601px]:h-[14%] max-[601px]:items-center max-[601px]:w-[100%] border border-black">
                    <p className="text-[3.6vw] text-left font-[HelveticaNeueRoman] min-[601px]:text-[2vw] sm:text-[1.9vw] min-[860px]:text-[1.5vw] xl:text-[1.2vw] max-[601px]:text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu mi sed felis hendrerit laoreet. Suspendisse tristique facilisis orci, in laoreet felis vestibulum eget.
                    </p>
                    <button className="w-[25%] h-[12%] bg-black text-white font-[HelveticaNeueMedium] text-[3.4vw] max-[860px]:w-[30%] max-[860px]:aspect-[1/0.35] max-[601px]:w-[30%] max-[601px]:h-[22%] min-[601px]:text-[2vw] sm:text-[1.9vw] min-[860px]:text-[1.5vw] xl:text-[1.2vw]">Shop Now</button>
                    <div className="flex flex-row justify-end w-[100%] aspect-[1/0.35] items-end max-[601px]:hidden border border-black">
                        <div className="relative w-[30%] aspect-[1/1] max-[860px]:w-[40%] flex justify-center">
                            <svg viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="48" fill="none" stroke="#000" strokeWidth="1"/>
                                <line x1="50" y1="68" x2="50" y2="80" stroke="#000" strokeWidth="2%"/>
                                <polyline points="45,75 50,80 55,75" fill="none" stroke="#000" strokeWidth="2%"/>
                            </svg>
                            <p className="text-[1.3vw] font-[HelveticaNeueMedium] absolute z-10 text-black top-[40%] min-[601px]:text-[2vw] sm:text-[1.9vw] min-[860px]:text-[1.3vw] xl:text-[1.3vw]">Discover More</p>
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
        <section className="flex flex-col justify-center items-center w-[100%] aspect-[1/0.55] pt-[3%] pb-[4%] border-t border-black gap-y-[5%] max-[860px]:aspect-[1/0.8] max-[601px]:aspect-[1/0.9]">
            <section className="w-[80%] h-[88%] flex flex-row gap-x-[4%] max-[860px]:flex-col max-[860px]:flex-wrap max-[860px]:aspect-[1/0.45] max-[860px]:justify-center max-[860px]:overflow-x-scroll max-[860px]:overflow-y-hidden max-[860px]:w-[100%] max-[860px]:pl-[4%] max-[860px]:gap-x-[3%] max-[860px]:snap-x">
                <div className="flex flex-col justify-between pl-[2%] pt-[2.7%] pb-[0.7%] w-[48%] h-[100%] bg-[url('/public/sec1-img.jpeg')] bg-no-repeat bg-cover bg-[top-center] max-[860px]:hidden">
                    <p className="font-[HelveticaNeueRoman] text-white min-[860px]:text-[1.5vw] xl:text-[1.2vw]">SW-20</p>
                    <div className="flex justify-between items-end w-[95%]">
                        <p className="font-[HelveticaNeueRoman] text-white min-[860px]:text-[1.3vw] xl:text-[1vw]">OG X Summer</p>
                        <div className="flex justify-between items-end w-[15%] min-[860px]:w-[20%] xl:w-[15%]">
                            <p className="font-[HelveticaNeueRoman] text-white min-[860px]:text-[1.3vw] xl:text-[1vw] min-[860px]:pb-[2%]">Explore</p>
                            <div className="w-[40%] aspect-square flex items-end">
                                <svg className="" viewBox="0 0 50 45">
                                    <line x1="15" y1="25" x2="39" y2="25" stroke="#fff" strokeWidth="2.7" strokeLinecap="square"/>
                                    <polyline points="30,18 40,25 30,32" stroke="#fff" strokeWidth="2.7" fill="none" strokeLinecap="square" strokeLinejoin="miter"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                {collections.map((collection)=>(
                    <div className="hidden flex-col pl-[2%] pt-[2.7%] pb-[0.7%] justify-between w-[48%] border border-black h-[100%] bg-[url('/public/sec1-img.jpeg')] bg-no-repeat bg-cover bg-[top-center] max-[860px]:w-[80%] max-[860px]:flex snap-center">
                        <p className="text-[3.3vw] font-[HelveticaNeueRoman] text-white min-[601px]:text-[2.5vw] sm:text-[1.9vw]">{collection.name}</p>
                        <div className="flex justify-between items-end w-[95%]">
                            <p className="text-[2.8vw] font-[HelveticaNeueRoman] text-white min-[601px]:text-[2.1vw] sm:text-[1.9vw]">{collection.brand}</p>
                            <div className="flex justify-between items-center w-[15%] h-[40%] max-[601px]:w-[20%] max-[860px]:pb-[1.3%]">
                                <p className="text-[2.8vw] font-[HelveticaNeueRoman] text-white min-[860px]:pb-[2%] min-[601px]:text-[2.1vw] sm:text-[1.9vw]">Explore</p>
                                <div className="w-[40%] aspect-square">
                                    <svg className="" viewBox="0 0 50 45">
                                        <line x1="15" y1="25" x2="39" y2="25" stroke="#fff" strokeWidth="2.7" strokeLinecap="square"/>
                                        <polyline points="30,18 40,25 30,32" stroke="#fff" strokeWidth="2.7" fill="none" strokeLinecap="square" strokeLinejoin="miter"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="flex flex-col w-[48%] h-[100%] justify-between max-[860px]:hidden">
                    <Sec3Content collection="SW-20" type="OG X Summer"/>
                    <Sec3Content collection="SW-20" type="OG X Summer"/>
                </div>
            </section>
            <Head heading="Best Sellers"/>
        </section>
    )
}

function Sec4() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    let [num, setNum] = useState((screenWidth < 860 && screenWidth > 601) ? 2 : (screenWidth < 601) ? 1 : 3);
    let slide = useRef();

    function previous () {
        (screenWidth < 860) ? slide.current.scrollLeft -= 380 : slide.current.scrollLeft -= 350;
        (screenWidth < 860 && screenWidth > 601) ?
            (num === 2) ? setNum(2) : setNum(num - 1)
        : (screenWidth < 601) ?
            (num === 1) ? setNum(1) : setNum(num - 1)
        :
            (num === 3) ? setNum(3) : setNum(num - 1);
    }

    function next () {
        (screenWidth < 860) ? slide.current.scrollLeft += 380 : slide.current.scrollLeft += 350;
        (num === 10) ? setNum(10) : setNum(num + 1);
    }
    

    return (
        <section className="flex flex-col items-center w-[100%] pt-[3%] pb-[3%] aspect-[1/0.55] gap-y-[2%] border-t border-black max-[860px]:aspect-[1/0.8] max-[601px]:aspect-[1/1.4]">
            <div className="flex flex-col items-start content-start flex-wrap w-[80%] h-[75%] max-[601px]:h-[70%] gap-x-[3.5%] overflow-hidden max-[860px]:w-[92%] scroll-smooth max-[860px]:gap-x-[4%] snap-x px-[0.3%]" ref={slide}>
                {best_selling.map((best, index) => (
                    <div className="w-[31%] flex flex-col justify-between h-[100%] max-[860px]:w-[48%] snap-center max-[860px]:snap-start max-[601px]:w-[100%]">
                        <div style={{background: `url(${best.img})`, backgroundPosition: "top-center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}} className="bg-cover bg-no-repeat bg-center w-[100%] h-[87%] border-[0.1vw] border-black"></div>
                        <div className="w-[100%] h-[11%] flex flex-row">
                            <div className="pl-[1vw] w-[80%] flex justify-start items-center border-[0.1vw] border-black">
                                <p className="text-[3.8vw] font-[HelveticaNeueMedium] text-black min-[601px]:text-[2.6vw] sm:text-[2.4vw] min-[860px]:text-[1.5vw] xl:text-[1.2vw]">{best.product}</p>
                            </div>
                            <div className="w-[20%] flex items-center border-t-[0.1vw] border-b-[0.1vw] border-r-[0.1vw] border-black justify-center">
                                <p className="text-[3.8vw] font-[HelveticaNeueMedium] text-black min-[601px]:text-[2.6vw] sm:text-[2.4vw] min-[860px]:text-[1.5vw] xl:text-[1.2vw]">{best.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-row justify-between w-[80%] h-[10%] items-center max-[860px]:w-[92%]">
                <div className="w-[10%] flex flex-row justify-between max-[860px]:w-[14%] max-[601px]:w-[22%]">
                    <div className="w-[44%] aspect-square cursor-pointer" onClick={previous}>
                        <svg className="prev" viewBox="0 0 50 50">
                            <circle cx="25" cy="25"  r="22" fill="#000"/>
                            <polyline points="25,18 18,25 25,32" stroke="#fff" strokeWidth="3"/>
                            <line x1="18" y1="25" x2="32" y2="25" stroke="#fff" strokeWidth="3.5"/>
                        </svg>
                    </div>
                    <div className="w-[44%] aspect-square cursor-pointer" onClick={next}>
                        <svg className="next" viewBox="0 0 50 50">
                            <circle cx="25" cy="25"  r="22" fill="#000"/>
                            <polyline points="25,18 32,25 25,32" stroke="#fff" strokeWidth="3"/>
                            <line x1="18" y1="25" x2="32" y2="25" stroke="#fff" strokeWidth="3.5"/>
                        </svg>
                    </div>
                </div>
                <p className="text-[4vw] font-[HelveticaNeueMedium] text-black min-[601px]:text-[2.8vw] sm:text-[2.4vw] min-[860px]:text-[1.5vw] xl:text-[1.2vw]">{num}/10</p>
            </div>
            <button className="w-[10%] aspect-[1/0.4] bg-black text-white text-[3.2vw] flex justify-center items-center font-[HelveticaNeueMedium] mb-[3%] max-[860px]:w-[16%] max-[601px]:w-[22%] max-[860px]:aspect-[1/0.4] min-[601px]:text-[2.2vw] sm:text-[2vw] min-[860px]:text-[1.4vw] xl:text-[1.2vw]">Shop Now</button>
            <Head heading="Hack&Tack"/>
        </section>
    )
}

function Sec5() {
    return (
        <section className="flex flex-col justify-center items-center w-[100%] aspect-[1/0.3] max-[860px]:aspect-[1/0.5] pt-[6%]">
            {collection.map((cl)=>(
                <div className="w-[100%] h-[30%] px-[4%] flex flex-row items-center border-black border border-t-0 border-r-0 border-l-0 justify-between max-[860px]:px-[4%]">
                    <p className="text-[3.6vw] font-[HelveticaNeueMedium] text-black min-[601px]:text-[2.8vw] sm:text-[2.6vw] min-[860px]:text-[2vw] xl:text-[1.7vw]">{cl.name}</p>
                    <div className="w-[4%] aspect-square max-[860px]:w-[6.5%]">
                        <svg className={cl.cls} viewBox="0 0 50 50">
                            <line x1="20" y1="25" x2="40" y2="25" stroke="#000" strokeWidth="2.4" strokeLinecap="round"/>
                            <polyline points="30,18 40,25 30,32" stroke="#000" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            ))}
            <div className="flex flex-row justify-between w-[100%] h-[10%] px-[4%] max-[860px]:px-[4%] max-[860px]:h-[15%] items-center">
                <div className="flex flex-row gap-x-[20px] items-center">
                    <p className="text-[2.2vw] font-[HelveticaNeueRoman] text-black min-[601px]:text-[2.2vw] sm:text-[2vw] min-[860px]:text-[1.4vw] xl:text-[1.2vw]">©2024 Hack&Tack clothing. All Right Reserved</p>
                </div>
                <div className="flex flex-row gap-x-[20px] items-center">
                    <select className="w-[75px] text-[2.2vw] text-black font-[HelveticaNeueRoman] min-[601px]:text-[2.2vw] sm:text-[2vw] min-[860px]:text-[1.4vw] xl:text-[1.2vw]">
                        <option className="">English</option>
                        <option className="">French</option>
                    </select>
                    <p className="text-[2.2vw] text-black font-[HelveticaNeueRoman] min-[601px]:text-[2.2vw] sm:text-[2vw] min-[860px]:text-[1.4vw] xl:text-[1.2vw]">Privacy Reserved</p>
                </div>
            </div>
        </section>
    )
}




function Head(props) {
    return (
        <div className="flex flex-row justify-between items-center aspect-[1/0.05] w-[80%] max-[860px]:w-[92%] border border-red-500">
            <p className="text-[4.4vw] font-[HelveticaNeueBold] sm:text-[4vw] min-[860px]:text-[3.2vw] xl:text-[2.8vw]">{props.heading}</p>
            <div className="flex flex-row justify-end gap-x-[3%] items-center w-[15%] h-[100%] max-[860px]:w-[19%] max-[601px]:hidden">
                <p className="text-[2.4vw] font-[HelveticaNeueMedium] sm:text-[2.4vw] min-[860px]:text-[1.8vw] xl:text-[1.5vw]">SEE ALL</p>
                <div className="w-[30%] aspect-square max-[860px]:w-[38%]">
                    <svg className="" viewBox="0 0 50 50">
                        <line x1="15" y1="25" x2="39" y2="25" stroke="#000" strokeWidth="2.7" strokeLinecap="square"/>
                        <polyline points="30,18 40,25 30,32" stroke="#000" strokeWidth="2.7" fill="none" strokeLinecap="square" strokeLinejoin="miter"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

function Sec3Content(props) {
    return(
        <div className="flex flex-col pl-[4%] pb-[1%] pt-[5%] justify-between w-[100%] h-[48%] bg-[url('/public/sec1-img.jpeg')] bg-no-repeat bg-cover bg-[top-center]">
            <div className="flex flex-row w-[90%] justify-start">
                <p className="text-[1.1vw] font-[HelveticaNeueRoman] text-white min-[860px]:text-[1.4vw] xl:text-[1.1vw]">{props.collection}</p>
            </div>
            <div className="flex flex-row w-[96%] justify-between items-end">
                <p className="text-[1.1vw] font-[HelveticaNeueRoman] text-white min-[860px]:text-[1.3vw] xl:text-[1vw]">{props.type}</p>
                <div className="flex justify-between items-end w-[15%] min-[860px]:w-[20%] xl:w-[15%]">
                    <p className="text-[1vw] font-[HelveticaNeueRoman] text-white min-[860px]:text-[1.3vw] xl:text-[1vw] min-[860px]:pb-[2%]">Explore</p>
                    <div className="w-[40%] aspect-square flex items-end">
                        <svg className="" viewBox="0 0 50 45">
                            <line x1="15" y1="25" x2="39" y2="25" stroke="#fff" strokeWidth="2.7" strokeLinecap="square"/>
                            <polyline points="30,18 40,25 30,32" stroke="#fff" strokeWidth="2.7" fill="none" strokeLinecap="square" strokeLinejoin="miter"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;