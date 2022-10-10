import { BluetoothStruct } from "@/components/bluetooth";
import { BaseModel } from "@/models/pjcan/base";
import { BoseConfig } from "@/models/pjcan/variables/bose";
import { EngineConfig } from "@/models/pjcan/variables/engine/EngineConfig";
import { FuelConfig } from "@/models/pjcan/variables/fuel/FuelConfig";
import { VolumeConfig } from "@/models/pjcan/variables/volume/VolumeConfig";

export const API_EXEC_VARIABLE_CONFIG = 100; // команда API
const STRUCT_LENGTH = 23; // длина данных API

const struct = new BluetoothStruct(StructVariableConfig);

/** Модель конфигурации переменных */
export class VariableConfig extends BaseModel implements IVariableConfig
{
	bose = new BoseConfig();
	engine = new EngineConfig();
	fuel = new FuelConfig();
	volume = new VolumeConfig();

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
		return this._set(this, API_EXEC_VARIABLE_CONFIG, STRUCT_LENGTH, struct, buf);
	}

	/** Чтение данных */
	get(): DataView | undefined
	{
		return this._get(this, API_EXEC_VARIABLE_CONFIG, 1);
	}
}