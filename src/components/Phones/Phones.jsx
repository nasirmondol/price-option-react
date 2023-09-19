import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesData = data.data.data;
                console.log(phonesData);
                const mapData = phonesData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split("-")[1])
                    }
                    return obj;
                })
                console.log(mapData)

                setPhones(mapData)
            })
    }, [])


    return (
        <div>
            <h2>Total phone: {phones.length}</h2>
            <BarChart
                width={500}
                height={400}
                data={phones}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="price" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Phones;