import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Bannner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../Context'
import StyledHero from '../components/StyledHero'


export default class SingleRoom extends Component {
    state={
        slug: this.props.match.params.id ,
        defaultBcg
    };
    static contextType= RoomContext;
    // componentDidMount(){

    // }
    render() {
        const {getRoom} = this.context;
        const room  = getRoom(this.state.slug)
        if(!room ){
            return  <div className="error">
                <h3>no such room could be found...</h3>
                <Link to="/rooms" className='btn-primary'>
                    Back to rooms
                </Link>
            </div>
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room
        const [mainImg,...extraImages] = images
        return (
            <>
            <StyledHero img={mainImg|| this.state.defaultBcg}>
                <Bannner title={`${name} room`}>
                    <Link to='/rooms' className='btn-primary'>
                        Back to rooms
                    </Link>
                </Bannner>
            </StyledHero>
            <section className="single-room">
                <div className='single-room-images'>
                    {extraImages.map((item,index) =>{
                     return  <img key={index} src={item} alt={name}/>
                    })}
                </div>
                <div className='single-room-info'>
                    <article className='desc'>
                    <h3>details</h3>
                    <p>{description}</p>
                    </article>
                    <article className='info'>
                        <h3>info</h3>
                        <h6>price: ${price}</h6>
                        <h6>size: {size}<span style={{textTransform: 'lowercase'}}> m^2</span></h6>
                        <h6>Max Capacity: {capacity} {capacity<2 ? 'person' : 'people'}</h6>
                        <h6>{pets ? 'Pets are allowed' : 'pets are not allowed'}</h6>
                        <h6>{breakfast && "free breakfast included"}</h6>
                    </article>
                </div>
            </section>
            <section className='room-extras'>
                <h6>extras</h6>
                <ul className="extras">
                    {extras.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}
