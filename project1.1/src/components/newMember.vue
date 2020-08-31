<template>
    <div>
        <el-row style="margin:10px 0px 10px 20px"> 
            <el-button style="width:150px;height:45px" type="warning">当日数据</el-button>
            <el-button style="width:150px;height:45px">45新增用户</el-button>
            <el-button style="width:150px;height:45px">120新增订单</el-button>
            <el-button style="width:150px;height:45px">100新增管理员</el-button>
        </el-row>
        <el-row style="margin:10px 0px 10px 20px">
            <el-button style="width:150px;height:45px" type="primary">总数据</el-button>
            <el-button style="width:150px;height:45px">68注册用户</el-button>
            <el-button style="width:150px;height:45px">300订单</el-button>
            <el-button style="width:150px;height:45px">20管理员</el-button>
        </el-row>
        <div id="myChart"></div>
    </div>
</template>

<script>
import echarts from 'echarts'	// 引入echarts
export default {
    name: 'LineChart',
    data () {
        return {
            echartsOption: {	// echarts选项，所有绘图数据和样式都在这里设置
                legend: {	//图表上方的图例
                    data: ['新注册用户', '新增订单', '新增管理员']
                },
                xAxis: {
                    type: 'category',
                    data: ['2020-4-23', '2020-5-23', '2020-6-23', '2020-7-23', '2020-8-23', '2020-9-23', '2020-9-24'],   // x轴数据
                    name: '日期',   // x轴名称
                    nameTextStyle: {	// x轴名称样式
                        fontWeight: 600,
                        fontSize: 18
                    }
                },
                yAxis: {
	                type: 'value',
	                name: '用户',   // y轴名称
	                nameTextStyle: {	// y轴名称样式
	                    fontWeight: 600,
	                    fontSize: 18
	                }
                },
                tooltip: {   //鼠标放到图上的数据展示样式
                    trigger: 'axis'
                },
                series: [	//每条折线的数据系列
                    {
                        name: '新注册用户',
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    },
                    {
                        name: '新增订单',
                        data: [620, 711, 823, 934, 1445, 1456, 1178],
                        type: 'line'
                    },
                    {
                        name: '新增管理员',
                        data: [612, 920, 1140, 1160, 1190, 1234, 1321],
                        type: 'line'
                    },
                ],
            }
        }
    },
    mounted () {
        let myChart = echarts.init(document.getElementById('myChart'), 'light')	// 初始化echarts, theme为light
        myChart.setOption(this.echartsOption)	// echarts设置选项
    }
}
</script>

<style>
#myChart{
  width: 100%;
  height: 500px;
  margin: 0 auto;
  margin-top: 5%;
}
</style>
