import { Collection } from 'immutable';

export interface StrictImmutable<T> {
	get<K extends keyof T>(
		fieldName: K,
	): T[K] extends Collection.Indexed<infer U>
		? StrictImmutableList<U>
		: T[K] extends Collection.Keyed<string, infer U>
		? StrictImmutable<U>
		: T[K];
	getIn<K1 extends keyof T, K2 extends keyof (T[K1] extends StrictImmutable<infer U> ? U : T[K1])>(
		path: [K1, K2],
	): K2 extends keyof T[K1]
		? T[K1][K2] extends Array<infer U>
			? StrictImmutableList<U> | U[]
			: T[K1][K2] extends object
			? StrictImmutable<T[K1][K2]>
			: T[K1][K2]
		: T[K1] extends StrictImmutable<infer InnerType>
		? K2 extends keyof InnerType
			? InnerType[K2]
			: undefined
		: undefined;
	getIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(
		path: [K1, K2, K3],
	): T[K1][K2][K3] extends Array<infer U>
		? StrictImmutableList<U> | U[]
		: T[K1][K2][K3] extends object
		? StrictImmutable<T[K1][K2][K3]>
		: T[K1][K2][K3];
	set<K extends keyof T>(fieldName: K, value: T[K]): StrictImmutable<T>;
	setIn<K1 extends keyof T, K2 extends keyof T[K1]>(
		path: [K1, K2],
		value: T[K1][K2],
	): StrictImmutable<T>;
	setIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(
		path: [K1, K2, K3],
		value: T[K1][K2][K3],
	): StrictImmutable<T>;

	delete<K extends keyof T>(fieldName: K): StrictImmutable<T>;
	deleteIn<K1 extends keyof T, K2 extends keyof T[K1]>(path: [K1, K2]): StrictImmutable<T>;
	deleteIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(
		path: [K1, K2, K3],
	): StrictImmutable<T>;

	update<K extends keyof T>(fieldName: K, updateFn: (value: T[K]) => T[K]): StrictImmutable<T>;
	updateIn<K1 extends keyof T, K2 extends keyof T[K1]>(
		path: [K1, K2],
		updateFn: (value: T[K1][K2]) => T[K1][K2],
	): StrictImmutable<T>;
	updateIn<K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]>(
		path: [K1, K2, K3],
		updateFn: (value: T[K1][K2][K3]) => T[K1][K2][K3],
	): StrictImmutable<T>;

	toJS(): T;

	hasIn(searchKeyPath: string[]): boolean;
	has(searchKeyPath: string): boolean;
	equals(other: StrictImmutable<T> | undefined | null): boolean;
}

/** Typed interface for ImmutableJS List */
export interface StrictImmutableList<T> {
	size: number;
	get(
		index: number,
	): T extends Array<infer U>
		? StrictImmutableList<U> | U[]
		: T extends object
		? StrictImmutable<T> | T
		: T;
	getIn<K1 extends number>(path: [K1]): T;
	getIn<
		K1 extends number,
		K2 extends T extends StrictImmutableList<infer U>
			? number
			: (T extends StrictImmutable<infer U2> ? keyof U2 : object)
	>(
		path: [K1, K2],
	): T extends StrictImmutableList<infer U>
		? U
		: T extends StrictImmutable<infer U2>
		? K2 extends keyof U2
			? U2[K2]
			: undefined
		: undefined;
	getIn<
		K1 extends number,
		K2 extends keyof (T extends StrictImmutableList<infer U>
			? number
			: T extends StrictImmutable<infer U2>
			? U2
			: object)
	>(
		path: [K1, K2],
	): T extends StrictImmutableList<infer U>
		? U
		: T extends StrictImmutable<infer U2>
		? K2 extends keyof U2
			? U2[K2]
			: undefined
		: undefined;
	set(index: number, value: T): StrictImmutableList<T>;
	delete(index: number): StrictImmutableList<T>;
	findIndex(findFunc: (value: T) => boolean): number;
	remove(index: number): StrictImmutableList<T>;
	push(value: T): StrictImmutableList<T>;
	map<K>(mapper: (value: T, key?: number, iter?: this) => K): StrictImmutableList<K>;
	update(index: number, updateFn: (value: T) => T): StrictImmutableList<T>;
	filter(predicate: (value: T, index?: number, iter?: this) => boolean): StrictImmutableList<T>;
	every(predicate: (value: T, key?: number, iter?: this) => boolean): boolean;
	some(predicate: (value: T) => boolean): boolean;
	last(): StrictImmutable<T>;
	toJSON(): T[];
	find(predicate: (value: T, key?: number, iter?: this) => boolean): T | undefined;
	findEntry(predicate: (value: T, key?: number) => boolean): [number, T];
	toJS(): T[];
	min(comparator?: (first: T, second: T) => number): T | undefined;
	forEach(predicate: (item: T) => void): void;
	first(): T;
	includes(other: T): boolean;
	equals(other: StrictImmutableList<T> | undefined | null): boolean;
	toArray: () => T[];
	reduce(callbackfn: (previousValue: T, currentValue: T) => T): T;
}
