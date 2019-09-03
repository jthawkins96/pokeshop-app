import React from 'react';
import { withRouter } from 'react-router-dom';
import './category-item.scss';

const CategoryItem = props => {
    return (
        <div className={`category-item ${props.size}`} onClick={ () => navigateToProductList(props.history, props.category.toLowerCase()) }>
            <div className={`image-background ${props.category.toLowerCase()}-gradient`}>
                <img src={props.backgroundImage} alt={props.category} />
                <div className="button-container">
                    <h3>{props.category} Pokemon</h3>
                    <div className="button-text">Shop Now</div>
                </div>
                <div className={`overlay ${props.category.toLowerCase()}`}></div>
            </div>
        </div>
    )
}

function navigateToProductList(history, category) {
    history.push(`/pokemon/${category}`)
}


export default withRouter(CategoryItem);