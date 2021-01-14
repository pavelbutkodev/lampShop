import React from 'react';

import './Buypage.scss';

const Buypage = (props) => {
    let path = window.location.pathname.split('/')[2];

    return (
        <div className="buypage_wrapper">
            <div className="top_content">
                <div className="img_left">
                    <img src="" alt=""/>
                </div>
                <div className="info_price">
                    <div className="price_name">gold{}</div>
                    <div className="price_many">250{}</div>
                    <div className="price_text">id</div>
                    <input type="text"/>
                    <button className="price_btn">adsdsa</button>
                </div>
            </div>
            <div className="about_lamp">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur dignissimos dolore, et fugiat in inventore iure nemo placeat possimus, quas quasi quo reiciendis. Aperiam ducimus eaque ipsa itaque porro.
            </div>
        </div>
    );
}

export default Buypage;