import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services : [
            {
                icon: <FaCocktail/> ,
                title: "free cocktails",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet, risus vitae condimentum gravida, quam urna vulputate libero, a tempus diam eros non quam.'
            },
            {
                icon: <FaHiking/> ,
                title: "endless hiking",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet, risus vitae condimentum gravida, quam urna vulputate libero, a tempus diam eros non quam.'
            },
            {
                icon: <FaShuttleVan/> ,
                title: "free shuttle",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet, risus vitae condimentum gravida, quam urna vulputate libero, a tempus diam eros non quam.'
            },
            {
                icon: <FaBeer/> ,
                title: "free beers",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet, risus vitae condimentum gravida, quam urna vulputate libero, a tempus diam eros non quam.'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='our services' />
                    <div className="services-center">
                        {this.state.services.map((item,index) =>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        })}
                    </div>
            </section>
        )
    }
}
