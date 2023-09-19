import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const students = [
        { "student": "Student 1", "math_marks": 85 },
        { "student": "Student 2", "math_marks": 92 },
        { "student": "Student 3", "math_marks": 78 },
        { "student": "Student 4", "math_marks": 88 },
        { "student": "Student 5", "math_marks": 95 },
        { "student": "Student 6", "math_marks": 72 },
        { "student": "Student 7", "math_marks": 90 },
        { "student": "Student 8", "math_marks": 87 },
        { "student": "Student 9", "math_marks": 76 },
        { "student": "Student 10", "math_marks": 93 }
    ]
    return (
        <div>
            <LChart width={400} height={400} data={students}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="math_marks" stroke="#8884d8" />
                <Tooltip />
            </LChart>
        </div>
    );
};

export default LineChart;