<template>
    <div class="agentSetting">
        <sidebar
            class="agentSetting__sidebar"
            ref="sidebar"
        />
        <div class="agentSetting__content" v-if="isReadMode">
            <div class="agentSetting__content__top">
                <div class="basicinfo layoutBorder marR12">
                    <div class="padding16">
                        <span class="titleBar">{{ $t('basicInfo') }}</span>
                    </div>
                    <a-row>
                        <a-col :span="12">
                            <a-row>
                                <a-col :span="8" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('name')">
                                    {{ $t('name') }}:
                                </a-col>
                                <a-col :span="16" class="agentColor exceedShow" :title="deviceModel.deviceName">
                                    {{ deviceModel.deviceName || '--' }}
                                </a-col>
                            </a-row>
                        </a-col>
                        <a-col :span="12">
                            <a-row>
                                <a-col :span="8" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('subSystem')">
                                    {{ $t('subSystem') }}:
                                </a-col>
                                <a-col :span="16" class="agentColor exceedShow" :title="deviceModel.deviceType  ? t('subSystem' + deviceModel.deviceType) : ''">
                                    {{ t('subSystem' + deviceModel.deviceType) || '--' }}
                                </a-col>
                            </a-row>
                        </a-col>
                    </a-row>
                    <a-row class="marTB8">
                        <a-col :span="12">
                            <a-row>
                                <a-col :span="8" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('deviceModel')">
                                    {{ $t('deviceModel') }}:
                                </a-col>
                                <a-col :span="16" class="agentColor exceedShow" :title="deviceModel.model">
                                    {{ deviceModel.model || '--' }}
                                </a-col>
                            </a-row>
                        </a-col>
                        <a-col :span="12">
                            <a-row>
                                <a-col :span="8" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('deviceBrand')">
                                    {{ $t('deviceBrand') }}:
                                </a-col>
                                <a-col :span="16" class="agentColor exceedShow" :title="deviceModel.brand">
                                    {{ deviceModel.brand || '--' }}
                                </a-col>
                            </a-row>
                        </a-col>
                    </a-row>
                    <a-row class="marTB8">
                        <a-col :span="4" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('plugin')">
                            {{ $t('plugin') }}:
                        </a-col>
                        <a-col :span="16" class="agentColor" :title="deviceModel.plugin">
                            <div class="line__2">{{ deviceModel.plugin || '--' }}</div>
                        </a-col>
                    </a-row>
                </div>
                <div class="alertSetting layoutBorder marL12">
                    <div class="padding16 relative">
                        <span class="titleBar">{{ $t('alertInfo') }}</span>
                        <span class="alertSettingFlag" v-if="deviceModel.isAlert">
                            <img src="../../assets/agent_alertOK.png" class="alertSettingFlagImg"/>
                            {{ $t('isAlertOn') }}
                        </span>
                    </div>
                    <a-row>
                        <a-col :span="5" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('alertLevel')">
                            {{ $t('alertLevel') }}:
                        </a-col>
                        <a-col :span="16" class="agentColor exceedShow" :title="deviceModel.alertLevel">
                            {{ deviceModel.alertLevel ? t('alertLevel' + deviceModel.alertLevel) : '--' }}
                        </a-col>
                    </a-row>
                    <a-row class="marTB8">
                        <a-col :span="5" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('hysType')">
                            {{ $t('hysType') }}:
                        </a-col>
                        <a-col :span="16" class="agentColor exceedShow" :title="deviceModel.hysType">
                            {{ deviceModel.hysType ? t('hysType' + deviceModel.hysType) : '--' }}
                        </a-col>
                    </a-row>
                    <a-row class="marTB8">
                        <a-col :span="5" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('hysTime')">
                            {{ $t('hysTime') }}:
                        </a-col>
                        <a-col :span="16" class="agentColor" :title="deviceModel.hysTime">
                            {{ deviceModel.hysTime || '--' }}
                        </a-col>
                    </a-row>
                </div>
            </div>
            <div class="agentSetting__content__attr layoutBorder">
                <div class="padding16">
                    <span class="titleBar">{{ `${$t('selfAttrs')} (${selfAttrs.length})` }}</span>
                </div>
                <div class="attrContent">
                    <a-row v-for="row in (selfAttrs.length % 5 ? Math.floor(selfAttrs.length / 5) + 1 : Math.floor(selfAttrs.length / 5))" justify="space-around" class="attrRow">
                        <a-col :span="4" v-for="col in 5">
                            <div class="layoutBorder" v-if="(row -1) * 5 + (col - 1) < selfAttrs.length">
                                <div class="attrBox">
                                    <img src="../../assets/device_Attr.png" class="attrImg">
                                    <span class="attrName">{{ selfAttrs[(row -1) * 5 + col - 1].name }}</span>
                                    <span class="attrType">{{ $t('valueType' + selfAttrs[(row -1) * 5 + col - 1].valType) }}</span>
                                </div>
                                <div class="attrKey">
                                    <span class="keyTitle">{{ $t('keyTitle') }}</span>
                                    <span class="keyVal">{{ selfAttrs[(row -1) * 5 + col - 1].key }}</span>
                                </div>
                            </div>
                            <div v-else>
                            </div>
                        </a-col>
                    </a-row>
                </div>
            </div>
            <div class="agentSetting__content__middle layoutBorder">
                <div class="padding16">
                    <span class="titleBar">{{ `${$t('indexList')} (${deviceModel.indexs.length})` }}</span>
                </div>
                <a-table :columns="columns_readonly" :data-source="deviceModel.indexs" size="small" :scroll="{ y: 500 }" :pagination="false" class="paddingLR16 tbIndexCls2">
                    <template #headerCell="{ column }">
                        {{$t(column.key)}} 
                    </template>
                    <template #bodyCell="{ column, text, record }">
                        <template v-if="column.dataIndex === 'valueType'">
                            {{ t('valueType' + text) }}
                        </template>
                        <template v-if="column.dataIndex === 'isControlable'">
                            <span class="controlable"><div class="dot" :class="text === true ? 'dotGreen' : 'dotGray'"></div>{{ text ? $t('controlable') : $t('unControlable') }}</span>
                        </template>
                        <template v-if="column.dataIndex === 'isEmitter'">
                            {{ text ? $t('yes') : '--' }}
                        </template>
                        <template v-if="column.dataIndex === 'isAlert'">
                            <span class="alertCls" :class="text ? 'alertOn' : 'alertOff'"><img v-if="text" src="../../assets/device_isAlertON.png" /><img v-else src="../../assets/device_isAlertOff.png" />{{ text ? $t('isAlertOn'): $t('isAlertOff') }}</span>
                        </template>
                        <template v-if="column.dataIndex === 'hysType'">
                            {{ $t('hysType' + text) }}
                        </template>
                        <template v-if="column.dataIndex === 'hysTime'">
                            {{ text ? text + $t('timeUnit') : '--' }}
                        </template>
                        <template v-if="column.dataIndex === 'valMapping'">
                            <template v-if="text">
                                <a-tooltip overlayClassName="selfToolTip">
                                    <template #title>
                                        <div class="indexTips">
                                            <div class="indexTipsTitle">{{ `${record.indexName}${$t('valMapping')}` }}</div>
                                            <div class="seperator"></div>
                                            <ul class="ulContent">
                                                <li v-for="item in Object.entries(JSON.parse(text))"> <span class="mappingKey">{{ item[0] }}</span><span class="mappingValue">{{ item[1] }}</span></li>
                                            </ul>
                                        </div>
                                    </template>
                                    {{ formatValueMapping(text) }}
                                </a-tooltip>
                            </template>
                            <template v-else>
                                {{ '--' }}
                            </template>
                        </template>
                        <template v-if="column.dataIndex === 'rules'">
                            <template v-if="text && text.length">
                                <a-tooltip overlayClassName="selfToolTip">
                                    <template #title>
                                        <div class="indexTips">
                                            <div class="indexTipsTitle">{{ `${record.indexName}${$t('alertCond')}` }}</div>
                                            <div class="seperator"></div>
                                            <ul class="ulContent">
                                                <li v-for="item in text"> <span class="mappingKey">{{ $t('alertLevel' + item.alertLevel) }}</span><span class="mappingValue">{{ `${record.indexName}${parseCond(item)}` }}</span></li>
                                            </ul>
                                        </div>
                                    </template>
                                    {{ formatRules(text) }}
                                </a-tooltip>
                            </template>
                            <template v-else>
                                {{ '--' }}
                            </template>
                        </template>
                    </template>
                </a-table>
            </div>
            <div class="agentSetting__content__bottom">
                <a-button type="primary" @click="editAgent">{{ $t('edit') }}</a-button>
            </div>
        </div>
        <div class="agentSetting__content" v-else>
            <a-form :model="deviceModel" :label-col="labelCol" :wrapper-col="wrapperCol">
                <div class="agentSetting__content__top1">
                    <div class="basicinfo layoutBorder marR12">
                        <div class="padding16">
                            <span class="titleBar">{{ $t('basicInfo') }}</span>
                        </div>
                        <a-row justify="center">
                            <a-col :span="22">
                                <a-row justify="center">
                                    <a-col :span="12">
                                        <a-form-item :label="$t('name')" name="deviceName">
                                            <a-input v-model:value="deviceModel.deviceName"></a-input>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="12">
                                        <a-form-item :label="$t('subSystem')" name="deviceType">
                                            <a-select style="width: 100%" v-model:value="deviceModel.deviceType">
                                                <a-select-option v-for="item in enums.subSystem" :value="item">{{ $t('subSystem' + item) }}</a-select-option>
                                            </a-select>
                                        </a-form-item>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                        <a-row justify="center">
                            <a-col :span="22">
                                <a-row justify="center">
                                    <a-col :span="12">
                                        <a-form-item :label="$t('deviceModel')" name="model">
                                            <a-input v-model:value="deviceModel.model"></a-input>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="12">
                                        <a-form-item :label="$t('deviceBrand')" name="brand">
                                            <a-input v-model:value="deviceModel.brand"></a-input>
                                        </a-form-item>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                        <a-row justify="center">
                            <a-col :span="22">
                                <a-row justify="center">
                                    <a-col :span="12">
                                        <a-form-item :label="$t('plugin')" name="plugin">
                                            <a-select style="width: 100%" v-model:value="deviceModel.plugin" :placeholder="$t('plsSelect')">
                                                <a-select-option :value="1">测试数据</a-select-option>
                                            </a-select>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="12">
                                    </a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                    </div>
                    <div class="alertSetting layoutBorder marL12">
                        <div class="padding16 relative">
                            <span class="titleBar">{{ $t('alertInfo') }}</span>
                            <span class="alertSettingFlag" v-if="deviceModel.isAlert">
                                <img src="../../assets/agent_alertOK.png" class="alertSettingFlagImg"/>
                                {{ $t('isAlertOn') }}
                            </span>
                            <a-button type="primary" class="customBtn" @click="toggleAlert">{{ deviceModel.isAlert ? $t('closeAlert') : $t('openAlert') }}</a-button>
                        </div>
                        <a-row justify="center">
                            <a-col :span="22">
                                <a-row justify="center">
                                    <a-col :span="12">
                                        <a-form-item :label="$t('alertLevel')" name="alertLevel">
                                            <a-select style="width: 100%" v-model:value="deviceModel.alertLevel" :disabled="!deviceModel.isAlert">
                                                <a-select-option v-for="item in enums.AlertLevel" :value="item">{{ $t('alertLevel' + item) }}</a-select-option>
                                            </a-select>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="12"></a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                        <a-row justify="center">
                            <a-col :span="22">
                                <a-row justify="center">
                                    <a-col :span="12">
                                        <a-form-item :label="$t('hysType')" name="hysType">
                                            <a-select style="width: 100%" v-model:value="deviceModel.hysType" :disabled="!deviceModel.isAlert">
                                                <a-select-option v-for="item in enums.HysType" :value="item">{{ $t('hysType' + item) }}</a-select-option>
                                            </a-select>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="12">
                                        <a-form-item :label="$t('hysTime')" name="hysTime">
                                            <a-input v-model:value="deviceModel.hysTime" :addon-after="$t('timeUnit')" :disabled="!deviceModel.isAlert"></a-input>
                                        </a-form-item>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                    </div>
                </div>
                <div class="agentSetting__content__attr1 layoutBorder">
                    <div class="padding16">
                        <span class="titleBar">{{ `${$t('selfAttrs')} (${JSON.stringify(selfAttrs)})` }}</span>
                    </div>
                    <div class="attrContent">
                        <a-row v-for="row in (selfAttrs.length % 5 ? Math.floor(selfAttrs.length / 5) + 1 : Math.floor(selfAttrs.length / 5))" justify="space-around" class="attrRow">
                            <a-col :span="4" v-for="col in 5">
                                <div class="layoutBorder addAttr" v-if="row === 1 && col === 1">
                                    <div class="addImg"></div>
                                    <span class="addAttrTips">{{ $t('addAttrTips') }}</span>
                                </div>
                                <div class="layoutBorder" v-else-if="(row -1) * 5 + (col - 1) < selfAttrs.length">
                                    <div class="attrBox">
                                        <img src="../../assets/device_Attr.png" class="attrImg">
                                        <span class="attrName">{{ selfAttrs[(row -1) * 5 + col - 1].name }}</span>
                                        <span class="attrType">{{ $t('valueType' + selfAttrs[(row -1) * 5 + col - 1].valType) }}</span>
                                    </div>
                                    <div class="attrKey">
                                        <span class="keyTitle">{{ $t('keyTitle') }}</span>
                                        <span class="keyVal">{{ selfAttrs[(row -1) * 5 + col - 1].key }}</span>
                                    </div>
                                </div>
                                <div v-else>
                                </div>
                            </a-col>
                        </a-row>
                    </div>
                </div>
                <div class="agentSetting__content__middle1 layoutBorder">
                    <div class="padding16">
                        <span class="titleBar">{{ `${$t('indexList')} (${deviceModel.indexs.length})` }}</span>
                    </div>
                    <a-button type="primary" class="addPortBtn" @click="addPort">
                            <template #icon>
                                <PlusOutlined />
                            </template>
                            {{ $t('addPort') }}
                    </a-button>
                    <!-- <a-table :columns="columns" :data-source="deviceModel.ports" size="small" :scroll="{ y: 420 }" :pagination="false" class="paddingLR16 tbPortCls1">
                        <template #headerCell="{ column }">
                            {{$t(column.key)}} 
                        </template>
                        <template #bodyCell="{ column, text, record }">
                            <template v-if="column.dataIndex === 'portName' || column.dataIndex === 'portNo'">
                                {{ text }}
                            </template>
                            <template v-if="column.dataIndex === 'portType'">
                                {{ t('portType' + text) }}
                            </template>
                            <template v-if="column.dataIndex === 'portDesc'">
                                {{ text ? text : '--' }}
                            </template>
                            <template v-if="column.dataIndex === 'operation'">
                                <a @click="editPort(record.id)" class="marR10 editColor">{{ $t('edit') }}</a>
                                <a @click="deletePort(record.id)" class="marR10 delColor">{{ $t('delete') }}</a>
                            </template>
                        </template>
                    </a-table> -->
                </div>
                <div class="agentSetting__content__bottom">
                    <a-button type="primary" @click="saveAgent" class="marLR8">{{ $t('save') }}</a-button>
                    <a-button @click="cancelEditAgent" class="marLR8">{{ $t('cancel') }}</a-button>
                </div>
            </a-form>
        </div>
        <Modal v-bind="modalState" @cancel="handleCancel" @ok="handleSubmit" :width="572">
            <a-form
                ref="portRef"
                :model="portFormModel"
                :rules="rules"
                :label-col="{span: 6}"
                :wrapper-col="{span: 14}"
                class="font14Body"
                >
                <a-row :gutter="24">
                    <a-col :span="24">
                        <a-form-item :label="$t('portName') + ':'" name="portName">
                            <a-input v-model:value="portFormModel.portName" class="marL16" />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="24">
                    <a-col :span="24">
                        <a-form-item :label="$t('portType') + ':'" name="portType">
                            <a-select v-model:value="portFormModel.portType">
                                <a-select-option v-for="item in enums.portType" :value="item">{{ $t('portType' + item) }}</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="24">
                    <a-col :span="24">
                        <a-form-item :label="$t('portNo') + ':'" name="portNo">
                            <a-input v-model:value="portFormModel.portNo" />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="24">
                    <a-col :span="24">
                        <a-form-item :label="$t('portNum') + ':'" name="portNum">
                            <a-input v-model:value="portFormModel.portNum" />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="24">
                    <a-col :span="24">
                        <a-form-item :label="$t('portDesc') + ':'" name="portDesc">
                            <a-textarea v-model:value="portFormModel.portDesc"></a-textarea>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
        </Modal>
    </div>
