import React from "react";
import { useState } from "react";

const Data = ({ menu }) => {
  const [prevCounts, setPrevCounts] = useState(menu.map(() => 0));

  const handleCountAdd = (index) => {
    const newCounts = [...prevCounts];
    newCounts[index]++;
    setPrevCounts(newCounts);
  };

  const handleCountSub = (index) => {
    if (prevCounts[index] > 0) {
      const newCounts = [...prevCounts];
      newCounts[index]--;
      setPrevCounts(newCounts);
    }
  };

  const totalPrice = menu.reduce(
    (total, item, index) => total + item.price * prevCounts[index],
    0
  );

  return (
    <div>
      <div className="flex justify-between sm:text-4xl text-xl font-semibold text-green-700 pt-4">
        <h1 className="">
          Your Bill Amount
        </h1>
        <h1>
        ₹ {totalPrice > 100 ? totalPrice - 20 : totalPrice}
        </h1>
      </div>
      <table className="min-w-full text-center">
        <thead>
          <tr className="border-b border-t border-black">
            <th className="text-left  py-2">Menu</th>
            <th className="text-center py-2">Per Price</th>
            <th className="text-center  py-2">Select Quantity</th>
            <th className="text-end py-2">Total Price </th>
          </tr>
        </thead>
        <tbody className="">
          {menu.map((item, index) => (
            <tr className="m-4" key={item.id}>
              <td className="text-left py-2">{item.item}</td>
              <td className="py-2">₹ {item.price}</td>
              <td className="grid grid-cols-3 text-center items-center py-2">
                <button
                  className="px-2  bg-red-400 hover:bg-red-500 rounded"
                  onClick={() => handleCountSub(index)}
                >
                  -
                </button>
                <p className="">{prevCounts[index]}</p>
                <button
                  className="px-2 bg-green-400 hover:bg-green-500 rounded"
                  onClick={() => handleCountAdd(index)}
                >
                  +
                </button>
              </td>
              <td className="py-2 text-end">
                ₹ {item.price * prevCounts[index]}
              </td>
            </tr>
          ))}
        </tbody>
        <thead className="">
          <tr className="border-t border-black">
            <th className="text-start py-2">Total</th>
            <th className="text-start py-2"></th>
            <th className="text-start py-2"></th>
            <th className="text-end py-2">+ ₹ {totalPrice}</th>
          </tr>
        </thead>
        <thead className="">
          <tr className="border-t border-black">
            <th className="text-start py-2">
              ₹ 20 Discount (for more than ₹ 100 purchase)
            </th>
            <th className="text-start py-2"></th>
            <th className="text-start py-2"></th>
            <th className="text-end py-2">- ₹ {totalPrice > 100 ? 20 : 0}</th>
          </tr>
        </thead>
        <thead className="">
          <tr className="border-t border-b border-black">
            <th className="text-start py-2">Total cost of the items</th>
            <th className="text-start py-2"></th>
            <th className="text-start py-2"></th>
            <th className="text-end py-2">
              ₹ {totalPrice > 100 ? totalPrice - 20 : totalPrice}
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Data;
