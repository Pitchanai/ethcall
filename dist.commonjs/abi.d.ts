import type { JsonFragmentType } from 'ethers';
import { Result } from 'ethers';
type Params = any[];
declare class Abi {
    static encode(name: string, jsonInputs: readonly JsonFragmentType[], params: Params): string;
    static encodeConstructor(jsonInputs: readonly JsonFragmentType[], params: Params): string;
    static decode(name: string, jsonOutputs: readonly JsonFragmentType[], data: string): Result;
}
export type { Params };
export default Abi;
