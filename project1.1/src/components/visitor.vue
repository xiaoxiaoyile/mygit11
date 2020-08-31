<template>
    <div id="myChart"></div>
</template>

<script>
import echarts from 'echarts'	// 引入echarts
export default {
    name: 'PieChart',
    data () {
        return {
            echartsOption: {	// echarts选项，所有绘图数据和样式都在这里设置
                legend: {	//图表上方的图例
                    data: ['北京', '上海', '深圳', '杭州','其他']
                },
                tooltip: {   //鼠标放到图上的数据展示样式
                    trigger: 'axis'
                },
                series: [{
                  name: '地区占比',
                  type: 'pie',
                  barWidth: '60%',
                  data: [	// 扇形图数据格式： {value, name}
                    {value: 0.20, name: '北京'},		// value不一定是比例，echarts会自动转换
                    {value: 0.05, name: '上海'},
                    {value: 0.05, name: '深圳'},
                    {value: 0.05, name: '杭州'},
                    {value: 0.65, name: '其他'},
                  ],
                }],
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