<template>
  <el-button type="primary" @click="dialogVisible = true" >新增</el-button>
  <el-dialog title="表单弹框" v-model="dialogVisible" width="25%">
    <el-form 
      ref = "studentForm"
      :rules="ruleForm"
      :model="form" 
      label-width="70px">
      <el-form-item label="学号" prop="No">
        <el-input v-model="form.No"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio value="男">男</el-radio>
          <el-radio value="女">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="语文" prop="Chinese">
        <el-input v-model="form.Chinese"></el-input>
      </el-form-item>
      <el-form-item label="数学"  prop="Math">
        <el-input v-model="form.Math"></el-input>
      </el-form-item>
      <el-form-item label="英语"  prop="English">
        <el-input v-model="form.English"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer" style="margin-left: 50%;">
      <el-button type="primary" @click="onSubmit">确 定</el-button>
      <el-button 
      type="danger"
      @click="resetForm();
      ">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts" setup>
  import { inject, ref } from 'vue';
  import type { TableData, TableProvider } from '../types/tableData';


  const dialogVisible = ref(false);
  const studentForm = ref()
  const ruleForm = {
    No: [{ required: true, message: '请输入学号', trigger: 'blur'}],
    name: [{ required: true, message: '请输入姓名', trigger: 'blur'}],
    sex: [{ required: true,  message: '请选择', trigger: 'blur'}],
    Chinese: [{ type: 'number', trigger: 'blur'}],
    Math: [{ type: 'number', trigger: 'blur'}],
    English: [{ type: 'number', trigger: 'blur'}],
  }
  const form = ref<TableData>({
    No: '',
    name: '',
    sex: '',
    Chinese: 0,
    Math: 0,
    English: 0,
  });


  const tableContext = inject<TableProvider>('tableContext');
  if (!tableContext) {
    throw new Error('tableContext is not provided');
  }
  const { addTableData } = tableContext;  //
  const onSubmit = async () => {
    // 假设你已经配置了表单验证
  const isValid = await studentForm.value.validate();
    if(isValid){
        addTableData({ ...form.value });  //provide 调用函数addTableData（data）
        resetForm();
    }
        
  }
  const resetForm = () => {
      studentForm.value.resetFields();
      dialogVisible.value = false;
  }
</script>