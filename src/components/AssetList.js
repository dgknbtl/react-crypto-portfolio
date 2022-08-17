import Asset from "./Asset";

const AssetList = () => {
  return (
    <div>
      <span>Your Assets</span>
      <Asset title="Mina" />
      <Asset title="Bitcoin" />
      <Asset title="Solana" />
    </div>
  );
};
export default AssetList;
