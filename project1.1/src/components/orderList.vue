 <template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="orderId"
        label="订单ID"
        width="455">
      </el-table-column>
      <el-table-column
        prop="totalCost"
        label="总价格"
        width="455">
      </el-table-column>
      <el-table-column
        prop="orderStatus"
        label="订单状态"
        width="455">
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
            orderId:1,
            totalCost: '2016-05-02',
            orderStatus: '王小虎'
          }, {
            orderId:2,
            totalCost: '2016-05-04',
            orderStatus: '王小虎'
          }, {
            orderId:3,
            totalCost: '2016-05-01',
            orderStatus: '王小虎'
          }, {
            orderId:4,
            totalCost: '2016-05-03',
            orderStatus: '王小虎'
          }]
        }
      }
    }
  </script>
