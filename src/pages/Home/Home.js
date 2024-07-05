import React from "react";
import "./Home.css"
import Product from "../../entitys/Product/Product"


export default function Home() {

    return (

        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                <div className="home__row">
                    {<Product title="Anna" image="https://readingmattersblog.com/wp-content/uploads/2020/04/anna.jpg" price={19.99} rating={4}/>}
                    {<Product title="Trilogia nacidos de la bruma" image="https://images.cdn2.buscalibre.com/fit-in/360x360/99/db/99db27a21964ecf13f77462c29ebb84c.jpg" price={29.99} rating={5}/>}

                </div>

                <div className="home__row">
                    {/*Product*/}
                    {/*Product*/}
                    {/*Product*/}
                </div>

                <div className="home__row">
                    {/*Product*/}
                </div>

            </div>
        </div>
    )

}