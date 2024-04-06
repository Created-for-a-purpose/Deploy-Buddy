import { sepolia, polygonAmoy, arbitrumSepolia, optimismSepolia, } from "wagmi/chains"

export const chains = [
  { label: sepolia.name, key: sepolia.id },
  { label: polygonAmoy.name, key: polygonAmoy.id },
  { label: arbitrumSepolia.name, key: arbitrumSepolia.id },
  { label: optimismSepolia.name, key: optimismSepolia.id },
];