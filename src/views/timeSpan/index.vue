<template>
    <div class="timeSpan">
        <a-row type="flex" class="alertLevelButton">
            <a-col flex="100px">
            <a-button type="primary" @click="addNewTimeSpan">{{$t('add')}}</a-button>
            </a-col>
        </a-row>
        <a-table :columns="columns" :data-source="dataSource" bordered :pagination="false">
            <template #headerCell="{ column }">
                {{$t(column.key)}} 
            </template>
            <template #bodyCell="{ column, text }">
                <template v-if="column.dataIndex=== 'timeSpanDesc'">
                    <p>{{ $t('dateRange') }}: {{ parseTimeSpan(text).dateRange}}</p>
                    <p>{{ $t('timeRange') }}: {{ parseTimeSpan(text).timeRange}}</p>
                    <p>{{ $t('monthCond') }}: {{ parseTimeSpan(text).month}}</p>
                    <p>{{ $t('weekCond') }}: {{ parseTimeSpan(text).week}}</p>
                    <p>{{ $t('dayCond') }}: {{ parseTimeSpan(text).day}}</p>
                </template>
                <template v-if="column.dataIndex === 'operation'">
                    <a>{{ $t('edit') }}</a>
                    <a-divider type="vertical"></a-divider>
                    <a>{{ $t('delete') }}</a>
                </template>
            </template>
        </a-table>
        <Modal :width="480" v-bind="modalState" @cancel="handleCancel" @ok="handleSubmit" :maskClosable="false">
            <a-form
            ref="timeSpanRef"
            :model="timeSpanFormModel"
            :rules="rules"
            >
            <a-row :gutter="24">
                <a-col :span="24">
                <a-form-item name="timeSpanName">
                    <a-input :placeholder="$t('name')" v-model:value="timeSpanFormModel.timeSpanName"></a-input>
                </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="24">
                <a-col :span="24">
                <a-form-item>
                    <div class="rangeDPBorder" :class="{'rangeDPBorder-active': isDRPFocus}">
                        <div class="rangeDPTitle" :class="{'rangeDPTitle-active': isDRPFocus}">{{ $t('dateRange') }}</div>
                        <div><a-range-picker v-model:value="timeSpanFormModel.timeSpanDesc.dateRange" @openChange="changeDPStyle" :bordered="false" style="width: 100%"/></div>
                    </div>
                </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="24">
                <a-col :span="24">
                <a-form-item>
                    <div class="rangeDPBorder" :class="{'rangeDPBorder-active': isTRPFocus}">
                        <div class="rangeDPTitle" :class="{'rangeDPTitle-active': isTRPFocus}">{{ $t('timeRange') }}</div>
                        <div>
                            <a-time-range-picker v-model:value="timeSpanFormModel.timeSpanDesc.timeRange" @openChange="changeTRPStyle" :bordered="false" style="width: 100%" />
                        </div>
                    </div>
                </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="24">
                <a-col :span="24">
                    <a-form-item>
                            <div class="rangeDPBorder" :class="{'rangeDPBorder-active': isMonthFocus}">
                                <div class="rangeDPTitle" :class="{'rangeDPTitle-active': isMonthFocus}">{{ $t('monthCond') }}</div>
                                <div>
                                    <a-select v-model:value="timeSpanFormModel.timeSpanDesc.monthCond" mode="multiple" style="width: 100%" @focus="monthFocus" @blur="monthBlur">
                                        <template #dropdownRender>
                                            <div class="ymdSelector" @mousedown="e => e.preventDefault()">
                                                <div class="ymdSelectorBatch">
                                                    <a-checkbox v-model:checked="monthCheckAll" :indeterminate="monthPartial" @change="onMonthCheckAllChange" />{{ $t('allPick') }}
                                                </div>
                                                <a-checkbox-group v-model:value="monthValue" style="width: 100%">
                                                    <a-row justify="space-around" class="rowStyle">
                                                        <a-col :span="6">
                                                            <a-checkbox :value="1"  /><span class="marL10">{{t("month1")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            <a-checkbox :value="2"  /><span class="marL10">{{t("month2")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            <a-checkbox :value="3"  /><span class="marL10">{{t("month3")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            <a-checkbox :value="4"  /><span class="marL10">{{t("month4")}}</span>
                                                        </a-col>
                                                    </a-row>
                                                    <a-row justify="space-around" class="rowStyle">
                                                        <a-col :span="6">
                                                            <a-checkbox :value="5"  /><span class="marL10">{{t("month5")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            <a-checkbox :value="6"  /><span class="marL10">{{t("month6")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            <a-checkbox :value="7"  /><span class="marL10">{{t("month7")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            <a-checkbox :value="8"  /><span class="marL10">{{t("month8")}}</span>
                                                        </a-col>
                                                    </a-row>
                                                    <a-row justify="space-around" class="rowStyle">
                                                        <a-col :span="6">
                                                            <a-checkbox :value="9"  /><span class="marL10">{{t("month9")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            <a-checkbox :value="10"  /><span class="marL10">{{t("month10")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            <a-checkbox :value="11"  /><span class="marL10">{{t("month11")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            <a-checkbox :value="12"  /><span class="marL10">{{t("month12")}}</span>
                                                        </a-col>
                                                    </a-row>
                                                </a-checkbox-group>
                                                <div>{{JSON.stringify(monthValue)}}</div>
                                            </div>
                                        </template>
                                        <template #tagRender="{ value: val, closable, onClose }" >
                                            <a-tag :closable="closable" style="margin-right: 3px" @close="onCloseMonthTag(val, onClose)" v-if="isMonthTagVisible(val)">
                                                {{ updateMonthTag(val) }}
                                            </a-tag>
                                        </template>
                                    </a-select>
                                </div>
                            </div>
                        </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="24">
                <a-col :span="24">
                    <a-form-item>
                        <div class="rangeDPBorder" :class="{'rangeDPBorder-active': isWeekFocus}">
                                <div class="rangeDPTitle" :class="{'rangeDPTitle-active': isWeekFocus}">{{ $t('weekCond') }}</div>
                                <div>
                                    <a-select v-model:value="timeSpanFormModel.timeSpanDesc.weekCond" mode="multiple" style="width: 100%" @focus="weekFocus" @blur="weekBlur">
                                        <template #dropdownRender>
                                            <div class="ymdSelector" @mousedown="e => e.preventDefault()">
                                                <div class="ymdSelectorBatch">
                                                    <a-checkbox v-model:checked="weekCheckAll" :indeterminate="weekPartial" @change="onWeekCheckAllChange" />{{ $t('allPick') }}
                                                </div>
                                                <a-checkbox-group v-model:value="weekValue" style="width: 100%">
                                                    <a-row justify="space-around" class="rowStyle">
                                                        <a-col :span="6">
                                                            <a-checkbox :value="1" /><span class="marL10">{{t("week1")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            <a-checkbox :value="2" /><span class="marL10">{{t("week2")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            <a-checkbox :value="3" /><span class="marL10">{{t("week3")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            <a-checkbox :value="4" /><span class="marL10">{{t("week4")}}</span>
                                                        </a-col>
                                                    </a-row>
                                                    <a-row justify="space-around" class="rowStyle">
                                                        <a-col :span="6">
                                                            <a-checkbox :value="5" /><span class="marL10">{{t("week5")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            <a-checkbox :value="6" /><span class="marL10">{{t("week6")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            <a-checkbox :value="7" /><span class="marL10">{{t("week7")}}</span>
                                                        </a-col>
                                                        <a-col :span="6">
                                                            
                                                        </a-col>
                                                    </a-row>
                                                </a-checkbox-group>
                                            </div>
                                        </template>
                                        <template #tagRender="{ value: val, closable, onClose }" >
                                            <a-tag :closable="closable" style="margin-right: 3px" @close="onClose">
                                                {{ t('week' + val) }}
                                            </a-tag>
                                        </template>
                                    </a-select>
                                </div>
                            </div>
                    </a-form-item>
                </a-col>
            </a-row>
            <a-row :gutter="24">
                <a-col :span="24">
                    <a-form-item>
                        <div class="rangeDPBorder" :class="{'rangeDPBorder-active': isDayFocus}">
                                <div class="rangeDPTitle" :class="{'rangeDPTitle-active': isDayFocus}">{{ $t('dayCond') }}</div>
                                <div>
                                    <a-select v-model:value="timeSpanFormModel.timeSpanDesc.dayCond" mode="multiple" style="width: 100%" @focus="dayFocus" @blur="dayBlur">
                                        <template #dropdownRender>
                                            <div class="ymdSelector" @mousedown="e => e.preventDefault()">
                                                <div class="ymdSelectorBatch">
                                                    <span style="float: left">{{ $t('first') }}</span>
                                                    <a-checkbox v-model:checked="dayStartCheckAll" :indeterminate="dayStartPartial" @change="onDayStartCheckAllChange" />{{ $t('allPick') }}
                                                </div>
                                                <a-checkbox-group v-model:value="dayStartValue" style="width: 100%">
                                                    <a-row justify="space-around" v-for="row in [0, 1, 2, 3, 4, 5]" :key="'day' + row" class="marTB8">
                                                        <a-col :span="4" v-for="column in [1, 2, 3, 4, 5, 6]" :key="'column' + column">
                                                            <a-checkbox :value="row * 6 + column" v-if="Number(row * 6 + column) <= 31" /><span class="marL10" v-if="Number(row * 6 + column) <= 31">{{t("day" + Number(row * 6 + column))}}</span>
                                                        </a-col>
                                                    </a-row>
                                                </a-checkbox-group>
                                                <div class="ymdSelectorBatch">
                                                    <span style="float: left">{{ $t('last') }}</span>
                                                    <a-checkbox v-model:checked="dayEndCheckAll" :indeterminate="dayEndPartial" @change="onDayEndCheckAllChange" />{{ $t('allPick') }}
                                                </div>
                                                <a-checkbox-group v-model:value="dayEndValue" style="width: 100%">
                                                    <a-row justify="space-around" v-for="row in [0, 1, 2, 3, 4, 5]" :key="'dayx' + row" class="marTB8">
                                                        <a-col :span="4" v-for="column in [1, 2, 3, 4, 5, 6]" :key="'columnx' + column">
                                                            <a-checkbox :value="(row * 6 + column + 32)"  v-if="Number(row * 6 + column) <= 31" /><span class="marL10" v-if="Number(row * 6 + column) <= 31">{{t("day" + Number(row * 6 + column))}}</span>
                                                        </a-col>
                                                    </a-row>
                                                </a-checkbox-group>
                                            </div>
                                        </template>
                                        <template #tagRender="{ value: val, closable, onClose }" >
                                            <a-tag :closable="closable" style="margin-right: 3px" @close="onCloseDayTag(val, onClose)" v-if="isDayTagVisible(val)">
                                                {{ updateDayTag(val) }}
                                            </a-tag>
                                        </template>
                                    </a-select>
                                </div>
                            </div>
                    </a-form-item>
                </a-col>
            </a-row>
        </a-form>
      </Modal>
    </div>
  
    
  </template>
  <script lang="ts" setup>
    import {columns} from './column';
    import { useTimeSpanStore } from '/@/store/modules/timeSapn';
    import type { FormInstance } from 'ant-design-vue';
    import type { Rule } from 'ant-design-vue/es/form';
    import { splitSeriesSubArray } from '/@/utils/util';

    import { useI18n } from 'vue-i18n';
    import dayjs from 'dayjs';
    const { t } = useI18n();
    const modalState = reactive({
        loading: false,     
        visible: false,     
        title: t('addTimeSpan'),     
        okText: t('add'),
        cancelText: t('cancel')
    });
    const timeSpanRef = ref<FormInstance>();
    // form
    const timeSpanFormModel = ref({
      id: 0,
      timeSpanName: '',
      timeSpanDesc: {
        dateRange: undefined,
        timeRange: undefined,
        monthCond: [] as any[],
        weekCond: [] as any[],
        dayCond: [] as any[]
      }
    });

    const monthValue = ref<any[]>([]);
    const monthCheckAll = ref(false);
    const monthPartial = ref(false);

    const weekValue = ref<any[]>([]);
    const weekCheckAll = ref(false);
    const weekPartial = ref(false);

    const dayStartValue = ref<any[]>([]);
    const dayEndValue = ref<any[]>([]);
    const dayStartCheckAll = ref(false);
    const dayEndCheckAll = ref(false);
    const dayStartPartial = ref(false);
    const dayEndPartial = ref(false);


    const rules: Record<string, Rule[]> = {
      regionName: [{ required: true, trigger: 'blur' }],
      regionCode: [
        {
          required: true,
          trigger: 'change',
          validator: (_, val) => (val ? Promise.resolve() : Promise.reject('请输入区域编码')),
        },
      ],
    };
    

    const timeSpanStore = useTimeSpanStore();
    const dataSource = ref<any[]>([]);
    let timeSpanList = computed(() => timeSpanStore.timeSpanList);
    let isDRPFocus = ref(false);
    let isTRPFocus = ref(false);
    let isMonthFocus = ref(false);
    let isWeekFocus = ref(false);
    let isDayFocus = ref(false);
    let monthTags = computed(() => {
        console.log('monthTags:', monthValue.value);
        if (monthValue.value.length) {
            monthValue.value.sort((a, b) => a - b);
            let splitArr = splitSeriesSubArray(monthValue.value);
            console.log(splitArr);
            return splitArr;
        } else {
            return []
        }
    })

    const updateMonthTag = (val) => {
        let index = monthTags.value.findIndex(x => x[0] === val);
        if (index > -1) {
            let currentVal =  monthTags.value[index];
            if (currentVal.length > 1 ) {
                return `${t('month' + currentVal[0])}-${t('month' + currentVal[currentVal.length - 1])}`
            } else {
                return `${t('month' + currentVal[0])}`
            }
        }
        return '';
    }
    const isMonthTagVisible = (val) => {
        let isVisible = monthTags.value.findIndex(x => x[0] === val) > -1;
        return isVisible;
    }

    let dayTags = computed(() => {
        console.log('dayTags trigger');
        let cloneList: number[] = [];
        if (dayStartValue.value.length) {
            cloneList = dayStartValue.value;
        }
        if(dayEndValue.value.length) {
            cloneList = cloneList.concat(dayEndValue.value);
        }
        if (cloneList.length) {
            cloneList.sort((a,b) => a-b);
            let splitArr = splitSeriesSubArray(cloneList);
            console.log('dayTags:', splitArr)
            return splitArr;
        } else {
            return [];
        }
    })

    let updateDayTag = (val) => {
        let index = dayTags.value.findIndex(x => x[0] === val);
        if (index > -1) {
            let currentVal =  dayTags.value[index];
            if (currentVal.length > 1 ) {
                if (currentVal[0] < 32) {
                    return `${t('first')} ${t('day' + currentVal[0])}-${t('day' + currentVal[currentVal.length - 1])}`
                } else {
                    return `${t('last')} ${t('day' + (currentVal[0] - 32))}-${t('day' + (currentVal[currentVal.length - 1] - 32))}`
                }
            } else {
                if (currentVal[0] < 32) {
                    return `${t('first')} ${t('day' + currentVal[0])}`
                 } else {
                    return `${t('last')} ${t('day' + (currentVal[0] - 32))}`
                 }
                
            }
        }
        return '';
    }

    const isDayTagVisible = (val) => {
        let isVisible = dayTags.value.findIndex(x => x[0] === val) > -1;
        return isVisible;
    }

    watch(timeSpanList, (val) => {
        dataSource.value = val;
    }, {
        immediate: true
    })

    const addNewTimeSpan = () => {
        modalState.title = t("addTimeSpan");
        modalState.okText = t("add");
        modalState.cancelText = t('cancel');
        modalState.visible = true;
    }

    const handleCancel = () => {
        modalState.visible = false;
        timeSpanRef.value?.resetFields();
    }

    const changeDPStyle = (status) => {
        if (status) {
            isDRPFocus.value = true;
        } else {
            isDRPFocus.value = false;
        }
    }

    const changeTRPStyle = (status) => {
        if (status) {
            isTRPFocus.value = true;
        } else {
            isTRPFocus.value = false;
        }
    }

    const onMonthCheckAllChange = (e) => {
        if (e.target.checked) {
            monthValue.value = [1,2,3,4,5,6,7,8,9,10,11,12];
        } else {
            monthValue.value = [];
        }
    }

    const onWeekCheckAllChange = (e) => {
        if (e.target.checked) {
            weekValue.value = [1,2,3,4,5,6,7];
        } else {
            weekValue.value = [];
        }
    }

    const onDayStartCheckAllChange = (e) => {
        if (e.target.checked) {
            dayStartValue.value = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
        } else {
            dayStartValue.value = [];
        }
    }

    const onDayEndCheckAllChange = (e) => {
        if (e.target.checked) {
            dayEndValue.value = [33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63];
        } else {
            dayEndValue.value = [];
        } 
    }

    const monthFocus = () => {
        isMonthFocus.value = true;
    }

    const monthBlur = () => {
        isMonthFocus.value = false;
    }

    const weekFocus = () => {
        isWeekFocus.value = true;
    }

    const weekBlur = () => {
        isWeekFocus.value = false;
    }

    const dayFocus = () => {
        isDayFocus.value = true;
    }

    const dayBlur = () => {
        isDayFocus.value = false;
    }

    watch(monthValue, (val: any) => {
        if (Array.isArray(val)) {
            timeSpanFormModel.value.timeSpanDesc.monthCond = val;
            if (val.length === 0) {
                monthCheckAll.value = false;
                monthPartial.value = false;
            } else if (val.length > 0 && val.length < 12) {
                monthCheckAll.value = false;
                monthPartial.value = true;
            } else if (val.length === 12) {
                monthCheckAll.value = true;
                monthPartial.value = false;
            }
        } else {
            monthCheckAll.value = false;
            monthPartial.value = false;
        }
    })

    watch(weekValue, (val: any) => {
        if (Array.isArray(val)) {
            timeSpanFormModel.value.timeSpanDesc.weekCond = val;
            if (val.length === 0) {
                weekCheckAll.value = false;
                weekPartial.value = false;
            } else if (val.length > 0 && val.length < 7) {
                weekCheckAll.value = false;
                weekPartial.value = true;
            } else if (val.length === 7) {
                weekCheckAll.value = true;
                weekPartial.value = false;
            }
        }
    })

    watch(dayStartValue, (val: any) => {
        if (Array.isArray(val)) {
            timeSpanFormModel.value.timeSpanDesc.dayCond = val.concat(timeSpanFormModel.value.timeSpanDesc.dayCond.filter(x => x > 32));
            if (val.length === 0) {
                dayStartCheckAll.value = false;
                dayStartPartial.value = false;
            } else if (val.length > 0 && val.length < 31) {
                dayStartCheckAll.value = false;
                dayStartPartial.value = true;
            } else if (val.length === 31) {
                dayStartCheckAll.value = true;
                dayStartPartial.value = false;
            }
        }
    })

    watch(dayEndValue, (val: any) => {
        console.log('watch dayEndValue:', val);
        if (Array.isArray(val)) {
            timeSpanFormModel.value.timeSpanDesc.dayCond = timeSpanFormModel.value.timeSpanDesc.dayCond.filter(x => x < 32).concat(val)
            if (val.length === 0) {
                dayEndCheckAll.value = false;
                dayEndPartial.value = false;
            } else if (val.length > 0 && val.length < 31) {
                dayEndCheckAll.value = false;
                dayEndPartial.value = true;
            } else if (val.length === 31) {
                dayEndCheckAll.value = true;
                dayEndPartial.value = false;
            }
        }
    })

    const handleSubmit = () => {
        console.log("form Data:", timeSpanFormModel.value, JSON.stringify(timeSpanFormModel.value.timeSpanDesc));
    }

    const initData = () => {
        if (!(Array.isArray(timeSpanList.value) && timeSpanList.value.length)) {
            timeSpanStore.getTimeSpanList();
        } else {
        console.log('cached menulist:',timeSpanList.value)
      }
    }

    const onCloseMonthTag = (val, func) => {
        console.log('当前值:', val, JSON.stringify(monthTags.value));
        let tobeRemoved = monthTags.value.find((x: number[]) => x.includes(val));
        tobeRemoved.forEach(item => {
            let currentIndex = monthValue.value.findIndex(x => x === item);
            if (currentIndex > -1) {
                monthValue.value.splice(currentIndex, 1);
            }
        })
        func();
    }

    const onCloseDayTag = (val, func) => {
        let tobeRemoved = dayTags.value.find((x: number[]) => x.includes(val));
        tobeRemoved.forEach(item => {
            if (item < 32) {
                let currentIndex = dayStartValue.value.findIndex(x => x === item);
                if (currentIndex > -1) {
                    dayStartValue.value.splice(currentIndex, 1);
                }
            } else {
                let currentIndex = dayEndValue.value.findIndex(x => x === item);
                if (currentIndex > -1) {
                    dayEndValue.value.splice(currentIndex, 1);
                }
            }
        })
        func();
    }

    const parseTimeSpan = (desc) => {
        let dateRangeStr = '';
        let timeRangeStr = '';
        let monthStr = '';
        let weekStr = '';
        let dayStr = '';
        if (!desc) {
            return {
                dateRange: '--',
                timeRange: '--',
                month: '--',
                week: '--',
                day: '--'
            }; 
        }
        try {
            let obj = JSON.parse(desc);
            if (obj) {
                let { dateRange, timeRange, monthCond, weekCond, dayCond } = JSON.parse(desc);
                if (dateRange) {
                    if (Array.isArray(dateRange) && dateRange.length === 2) {
                        dateRangeStr = dateRange.map(item => dayjs(item).format('YYYY-MM-DD')).join(t('to'));
                    } else {
                        dateRangeStr = '--';
                    }
                } else {
                    dateRangeStr = '--'
                }
                if (timeRange) {
                    if (Array.isArray(timeRange)) {
                        timeRangeStr = timeRange.map(item => dayjs(item).format('HH:mm:ss')).join(t('to'));
                    } else {
                        timeRangeStr = '--';
                    }
                }
                if (monthCond) {
                    monthCond.sort((a, b) => a-b);
                    let splitArr = splitSeriesSubArray(monthCond);
                    splitArr.forEach(currentVal => {
                        if (currentVal.length > 1) {
                            monthStr += `${t('month' + currentVal[0])}-${t('month' + currentVal[currentVal.length - 1])},`
                        } else {
                            monthStr += `${t('month' + currentVal[0])},` 
                        }
                    })
                    if (monthStr.length > 0) {
                        monthStr = monthStr.substring(0, monthStr.length -1);
                    }
                }

                if (weekCond) {
                    weekCond.sort((a, b) => a - b);
                    weekCond.forEach(item => {
                        weekStr += `${t('week' + item)},`
                    })
                    if (weekStr.length > 0) {
                        weekStr = weekStr.substring(0, weekStr.length -1);
                    }
                }
                if (dayCond) {
                    dayCond.sort((a, b) => a - b);
                    let splitArr = splitSeriesSubArray(dayCond);
                    splitArr.forEach(currentVal => {
                        if (currentVal.length > 1 ) {
                            if (currentVal[0] < 32) {
                                dayStr += `${t('first')} ${t('day' + currentVal[0])}-${t('day' + currentVal[currentVal.length - 1])},`
                            } else {
                                dayStr += `${t('last')} ${t('day' + (currentVal[0] - 32))}-${t('day' + (currentVal[currentVal.length - 1] - 32))},`
                            }
                        } else {
                            if (currentVal[0] < 32) {
                                dayStr += `${t('first')} ${t('day' + currentVal[0])},`
                            } else {
                                dayStr += `${t('last')} ${t('day' + (currentVal[0] - 32))},`
                            }
                        }
                    })
                    if (dayStr.length > 0) {
                        dayStr = dayStr.substring(0, dayStr.length - 1);
                    }
                }
            }
        } catch {
            return {
                dateRange: '--',
                timeRange: '--',
                month: '--',
                week: '--',
                day: '--'
            }; 
        }
        return {
                dateRange: dateRangeStr,
                timeRange: timeRangeStr,
                month: monthStr,
                week: weekStr,
                day: dayStr
            }; 
    }

    onMounted(() => {
      initData()
    })
  </script>
  <style scoped lang="less">
  .editable-row-operations a {
    margin-right: 8px;
  }
  .alertLevelButton {
    margin-bottom: 24px;
  }

  :deep(.ant-picker) {
        padding-top: 15px;
    }
    :deep(.ant-select) {
        padding-top: 13px;
    }
    :deep(.ant-select:not(.ant-select-customize-input) .ant-select-selector) {
        background-color: transparent;
        border: none;
    }
    :deep(.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector) {
        border-color: transparent;
        box-shadow:none;
        border-right-width:unset;
    }
    .rangeDPBorder {
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        transition: border 0.3s box-shadow 0.3s;
        padding-bottom: 3px;
    }
    .rangeDPBorder-active {
        border-color: #638aff;
        box-shadow: 0 0 0 2px rgba(56, 96, 244, 0.2);
        outline: 0;
    }
    .rangeDPTitle {
        font-size: 12px;
        color: rgb(140,140,140);
        margin: 2px 0 -20px 10px;
    }
    .rangeDPTitle-active {
        color: rgb(94,159,244);
    }
    .ymdSelector {
        padding: 10px 20px;
    }
    .ymdSelectorBatch {
        text-align: right;
        margin-bottom: 10px;
        color: rgba(0, 0, 0, 0.85);
    }
    .rowStyle {
        margin: 15px 0;
    }
  </style>