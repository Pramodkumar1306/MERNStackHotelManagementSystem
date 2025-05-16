import React ,{useState } from 'react'
import './Home.css'

import Headers from '../../components/Header/Header'
import ExploeMenu from '../../components/ExploreMenue/ExploeMenu'  
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'

export default function Home() {
    const [category,setCategory]=  useState('all')
    return (
        <div>
            <Headers/>
            <ExploeMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
        </div>
    )
}
