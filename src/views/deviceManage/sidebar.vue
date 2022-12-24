<template>
    <div class="sidebar">
      <div class="pTitle">{{ $t('agentList') }}</div>
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
            <span class="deviceItem" v-if="searchValue && node.title.indexOf(searchValue) > -1">
              {{ node.title.substr(0, node.title.indexOf(searchValue)) }}
              <span style="color: #f50">{{ searchValue }}</span>
            {{ node.title.substr(node.title.indexOf(searchValue) + searchValue.length) }}
            </span>
            <span v-else 
            v-on:mouseenter="onMouseEnter(node)"
            v-on:mouseleave="node.hoverIndex = -1"
            >{{ node.title }}</span>
            <delete-outlined class="delDevice" />
          </template>
        </template>
      </a-tree>
    </div>
</template>

<script lang="ts" setup>
    import { SearchOutlined, CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons-vue';
    import { useAgentStore } from '/@/store/modules/agent';
    import type { TreeProps } from 'ant-design-vue';

    const agentStore = useAgentStore();
    let agentList = computed(() => agentStore.agentList);

    const emits = defineEmits(['toggle']);

    const searchValue = ref('');
    const activeIndex = ref(-1);
    const changeValue = () => {
        if (searchValue.value === '') {
            activeIndex.value = -1;
            initData();
        }
    }
    const clearKeyword = () => {
        searchValue.value = '';
        activeIndex.value = -1;
        initData();
    }
    const onSearch = () => {
        if (searchValue.value) {

        }
    }

    const expandedKeys = ref<(string | number)[]>(['1']);
    const autoExpandParent = ref<boolean>(true);
    const genData: TreeProps['treeData'] = [
      {
      key: '1',
      title: '通用系统',
      icon: '',
      children: [
        {
          key: '1_1',
          title: 'DS-C11N-VWMS1',
        },
        {
          key: '1_2',
          title: 'DS-C11N-VWMS2',
        },
        {
          key: '1_3',
          title: 'DS-C11N-VWMS3',
        }
      ]
    },
    {
      key: '2',
      title: '监控系统',
      icon: '',
      children: [
        {
          key: '2_1',
          title: 'DS-C21N-VWMS1',
        },
        {
          key: '2_2',
          title: 'DS-C21N-VWMS2',
        },
        {
          key: '2_3',
          title: 'DS-C21N-VWMS3',
        }
      ]
    },
    {
      key: '3',
      title: '门禁系统',
      icon: '',
      children: [
        {
          key: '3_1',
          title: 'DS-C31N-VWMS1',
        },
        {
          key: '3_2',
          title: 'DS-C31N-VWMS2',
        },
        {
          key: '3_3',
          title: 'DS-C31N-VWMS3',
        }
      ]
    },
    {
      key: '4',
      title: '报警系统',
      icon: '',
      children: [
        {
          key: '4_1',
          title: 'DS-C41N-VWMS1',
        },
        {
          key: '4_2',
          title: 'DS-C41N-VWMS2',
        },
        {
          key: '4_3',
          title: 'DS-C41N-VWMS3',
        }
      ]
    }
  ];
    const deviceTreeData = ref<TreeProps['treeData']>(genData);
    const onExpand = (keys: string[]) => {
      console.log('---onExpand:', keys);
      expandedKeys.value = keys;
      autoExpandParent.value = false;
    };

    const addAgent = () => {}

    const selectAgentItem = (item, index) => {
      console.log('selectAgentItem:', item);
        if (index === activeIndex.value) {
            return;
        }
        if (!item) {
            activeIndex.value = -1;
        }
        activeIndex.value = index;
        emits('toggle', item);
    }

    const delAgent = (item, index) => {
      debugger
      console.log('deleteAgent:',item, index)
    }

    const onMouseEnter = (key) => {
        console.log('----------onMouseEnter:', key)
    }

    const initData = () => {
        // 获取当前代理列表信息并选中第一条记录
      if (!(Array.isArray(agentList.value) && agentList.value.length)) {
        agentStore.getAgentList().then(() => {
            selectAgentItem(agentList.value[0], 0)
        });
      } else {
        console.log('cached alertLevellist:',agentList.value)
        selectAgentItem(agentList.value[0], 0)
      }
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
:deep(.ant-tree .ant-tree-title) {
  margin-left: 16px;
}
:deep(.ant-tree .ant-tree-iconEle) {
  line-height: 40px;
  vertical-align: 2px !important;
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
  margin-left: -3px;
  margin-top: 14px;
  width: 2px;
  height: 16px;
  background: #3766F4;
}
.deviceItem {

}
.delDevice {
  position: absolute;
  right: 16px;
  line-height: 42px;
  color: #F53F3F;
}
</style>
