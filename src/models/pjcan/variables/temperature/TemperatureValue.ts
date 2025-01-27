import { BluetoothStruct } from "@/components/bluetooth";
import { BaseModel } from "../../base";
import { StructTemperatureValue } from "./StructTemperatureValue";
import { ITemperatureValue } from "./ITemperatureValue";

export const API_EXEC_VARIABLE_TEMPERATURE = 180;
export const API_SIZE_VARIABLE_TEMPERATURE = 8;

const struct = new BluetoothStruct(StructTemperatureValue);

/** Модель значений температуры */
export class TemperatureValue extends BaseModel implements ITemperatureValue
{
	in = 0;
	out = 0;

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
		return this._set(this, API_EXEC_VARIABLE_TEMPERATURE, API_SIZE_VARIABLE_TEMPERATURE + 1, struct, buf);
	}

	/** Чтение данных */
	get(): DataView | undefined
	{
		return this._get(this, API_EXEC_VARIABLE_TEMPERATURE, API_SIZE_VARIABLE_TEMPERATURE + 1, struct);
	}
}
