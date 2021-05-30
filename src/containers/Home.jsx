import React from "react";
import { connect } from 'react-redux';
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import useInitialState from "../hooks/useInitialState";

import "../assets/styles/App.scss";


const Home = ({myList, trends, originals}) => {
    return (
        <React.Fragment>
            <Search />
            {myList.length > 0 &&
                <Categories title="Mi Lista">
                    <Carousel>
                        {myList.map(item => 
                            <CarouselItem 
                            key={item.id} 
                            {...item} 
                            isList
                            />
                        )}
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {trends.map(item2 => 
                        <CarouselItem key={item2.id} {...item2} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Originals">
                <Carousel>
                    {originals.map(item3 => 
                        <CarouselItem key={item3.id} {...item3} />
                    )}
                </Carousel>
            </Categories>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals
    }
}

export default connect(mapStateToProps, null)(Home);