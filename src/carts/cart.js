import items from "./str";

function Cart() {
  return (
    <div className="w-[100%] flex flex-col">
      <div className="flex flex-row items-center w-[100%] aspect-[1/0.1] border-b border-black">
        <div className="justify-center w-[90%] aspect-[1/0.12] flex flex-col pt-[2%] pl-[4%]">
          <p className="max-[885px]:text-[2vw] text-[1.5vw] font-semibold">3 Items</p>
          <p className="text-[2.5vw] font-semibold">Shopping Cart</p>
        </div>
        <div className="max-[885px]:w-[2.5%] w-[2.3%] aspect-[1/1] bg-[url('/public/cart.png')] bg-contain bg-no-repeat mt-[5%]"></div>
      </div>
      <div className="max-[530px]:hidden flex flex-row justify-between items-center w-[100%] aspect-[1/0.04] pl-[2.5%] pr-[4.8%] border-b border-black">
        <div className="flex justify-center items-center w-[6%] aspect-[1/0.07]">
          <p className="text-[100%] font-medium">Item</p>
        </div>
        <div className="flex justify-center items-center w-[8%] aspect-[1/0.07]">
          <p className="text-[90%] font-medium">Quantity</p>
        </div>
        <div className="flex justify-center items-center w-[8%] aspect-[1/0.07]">
          <p className="text-[90%] font-medium">Color</p>
        </div>
        <div className="flex justify-center items-center w-[8%] aspect-[1/0.07]">
          <p className="text-[90%] font-medium">Size</p>
        </div>
        <div className="flex justify-center items-center w-[8%] aspect-[1/0.07]">
          <p className="text-[90%] font-medium">Price</p>
        </div>
      </div>
      <Items />
      <div className="flex flex-col gap-y-[20px] w-[100%] aspect-[1/0.1] border-b border-black items-end justify-center">
        <div className="w-[32%] justify-between items-center flex flex-row">
            <p className="max-[885px]:text-[1.5vw] max-[730px]:text-[1.7vw] max-[630px]:text-[1.9vw] font-semibold text-[1.3vw]">Subtotal:</p>
            <div className="w-[34%]">
                <p className="max-[885px]:text-[1.3vw] max-[730px]:text-[1.5vw] max-[630px]:text-[1.7vw] text-[1.1vw] font-semibold">$<span>2323</span></p>
            </div>
        </div>
        <div className="w-[32%] justify-between items-center flex gap-x-[7%] flex-row">
            <p className="max-[885px]:text-[1.5vw] max-[730px]:text-[1.7vw] max-[630px]:text-[1.9vw] font-semibold text-[1.3vw]">Delivery:</p>
            <div className="w-[34%]">
                <p className="max-[885px]:text-[1.3vw] max-[730px]:text-[1.5vw] max-[630px]:text-[1.7vw] text-[1.1vw] font-semibold">$<span>23</span></p>
            </div>
        </div>
      </div>
      <div className="pl-[8%] w-[100%] aspect-[1/0.1] flex flex-row gap-x-[3%] justify-start items-center">
        <button className="w-[15%] aspect-[1/0.25] text-[1.2vw] border-black border font-semibold shadow-[2.5px_2.5px_0px_1px_rgba(0,0,0,1)]">Continue Shopping</button>
        <button className="w-[15%] aspect-[1/0.25] text-[1.2vw] border-black border font-semibold bg-black text-white shadow-[-2.5px_-2.5px_0px_1px_rgba(0,0,0,1)]">Checkout</button>
      </div>
    </div>
  );
}

function Items() {
  return (
    <>
        {items.map((item)=>(
            <div className="flex flex-row justify-between items-center max-[530px]:flex max-[530px]:flex-row max-[530px]:justify-between max-[530px]:aspect-[1/0.23] w-[100%] aspect-[1/0.08] max-[885px]:aspect-[1/0.1] pl-[2.5%] pr-[4.8%] border-b border-black">
                <div className={`max-[530px]:w-[20%] w-[6%] ${item.img} aspect-[1/1] bg-contain bg-no-repeat border border-black`}></div>
                <div className="border border-black max-[530px]:w-[15%] max-[1000px]:w-[10%] w-[8%] aspect-[1/0.07] flex flex-row justify-between items-center pl-[7px] pr-[7px] max-[1000px]:pl-[3px] max-[1000px]:pr-[3px]">
                  <button className="w-[25%] text-[100%] font-semibold pb-[3px]">-</button>
                  <p className="text-[100%] max-[1000px]:text-[90%] font-regular">{item.quantity}</p>
                  <button className="w-[25%] text-[100%] font-semibold pb-[3px]">+</button>
                </div>
                <div className="max-[530px]:hidden flex justify-center w-[8%] aspect-[1/0.07]">
                    <p className="font-regular text-[90%]">{item.color}</p>
                </div>
                <div className="max-[530px]:hidden flex justify-center w-[8%] aspect-[1/0.07]">
                    <p className="font-regular text-[90%]">{item.size}</p>
                </div>
                <div className="max-[530px]:hidden flex justify-center w-[8%] aspect-[1/0.07]">
                    <p className="font-regular text-[90%]"><span>$</span>{item.price}</p>
                </div>

                {/*for 530px */}

                <div className="max-[530px]:flex hidden w-[40%] max-[530px]:flex-col border border-black">
                    <div className="w-[100%] justify-between items-center flex flex-row">
                        <p className="font-regular text-[2.2vw]">Color:</p>
                        <div className="w-[34%]">
                            <p className="font-regular text-[2.2vw]"><span></span>{item.color}</p>
                        </div>
                    </div>
                    <div className="w-[100%] justify-between items-center flex flex-row">
                        <p className="font-regular text-[2.2vw]">Color:</p>
                        <div className="w-[34%]">
                            <p className="font-regular text-[2.2vw]"><span></span>{item.color}</p>
                        </div>
                    </div>
                    <div className="w-[100%] justify-between items-center flex flex-row">
                        <p className="font-regular text-[2.2vw]">Color:</p>
                        <div className="w-[34%]">
                            <p className="font-regular text-[2.2vw]"><span></span>{item.color}</p>
                        </div>
                    </div>
                    
                    
                    <p className="font-regular text-[2.2vw]"><span>Size:</span>{item.size}</p>
                    <p className="font-regular text-[2.2vw]"><span>Price:</span>{item.price}</p>
                </div>
          </div>
        ))}
    </>  
  );
}
export default Cart;
