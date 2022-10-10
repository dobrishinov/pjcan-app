import { BluetoothStruct } from "@/components/bluetooth";
import { BaseModel } from "../../base";
import { IBoseConfig, StructBoseConfig, TCenterPoint } from "./index";

export const API_EXEC_VARIABLE_BOSE = 110; // команда API
const STRUCT_LENGTH = 7; // длина данных API

const struct = new BluetoothStruct(StructBoseConfig);

/** Модель параметров Bose */
export class BoseConfig extends BaseModel implements IBoseConfig
{
	enabled = false;
	audioPLT = false;
	radioFM = false;
	wow = false;
	balance = 0;
	bass = 0;
	fade = 0;
	treble = 0;
	centerPoint = TCenterPoint.CENTERPOINT_OFF;

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
		return this._set(this, API_EXEC_VARIABLE_BOSE, STRUCT_LENGTH, struct, buf);
	}

	/** Чтение данных */
	get(): DataView | undefined
	{
		return this._get(this, API_EXEC_VARIABLE_BOSE, STRUCT_LENGTH, struct);
	}
}
