import React from 'react';

const ItemsCard = (props) => {
    return (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img class="card-img-top img-fluid" alt='' src={props.img}/>
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">$ {props.price}</p>
                        <p class="card-text">{props.desc}</p>
                        <button href="#" class="btn btn-secondary">Add to Cart</button>
                    </div>
            </div>
        </div>
    );
};

export default ItemsCard;