</template>

<script lang="ts" setup>
    import Sidebar from "./sidebar.vue";
    import {  PlusOutlined } from '@ant-design/icons-vue';
    import { columns, columns_readonly } from './column';
    import { reactive } from 'vue';
    import { useI18n } from 'vue-i18n';
    import type { FormInstance } from 'ant-design-vue';
    import { ResDevice } from '/@/api/device/model';
    import { enums } from '/@/utils/enum';
    import type { Rule } from 'ant-design-vue/es/form';
    import { useDeviceStore } from '/@/store/modules/device';

    const deviceStore = useDeviceStore();

    const { t } = useI18n();
    

    const labelCol = { span:4, style: { minWidth: '110px' } };
    const wrapperCol = { span: 18 };
    
    let deviceModel = ref<ResDevice>({
        id: 0,
        deviceName: '',
        deviceType: 1,
        model: '',
        brand: '',
        plugin: undefined,
        isAlert: false,
        alertLevel: 0,
        hysType: 0,
        hysTime: 0,
        extAttrs: '',
        indexs: []
    });
    watch(() => deviceStore.selectedKey, val => {
        let arr = val.split('_');
        if (arr.length === 2) {
            deviceModel.value = deviceStore.deviceList.find(x => (x.id === Number(arr[1]) && x.deviceType === Number(arr[0])))
        }
    })

    let selfAttrs = computed(() => {
        let attrArr: any[] = [];
        let strAttr = deviceModel.value.extAttrs;
        if (strAttr) {
            console.log('selfAttrs:', strAttr);
            try {
                attrArr = JSON.parse(strAttr);
                if (!isReadMode.value) {
                    attrArr.unshift({})
                }
                console.log('selfAttrs2:', attrArr, attrArr.length % 5 ? Math.floor(attrArr.length / 5) + 1 : Math.floor(attrArr.length / 5));
            } catch(err) {
                console.log(err)
            }
        }
        return attrArr;
    })

    let isReadMode = ref(true); // true代表查看 false代表编辑

    const editAgent = () => {
        isReadMode.value = false;
    }

    const saveAgent = () => {
        isReadMode.value = true;
    }

    const cancelEditAgent = () => {
        isReadMode.value = true;
    }

    const toggleAlert = () => {
        deviceModel.value.isAlert = !deviceModel.value.isAlert;
    }

    const savePort = (id: number) => {
        console.log("save port:", id);
    }

    const cancelPort = (id) => {
        console.log("cancel port:", id);
    }

    const editPort = (id) => {
        console.log("edit port:", id);
        modalState.title = t("editPort");
        modalState.okText = t("save");
        modalState.cancelText = t('cancel');
        modalState.visible = true;
    }

    const deletePort = (id) => {
        console.log('delete port:', id);
    }

    // modal
    const modalState = reactive({
      loading: false,
      visible: false,
      title: t('addPort'),
      okText: t('add'),
      cancelText: t('cancel')
    });

    const handleCancel = () => {
        modalState.visible = false;
        portRef.value?.resetFields();
    }

    const handleSubmit = () => {}

    const portRef = ref<FormInstance>();

    let portNameRule = async (rule, value) => {
        if (!value) {
            return Promise.reject("请输入端口名称");
        }
    };

    const rules: Record<string, Rule[]> = {
        portName: [{ required: true, validator: portNameRule, trigger: ["change", "blur"]}],
        portNo: [{required: true}],
        portType: [{required: true, trigger: 'change', validator: (_, val) => (val ? Promise.resolve() : Promise.reject('请选择端口类型'))}],
        portNum: [{required: true}],
    };

    const portFormModel = ref({
      portName: t('Port'),
      portType: 1,
      portNo: 1,
      portNum: 1,
      portDesc: ''
    });

    const addPort = () => {
        modalState.title = t("addPort");
        modalState.okText = t("save");
        modalState.cancelText = t('cancel');
        modalState.visible = true;
    }

    const formatValueMapping = (valMapping) => {
        let res = '';
        try {
            let jsonObject = JSON.parse(valMapping);
            console.log('formatValueMapping:', jsonObject)
            res =  Object.keys(jsonObject).join(',');
        } catch(ex) {
            console.log(ex)
            res = '--'
        }
        if (!res) {
            res = '--'
        }
        return res;
    }
    const formatRules = (rules) => {
        let res = '';
        console.log('------:', rules);
        if (Array.isArray(rules) && rules.length) {
            res = `${t('rule')}x${rules.length}` 
        }
        if (!res) {
            res = '--'
        }
        return res;
    }

    const parseCond = (item) => {
        let {cond} = item;
        let res = '';
        if (Array.isArray(cond) && cond.length) {
            cond.forEach(andCond => {
                let andCondStr = '';
                if (Array.isArray(andCond) && andCond.length) {
                    andCond.forEach(cond => {
                        andCondStr += `${t('operator' + cond.operator)}${cond.value}${t('and')}`
                    })
                    if (andCondStr) {
                        let index = andCondStr.lastIndexOf(t('and'))
                        andCondStr = andCondStr.substring(0, index)
                    }
                }
                res += `(${andCondStr})${t('or')}`
            })
            if (res) {
                let index = res.lastIndexOf(t('or'))
                res = res.substring(0, index)
            }
        }
        return res;
    }

