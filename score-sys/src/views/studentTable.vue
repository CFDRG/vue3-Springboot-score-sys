<template #default="scope">
    <!-- 增删改查 -->
     <div>
        <el-input 
        v-model="search" 
        clearable 
        style="width: 250px" 
        placeholder="Type to search" />
        <addScore></addScore>
     </div>
    <vTable></vTable>
</template>

<script lang="ts" setup>
import addScore from '@/components/addScore.vue';
import vTable from '@/components/vTable.vue';
import { provide ,ref } from 'vue';
import { TableData, TableProvider } from '../types/tableData';

// 创建一个响应式的 tableData 数组
const tableData = ref<TableData[]>([]);
const search = ref<string>('')

// 使用 provide 提供 tableData 和 addTableData 方法
const addTableData = (data: TableData) => {
  tableData.value.push(data);
};

provide<string>('search', search.value)
provide<TableProvider>('tableContext', {
  tableData,
  addTableData
});

// const tableData = ref([]);
// provide('tableData', tableData);    //依赖注入
// provide('addTableData', (data) => {
//     // console.log(data);
//     tableData.value.push(data);
// });
</script>
