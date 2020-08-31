 <template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="foodName"
        label="食品名称"
        width="341">
      </el-table-column>
      <el-table-column
        prop="foodIntroduction"
        label="食品介绍"
        width="341">
      </el-table-column>
      <el-table-column
        prop="score"
        label="评分"
        width="341">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
         <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
            foodName:1,
            foodIntroduction: '2016-05-02',
            score: '王小虎',
            operation: '上海市普陀区金沙江路 1518 弄'
          }, {
            foodName:2,
            foodIntroduction: '2016-05-04',
            score: '王小虎',
            operation: '上海市普陀区金沙江路 1517 弄'
          }, {
            foodName:3,
            foodIntroduction: '2016-05-01',
            score: '王小虎',
            operation: '上海市普陀区金沙江路 1519 弄'
          }, {
            foodName:4,
            foodIntroduction: '2016-05-03',
            score: '王小虎',
            operation: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
  </script>
