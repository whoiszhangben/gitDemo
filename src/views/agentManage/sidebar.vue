<template>
    <div class="sidebar">
      <div class="picLayout">
        <img src="../../assets/agent.png" />
      </div>
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
        <a-input :placeholder="$t('plzInputAgent')" class="enhancedInputCls"
            v-model:value="searchValue"
            @change="changeValue"
            @pressEnter="onSearch">
            <template #suffix>
                <close-circle-outlined class="suffix-icon close-icon" v-if="searchValue.length > 0" @click="clearKeyword" />
                <search-outlined class="suffix-icon" @click="onSearch" />
            </template>
        </a-input>
      </div>
      <ul class="sidebar__list">
        <li
          v-for="(item,index) in agentList"
          :key="index"
          v-on:mouseenter="onMouseEnter(item, index)"
          v-on:mouseleave="item.hoverIndex = -1"
          :class="['sidebar__item',index === activeIndex && 'active']"
        >
            <div :title="item.agentName" @click="selectAgentItem(item,index)" class="agentName"><img src="../../assets/agent_logo.png">{{ item.agentName }}</div>
            <div v-if="index === activeIndex || item.hoverIndex > -1" @click.prevent="delAgent(item,index)" class="delAgentName">
                <delete-outlined  />
            </div>
        </li>
      </ul>
    </div>
</template>

<script lang="ts" setup>
    import { SearchOutlined, PlusOutlined, CloseCircleOutlined, DeleteOutlined } from '@ant-design/icons-vue';
    import { useAgentStore } from '/@/store/modules/agent';

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

    const onMouseEnter = (item, index) => {
        item.hoverIndex = index;
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
</style>
