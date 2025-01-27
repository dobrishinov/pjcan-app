import { BluetoothStruct } from "@/components/bluetooth";
import { BaseModel } from "../../base";
import { StructDoorsValue } from "./StructDoorsValue";
import { IDoorsValue } from "./IDoorsValue";

export const API_EXEC_VARIABLE_DOORS = 130;
export const API_SIZE_VARIABLE_DOORS = 1;

const struct = new BluetoothStruct(StructDoorsValue);

/** Модель значений дверей */
export class DoorsValue extends BaseModel implements IDoorsValue
{
	frontLeft = false;
	frontRight = false;
	backLeft = false;
	backRight = false;
	trunk = false;

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
		return this._set(this, API_EXEC_VARIABLE_DOORS, API_SIZE_VARIABLE_DOORS + 1, struct, buf);
	}

	/** Чтение данных */
	get(): DataView | undefined
	{
		return this._get(this, API_EXEC_VARIABLE_DOORS, API_SIZE_VARIABLE_DOORS + 1, struct);
	}
}
