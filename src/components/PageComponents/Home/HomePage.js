import React from 'react'

//import S1Hero from "./s1Hero"
import S2BizDetailsCard from "./s2BizDetailsCard"
import S3MenuButton from "./s3MenuButton"
//import S2Features from "./s2Features"
//import S3SplitSections from './s3SplitSections'

import S4FeaturedSpecials from "./s4FeaturedSpecials"
//import S4Stats from './s4Stats'
//import S5Testimonials from './s5Testimonials'
//import S6CTA from './s6CTA'

//import S1Hero2 from "./s1Hero2"
//import BG from "../../../images/mexican-serape-blanket-wooden-plank-background-wood-120257083.jpg"
//import BG from "../../../images/mexican-decoration.jpg"
//import BG from "../../../images/tacos+07.jpg"
//import BG from "../../../images/front-restaurant.jpg"
//import BG from "../../../images/wood-bg.jpg"
import BG from "../../../images/9d4b84c9a79e96232808764e912061e8_-united-states-california-san-bernardino-county-colton-346931-cotijas-taco-shophtm.jpg"
import S1Hero3 from "./s1Hero3"
import S1Hero4 from './s1Hero4'



const HomePage = (props) => {
    return(
        <>
        <S1Hero4
        bgImage={BG} />
        {/*<S1Hero3
        bgImage={BG}
        Title="Cotijas Taco Shop"
        Description="Home Of The Shrimp Burrito!"
        ButtonText=""
        BelowButtonText=""
        />*/}

        <S2BizDetailsCard />
        <S4FeaturedSpecials />
       <S3MenuButton />

       


        </>
    )
} 

export default HomePage