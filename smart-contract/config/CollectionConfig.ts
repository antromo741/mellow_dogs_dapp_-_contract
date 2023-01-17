import CollectionConfigInterface from "../lib/CollectionConfigInterface";
import whitelistAddresses from "./whitelist.json";

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: "MellowDogsNFT",
  tokenName: "Mellow Dogs NFT",
  tokenSymbol: "MDT",
  hiddenMetadataUri: "ipfs://Qma9stiVAvYC5UtCYuJnWyhugJdcaQaTVXxPuG4Dn6PFsu/hidden.json",
  maxSupply: 4444,
  whitelistSale: {
    price: 0.02,
    maxMintAmountPerTx: 20,
  },
  preSale: {
    price: 0.02,
    maxMintAmountPerTx: 20,
  },
  publicSale: {
    price: 0.01,
    maxMintAmountPerTx: 20,
  },
  contractAddress: "0xc2Dd0475101811B33F2bAD4788e3F71D0EeB0885",
  openSeaSlug: "Mellow Dogs NFt",
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
