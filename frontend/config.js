import { getDefaultConfig } from 'connectkit';
import { createConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';

export const config = createConfig(
    getDefaultConfig({
        appName: 'ConnectKit Next.js demo',
        chains: [mainnet, polygon, optimism, arbitrum],
        walletConnectProjectId: "b362c8f59be260a22a9ecd304d11a640",
    })
);
