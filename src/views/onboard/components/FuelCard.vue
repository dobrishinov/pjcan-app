<template>
	<card class="fuel-card" :title="$t('onboard.fuel.title')" :menu="menu" @click:menu="onMenuClick">
		<template #body>
			<v-row>
				<v-col cols="12" class="pb-0">
					<input-card-item
						:value="current"
						:title="$t('onboard.fuel.current.title')"
						:description="$t('onboard.fuel.current.description')"
						:nodata="!isLoadedValue || Number(current) <= 0"
						:disabled="!isLoadedView"
					/>
				</v-col>
				<v-col cols="12" class="pt-0 pb-0">
					<input-card-item
						:value="avg"
						:title="$t('onboard.fuel.avg.title')"
						:description="$t('onboard.fuel.avg.description')"
						:nodata="!isLoadedValue || Number(avg) <= 0"
						:disabled="!isLoadedView"
					/>
				</v-col>
				<!--<v-col cols="12" class="pt-0 pb-0">-->
				<!--	<input-card-item-->
				<!--		:value="total"-->
				<!--		:title="$t('onboard.fuel.total.title')"-->
				<!--		:description="$t('onboard.fuel.total.description')"-->
				<!--		:nodata="!isLoadedValue"-->
				<!--		:disabled="!isLoadedView"-->
				<!--	/>-->
				<!--</v-col>-->
				<v-col cols="12" class="pt-0 pb-0">
					<input-card-item
						:value="consumption"
						:title="$t('onboard.fuel.consumption.title')"
						:description="$t('onboard.fuel.consumption.description')"
						:nodata="!isLoadedValue || Number(consumption) <= 0"
						:disabled="!isLoadedView"
					/>
				</v-col>
			</v-row>
		</template>
	</card>

	<view-setting-dialog
		v-model="menuVisible"
		:title="menuSelected.title"
		:enabled="menuViewConfig.enabled"
		:type="menuViewConfig.type"
		:time="menuViewConfig.time"
		:disabled="!isLoadedView"
		@click:apply="onViewSettingApply"
	/>
</template>

<script lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useI18n } from "vue-i18n";

import Card from "@/components/cards/Card.vue";
import InputCardItem from "@/components/cards/InputCardItem.vue";
import ViewSettingDialog from "./ViewSettingDialog.vue";
import { IMenuItem } from "@/components/MenuDots.vue";

import canbus, { API_EVENT_VARIABLE_FUEL, API_EVENT_VARIABLE_FUEL_VIEW } from "@/api/canbus";

import { IViewConfig } from "@/models/pjcan/view";
import { API_EXEC_VARIABLE_FUEL_VIEW, IFuelValue, IFuelView } from "@/models/pjcan/variables/fuel";

export default {
	name: "FuelCard",
	components: { Card, InputCardItem, ViewSettingDialog },
	setup()
	{
		const { t } = useI18n();

		const isLoadedValue = ref(false);
		const isLoadedView = ref(false);

		const current = ref("");
		const avg = ref("");
		// const total = ref("");
		const consumption = ref("");

		/** Входящие значения расхода топлива */
		const onReceiveValue = (res: IFuelValue): void =>
		{
			isLoadedValue.value = res.isData;
			if (res.isData)
			{
				current.value = res.current.toFixed(1);
				avg.value = res.avg.toFixed(1);
				// total.value = res.total.toFixed(2);
				consumption.value = res.consumption.toFixed(2);
			}
		};

		/** Входящие значения отображения расхода топлива */
		const onReceiveView = (res: IFuelView): void =>
		{
			isLoadedView.value = res.isData;
		};

		// регистрируем события
		onMounted(() =>
		{
			canbus.addListener(API_EVENT_VARIABLE_FUEL, onReceiveValue);
			canbus.addListener(API_EVENT_VARIABLE_FUEL_VIEW, onReceiveView);
			onReceiveValue(canbus.values.variable.fuel);
			onReceiveView(canbus.views.variable.fuel);
		});
		// удаляем события
		onUnmounted(() =>
		{
			canbus.removeListener(API_EVENT_VARIABLE_FUEL, onReceiveValue);
			canbus.removeListener(API_EVENT_VARIABLE_FUEL_VIEW, onReceiveView);
		});

		// МЕНЮ ОТОБРАЖЕНИЯ

		const menu = computed((): IMenuItem[] => [
			{ id: 0, title: t("onboard.fuel.current.menu") },
			{ id: 1, title: t("onboard.fuel.avg.menu") },
			// { id: 2, title: t("onboard.fuel.total.menu") },
			{ id: 3, title: t("onboard.fuel.consumption.menu") }
		]);
		const menuVisible = ref(false);
		const menuSelected = ref({} as IMenuItem);
		const menuViewConfig = ref({} as IViewConfig);

		/**
		 * Выбор пункта меню отображения на информационном экране
		 * @param {IMenuItem} item Элемент меню
		 */
		const onMenuClick = (item: IMenuItem): void =>
		{
			menuVisible.value = true;
			menuSelected.value = item;

			const { fuel } = canbus.views.variable;
			switch (item.id)
			{
				case 0:
					menuViewConfig.value = fuel.current;
					return;

				case 1:
					menuViewConfig.value = fuel.avg;
					break;

					// case 2:
					// 	menuViewConfig.value = fuel.total;
					// 	break;

				case 3:
					menuViewConfig.value = fuel.consumption;
					break;
			}
		};

		/**
		 * Применить параметры отображения на информационном экране
		 * @param {IViewConfig} data Новые параметры отображения
		 */
		const onViewSettingApply = (data: IViewConfig): void =>
		{
			const { fuel } = canbus.views.variable;
			switch (menuSelected.value.id)
			{
				case 0:
					fuel.current = data;
					break;

				case 1:
					fuel.avg = data;
					break;

					// case 2:
					// 	fuel.total = data;
					// 	break;

				case 3:
					fuel.consumption = data;
					break;
			}
			canbus.queryView(API_EXEC_VARIABLE_FUEL_VIEW);
		};

		return {
			isLoadedView,
			isLoadedValue,
			current,
			avg,
			// total,
			consumption,
			menu,
			menuVisible,
			menuSelected,
			menuViewConfig,
			onMenuClick,
			onViewSettingApply
		};
	}
};
</script>
