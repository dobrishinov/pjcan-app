import { BluetoothStruct } from "@/components/bluetooth";
import { BaseModel } from "../../base";
import { API_SIZE_VIEW, ViewConfig } from "../../view";
import { StructClimateView } from "./StructClimateView";
import { IClimateView } from "./IClimateView";

export const API_EXEC_VARIABLE_CLIMATE_VIEW = 121;
export const API_SIZE_VARIABLE_CLIMATE_VIEW = API_SIZE_VIEW;

const struct = new BluetoothStruct(StructClimateView);

/** Модель параметров отображения данных климата */
export class ClimateView extends BaseModel implements IClimateView
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
		return this._set(this, API_EXEC_VARIABLE_CLIMATE_VIEW, API_SIZE_VARIABLE_CLIMATE_VIEW + 1, struct, buf);
	}

	/** Чтение данных */
	get(): DataView | undefined
	{
		return this._get(this, API_EXEC_VARIABLE_CLIMATE_VIEW, API_SIZE_VARIABLE_CLIMATE_VIEW + 1, struct);
	}
}
