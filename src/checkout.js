import flag from "./country";
import { useState } from "react";

function Checkout() {
    const [clck, setClck] = useState('United States');
    const [phoneCode, setPhone] = useState("+1");

    function ctry(idx) {
        let temp = idx.split(",");
        setClck(temp[0]);
        setPhone(temp[1]);
        console.log(clck);
    }

    return (
        <div className="h-[100vh] w-[100wh] flex flex-col">
            <div className="hidden min-[530px]:flex h-[9vh] w-[100%] flex-row border-b border-black/30 pl-[8%] pr-[5%] sm:pr-[2%] sm:px-[5%] items-center justify-between">
                <div className="w-[6%] sm:w-[5%] md:w-[3.5%] lg:w-[3%] xl:w-[2.5%] aspect-square">
                    <svg viewBox="0 0 150 150">
                        <path d="M0 1 L8 1 M8 1 L8 100 M8 100 L98 100 M98 100 L98 149 M8 120 L8 149 M0 149 L60 149 M52 149 L52 50 M52 50 L100 50 M100 50 L100 1 M100 1 L92 1 M149 149 L90 149 M142 149 L142 1 M149 1 L120 1 M120 1 L120 70 M120 70 L30 70 M30 70 L30 1 M30 1 L60 1 M52 1 L52 20" stroke="#000" strokeWidth="2px" />
                    </svg>
                </div>
                <div className="flex flex-row w-[40%] sm:w-[30%] md:w-[30%] h-[100%] items-center gap-x-[2%]">
                    <div className="w-[18%] sm:w-[12%] md:w-[10%] lg:w-[8%] xl:w-[8%] aspect-square">
                        <svg viewBox="0 0 682.667 682.667">
                            <g>
                                <defs>
                                    <clipPath id="b" clipPathUnits="userSpaceOnUse">
                                        <path d="M0 512h512V0H0Z" fill="#000000" opacity="1" data-original="#000000"></path>
                                    </clipPath>
                                </defs>
                                <mask id="a">
                                    <rect width="100%" height="100%" fill="#ffffff" opacity="1" data-original="#ffffff"></rect>
                                </mask>
                                <g mask="url(#a)">
                                    <path d="m0 0-134.174-134.174-63.873 63.872" transform="matrix(1.33333 0 0 -1.33333 473.365 251.884)" fill="none" stroke="#000000" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                </g>
                                <g clip-path="url(#b)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                                    <path d="M0 0c0-130.339-105.661-236-236-236S-472-130.339-472 0s105.661 236 236 236S0 130.339 0 0Z" transform="translate(492 256)" fill="none" stroke="#000000" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <p className="font-[Montserrat] font-normal text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-black">Cart</p>
                    <div className="w-[25%] border"></div>
                    <div className="w-[25%] sm:w-[15%] md:w-[13%] lg:w-[12%] xl:w-[10%] aspect-square">
                        <svg viewBox="0 0 408.576 408.576">
                            <g>
                                <path d="M204.288 0C91.648 0 0 91.648 0 204.288s91.648 204.288 204.288 204.288 204.288-91.648 204.288-204.288S316.928 0 204.288 0zm114.176 150.528-130.56 129.536c-7.68 7.68-19.968 8.192-28.16.512L90.624 217.6c-8.192-7.68-8.704-20.48-1.536-28.672 7.68-8.192 20.48-8.704 28.672-1.024l54.784 50.176L289.28 121.344c8.192-8.192 20.992-8.192 29.184 0s8.192 20.992 0 29.184z" fill="#000000" opacity="1" data-original="#000000" class="hovered-path"></path>
                            </g>
                        </svg>
                    </div>
                    <p className="font-[Montserrat] font-normal text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-black">Checkout</p>
                </div>
            </div>
            <form className="flex w-[100%] h-[91vh] flex-col sm:flex-row gap-y-[10vw] sm:gap-y-[0vw] sm:justify-start">
                <div className="w-[100%] sm:w-[55%] sm:h-[100%] flex flex-col px-[8vw] py-[2%] sm:px-[5%] sm:py-[2%] gap-y-[5%]">
                    <p className="font-[Montserrat] font-semibold text-sm sm:text-sm md:text-xl lg:text-xl xl:text-xl text-black">Checkout</p>
                    <div className="flex flex-col gap-y-[1vw] sm:gap-y-[4vw] md:gap-y-[1vw]">
                        <p className="font-[Montserrat] font-normal text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-black">Shipping information</p>
                        <div className="flex flex-col w-full gap-y-[9vw] min-[380px]:gap-y-[6vw] sm:gap-y-[5vw] md:gap-y-[3vw] lg:gap-y-[1.3vw] xl:gap-y-[1vw]">
                            <input className="border-b border-black/30 w-[100%] aspect-[1/0.08] placeholder:font-[Montserrat] placeholder:text-sm sm:placeholder:text-sm md:placeholder:sm lg:placeholder:text-sm xl:placeholder:text-sm font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm placeholder:font-normal focus:outline-none focus:border-b focus:border-black placeholder:text-black bg-transparent" type="text" id="email" name="email" placeholder="Fullname"/>
                            <input className="border-b border-black/30 w-[100%] aspect-[1/0.08] placeholder:font-[Montserrat] placeholder:text-sm sm:placeholder:text-sm md:placeholder:sm lg:placeholder:text-sm xl:placeholder:text-sm font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm placeholder:font-normal focus:outline-none focus:border-b focus:border-black placeholder:text-black bg-transparent" type="email" id="email" name="email" placeholder="Email"/>
                            <select onChange={(e) => ctry(e.target.value)} className="border-b border-black/30 w-[100%] aspect-[1/0.08] focus:outline-none focus:border-b font-light font-[Montserrat]">
                                <option className="font-light font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm" hidden>United States</option>
                                {flag.map((flg)=>(
                                    <option className="font-normal font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm" value={[flg.title, flg.code]}>{flg.title}</option>
                                ))}
                            </select>
                            <div className="w-[100%] aspect-[1/0.08] flex justify-between">
                                <div className="flex justify-start items-center w-[10%] h-[100%]">
                                    {flag.map(({Component, title})=>(
                                        (clck === title) ?
                                            <Component className="w-[80%] aspect-square" title={title}/>
                                        :   
                                            <></>
                                    ))}
                                </div>
                                <div className="flex w-[88%] h-[100%] border-b border-black/30 items-center gap-x-[4%]">
                                    <p className="font-[Montserrat] font-light text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-black">{phoneCode}</p>
                                    <input className="w-[80%] h-[100%] placeholder:font-[Montserrat] placeholder:text-sm sm:placeholder:text-sm md:placeholder:sm lg:placeholder:text-sm xl:placeholder:text-sm font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm placeholder:font-normal focus:outline-none placeholder:text-black bg-transparent" type="text" id="email" name="email" placeholder="Phone Number"/>
                                </div>
                            </div>
                            <div className="flex flex-row w-[100%] aspect-[1/0.08] justify-between">
                                <input className="border-b border-black/30 w-[30%] h-[100%] placeholder:font-[Montserrat] placeholder:text-sm sm:placeholder:text-sm md:placeholder:sm lg:placeholder:text-sm xl:placeholder:text-sm font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm placeholder:font-normal focus:outline-none focus:border-b focus:border-black placeholder:text-black bg-transparent" type="text" id="state" name="state" placeholder="State"/>
                                <input className="border-b border-black/30 w-[30%] h-[100%] placeholder:font-[Montserrat] placeholder:text-sm sm:placeholder:text-sm md:placeholder:sm lg:placeholder:text-sm xl:placeholder:text-sm font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm placeholder:font-normal focus:outline-none focus:border-b focus:border-black placeholder:text-black bg-transparent" type="text" id="district" name="district" placeholder="District"/>
                                <input className="border-b border-black/30 w-[30%] h-[100%] placeholder:font-[Montserrat] placeholder:text-sm sm:placeholder:text-sm md:placeholder:sm lg:placeholder:text-sm xl:placeholder:text-sm font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm placeholder:font-normal focus:outline-none focus:border-b focus:border-black placeholder:text-black bg-transparent" type="text" id="zipcode" name="zipcode" placeholder="Zip code"/>
                            </div>
                            <input className="border-b border-black/30 w-[100%] aspect-[1/0.08] placeholder:font-[Montserrat] placeholder:text-sm sm:placeholder:text-sm md:placeholder:sm lg:placeholder:text-sm xl:placeholder:text-sm font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm placeholder:font-normal focus:outline-none focus:border-b focus:border-black placeholder:text-black bg-transparent" type="email" id="email" name="email" placeholder="Street Address"/>
                        </div>
                        <div className="w-[100%] h-[100%] gap-x-2 flex">
                            <input className="font-[ubuntu] text-black" type="checkbox" id="terms" name="terms"></input>
                            <p className="font-[ubuntu] font-extralight text-[0.7rem] sm:text-xs md:text-sm lg:text-sm xl:text-sm">I have read and agree to the terms and conditions</p>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] sm:w-[45%] sm:h-[100%] border-l border-black/30 flex flex-col px-[8%] sm:px-[2%] md:px-[5%] lg:px-[5%] py-[3%] gap-y-[5vw] sm:gap-y-[0vw] sm:justify-between">
                    <p className="font-[Montserrat] font-semibold text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-black">Review your cart</p>
                    <div className="flex flex-col w-full aspect-[1/0.6] sm:aspect-[1/0.6] md:aspect-[1/0.5] lg:aspect-[1/0.4] xl:aspect-[1/0.4] justify-between">
                        <div className="w-[80%] h-[48%] flex items-center gap-x-[5%] py-[1%]">
                            <img src="sec1-img.jpeg" className="w-[38%] sm:w-[38%] md:w-[28%] lg:w-[20%] xl:w-[20%] aspect-square object-cover rounded-md"/>
                            <div className="flex w-[75%] flex-col h-[100%] justify-between">
                                <div className="w-[100%] flex flex-col justify-between h-[50%]">
                                    <p className="font-[Montserrat] font-normal text-sm sm:text-xs md:text-sm lg:text-sm xl:text-sm text-black">Review your cart</p>
                                    <p className="font-[Montserrat] font-light text-sm sm:text-[0.6rem] md:text-[0.5rem] lg:text-[0.6rem] xl:text-[0.65rem] text-black">1X</p>
                                </div>
                                <p className="font-[Montserrat] font-semibold text-sm sm:text-xs md:text-sm lg:text-sm xl:text-sm text-black">$20.00</p>
                            </div>
                        </div>
                        <div className="w-[80%] h-[48%] flex items-center gap-x-[5%] py-[1%]">
                            <img src="sec1-img.jpeg" className="w-[38%] sm:w-[38%] md:w-[28%] lg:w-[20%] xl:w-[20%] aspect-square object-cover rounded-md"/>
                            <div className="flex w-[75%] flex-col h-[100%] justify-between">
                                <div className="w-[100%] flex flex-col justify-between h-[50%]">
                                    <p className="font-[Montserrat] font-normal text-sm sm:text-xs md:text-sm lg:text-sm xl:text-sm text-black">Review your cart</p>
                                    <p className="font-[Montserrat] font-light text-sm sm:text-[0.6rem] md:text-[0.6rem] lg:text-[0.6rem] xl:text-[0.65rem] text-black">1X</p>
                                </div>
                                <p className="font-[Montserrat] font-semibold text-sm sm:text-xs md:text-sm lg:text-sm xl:text-sm text-black">$20.00</p>
                            </div>
                        </div>
                    </div>
                    <form className="w-[100%] aspect-[1/0.15] min-[380px]:aspect-[1/0.10] sm:aspect-[1/0.16] md:aspect-[1/0.12] lg:aspect-[1/0.1] xl:aspect-[1/0.1] border rounded-md flex justify-between items-center px-[3%]">
                        <div className="w-[60%] h-[100%] flex items-center justify-between">
                            <div className="w-[15%] aspect-square">
                                <svg viewBox="0 0 682.667 682.667">
                                    <g>
                                        <defs>
                                            <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                                <path d="M0 512h512V0H0Z" fill="#000000" opacity="1" data-original="#000000"></path>
                                            </clipPath>
                                        </defs>
                                        <g clip-path="url(#a)" transform="matrix(1.33333 0 0 -1.33333 0 682.667)">
                                            <path d="M0 0c0 13.462 6.652 25.347 16.837 32.606 4.382 3.123 7.211 7.958 7.211 13.339v74.297c0 8.854-7.177 16.032-16.032 16.032h-464.935c-8.855 0-16.033-7.178-16.033-16.032V45.945c0-5.381 2.829-10.216 7.211-13.339 10.186-7.259 16.838-19.144 16.838-32.606 0-13.462-6.652-25.347-16.838-32.606-4.382-3.123-7.211-7.958-7.211-13.339v-74.297c0-8.854 7.178-16.032 16.033-16.032H8.016c8.855 0 16.032 7.178 16.032 16.032v74.297c0 5.381-2.829 10.216-7.211 13.339C6.652-25.347 0-13.462 0 0Z" Montserrat transform="translate(480.452 256)" fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                            <path d="M0 0v-16.032" Montserrat transform="translate(256 360.21)" fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                            <path d="M0 0v-16.032" Montserrat transform="translate(256 167.822)" fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                            <path d="M0 0v-16.032" Montserrat transform="translate(256 264.016)" fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                            <path d="M0 0v-16.032" Montserrat transform="translate(256 312.113)" fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                            <path d="M0 0v-16.032" Montserrat transform="translate(256 215.92)" fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                            <path d="m0 0 112.226 144.291" Montserrat transform="translate(320.129 183.855)" fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                            <path d="M0 0c0-13.281-10.767-24.048-24.048-24.048-13.282 0-24.049 10.767-24.049 24.048 0 13.282 10.767 24.049 24.049 24.049C-10.767 24.049 0 13.282 0 0Z" Montserrat transform="translate(360.21 304.097)" fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                            <path d="M0 0c0-13.282-10.767-24.049-24.048-24.049-13.282 0-24.049 10.767-24.049 24.049 0 13.281 10.767 24.048 24.049 24.048C-10.767 24.048 0 13.281 0 0Z" Montserrat transform="translate(440.371 207.903)" fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                            <path d="M0 0h-112.226a8.016 8.016 0 0 0-8.016 8.016v96.194a8.016 8.016 0 0 0 8.016 8.016H0a8.016 8.016 0 0 0 8.016-8.016V8.016A8.016 8.016 0 0 0 0 0Z" Montserrat transform="translate(191.871 175.839)" fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                            <path d="M0 0c11.336-11.336 28.744-51.417 28.744-51.417S-11.337-34.01-22.673-22.673c-6.261 6.261-6.261 16.412 0 22.673C-16.412 6.261-6.261 6.261 0 0Z" Montserrat transform="translate(115.03 339.482)" fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                            <path d="M0 0c-11.336-11.336-28.744-51.417-28.744-51.417S11.337-34.01 22.673-22.673c6.261 6.261 6.261 16.412 0 22.673C16.412 6.261 6.261 6.261 0 0Z" Montserrat transform="translate(156.486 339.482)" fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                            <path d="M0 0h16.033" Montserrat transform="translate(183.854 247.984)" fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                            <path d="M0 0h80.16" Montserrat transform="translate(71.629 247.984)" fill="none" stroke="#000000" stroke-width="15" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-dasharray="none" stroke-opacity="" data-original="#000000" class=""></path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <input className="w-[80%] h-[100%] placeholder:font-[Montserrat] placeholder:text-sm sm:placeholder:text-sm md:placeholder:sm lg:placeholder:text-sm xl:placeholder:text-sm font-[Montserrat] text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm placeholder:font-normal focus:outline-none placeholder:text-black bg-transparent" type="text" id="state" name="state" placeholder="Discount Code"/>
                        </div>
                        <input className="font-[Montserrat] font-normal text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-blue-800" type="submit" value='Apply'/>
                    </form>
                    <div className="w-[100%] flex flex-col gap-y-[7vw] min-[380px]:gap-y-[4vw] sm:gap-y-[2vw] md:gap-y-[1vw]">
                        <div className="w-full flex justify-between">
                            <p className="font-[Montserrat] font-normal text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-black/30">Subtotal</p>
                            <p className="font-[Montserrat] font-semibold text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-black">$20.00</p>
                        </div>
                        <div className="w-full flex justify-between">
                            <p className="font-[Montserrat] font-normal text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-black/30">Shipping</p>
                            <p className="font-[Montserrat] font-semibold text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-black">$20.00</p>
                        </div>
                        <div className="w-full flex justify-between">
                            <p className="font-[Montserrat] font-normal text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-black/30">Discount</p>
                            <p className="font-[Montserrat] font-semibold text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-black">$20.00</p>
                        </div>
                        <div className="w-full flex justify-between">
                            <p className="font-[Montserrat] font-semibold text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-black">Total</p>
                            <p className="font-[Montserrat] font-semibold text-sm sm:text-sm md:text-sm lg:text-sm xl:text-[0.9rem] text-black">$20.00</p>
                        </div>
                    </div>
                    <input className="w-[100%] aspect-[1/0.14] min-[380px]:aspect-[1/0.09] sm:aspect-[1/0.11] md:aspect-[1/0.12] lg:aspect-[1/0.09] xl:aspect-[1/0.09] rounded-md bg-blue-500 font-[Montserrat] font-normal text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white" type="submit" value='Pay Now'/>
                </div>
            </form>
        </div>
    )
}

export default Checkout;