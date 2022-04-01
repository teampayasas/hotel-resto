// Functional component
import React from 'react'

function Main() {
    return <main>
        <section className='overview' id="about-us"> 
        <h2>WHO WE ARE</h2>
        <div class="sectionLayout">
        <img src="https://cdn.pixabay.com/photo/2016/11/17/09/28/hotel-1831072_1280.jpg"></img>
        <p> Set on the peaceful backwaters of Wymouth, this hotel welcomes guests with a beautiful outdoor pool, which overlooks the lake.
            Elegant cottages boasts a private hot tub for guests to relax in. <br />

            Offering an outdoor concept, the resort Restaurant serves Indian and continental dishes. 
            Guests can also enjoy alcoholic drinks at the bar. <br />

            Guests can select from various spa treatments and utilize the business 
            centre. The Resort also offers laundry services and luggage storage space. 
            Excursions and nature treks can be arranged at the tour desk. <br />

            Guests can select from various spa treatments and utilize the business centre. The Resort also offers laundry services and luggage storage space. Excursions and nature treks can be arranged at the tour desk.
        </p>
        </div>
        </section>

        <section className='rooms'>
        {/* https://www.geeksforgeeks.org/css-polaroid-images/ */}
        <h2>WHAT WE OFFER</h2> <br />
        <figure>
        <img src="https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347_1280.jpg" alt="room" id="room" className="bedrooms" />        
        <figcaption>
        <i> <b> Deluxe Room </b> </i>
        <p> Independent, spacious, luxuriously appointed 
        cottages of 600 soft with a private sit out 
        overlooking the river. <br/>
        Price: £100 per night </p> 
        </figcaption>
        </figure>
        {/* </section> */}

        {/* <section className='rooms'>  */}
        <figure>
        <img src="https://cdn.pixabay.com/photo/2016/10/01/01/53/room-1706801_1280.jpg" alt="room" id="villa" className="bedrooms" />
        <figcaption>
        <i> <b> Deluxe Villa </b> </i>
        <p> The room is equipped with a fireplace, a king size 
        bed, a telephone and an attached bathroom. 
        The room overlooks the lake. <br />
        Price: £200 per night </p>
        </figcaption>
        </figure>
        </section>
        </main>
}

export default Main