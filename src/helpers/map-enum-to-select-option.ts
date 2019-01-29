import { SelectOption } from './../data-interfaces/interfaces/select-option';

type Enum<E> = Record<keyof E, number | string> & { [k: number]: string };

export const mapEnumToSelectOption = <E extends Enum<E>>(dataEnum: E): SelectOption[] =>
	Object.keys(dataEnum)
		.filter((x) => !isNaN(Number(x)))
		.map((key) => ({ name: dataEnum[Number(key)], value: key }));
