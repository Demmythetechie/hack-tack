import items from "./str";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <div className="w-[100%] flex flex-col">
      <div className="flex flex-row items-center w-[100%] aspect-[1/0.13] border-b border-black">
        <div className="justify-center w-[90%] max-[530px]:aspect-[1/0.22] aspect-[1/0.12] flex flex-col pt-[2%] pl-[4%]">
          <p className="text-[4vw] min-[430px]:text-[2.6vw] sm:text-[2.3vw] md:text-[2vw] xl:text-[1.5vw] font-semibold">3 Items</p>
          <p className="text-[5vw] min-[430px]:text-[3.8vw] sm:text-[3.4vw] md:text-[3vw] xl:text-[2.5vw] font-semibold">Shopping Cart</p>
        </div>
        <div className="w-[6.5%] min-[430px]:w-[5%] min-[530px]:w-[3.8%] sm:w-[3%] md:w-[2.5%] xl:w-[2.3%] aspect-[1/1] bg-[url('/public/cart.png')] bg-bottom bg-contain bg-no-repeat mt-[5%]"></div>
      </div>
      <div className="max-[530px]:hidden flex flex-row justify-between items-center w-[100%] aspect-[1/0.04] pl-[2.5%] pr-[4.8%] border-b border-black">
        <div className="flex justify-center items-center w-[6%] aspect-[1/0.07]">
          <p className="text-[2vw] sm:text-[1.6vw] md:text-[1.4vw] xl:text-[1.2vw] font-medium">Item</p>
        </div>
        <div className="flex justify-center items-center w-[8%] aspect-[1/0.07]">
          <p className="text-[2vw] sm:text-[1.6vw] md:text-[1.4vw] xl:text-[1.2vw] font-medium">Quantity</p>
        </div>
        <div className="flex justify-center items-center w-[8%] aspect-[1/0.07]">
          <p className="text-[2vw] sm:text-[1.6vw] md:text-[1.4vw] xl:text-[1.2vw] font-medium">Color</p>
        </div>
        <div className="flex justify-center items-center w-[8%] aspect-[1/0.07]">
          <p className="text-[2vw] sm:text-[1.6vw] md:text-[1.4vw] xl:text-[1.2vw] font-medium">Size</p>
        </div>
        <div className="flex justify-center items-center w-[8%] aspect-[1/0.07]">
          <p className="text-[2vw] sm:text-[1.6vw] md:text-[1.4vw] xl:text-[1.2vw] font-medium">Price</p>
        </div>
      </div>
      <Items />
      <div className="flex flex-col gap-y-[20px] w-[100%] aspect-[1/0.1] max-[530px]:aspect-[1/0.25] border-b border-black items-end justify-center">
        <div className="max-[530px]:w-[65%] w-[32%] justify-between items-center flex flex-row">
          <p className="text-[4vw] min-[430px]:text-[3.6vw] min-[530px]:text-[2.2vw] md:text-[1.8vw] xl:text-[1.4vw] font-semibold">Subtotal:</p>
          <div className="max-[530px]:w-[26%] w-[32%]">
            <p className="text-[3.6vw] min-[430px]:text-[3.2vw] min-[530px]:text-[1.8vw] md:text-[1.4vw] xl:text-[1.2vw] font-normal">$<span>2323</span></p>
          </div>
        </div>
        <div className="max-[530px]:w-[65%] w-[32%] justify-between items-center flex gap-x-[7%] flex-row">
          <p className="text-[4vw] min-[430px]:text-[3.6vw] min-[530px]:text-[2.2vw] md:text-[1.8vw] xl:text-[1.4vw] font-semibold">Delivery:</p>
          <div className="max-[530px]:w-[26%] w-[32%]">
            <p className="text-[3.6vw] min-[430px]:text-[3.2vw] min-[530px]:text-[1.8vw] md:text-[1.4vw] xl:text-[1.2vw] font-normal">$<span>23</span></p>
          </div>
        </div>
      </div>
      <div className="max-[640px]:pl-[3%] max-[640px]:pr-[3%] pl-[8%] w-[100%] aspect-[1/0.3] min-[530px]:aspect-[1/0.2] sm:aspect-[1/0.15] md:aspect-[1/0.1] flex flex-row gap-x-[3%] max-[530px]:gap-x-[20px] justify-start items-center">
        <Link to="/men" className="flex justify-center items-center w-[50%] aspect-[1/0.17] min-[530px]:w-[27%] min-[530px]:aspect-[1/0.2] sm:w-[20%] sm:aspect-[1/0.23] md:w-[15%] md:aspect-[1/0.25] text-[3.2vw] min-[430px]:text-[2.8vw] min-[530px]:text-[2vw] sm:text-[1.6vw] md:text-[1.4vw] xl:text-[1.2vw] border-black border font-semibold shadow-[2.5px_2.5px_0px_1px_rgba(0,0,0,1)]">Continue Shopping</Link>
        <Link to='/checkout' className="flex justify-center items-center w-[50%] aspect-[1/0.17] min-[530px]:w-[27%] min-[530px]:aspect-[1/0.2] sm:w-[20%] sm:aspect-[1/0.23] md:w-[15%] md:aspect-[1/0.25] text-[3.2vw] min-[430px]:text-[2.8vw] min-[530px]:text-[2vw] sm:text-[1.6vw] md:text-[1.4vw] xl:text-[1.2vw] border-black border font-semibold bg-black text-white shadow-[-2.5px_-2.5px_0px_1px_rgba(0,0,0,1)]">Checkout</Link>
      </div>
    </div>
  );
}

