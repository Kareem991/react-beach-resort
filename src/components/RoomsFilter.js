import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'
import Title from '../components/Title'

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}
const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext)
    const {type,handleChange,capacity,minPrice,price,maxPrice,minSize,maxSize,breakfast,pets} = context
    let types = getUnique(rooms,'type')
    types = ["all",...types]
    let guests = getUnique(rooms,'capacity')
    guests.sort((a,b) => a-b)
    return (
       <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                <label htmlFor="type">room type </label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                    {
                    types.map((item,index)=>{
                        return(
                        <option value={item} key={index}>{item}</option>)
                    })
                    }
                </select>
                </div>
                {/* end of select type */}
                {/* guest select */}
                <div className="form-group">
                <label htmlFor="capacity">Guests </label>
                <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                    {
                    guests.map((item,index)=>{
                        return(
                        <option value={item} key={index}>{item}</option>)
                    })
                    }
                </select>
                </div>
                {/* end of guest  */}
                {/* price start */}
                <div className="form-group">
                    <label htmlFor="price">
                        Room price {price}$
                    </label>
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                </div>
                
                {/* price end */}
                {/* size start */}
                <div className="form-group">
                    <label htmlFor="size">Room size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="minSize" onChange={handleChange} value={minSize} className="size-input"/>
                        <input type="number" name="maxSize" id="maxSize" onChange={handleChange} value={maxSize} className="size-input"/>
                    </div>
                </div>
                {/* size end */}
                {/* extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" onChange={handleChange} checked={breakfast}/>
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" onChange={handleChange} checked={pets}/>
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
            </form>

        </section>
    )
}

export default RoomsFilter
