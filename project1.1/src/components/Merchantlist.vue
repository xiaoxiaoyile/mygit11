 <template>
 <div>
   <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="StoreName"
        label="店铺名称"
        width="341">
      </el-table-column>
      <el-table-column
        prop="shopAdress"
        label="店铺地址"
        width="341">
      </el-table-column>
      <el-table-column
        prop="StoreIntroduction"
        label="店铺介绍"
        width="341">
      </el-table-column>
      <el-table-column
        prop="Operation"
        label="操作">
         <el-button
          size="mini"
          @click="handleEdit">编辑</el-button>
           <el-button
          size="mini"
          @click="handleAdd(scope.$index, scope.row)">添加食品</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
 </div>
    
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            StoreName:1,
            shopAdress: '2016-05-02',
            StoreIntroduction: '王小虎',
            Operation: '上海市普陀区金沙江路 1518 弄'
          }, {
            StoreName:2,
            shopAdress: '2016-05-04',
            StoreIntroduction: '王小虎',
            Operation: '上海市普陀区金沙江路 1517 弄'
          }, {
            StoreName:3,
            shopAdress: '2016-05-01',
            StoreIntroduction: '王小虎',
            Operation: '上海市普陀区金沙江路 1519 弄'
          }, {
            StoreName:4,
            shopAdress: '2016-05-03',
            StoreIntroduction: '王小虎',
            Operation: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      methods:{
        handleEdit() {
          this.$prompt()
        }
          
      }
    }
  </script>
