import { BluetoothStruct } from "@/components/bluetooth";
import { BaseModel, IBaseModel } from "../../base/BaseModel";

export const API_EXEC_VARIABLE_FUEL_CONFIG = 151; // команда API
const STRUCT_LENGTH = 5; // длина данных API

/** Интерфейс конфигурации расхода топлива */
export interface IFuelConfig extends IBaseModel {
	ratio: number;
}

export const StructFuelConfig = {
	ratio: BluetoothStruct.float32()
};

const struct = new BluetoothStruct(StructFuelConfig);

/** Модель конфигурации расхода топлива */
export class FuelConfig extends BaseModel implements IFuelConfig
{
	ratio = 0;

	constructor(data?: DataView)
	{
		super();
		if (data) this.set(data);
	}

	/**
	 * Запись данных
	 * @param {DataView} buf Буффер данных
	 */
	set(buf: DataView): boolean
	{
		return this._set(this, API_EXEC_VARIABLE_FUEL_CONFIG, STRUCT_LENGTH, struct, buf);
	}

	/** Чтение данных */
	get(): DataView | undefined
	{
		return this._get(this, API_EXEC_VARIABLE_FUEL_CONFIG, STRUCT_LENGTH, struct);
	}
}
