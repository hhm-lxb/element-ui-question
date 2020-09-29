<template>
  
<div>
  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  
</div>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [
          {name: 'food1.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100', id: 1}, 
          {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100', id: 2},
          {name: 'food3.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100', id: 3}, 
          {name: 'food4.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100', id: 4},
          {name: 'food5.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100', id: 5}, 
          {name: 'food6.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100', id: 6}
        ],
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],

        columns: [
          { label: '上传附件', prop: 'date' },
          { label: '操作', prop: 'name' }
        ]
      };
      
    },
    methods: {
      // addFile () {
      //   this.fileList.push(
      //     {name: 'food.jpeg', 
      //     url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
      //     )
      // },
      move () {},
      handleRemove(file, fileList) {
        if (this.fileList && this.fileList.length) {
          console.log(file, fileList, this.fileList);
          let index = this.fileList.findIndex(item => item.id === file.id)
          console.log(index, 'index')
          // this.fileList.splice(index, 1)
          console.log(this.fileList.length, this.fileList)
          if (index >= 0) {
            // this.$emit('deleteFileList', this.fileList[index].id)
          }
        }
      },
      handleSuccess (res, file, fileList) {
        console.log(res, file, fileList, this.fileList)
        // console.log(res, file)
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        console.log(fileList)
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>