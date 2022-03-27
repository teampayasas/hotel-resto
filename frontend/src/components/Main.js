// Functional component
import React from 'react'

function Main() {
    return <main>
        <section className='overview' id="about-us"> 
        <h2>WHO WE ARE</h2>
        <div class="sectionLayout">
        {/* http://www.whiteskyhospitality.com/blog/wp-content/uploads/2014/11/Reach_Hotel-description-template_V2_FOR-DOWNLOAD.pdf */}
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
        <h2>WHAT WE OFFER</h2>
        <p> <i> Deluxe Room </i> <br />
        Independent, spacious, luxuriously appointed 
        cottages of 600 soft with a private sit out 
        overlooking the river. <br />
        <img src="https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347_1280.jpg" alt="room" className="bedrooms" />
        <br/>
        Price: £100 per night
        {/* <img src="https://cdn.pixabay.com/photo/2016/07/08/23/33/hotel-room-1505455_1280.jpg" alt="room" /> */}
        
        <br/>
        <br/>
        
        <i> Deluxe Villa </i> <br />
        The room is equipped with a fireplace, a king size 
        bed, a telephone and an attached bathroom. 
        The room overlooks the lake. <br />
        <img src="https://cdn.pixabay.com/photo/2016/10/01/01/53/room-1706801_1280.jpg" alt="room" className="bedrooms" />
        {/* <img src="https://cdn.pixabay.com/photo/2021/10/06/15/05/bedroom-6686061_1280.jpg" alt="room" /> */}
        <br/>
        Price: £200 per night
        </p>
        </section>
        </main>
}

export default Main