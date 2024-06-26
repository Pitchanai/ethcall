import type { Provider as EthersProvider } from 'ethers';
import type { Call, CallOverrides } from './call.js';
import type { Multicall } from './multicall.js';
type BlockTag = number | 'latest' | 'pending';
interface ProviderConfig {
    multicall: Partial<Multicall>;
}
/**
 * Represents a Multicall provider. Used to execute multiple Calls.
 */
declare class Provider {
    #private;
    /**
     * Create a provider.
     * @param provider ethers provider
     * @param chainId Network chain
     * @param config Provider configuration
     */
    constructor(chainId: number, provider: EthersProvider, config?: Partial<ProviderConfig>);
    /**
     * Make one call to the multicall contract to retrieve eth balance of the given address.
     * @param address Address of the account you want to look up
     * @returns Ether balance fetching call
     */
    getEthBalance(address: string): Call;
    /**
     * Aggregate multiple calls into one call.
     * Reverts when any of the calls fails.
     * For ignoring the success of each call, use {@link tryAll} instead.
     * @param calls Array of Call objects containing information about each read call
     * @param block Block number for this call
     * @returns List of fetched data
     */
    all<T>(calls: Call[], overrides?: CallOverrides): Promise<T[]>;
    /**
     * Aggregate multiple calls into one call.
     * If any of the calls fail, it returns a null value in place of the failed call's return data.
     * @param calls Array of Call objects containing information about each read call
     * @param block Block number for this call
     * @returns List of fetched data. Failed calls will result in null values.
     */
    tryAll<T>(calls: Call[], overrides?: CallOverrides): Promise<(T | null)[]>;
    /**
     * Aggregates multiple calls into one call.
     * If any of the calls that are allowed to fail do fail,
     * it returns a null value in place of the failed call's return data.
     * @param calls Array of Call objects containing information about each read call
     * @param canFail Array of booleans specifying whether each call can fail
     * @param block Block number for this call
     * @returns List of fetched data. Failed calls will result in null values.
     */
    tryEach<T>(calls: Call[], canFail: boolean[], overrides?: CallOverrides): Promise<(T | null)[]>;
}
export default Provider;
export type { BlockTag };
