import React, { useEffect, useState } from 'react';
import ItemsCard from './ItemsCard/ItemsCard';
import data from './../data';

const Home = () => {
    // const [store, setStore] = useState([]);
    // useEffect = () => {
    //     fetch('data.js')
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    // }
    return (
        <div>
            <h1 className='text-center mt-3'>Your Favorite Store:</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                    {data.productData.map((item, index) => {
                        return(
                            <ItemsCard
                            key={index}
                            item={item}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            price={item.price}
                            ></ItemsCard>
                        )
                    })}
                    
                </div>
            </section>
        </div>
    );
};

export default Home;