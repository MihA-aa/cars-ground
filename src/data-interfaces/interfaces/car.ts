import * as Enum from '../enums';

export interface Car {
	carId: number;
	userId: number;
	carBrand: Enum.CarBrand;
	carModel: Enum.CarModel;
	bodyType: Enum.BodyType;
	engineType: Enum.EngineType;
	condition: Enum.Condition;
	transmission: Enum.Transmission;
	typeOfDrive: Enum.TypeOfDrive;
	color: Enum.Color;
	trimMaterial: Enum.TrimMaterial;
	yearOfIssue: 2000 | 2001 | 2002 | 2003 | 2004 | 2005 | 2006 | 2007 | 2008 | 2009 | 2010;
	mileage: number;
	price: number;
	modification?: string;
	notes?: string;
	climateControl?: boolean;
	cruiseControl?: boolean;
	signaling?: boolean;
	airConditioning?: boolean;
	parktronic?: boolean;
}
