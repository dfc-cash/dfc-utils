import { encodeAddress } from '@polkadot/keyring';

const zero = '0x' + '00'.repeat(32);
const output = encodeAddress(zero, 71);

console.log(output.toString());
// output: d1CFiZY8iBpe7dTRL9Fn5Xzk4hmiscUbtfarnbLG9475ipsSD
