import { BluetoothStruct } from "@/components/bluetooth";
import { BaseModel } from "../../base";
import { ViewConfig } from "../../view";
import { StructFuelView } from "./StructFuelView";
import { IFuelView } from "./IFuelView";

export const API_EXEC_VARIABLE_FUEL_VIEW = 152; // команда API
const STRUCT_LENGTH = 17; // длина данных API

const struct = new BluetoothStruct(StructFuelView);

/** Модель параметров отображения данных расхода топлива */
export class FuelView extends BaseModel implements IFuelView
{
	consumption = new ViewConfig();
	current = new ViewConfig();
	avg = new ViewConfig();
	total = new ViewConfig();

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
		return this._set(this, API_EXEC_VARIABLE_FUEL_VIEW, STRUCT_LENGTH, struct, buf);
	}

	/** Чтение данных */
	get(): DataView | undefined
	{
		return this._get(this, API_EXEC_VARIABLE_FUEL_VIEW, STRUCT_LENGTH, struct);
	}
}
