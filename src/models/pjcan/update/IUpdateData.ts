import EventEmitter from "eventemitter3";

/** Интерфейс загрузки данных прошивки */
export interface IUpdateData extends EventEmitter {
	data: Uint8Array;
	offset: number;
	last: boolean;
	uploading: number;

	clear: () => void;
	set: (buf: DataView) => void;
	get: () => DataView;
}
