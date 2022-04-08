require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remember unveil grace forum foster genre'; 
let testAccounts = [
"0x666a27c940000e3915ce3c935ef6cb7abafcf8ee7417eccff9be9bd22cb54b24",
"0x9e50542a950abc2775d6906dc22449a26d32802c24981550f6c9de4ee39cda33",
"0xebd02899380ddc104fdd0acd4416b44dc99bb6423262667951e9fb1de95e9272",
"0x909efc5f4445dbbf69cc4a4fcfe806f696f0260bb011d28b2faa22109655c792",
"0x175c6b84f817ecfe6e7131270006e09551a68ee99997c01b4bde5ca422b3a7e4",
"0x6e347d089f863e4ec6595486e6a17e7e9ef8b7420835c428669f5f267eaec07f",
"0xc640c7fa17af74294c8af143b2388dec8ccb4940254eed264b4058e800f2a937",
"0xdd758e90b52af0159229400e27a924e15bdc8466f698d0e1ea7062ce2790eea0",
"0xfeabe5d24dc23529cbf3944ef8a0b531a6f28961a7b53a4b4b403d7e41efa2cb",
"0xf51bf8ee6bb7d1b217bd0a96f4cca1e75ee1f5829dd781ad45f1c64c20e57e12"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

