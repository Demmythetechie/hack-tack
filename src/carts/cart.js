function Cart() {
  return (
    <div className="w-[100%] flex flex-col">
      <div className="flex flex-row items-center w-[100%] aspect-[1/0.1] border-b border-black">
        <div className="justify-center w-[90%] aspect-[1/0.12] flex flex-col pt-[2%] pl-[4%]">
          <p className="text-[1.5vw] font-semibold">3 Items</p>
          <p className="text-[2.5vw] font-semibold">Shopping Cart</p>
        </div>
        <div className=" w-[2.3%] aspect-[1/1] bg-[url('/public/cart.png')] bg-contain bg-no-repeat mt-[5%]"></div>
      </div>
      <div className="flex flex-row justify-between items-center w-[100%] aspect-[1/0.04] pl-[4%] pr-[8%] border-b border-black">
        <p className="text-[1.2vw] font-medium">Item</p>
        <p className="text-[1.2vw] font-medium">Quantity</p>
        <p className="text-[1.2vw] font-medium">Color</p>
        <p className="text-[1.2vw] font-medium">Size</p>
        <p className="text-[1.2vw] font-medium">Price</p>
      </div>
      <Items />
    </div>
  );
}

function Items() {
  return (
    <div className="flex flex-row justify-between items-center w-[100%] aspect-[1/0.05] pl-[4%] pr-[8%] border-b border-black">
      <div className="bg-[url('/public/sec2-img.jpeg)'] bg-contain bg-no-repeat"></div>
      <div className="flex flex-row">
        <button className="text-[1vw] font-semibold">-</button>
        <p className="text-[1vw] font-semibold">1</p>
        
      </div>
    </div>
  );
}
export default Cart;
