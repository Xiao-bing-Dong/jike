//柱状图组件
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
//1.将功能代码放到这个组件中
//2.把可变部分抽象为prop参数
const BarChart = (props) => {
    const chartRef = useRef(null);
    //useEffect会在页面渲染完毕后调用，可以保证有可用的dom节点，图表才能正常渲染
    useEffect(() => {
        //1.获取渲染图表的dom节点
        /* 
            原生DOM操作
            const chartDom = document.getElementById('main');
        */
        //React的语法
        const chartDom = chartRef.current;
        //2.图表初始化生成图表实例
        const myChart = echarts.init(chartDom);
        //3.准备图表参数
        const option = {
            title: {
                text: props.title,
            },
            xAxis: {
                type: 'category',
                data: props.xData
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: props.value? props.value:[10, 40, 70],
                    type: 'bar'
                }
            ]
        };
        //4.使用图表参数完成图表渲染
        option && myChart.setOption(option);
    }, [props])

    {/* 这里必须设定宽高，因为图表需要一个有宽高的dom节点 */ }
    return <div ref={chartRef} style={{ width: '500px', height: '400px' }}></div>
}

export default BarChart;