function Items() {
  return (
    <>
      {items.map((item)=>(
        <div className="flex flex-row justify-between items-center max-[530px]:flex max-[530px]:flex-row max-[530px]:justify-between max-[530px]:aspect-[1/0.33] w-[100%] aspect-[1/0.08] max-[885px]:aspect-[1/0.1] pl-[2.5%] pr-[4.8%] border-b border-black">
          <div className={`max-[530px]:w-[30%] w-[6%] ${item.img} aspect-[1/1] bg-contain bg-no-repeat border border-black`}></div>
          <div className="border border-black max-[530px]:hidden max-[530px]:w-[15%] max-[700px]:w-[14%] max-[1000px]:w-[10%] w-[8%] aspect-[1/0.07] flex flex-row justify-between items-center max-[1000px]:pl-[3px] max-[1000px]:pr-[3px]">
            <button className="w-[25%] text-[2.5vw] sm:text-[2.2vw] md:text-[1.8vw] xl:text-[1.5vw] font-semibold pb-[3px]">-</button>
            <p className="text-[2.3vw] sm:text-[2vw] md:text-[1.6vw] xl:text-[1.2vw] font-semibold">{item.quantity}</p>
            <button className="w-[25%] text-[2.5vw] sm:text-[2.2vw] md:text-[1.8vw] xl:text-[1.5vw] font-semibold pb-[3px]">+</button>
          </div>
          <div className="max-[530px]:hidden flex justify-center items-center w-[8%] aspect-[1/0.07]">
            <p className="font-regular text-[2vw] sm:text-[1.6vw] md:text-[1.4vw] xl:text-[1.2vw]">{item.color}</p>
          </div>
          <div className="max-[530px]:hidden flex justify-center items-center w-[8%] aspect-[1/0.07]">
            <p className="font-regular text-[2vw] sm:text-[1.6vw] md:text-[1.4vw] xl:text-[1.2vw]">{item.size}</p>
          </div>
          <div className="max-[530px]:hidden flex justify-center items-center w-[8%] aspect-[1/0.07]">
            <p className="font-regular text-[2vw] sm:text-[1.6vw] md:text-[1.4vw] xl:text-[1.2vw]"><span>$</span>{item.price}</p>
          </div>

          {/*for 530px */}

          <div className="max-[530px]:flex hidden w-[75%] max-[530px]:flex-row justify-center items-end">
            <div className="w-[40%] flex flex-col gap-y-[2vw]">
              <p className="font-semibold text-[2.8vw]"><span className="font-normal">Color:</span>     {item.color}</p>
              <p className="font-semibold text-[2.8vw]"><span className="font-normal">Size:</span>     {item.size}</p>
              <p className="font-semibold text-[2.8vw]"><span className="font-normal">Price:</span>     {item.price}</p>
            </div>
            <div className="w-[40%] flex flex-row justify-between items-center">
              <button className="flex items-center justify-center pb-[2%] w-[20%] aspect-square text-[4vw] font-semibold bg-black/50">-</button>
              <p className="text-[3vw] font-semibold">{item.quantity}</p>
              <button className="flex items-center justify-center pb-[2%] w-[20%] aspect-square text-[4vw] font-semibold bg-black/50">+</button>
            </div>
          </div>
        </div>
      ))}
    </>  
  );
}
export default Cart;
