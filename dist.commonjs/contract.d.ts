import type { JsonFragment } from 'ethers';
import type { Call } from './call.js';
/**
 * Represents a deployed contract. Generates a Call per each request.
 * Call generation has a syntax similar to ethers.
 * @example
 * const daiContract = new Contract(daiAddress, erc20Abi);
 * daiContract.balanceOf(address); // returns a Call object
 */
declare class Contract {
    #private;
    [key: string]: Call | any;
    /**
     * Create a contract.
     * @param address Address of the contract
     * @param abi ABI of the contract
     */
    constructor(address: string, abi: JsonFragment[]);
}
export default Contract;
