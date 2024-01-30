import new_arrival from "./str";

function Home () {
    return (
        <section className="pt-[50px] w-[100%]">
            <Sec1/>
            <Sec2/>
        </section>
    )
}

function Sec1 () {
    return (
        <section className="flex flex-col justify-center items-center w-[100%] h-[850px] border-b border-black gap-y-[50px]">
            <div className="bg-[url('/public/sec1-img.jpeg')] w-[1100px] h-[700px] bg-cover bg-no-repeat bg-[top-center]"></div>
            <div className="flex flex-row justify-between items-center h-[30px] w-[1100px]">
                <p className=" text-[25px] font-bold">New Arrivals</p>
                <div className="flex flex-row justify-between items-center h-[30px] w-[120px]">
                    <p className="text-[17px] font-semibold">SEE ALL</p>
                    <svg className="" width="50" height="50">
                        <line x1="2" y1="25" x2="40" y2="25" stroke="#000" strokeWidth="2.2" strokeLinecap="round"/>
                        <polyline points="25,18 40,25 25,32" stroke="#000" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </section>
    )
}

function Sec2() {
    return (
        <section className="flex justify-center items-center border border-black w-[100%] pt-[50px]">
            <div className="flex flex-row flex-wrap border border-black w-[900px]">
                <div className="flex flex-col w-[400px] h-[460px] gap-y-[10px]">
                    <div className="bg-[url('/public/sec2-img.jpeg')] bg-contain bg-no-repeat w-[400px] h-[400px] border border-black"></div>
                    <div className="w-[400px] h-[50px] flex flex-row">
                        <div className="pl-[20px] w-[340px] flex justify-start items-center border border-black">
                            <p className="text-[17px] font-semibold">Wool X Buffer Jacket</p>
                        </div>
                        <div className="w-[60px] flex items-center border border-black justify-center">
                            <p className="font-semibold">$100</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;