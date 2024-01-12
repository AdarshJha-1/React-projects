function Hero() {
    return (
        <div className=" w-[1125px] h-[640px] mt-[80px] mx-auto flex flex">
            <section className="w-[595px] h-[640px] bg-white flex flex-col gap-[36px]">
                <div className="text-[108px] font-extrabold leading-[102px]">
                    <h1>YOUR FEET</h1>
                    <h1>DESERVE</h1>
                    <h1>THE BEST</h1>
                </div>
                <p className="w-[404px] h-[91px]">
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>

                <div className="flex items-center gap-[40px] w-[331px]">
                    <button className="bg-[#D01C28] py-[6px] px-[16px] text-[24px] font-semibold text-white">Shop Now</button>
                    <button className= "py-[6px] px-[16px] text-[24px] font-semibold border-2 border-[#00000080] text-[#5A5959]">Category</button>
                </div>
                <div className="w-[131px] h-[67px] flex flex-col gap-4">
                    <span className="text-[#5A5959]">Also Available On</span>
                    <div className="flex gap-4">
                        <img src="../../img/flipkart.png" alt="flipkart" />
                        <img src="../../img/amazon.png" alt="amazon" />
                    </div>
                </div>
            </section>
            <section className="h-full flex justify-center items-center pl-[10px]">
                <img className="w-[530px] h-[487.062px]" src="../../img/shoe_image.png" alt="" />
            </section>
        </div>
    )
}

export default Hero