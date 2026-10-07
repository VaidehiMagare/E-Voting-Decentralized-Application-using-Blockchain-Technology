// import { defineConfig } from "hardhat/config";
// import "@nomicfoundation/hardhat-ethers";

// export default defineConfig({
//   solidity: {
//     version: "0.8.34",
//   },
// });

import { defineConfig } from "hardhat/config";
import hardhatEthers from "@nomicfoundation/hardhat-ethers";

export default defineConfig({
    plugins: [hardhatEthers],

    solidity: "0.8.28",
});