import Asset from "./Asset";

const AssetList = () => {
  return (
    <div className="mt-4">
      <h1 className="font-bold text-lg px-4 mb-1">Your Assets</h1>
      <table className="w-full" cellSpacing="0" cellPadding="0">
        <thead className="text-left">
          <tr className="text-[13px] border-y border-gray-100">
            <th className="py-2 px-4 font-semibold text-gray-800">Name</th>
            <th className="py-2 px-4 font-semibold text-gray-800">Price</th>
            <th className="py-2 px-4 font-semibold text-gray-800">Holdings</th>
            <th className="py-2 px-4 font-semibold text-gray-800">Avg. Buy</th>
            <th className="py-2 px-4 font-semibold text-gray-800">
              Profit/Loss
            </th>
            <th className="py-2 px-4 font-semibold text-gray-800"></th>
          </tr>
        </thead>
        <tbody>
          <Asset title="Mina" />
          <Asset title="Bitcoin" />
          <Asset title="Solana" />
        </tbody>
      </table>
    </div>
  );
};
export default AssetList;
