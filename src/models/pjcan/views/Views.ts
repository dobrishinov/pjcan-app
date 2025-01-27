// noinspection DuplicatedCode

import { BluetoothStruct } from "@/components/bluetooth";
import { BaseModel } from "../base";
import { API_SIZE_CAR_VIEW, CarView } from "../car";
import { API_SIZE_VARIABLE_VIEW, VariableView } from "../variables/views";
import { API_SIZE_TEYES_VIEW, TeyesView } from "../teyes";
import { StructViews } from "./StructViews";
import { IViews } from "./IViews";

export const API_EXEC_VIEW = 2;
export const API_SIZE_VIEW = API_SIZE_CAR_VIEW + API_SIZE_TEYES_VIEW + API_SIZE_VARIABLE_VIEW;

const struct = new BluetoothStruct(StructViews);

export class Views extends BaseModel implements IViews
{
	car = new CarView();
	teyes = new TeyesView();
	variable = new VariableView();

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
		const result = this._set(this, API_EXEC_VIEW, API_SIZE_VIEW + 1, struct, buf);
		if (result)
		{
			this.car.isData = true;
			this.teyes.isData = true;
			this.variable.bose.isData = true;
			this.variable.climate.isData = true;
			this.variable.doors.isData = true;
			this.variable.engine.isData = true;
			this.variable.fuel.isData = true;
			this.variable.movement.isData = true;
			this.variable.sensors.isData = true;
			this.variable.temperature.isData = true;
			this.variable.volume.isData = true;
		}
		return result;
	}

	/** Чтение данных */
	get(): DataView | undefined
	{
		return this._get(this, API_EXEC_VIEW, 1);
	}
}
