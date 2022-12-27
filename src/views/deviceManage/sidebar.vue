<template>
    <div class="sidebar">
      <div class="pTitle">{{ $t('deviceList') }}</div>
      <div class="actionGroup">
        <div :title="$t('import')"><img src="../../assets/agent_import.png" /></div>
        <div :title="$t('export')"><img src="../../assets/agent_export.png" /></div>
        <div :title="$t('add')"><img src="../../assets/agent_add.png" /></div>
      </div>
      <div class="paddingLR16">
        <div class="divider marTB12"></div>
      </div>
      <div class="search-header">
        <a-input :placeholder="$t('plsInput')" class="enhancedInputCls"
            v-model:value="searchValue"
            @change="changeValue"
            @pressEnter="onSearch">
            <template #suffix>
                <close-circle-outlined class="suffix-icon close-icon" v-if="searchValue.length > 0" @click="clearKeyword" />
                <search-outlined class="suffix-icon" @click="onSearch" />
            </template>
        </a-input>
      </div>
      <a-tree
        :expanded-keys="expandedKeys"
        :auto-expand-parent="autoExpandParent"
        show-icon
        block-node
        :tree-data="deviceTreeData"
        @expand="onExpand"
        v-model:selectedKeys="selectedKeys"
      >
        <template #icon="{ key }">
          <template v-if="key.indexOf('_') === -1">
            <img src="../../assets/system_logo.png" style="width: 16px" />
          </template>
          <template v-else>
            <img src="../../assets/device_logo.png" style="width: 16px" />
          </template>
        </template>
        <template #title="node">
          <template v-if="node.key.indexOf('_') === -1">
            <span v-if="node.title.indexOf(searchValue) > -1">
              {{ node.title.substr(0, node.title.indexOf(searchValue)) }}
              <span style="color: #f50">{{ searchValue }}</span>
            {{ node.title.substr(node.title.indexOf(searchValue) + searchValue.length) }}
          </span>
          <span v-else>{{ node.title }}</span>
          </template>
          <template v-else>
            <span class="deviceItem" v-if="searchValue && node.title.indexOf(searchValue) > -1"
              v-on:mouseenter="onMouseEnter(node)"
              v-on:mouseleave="hoverItem = null"
              >
              {{ node.title.substr(0, node.title.indexOf(searchValue)) }}
              <span style="color: #f50">{{ searchValue }}</span>
            {{ node.title.substr(node.title.indexOf(searchValue) + searchValue.length) }}
            </span>
            <span v-else class="deviceItem"
            v-on:mouseenter="onMouseEnter(node)"
            v-on:mouseleave="hoverItem = null"
            >{{ node.title }}</span>
            <delete-outlined class="delDevice" v-if="(selectedKeys.length && selectedKeys[0] === node.key) || isHovered(node) "/>
          </template>
        </template>
      </a-tree>
    </div>
</template>

