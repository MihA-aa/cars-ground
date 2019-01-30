import { SelectOption } from '../data-interfaces/interfaces/select-option';

type Enum<E> = Record<keyof E, number | string> & { [k: number]: string };

export const mapEnumToSelectOptions = <E extends Enum<E>>(dataEnum: E): SelectOption[] =>
	Object.keys(dataEnum)
		.filter((x) => !isNaN(Number(x)))
		.map((key) => ({ name: dataEnum[Number(key)], value: key }));

export const mapArrayToSelectOptions = (array: number[]): SelectOption[] =>
	array.map((item) => ({ name: item.toString(), value: item }));
