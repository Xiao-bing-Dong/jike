import BarChart from "./components/Batchart";

const Home = () => {
    return <div>
        <BarChart title={"三大框架满意度"} xData={['Vue', 'Angular', 'React']} />
        <BarChart title={"三大框架使用度"} xData={['Vue', 'Angular', 'React']} />
        <BarChart title={"几种语言的使用情况"} xData={['JAVA', 'JS', 'C++', 'Python']} value={[13,24,33,60]} />
    </div>
}

export default Home;