<template>
    <div class="common-layout">
      <el-container>
        <el-header><vHeader/></el-header>
        <el-container>
          <el-aside width="200px"><vMenu/></el-aside>
          <el-main><RouterView></RouterView></el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script setup>
import vMenu from './vMenu.vue';
import vHeader from './vHeader.vue';
</script>

<style scoped>
.el-header {
  height: 70px;
  padding: 0;
}

.el-aside{
  height: calc(100vh - 100px);
  background-color: #545c64;
}
.el-main{
  height: calc(100vh - 100px);
}

</style>