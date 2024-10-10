<template>
    <!-- <el-table :data="tableData" stripe style="width: 100%; height: calc(100vh - 300px);">
      <el-table-column prop="No" label="学号" align="center"/>
      <el-table-column prop="name" label="姓名"  align="center"/>
      <el-table-column prop="sex" label="性别" align="center"/>
      <el-table-column prop="Chinese" label="语文" align="center">
        <template #default="scope">
          <span v-show="scope.$index !== editIndex">{{ scope.row.value }}</span>
          <el-input
            v-show="scope.$index === editIndex"
            v-model="scope.row.value"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="Math" label="数学" align="center"/>
      <el-table-column prop="English" label="英语" align="center"/>
      <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button size="small" 
        v-show="scope.$index !== editIndex && editIndex == -1"
        @click="handleEdit(scope.$index, scope.row);
        ">
          Edit  
        </el-button>
        <el-button size="small" 
        v-show="scope.$index === editIndex"
        @click="handleSave(scope.$index)">
          Save  
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
    </el-table> -->
    <el-table :data="filteredTableData" stripe style="width: 100%; height: calc(100vh - 300px);">>
        <el-table-column
          v-for="(item, index) in tableHeader"
          :prop="index"
          :label="item"
          :key="index"
          align="center"
        >
          <template #default="scope">
            <!-- 如果是当前编辑行，则显示输入框 -->
            <el-input v-if="editIndex === scope.$index" v-model="scope.row[index]" />
            <!-- 否则显示原始值 -->
            <span v-else>{{ scope.row[index] }}</span>
          </template>
        </el-table-column>
      <el-table-column 
        label="操作"
        align="center"
        >
        <template #default="scope">
        <el-button size="small" 
        v-show="scope.$index !== editIndex"
        @click="handleEdit(scope.$index, scope.row);
        ">
          编辑  
        </el-button>
        <el-button size="small" 
        v-show="scope.$index === editIndex"
        @click="handleSave(scope.$index)">
          保存 
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          删除
        </el-button>
      </template>
      </el-table-column>
    </el-table>
</template>
  
<script lang="ts" setup>
  import { computed, inject, ref } from 'vue';
  import type { TableData, TableProvider } from '../types/tableData';

  // const search = ref('')

  // const tableData = inject('tableData');
  const tableContext = inject<TableProvider>('tableContext');
  // const search = inject<string>('search');
  if (!tableContext) {
    throw new Error('tableContext is not provided');
  }
  const { tableData } = tableContext;
  const tableHeader = ref({
    No: '学号',
    name: '姓名',
    sex: '性别',
    Chinese: '语文',
    Math: '数学',
    English: '英语'
  })
  tableData.value.push({
    No: '123',
    name: 'string',
    sex: 'man',
    Chinese: 123,
    Math: 2,
    English: 3
  })
  tableData.value.push({
    No: '123',
    name: 'string',
    sex: 'man',
    Chinese: 123,
    Math: 2,
    English: 3
  })
  tableData.value.push({
    No: '123',
    name: 'string',
    sex: 'man',
    Chinese: 123,
    Math: 2,
    English: 3
  })

  // const search = ref('')
  const editIndex = ref(-1)

  const handleEdit = (index: number, row: TableData) => {
    console.log(index, row)
    editIndex.value = tableData.value.indexOf(row)
    console.log(editIndex.value);
    
  }
  const handleSave = (index: number) => {
    editIndex.value = -1
  }
  const handleDelete = (index: number, row: TableData) => {
    console.log(index, row)
    tableData.value.splice(index, 1);
  }

</script>
  