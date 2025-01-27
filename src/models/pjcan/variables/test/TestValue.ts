import { BluetoothStruct } from "@/components/bluetooth";
import { BaseModel } from "../../base";
import { ViewConfig } from "../../view";
import { StructTestValue } from "./StructTestValue";
import { ITestValue } from "./ITestValue";

export const API_EXEC_VARIABLE_TEST = 190;
export const API_SIZE_VARIABLE_TEST = 36;

const struct = new BluetoothStruct(StructTestValue);

/** Модель значений тестирования */
export class TestValue extends BaseModel implements ITestValue
{
	text = "";
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
		return this._set(this, API_EXEC_VARIABLE_TEST, API_SIZE_VARIABLE_TEST + 1, struct, buf);
	}

	/** Чтение данных */
	get(): DataView | undefined
	{
		return this._get(this, API_EXEC_VARIABLE_TEST, API_SIZE_VARIABLE_TEST + 1, struct);
	}
}
