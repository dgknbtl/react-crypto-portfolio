import { BsThreeDotsVertical } from "react-icons/bs";

const Asset = ({ title }) => {
  return (
    <tr className="text-[14px] border-y border-gray-100 text-right">
      <td className="py-2 px-4 font-semibold text-gray-800 min-w-[120px]">
        <div className="flex items-center">
          <img
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/8646.png"
            className="w-5 rounded-full"
            alt={title}
          />
          <span className="ml-2"> {title}</span>
        </div>
      </td>
      <td className="py-2 px-4 font-bold text-gray-800">$0.50</td>
      <td className="py-2 px-4 text-gray-800">
        <div className="font-bold">$2500</div>
        <div className="font-medium text-[13px] text-gray-500">1500 MINA</div>
      </td>
      <td className="py-2 px-4 font-bold text-gray-800">$0.60</td>
      <td className="py-2 px-4 font-semibold text-gray-800">
        <div className="font-bold">$100</div>
        <div className="text-[12px] font-medium text-gray-500">+2.0%</div>
      </td>
      <td className="py-2 px-4 font-semibold text-gray-800">
        <button>
          <BsThreeDotsVertical />
        </button>
      </td>
    </tr>
  );
};
export default Asset;
