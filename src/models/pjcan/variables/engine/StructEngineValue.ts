import { BluetoothStruct } from "@/components/bluetooth";

/** Структура данных */
export const StructEngineValue = {
	enabled: BluetoothStruct.bit(),
	coolant: BluetoothStruct.int8(),
	rpm: BluetoothStruct.uint16(),
	mseconds: BluetoothStruct.uint32(),
	totalSeconds: BluetoothStruct.uint32(),
	totalCountRPM: BluetoothStruct.uint32(),
	countRPM: BluetoothStruct.float32(),
	load: BluetoothStruct.float32(),
	throttle: BluetoothStruct.float32()
};
