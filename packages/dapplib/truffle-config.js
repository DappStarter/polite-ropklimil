require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan rice saddle aspect hockey enter fog suggest'; 
let testAccounts = [
"0x5ed8b0b727b834413c2d379b7ccfd5d1d25c3cdded6521f5a72150491eb8d42e",
"0x1964c1affd24b6e9d7e8760d77908e2813c95c4a415494012f4773c4acc73341",
"0x064561ac2b3824302004397869eb9858788f3cc1af8ab5194d0fbfeb36f285da",
"0x7d2bd07f98366dec3bea418a76dffe96516a66563b9bcec8c9bb0952c007a7e8",
"0xfcad41bd533a78bc7e4d7b492ccb30fca7c701e02e2c75e96b5059baf698c1f1",
"0x498c42e9b90beedecc26a57d13b82b52d007e1126123fb400f19e8a554f61acf",
"0x7a096077c2c4528648a50895be670c4fdf092aaff0cb9b66dbd4c80da71775f1",
"0x014c1a54597470d12d51c4ef4343f27b58fbfe20ab74387bcdff74247495323f",
"0xde6b89afff952328d42e3eec10ed11f6b657b683281361f7be2c0fd8cf537a1f",
"0xe473b19d68fa6fef7fa7b383ea9730cf6bc2449ca4aaed4e66aa29c5a6f581ef"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

