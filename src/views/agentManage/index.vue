<template>
    <div class="agentSetting">
        <sidebar
            v-show="currentAgent"
            class="agentSetting__sidebar"
            ref="sidebar"
            @toggle="selectAgent"
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
                                <a-col :span="16" class="agentColor exceedShow" :title="agentModel.agentName">
                                    {{ agentModel.agentName || '--' }}
                                </a-col>
                            </a-row>
                        </a-col>
                        <a-col :span="12">
                            <a-row>
                                <a-col :span="8" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('model')">
                                    {{ $t('model') }}:
                                </a-col>
                                <a-col :span="16" class="agentColor exceedShow" :title="agentModel.model">
                                    {{ agentModel.model || '--' }}
                                </a-col>
                            </a-row>
                        </a-col>
                    </a-row>
                    <a-row class="marTB8">
                        <a-col :span="12">
                            <a-row>
                                <a-col :span="8" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('vendor')">
                                    {{ $t('vendor') }}:
                                </a-col>
                                <a-col :span="16" class="agentColor exceedShow" :title="agentModel.vendor">
                                    {{ agentModel.vendor || '--' }}
                                </a-col>
                            </a-row>
                        </a-col>
                        <a-col :span="12">
                            <a-row>
                                <a-col :span="8" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('tel')">
                                    {{ $t('tel') }}:
                                </a-col>
                                <a-col :span="16" class="agentColor exceedShow" :title="agentModel.contact">
                                    {{ agentModel.contact || '--' }}
                                </a-col>
                            </a-row>
                        </a-col>
                    </a-row>
                    <a-row class="marTB8">
                        <a-col :span="4" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('remark')">
                            {{ $t('remark') }}:
                        </a-col>
                        <a-col :span="16" class="agentColor" :title="agentModel.remark">
                            <div class="line__2">{{ agentModel.remark || '--' }}</div>
                        </a-col>
                    </a-row>
                </div>
                <div class="alertSetting layoutBorder marL12">
                    <div class="padding16 relative">
                        <span class="titleBar">{{ $t('alertInfo') }}</span>
                        <span class="alertSettingFlag" v-if="agentModel.isAlert">
                            <img src="../../assets/agent_alertOK.png" class="alertSettingFlagImg"/>
                            {{ $t('isAlertOn') }}
                        </span>
                    </div>
                    <a-row>
                        <a-col :span="5" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('alertLevel')">
                            {{ $t('alertLevel') }}:
                        </a-col>
                        <a-col :span="16" class="agentColor exceedShow" :title="agentModel.alertLevel">
                            {{ agentModel.alertLevel ? t('alertLevel' + agentModel.alertLevel) : '--' }}
                        </a-col>
                    </a-row>
                    <a-row class="marTB8">
                        <a-col :span="5" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('hysType')">
                            {{ $t('hysType') }}:
                        </a-col>
                        <a-col :span="16" class="agentColor exceedShow" :title="agentModel.hysType">
                            {{ agentModel.hysType ? t('hysType' + agentModel.hysType) : '--' }}
                        </a-col>
                    </a-row>
                    <a-row class="marTB8">
                        <a-col :span="5" class="text-right agentTitleColor paddingR8 exceedShow" :title="t('hysTime')">
                            {{ $t('hysTime') }}:
                        </a-col>
                        <a-col :span="16" class="agentColor" :title="agentModel.hysTime">
                            {{ agentModel.hysTime || '--' }}
                        </a-col>
                    </a-row>
                </div>
            </div>
            <div class="agentSetting__content__middle layoutBorder">
                <div class="padding16">
                    <span class="titleBar">{{ `${$t('portInfo')} (${agentModel.ports.length})` }}</span>
                </div>
                <a-table :columns="columns_readonly" :data-source="agentModel.ports" size="small" :scroll="{ y: 500 }" :pagination="false" class="paddingLR16 tbPortCls2">
                    <template #headerCell="{ column }">
                        {{$t(column.key)}} 
                    </template>
                    <template #bodyCell="{ column, text }">
                        <template v-if="column.dataIndex === 'portType'">
                            {{ t('portType' + text) }}
                        </template>
                        <template v-if="column.dataIndex === 'portDesc'">
                            {{ text ? text : '--' }}
                        </template>
                    </template>
                </a-table>
            </div>
            <div class="agentSetting__content__bottom">
                <a-button type="primary" @click="editAgent">{{ $t('edit') }}</a-button>
            </div>
        </div>
        <div class="agentSetting__content" v-else>
            <a-form :model="agentModel" :label-col="labelCol" :wrapper-col="wrapperCol">
                <div class="agentSetting__content__top1">
                    <div class="basicinfo layoutBorder marR12">
                        <div class="padding16">
                            <span class="titleBar">{{ $t('basicInfo') }}</span>
                        </div>
                        <a-row justify="center">
                            <a-col :span="22">
                                <a-row justify="center">
                                    <a-col :span="12">
                                        <a-form-item :label="$t('name')" name="agentName">
                                            <a-input v-model:value="agentModel.agentName"></a-input>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="12">
                                        <a-form-item :label="$t('model')" name="model">
                                            <a-input v-model:value="agentModel.model"></a-input>
                                        </a-form-item>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                        <a-row justify="center">
                            <a-col :span="22">
                                <a-row justify="center">
                                    <a-col :span="12">
                                        <a-form-item :label="$t('vendor')" name="vendor">
                                            <a-input v-model:value="agentModel.vendor"></a-input>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="12">
                                        <a-form-item :label="$t('tel')" name="contact">
                                            <a-input v-model:value="agentModel.contact"></a-input>
                                        </a-form-item>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                        <a-row justify="center">
                            <a-col :span="22">
                                <a-form-item :label="$t('remark')" name="remark" :label-col="labelCol" :wrapperCol="{span: 20}">
                                    <a-textarea v-model:value="agentModel.remark" :rows="1"></a-textarea>
                                </a-form-item>
                            </a-col>
                        </a-row>
                    </div>
                    <div class="alertSetting layoutBorder marL12">
                        <div class="padding16 relative">
                            <span class="titleBar">{{ $t('alertInfo') }}</span>
                            <span class="alertSettingFlag" v-if="agentModel.isAlert">
                                <img src="../../assets/agent_alertOK.png" class="alertSettingFlagImg"/>
                                {{ $t('isAlertOn') }}
                            </span>
                            <a-button type="primary" class="customBtn" @click="toggleAlert">{{ agentModel.isAlert ? $t('closeAlert') : $t('openAlert') }}</a-button>
                        </div>
                        <a-row justify="center">
                            <a-col :span="22">
                                <a-row justify="center">
                                    <a-col :span="12">
                                        <a-form-item :label="$t('alertLevel')" name="alertLevel">
                                            <a-select style="width: 100%" v-model:value="agentModel.alertLevel" :disabled="!agentModel.isAlert">
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
                                            <a-select style="width: 100%" v-model:value="agentModel.hysType" :disabled="!agentModel.isAlert">
                                                <a-select-option v-for="item in enums.HysType" :value="item">{{ $t('hysType' + item) }}</a-select-option>
                                            </a-select>
                                        </a-form-item>
                                    </a-col>
                                    <a-col :span="12">
                                        <a-form-item :label="$t('hysTime')" name="hysTime">
                                            <a-input v-model:value="agentModel.hysTime" :addon-after="$t('timeUnit')" :disabled="!agentModel.isAlert"></a-input>
                                        </a-form-item>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                    </div>
                </div>
                <div class="agentSetting__content__middle1 layoutBorder">
                    <div class="padding16">
                        <span class="titleBar">{{ `${$t('portInfo')} (${agentModel.ports.length})` }}</span>
                    </div>
                    <a-button type="primary" class="addPortBtn" @click="addPort">
                            <template #icon>
                                <PlusOutlined />
                            </template>
                            {{ $t('addPort') }}
                    </a-button>
                    <a-table :columns="columns" :data-source="agentModel.ports" size="small" :scroll="{ y: 420 }" :pagination="false" class="paddingLR16 tbPortCls1">
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
                    </a-table>
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
    import { ResAgent } from '/@/api/agent/model';
    import { enums } from '/@/utils/enum';
    import type { Rule } from 'ant-design-vue/es/form';
    const { t } = useI18n();

    const labelCol = { span:4, style: { minWidth: '110px' } };
    const wrapperCol = { span: 18 };
    
    let agentModel = reactive<ResAgent>({
        id: 0,
        agentName: '',
        vendor: '',
        model: '',
        contact: '',
        remark: '',
        isAlert: false,
        alertLevel: 0,
        hysType: 0,
        hysTime: 0,
        ports: []
    });

    let currentAgent = ref(null);
    let isReadMode = ref(true); // true代表查看 false代表编辑

    const selectAgent = (item: any) => {
        currentAgent.value = item;
        agentModel.id = item?.id;
        agentModel.agentName = item?.agentName;
        agentModel.vendor = item?.vendor;
        agentModel.model = item?.model;
        agentModel.remark = item?.remark;
        agentModel.contact = item?.contact;
        agentModel.isAlert = item?.isAlert;
        agentModel.alertLevel = item?.alertLevel;
        agentModel.hysType = item?.hysType;
        agentModel.hysTime = item?.hysTime;
        agentModel.ports = item?.ports;
    }

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
        agentModel.isAlert = !agentModel.isAlert;
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
    &__middle {
        height: calc(100% - 308px);
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
.tbPortCls2 {
    height: calc(100% - 60px);
    overflow: hidden; 
}
</style>