</script>

<style lang="less" scoped>
.agentSetting {
  display: flex;
  overflow: hidden;
  height: calc(100vh - 108px);
  &__sidebar {
    flex: none;
    width: 280px;
    height: 100%;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
    margin-right: 24px;
  }
  &__content {
    background: #fff;
    border-radius: 4px;
    flex: 1;
    height: 100%;
    padding: 0 24px;
    overflow-y: auto;
    &__top {
        padding: 24px 0;
        height: 228px;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        .basicinfo {
            flex: 1;
            overflow: hidden;
        }
        .alertSetting {
            flex: 1;
            overflow: hidden;
        }
    }
    &__top1 {
        padding: 24px 0;
        height: 256px;
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        .basicinfo {
            flex: 1;
            overflow: hidden;
        }
        .alertSetting {
            flex: 1;
            overflow: hidden;
        }
    }
    &__attr {
        margin-bottom: 16px;
        .attrContent {
            height: 100px;
            overflow: auto;
            .attrRow:first-child {
                margin-top: 0px;
            }
        }
        .attrRow {
            margin: 8px 0;
        }
        .attrBox {
            padding: 16px 0 0 16px;
            white-space: nowrap;
            .attrImg {
                width: 24px;
                height: 24px;
            }
            .attrName {
                color: #1D2328;
                font-size: 14px;
                vertical-align: -2px;
                margin: 0 8px;
            }
            .attrType {
                background: #F0F2F5;
                border-radius: 2px;
                padding: 2px 8px;
                vertical-align: -2px;
                color: #79818D;
                font-weight: 400;
                font-size: 12px;
            }
        }
        .attrKey {
            margin: 9px 0 16px 48px;
            white-space: nowrap;
            .keyTitle {
                font-weight: 400;
                font-size: 12px;
                color: #86909C;
                margin-right: 8px;
            }
            .keyVal {
                font-weight: 400;
                font-size: 12px;
                color: #4E5969;
            }
        }
    }
    &__attr1 {
        margin-bottom: 16px;
        .attrContent {
            height: 100px;
            overflow: auto;
            .attrRow:first-child {
                margin-top: 0px;
            }
        }
        .attrRow {
            margin: 8px 0;
        }
        .addAttr {
            height: 100%;
            display: flex;
            flex-flow: column;
            justify-items: center;
            justify-content: center;
            .addImg {
                margin-top: 21px;
                align-self: center;
                width: 18px;
                height: 18px;
                color: #D9D9D9;
            }
            .addImg::before, .addImg::after {
                content: '';
                position: absolute;
                top:30px;
                left: 50%;
            }
            .addImg::before {
                width: 18px;
                border-top: 3px solid;
                margin: -2px 0 0 -10px;
            }
            .addImg::after {
                height: 18px;
                border-left: 3px solid;
                margin: -10px 0 0 -2px;
            }
            .addAttrTips {
                padding: 9px 0 14px;
                align-self: center;
                font-weight: 400;
                font-size: 14px;
                color: #79818D;
            }
        }
        .addAttr:hover {
            border: 1px solid #1890ff;
            .addImg {
                color: #1890ff;
            }
            .addAttrTips {
                color: #1890ff;
            }
        }
        .attrBox {
            padding: 16px 0 0 16px;
            white-space: nowrap;
            .attrImg {
                width: 24px;
                height: 24px;
            }
            .attrName {
                color: #1D2328;
                font-size: 14px;
                vertical-align: -2px;
                margin: 0 8px;
            }
            .attrType {
                background: #F0F2F5;
                border-radius: 2px;
                padding: 2px 8px;
                vertical-align: -2px;
                color: #79818D;
                font-weight: 400;
                font-size: 12px;
            }
        }
        .attrKey {
            margin: 9px 0 16px 48px;
            white-space: nowrap;
            .keyTitle {
                font-weight: 400;
                font-size: 12px;
                color: #86909C;
                margin-right: 8px;
            }
            .keyVal {
                font-weight: 400;
                font-size: 12px;
                color: #4E5969;
            }
        }
    }
    &__middle {
        height: calc(100% - 485px);
    }
    &__middle1 {
        height: calc(100% - 336px);
    }
    &__bottom {
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
        height: 80px;
    }
  }

  :deep(.no-data) {
    flex: 1;
  }
}