<script lang="ts" setup>
    import { SearchOutlined, CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons-vue';
    import { useDeviceStore } from '/@/store/modules/device';
    import type { TreeProps } from 'ant-design-vue';
    import { useI18n } from 'vue-i18n';
    import { DataNode } from 'ant-design-vue/lib/tree';
    const { t } = useI18n();

    const deviceStore = useDeviceStore();
    let deviceList = computed(() => deviceStore.deviceList);

    const searchValue = ref('');
    const hoverItem = ref<any>(null);
    const selectedKeys = ref<string[]>([]);
    watch(() => deviceStore.selectedKey, (val) => {
      selectedKeys.value = [val]
    })
    const changeValue = () => {
        if (searchValue.value === '') {
            initData();
        }
    }
    const clearKeyword = () => {
        searchValue.value = '';
        initData();
    }
    const onSearch = () => {
        if (searchValue.value) {

        }
    }

    watch(selectedKeys, (val) => {
      if (Array.isArray(val) && val.length) {
        deviceStore.setSelectKey(val[0])
      }
    })

    const expandedKeys = ref<(string | number)[]>(['1']);
    const autoExpandParent = ref<boolean>(true);
    const deviceTreeData = ref<TreeProps['treeData']>([]);
    const onExpand = (keys: string[]) => {
      console.log('---onExpand:', keys);
      expandedKeys.value = keys;
      autoExpandParent.value = false;
    };

    const addAgent = () => {}

    const delAgent = (item, index) => {
      debugger
      console.log('deleteAgent:',item, index)
    }

    const onMouseEnter = (node) => {
      hoverItem.value = node;
    }

    let isHovered = computed(() => (item: any) => {
      return item.key === hoverItem.value?.key
    })

    const initData = () => {
      if (!(Array.isArray(deviceList.value) && deviceList.value.length)) {
        deviceStore.getDeviceList().then(() => {
          deviceTreeData.value = initializeDeviceList(deviceList.value)
          for(let i = 0; i < deviceTreeData.value.length; i++) {
            let item = deviceTreeData.value[i];
            if (item && Array.isArray(item.children) && item.children) {
              deviceStore.setSelectKey(item.children[0].key as string);
              break;
            }
          }
          console.log('------deviceTreeData1,', deviceTreeData.value)
        });
      } else {
        deviceTreeData.value = initializeDeviceList(deviceList.value)
        console.log('------deviceTreeData2,', deviceTreeData.value)
      }
    }

    const initializeDeviceList = (deviceList) => {
      // 将设备列表转化为TreeData
      let treeData: TreeProps['treeData'] = []
      console.log('initializeDeviceList:', deviceList)
      if (Array.isArray(deviceList)) {
        deviceList.forEach(device => {
          let selectItem = treeData?.find(x => x.key === `${device.deviceType}`);
          if (!selectItem) {
            let subSystem: DataNode = {
              key: `${device.deviceType}`,
              title: t(`subSystem${device.deviceType}`),
              children: []
            }
            subSystem.children?.push({
              key: `${device.deviceType}_${device.id}`,
              title: device.deviceName
            })
            treeData?.push(subSystem)
          } else {
            selectItem.children?.push({
              key: `${device.deviceType}_${device.id}`,
              title: device.deviceName
            })
          }
        })
      }
      return treeData;
    }

    onMounted(() => {
      initData()
    })
</script>

<style lang="less" scoped>
.sidebar {
  background: #fff;
  border-radius: 4px;
  .picLayout {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        outline: 1px solid #D9D9D9;
        outline-offset: 2px;
      }
  }
  .pTitle {
    margin: 18px;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    color: #1D2328;
  }
  .actionGroup {
    display: flex;
    flex-flow: row;
    justify-content: center;
    div {
      margin: 0 12px;
      img {
        width: 28px;
      }
    }
  }
  .search-header{
    padding: 0 16px;
    .close-icon {
      color: rgba(0, 0, 0, 0.25);
      margin-right: 8px;
    }
    .enhancedInputCls {
      border-radius: 16px;
    }
  }
  &__item {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    height: 40px;
    line-height: 40px;
    padding: 0 16px 0 24px;
    position: relative;
    > div {
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    .agentName {
      flex: 1;
      img {
        vertical-align: -3px;
        margin-right: 5px;
        width: 16px;
        height: 16px;
      }
    }
    .delAgentName {
      width: 30px;
      color: #F53F3F !important;
      display: flex;
      align-items: center;
    }
    i {
      flex: none;
      cursor: pointer;
      font-size: 0;
    }
    &:hover,
    &.active {
      background-color: rgba(55, 102, 244, 0.1);

      // background-color: #fff;
      i {
        font-size: 14px;
      }
    }
    &.active {
      > div {
        color: @primary-color;
        pointer-events: none;
      }
    }
    &.active::before {
      content: '';
      position: absolute;
      margin-left: -24px;
      margin-top: 12px;
      width: 2px;
      height: 16px;
      background: #3766F4;
    }
  }
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  &__add {
    margin-top: 0;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    i {
      font-size: 14px;
      color: @primary-color;
    }
    &:hover {
      background-color: transparent;
    }
  }
}
:deep(.ant-tree) {
  color: #1D2328;
  font-weight: 400;
  font-size: 14px;
  margin-top: 10px;
}
:deep(.ant-tree .ant-tree-treenode) {
  padding: 0;
}
:deep(.ant-tree .ant-tree-node-content-wrapper) {
  line-height: 40px;
}
:deep(.ant-tree .ant-tree-node-content-wrapper-normal) {
  padding-left: 36px;
  margin-left: -32px;
}
:deep(.ant-tree .ant-tree-title) {
  margin-left: 16px;
}
:deep(.ant-tree .ant-tree-iconEle) {
  line-height: 40px;
  vertical-align: 2px !important;
}
:deep(.ant-tree .ant-tree-node-content-wrapper-normal .ant-tree-iconEle) {
  margin-left: -24px;
}
:deep(.ant-tree .ant-tree-switcher) {
  line-height: 40px;
}
:deep(.ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected) {
  background-color: rgba(55, 102, 244, 0.1);
}
:deep(.ant-tree .ant-tree-node-content-wrapper.ant-tree-node-selected::before) {
  content: '';
  position: absolute;
  margin-left: -36px;
  margin-top: 14px;
  width: 2px;
  height: 16px;
  background: #3766F4;
}
.deviceItem {
  padding: 11px 0;
  border-left: 65px solid transparent;
  margin-left: -65px;
  border-right: 95px solid transparent;
  white-space: nowrap;
}
.delDevice {
  position: absolute;
  right: 16px;
  line-height: 42px;
  color: #F53F3F;
}
</style>
