 <template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="userId"
        label="#"
        width="300">
      </el-table-column>
      <el-table-column
        prop="date"
        label="注册日期"
        width="300">
      </el-table-column>
      <el-table-column
        prop="userame"
        label="用户姓名"
        width="300">
      </el-table-column>
      <el-table-column
        prop="address"
        label="注册地址">
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
            userId:1,
            date: '2016-05-02',
            userName: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            userId:2,
            date: '2016-05-04',
            userName: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            userId:3,
            date: '2016-05-01',
            userName: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            userId:4,
            date: '2016-05-03',
            userName: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
  </script>