:deep(.ant-form-item) {
    margin-bottom: 20px;
}

fieldset {
    border: 1px solid#ddd;
    padding: 12px;
    border-radius: 5px;
}
fieldset.rulePadding {
    padding: 12px 35px;
}
legend {
    margin-left: 20px;
    padding: 0 15px;
}
:deep(.ant-form legend) {
    width: auto;
    border-bottom: none;
}
:deep(.ant-alert) {
    padding: 0px 15px;
}
:deep(.ant-form) {
    height: 100%;
}
.alertSettingFlag {
    position: absolute;
    background: #E8FFEA;
    border-radius: 2px;
    margin: 4px 0 0 8px;
    padding: 0 8px;
    font-size: 12px;
}
.alertSettingFlagImg {
    vertical-align: -1px;
}
.customBtn {
    float: right;
    margin-top: -4px;
}
.addPortBtn {
    margin: 0 0 16px 16px;
    :deep(.anticon) {
        vertical-align: 0.125em !important;
    }
}
form.font14Body {
    :deep(.ant-form-item-label) {
        margin-right: 16px;
        margin-left: 16px;
    }
    :deep(.ant-form-item-with-help .ant-form-item-explain) {
        position: absolute;
        margin-top: 32px;
        font-size: 12px;
    }
}
.tbPortCls1 {
    height: calc(100% - 92px);
    overflow: hidden;
}
.tbIndexCls2 {
    height: calc(100% - 60px);
    overflow: hidden;
}
.controlable {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        margin-right: 8px;
    }
    .dotGray {
        background: #C3C8CF;
    }
    .dotGreen {
        background: #00B42A;
    }
}
.alertCls {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    img {
        width: 12px;
        height: 12px;
        margin-right: 4px;
    }
}
.alertOn {
    background: #E8FFEA;
    border-radius: 2px;
    padding: 4px 8px;
}
.alertOff {
    background: #F0F2F5;
    border-radius: 2px;
    padding: 4px 8px;
}
.indexTips {
    .indexTipsTitle {
        font-weight: 400;
        font-size: 14px;
        color: #1D2129;
    }
    .seperator {
        height: 1px;
        min-width: 275px;
        background: #E5E8EF;
        margin: 7px 0 8px;
    }
    .ulContent {
        font-weight: 400;
        font-size: 12px;
        list-style: none;
        padding: 0;
        margin: 0;
        width: max-content;
        .mappingKey {
            color: #79818D;
            margin-right: 8px;
        }
        .mappingValue {
            color: #1D2328;
        }
        li {
            margin: 8px 0;
        }
    }
}

</style>
<style lang="less">
.selfToolTip {
    background: #FFFFFF;
    border: 1px solid #E5E8EF;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    min-width: 275px;
    width: max-content;
    .ant-tooltip-content {
        width: max-content;
    }
    .ant-tooltip-inner {
        background-color: #fff !important;
        box-shadow: none;
        padding: 16px 16px 0;
        width: max-content;
    }
    .ant-tooltip-arrow {
        display: none;
    }
}
.ant-tooltip {
    max-width: max-content;
}
</style>