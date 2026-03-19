import { Flex } from 'antd';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';



const Home = () => {
    const chartRef1 = useRef(null);
    const chartRef2 = useRef(null);
    //useEffect会在页面渲染完毕后调用，可以保证有可用的dom节点，图表才能正常渲染
    useEffect(() => {
        //1.获取渲染图表的dom节点
        /* 
            原生DOM操作
            const chartDom = document.getElementById('main');
        */
        //React的语法
        const chartDom1 = chartRef1.current;
        const chartDom2 = chartRef2.current;
        //2.图表初始化生成图表实例
        const myChart1 = echarts.init(chartDom1);
        const myChart2 = echarts.init(chartDom2);
        //3.准备图表1参数
        const option1 = {
            xAxis: {
                type: 'category',
                data: ['Vue', 'Angular', 'React']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [10,40,70],
                    type: 'bar'
                }
            ]
        };
        //3.准备图表2参数
        const option2 = {
            xAxis: {
                type: 'category',
                data: ['Vue', 'Angular', 'React']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [20,40,60],
                    type: 'bar'
                }
            ]
        }; 

        //4.使用图表参数完成图表渲染
        option1 && myChart1.setOption(option1);
        option2 && myChart2.setOption(option2);
    }, [])
    
    return <div>
        {/* 这里必须设定宽高，因为图表需要一个有宽高的dom节点 */}
        <div ref={chartRef1} style={{ width: '500px', height: '400px' }}>
        </div>
        <div ref={chartRef2} style={{ width: '500px', height: '400px' }}>
        </div>
    </div>
}

export default Home;