export default abstract class Container<K, V> {
    protected readonly container: any;
    protected constructor(container?: any);
    toString(): string;
    [Symbol.iterator](): Generator<any>;
    get obj(): any;
    str(...args: any[]): string;
    get bool(): boolean;
    get size(): number;
    has(item: any): boolean;
    get iter(): Generator<any>;
    get vki(): Generator<[V, K, number]>;
    protected relocate(key: K): [Container<K, V>, K];
    protected reg(val: V): V;
    protected _get(key: K): V;
    protected _set(key: K, val: V): void;
    protected _del(key: K): void;
    get(key: K): V;
    set(key: K, val: V): Container<K, V>;
    del(key: K): Container<K, V>;
    take(key: K): V;
    replace(key: K, val: V): V;
    enforce(key: K, val: V): V;
    protected _default_ensure(mode: boolean, key: K, val: V | (() => V)): V;
    default(key: K, val: V | (() => V)): V;
    ensure(key: K, val: V | (() => V)): V;
    protected _splice(key: K, num: number, ...vals: V[]): V[];
    splice(key: K, num: number, ...vals: V[]): V[];
    protected _merge(args: object): void;
    merge(args: any): Container<K, V>;
    decor(...args: any[]): Container<K, V>;
}
