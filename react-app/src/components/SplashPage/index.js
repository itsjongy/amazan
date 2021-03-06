import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/product";
import ProductCard from "../ProductCard";

import './style/index.css';

const SplashPage = () => {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();
    const products = useSelector(state => Object.values(state.product));

    useEffect(() => {
        (async () => {
            await dispatch(getProducts());
            setLoaded(true);
        })();
    }, [dispatch]);

    if (!loaded) {
        return null;
    };

    const rowOne = products.slice(0, 3);
    const rowTwo = products.slice(3, 6);
    const rowThree = products.slice(6, 9);

    return (
        <div className="splash-container">
            <img className="splash-img" alt="splash-background" src="https://media.architecturaldigest.com/photos/5823ba99355a259d55d51886/16:9/w_3167,h_1781,c_limit/Blackband-Design-California-home-tour_03.jpg" />
            <div className="splash-products">
                {rowOne.map((each) => (
                    <ProductCard
                        key={each.id}
                        name={each.name}
                        price={each.price}
                        product_img={each.product_img}
                        rating={
                            each.average_rating_length
                                ? each.average_rating_total / each.average_rating_length
                                : 0
                        }
                        id={each.id} />
                ))}
            </div>
            <div className="splash-products">
                {rowTwo.map((each) => (
                    <ProductCard
                        key={each.id}
                        name={each.name}
                        price={each.price}
                        product_img={each.product_img}
                        rating={
                            each.average_rating_length
                                ? each.average_rating_total / each.average_rating_length
                                : 0
                        }
                        id={each.id} />
                ))}
            </div>
            <div className="splash-products">
                {rowThree.map((each) => (
                    <ProductCard
                        key={each.id}
                        name={each.name}
                        price={each.price}
                        product_img={each.product_img}
                        rating={
                            each.average_rating_length
                                ? each.average_rating_total / each.average_rating_length
                                : 0
                        }
                        id={each.id} />
                ))}
            </div>
        </div>
    )
}

export default SplashPage;
