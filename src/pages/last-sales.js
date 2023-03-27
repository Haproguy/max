import { useEffect, useState } from "react";

export default function LastSales(props) {
    const [sales, setSales] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://max-next-66879-default-rtdb.firebaseio.com/sales.json')
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                const tranformSales = [];
                for (const key in data) {
                    tranformSales.push({
                        id: key,
                        username: data[key].username,
                        volume: data[key].volume
                    })
                }

                setSales(tranformSales);
                setIsLoading(false);
            })
    }, [])

    console.log(sales);

    if (isLoading) {
        return <p>loading.....</p>
    }


    return (
        <ul>
            {
                sales.map(data => {
                    return (
                        <li key={data.id}>
                            <div>username : {data.username}</div>
                            <div>volume : {data.volume}</div>
                        </li>
                    );
                })
            }
        </ul>
    );
}
