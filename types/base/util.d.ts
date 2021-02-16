export declare function has(x: any, attr: string | symbol): x is Function | object;
export declare function funcHas(x: any, attr: string | symbol): x is Function;
export declare function objHas(x: any, attr: string | symbol): x is object;
export declare function map<T>(x: any, func: (v: any, k: any, i: number) => T): Generator<T>;
export declare function join(arr: any, sep?: string): string;
export declare function split(str: string): string[];
export declare function line(str?: string, num?: number): string;
export declare function sugar(args: object, keys: object): object;
export declare function assert(cdt: boolean, msg?: string): void;