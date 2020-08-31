 <template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="adminName"
        label="姓名"
        width="341">
      </el-table-column>
      <el-table-column
        prop="registrationDate"
        label="注册日期"
        width="341">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="341">
      </el-table-column>
      <el-table-column
        prop="authority"
        label="权限">
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
            adminName:1,
            registrationDate: '2016-05-02',
            address: '王小虎',
            authority: '上海市普陀区金沙江路 1518 弄'
          }, {
            adminName:2,
            registrationDate: '2016-05-04',
            address: '王小虎',
            authority: '上海市普陀区金沙江路 1517 弄'
          }, {
            adminName:3,
            registrationDate: '2016-05-01',
            address: '王小虎',
            authority: '上海市普陀区金沙江路 1519 弄'
          }, {
            adminName:4,
            registrationDate: '2016-05-03',
            address: '王小虎',
            authority: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
  </script>
