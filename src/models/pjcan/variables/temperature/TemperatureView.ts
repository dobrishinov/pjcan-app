import { BluetoothStruct } from "@/components/bluetooth";
import { BaseModel } from "../../base";
import { API_SIZE_VIEW, ViewConfig } from "../../view";
import { StructTemperatureView } from "./StructTemperatureView";
import { ITemperatureView } from "./ITemperatureView";

export const API_EXEC_VARIABLE_TEMPERATURE_VIEW = 181;
export const API_SIZE_VARIABLE_TEMPERATURE_VIEW = API_SIZE_VIEW;

const struct = new BluetoothStruct(StructTemperatureView);

/** Модель параметров отображения данных температуры */
export class TemperatureView extends BaseModel implements ITemperatureView
{
	view = new ViewConfig();

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
		return this._set(this, API_EXEC_VARIABLE_TEMPERATURE_VIEW, API_SIZE_VARIABLE_TEMPERATURE_VIEW + 1, struct, buf);
	}

	/** Чтение данных */
	get(): DataView | undefined
	{
		return this._get(this, API_EXEC_VARIABLE_TEMPERATURE_VIEW, API_SIZE_VARIABLE_TEMPERATURE_VIEW + 1, struct);
	}
}
