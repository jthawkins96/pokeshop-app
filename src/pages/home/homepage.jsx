import React from 'react';
import CategoryItem from '../../components/category-item/category-item';
import './homepage.scss';
import boulder from '../../content/badges/boulder.png'
import earth from '../../content/badges/earth.png';
import cascade from '../../content/badges/cascade.png';
import volcano from '../../content/badges/volcano.png';
import thunder from '../../content/badges/thunder.png';
const categories = [
                    {category: 'Fire', backgroundImage: volcano, cssClass: 'fire'}, 
                    {category: 'Water', backgroundImage: cascade, cssClass: 'water'}, 
                    {category: 'Rock', backgroundImage: boulder, cssClass: 'rock' }, 
                    {category: 'Electric', backgroundImage: thunder, cssClass: 'electric', size: 'large'}, 
                    {category: 'Grass', backgroundImage: earth, cssClass: 'grass', size: 'large'}
                   ]

const Homepage = () => {
    return (
        <div className="homepage-container">
            {categories.map((category, index) => <CategoryItem key={index} {...category} /> )}
        </div>
    )
}

export default Homepage;