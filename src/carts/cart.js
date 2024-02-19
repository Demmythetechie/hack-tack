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
      <div className="grid grid-cols-[6%_18.3%_7%_18.3%_6%_18.3%_6%_18.3%_6%] items-center w-[100%] aspect-[1/0.04] pl-[3%] pr-[8%] border-b border-black">
        <div className="flex justify-center col-[1_/_span_1] border border-black">
          <p className="max-[885px]:text-[1.5vw] text-[1.2vw] font-medium">Item</p>
        </div>
        <div className="col-[2_/_span_1] border border-black"></div>
        <div className="flex justify-center col-[3_/_span_1] border border-black">
          <p className="max-[885px]:text-[1.5vw] text-[1.2vw] font-medium">Quantity</p>
        </div>
        <div className="col-[4_/_span_1] border border-black"></div>
        <div className="flex justify-center col-[5_/_span_1] border border-black">
          <p className="max-[885px]:text-[1.5vw] text-[1.2vw] font-medium">Color</p>
        </div>
        <div className="col-[6_/_span_1] border border-black"></div>
        <div className="flex justify-center col-[7_/_span_1] border border-black">
          <p className="max-[885px]:text-[1.5vw] text-[1.2vw] font-medium">Size</p>
        </div>
        <div className="col-[8_/_span_1] border border-black"></div>
        <div className="flex justify-start col-[9_/_span_1] border border-black">
          <p className="max-[885px]:text-[1.5vw] text-[1.2vw] font-medium">Price</p>
        </div>
      </div>
      <Items />
      <div className="flex flex-col gap-y-[20px] w-[100%] aspect-[1/0.1] border-b border-black items-end justify-center">
        <div className="w-[32%] justify-between items-center flex flex-row">
            <p className="font-semibold text-[1.3vw]">Subtotal:</p>
            <div className="w-[34%]">
                <p className="text-[1.1vw] font-semibold">$<span>2323</span></p>
            </div>
        </div>
        <div className="w-[32%] justify-between items-center flex gap-x-[7%] flex-row">
            <p className="font-semibold text-[1.3vw]">Delivery:</p>
            <div className="w-[34%]">
                <p className="text-[1.1vw] font-semibold">$<span>23</span></p>
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
            <div className="flex flex-row justify-between items-center w-[100%] aspect-[1/0.08] max-[885px]:aspect-[1/0.1] pl-[2.5%] pr-[8.1%] border-b border-black">
                <div className={`${item.img} max-[885px]:w-[8%] w-[6.5%] aspect-[1/1] bg-contain bg-no-repeat border border-black mr-[-2.8%]`}></div>
                <div className="max-[885px]:w-[8%] flex flex-row w-[6%] justify-between items-center pl-[7px] pr-[7px] border border-black">
                    <button className="max-[885px]:text-[1.7vw] text-[1.3vw] font-semibold pb-[3px]">-</button>
                    <p className="max-[885px]:text-[1.4vw] text-[1.1vw] font-regular">{item.quantity}</p>
                    <button className="max-[885px]:text-[1.7vw] text-[1.3vw] font-semibold pb-[3px]">+</button>
                </div>
                <p className="max-[885px]:text-[1.5vw] font-regular text-[1.2vw] ml-[-0.7%]">{item.color}</p>
                <p className="max-[885px]:text-[1.5vw] font-regular text-[1.2vw]">{item.size}</p>
                <p className="max-[885px]:text-[1.5vw] font-regular text-[1.2vw]"><span>$</span>{item.price}</p>
          </div>
        ))}
    </>
  );
}
export default Cart;
