import * as Enum from '../enums';

export interface Car {
	carId: number;
	userId: number;
	carBrand: Enum.CarBrand;
	model: Enum.CarModel;
	bodyType: Enum.BodyType;
	// engineType: Enum.EngineType;
	condition: Enum.Condition;
	// transmission: Enum.Transmission;
	// typeOfDrive: Enum.TypeOfDrive;
	// color: Enum.Color;
	// trimMaterial: Enum.TrimMaterial;
	yearOfIssue: number;
	// mileage: number;
	price: number;
	modification?: string;
	notes?: string;
	// climateControl?: boolean;
	// cruiseControl?: boolean;
	// signaling?: boolean;
	// airConditioning?: boolean;
	// parktronic?: boolean;
}
