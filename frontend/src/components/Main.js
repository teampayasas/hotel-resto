// Functional component
import React from 'react'

function Main() {
    return <main>
        <section className='overview'> 
        <i> <b> Hotel Overview </b> </i>
        {/* http://www.whiteskyhospitality.com/blog/wp-content/uploads/2014/11/Reach_Hotel-description-template_V2_FOR-DOWNLOAD.pdf */}
        <p> Set on the peaceful backwaters of Wymouth, this hotel welcomes guests with a beautiful outdoor pool, which overlooks the lake.
            Elegant cottages boasts a private hot tub for guests to relax in. <br />

            Offering an outdoor concept, the resort Restaurant serves Indian and continental dishes. 
            Guests can also enjoy alcoholic drinks at the bar. <br />

            Guests can select from various spa treatments and utilize the business 
            centre. The Resort also offers laundry services and luggage storage space. 
            Excursions and nature treks can be arranged at the tour desk. <br />

            Guests can select from various spa treatments and utilize the business centre. The Resort also offers laundry services and luggage storage space. Excursions and nature treks can be arranged at the tour desk.
        </p>
        </section>

        <section className='rooms'>
        <i> <b> Rooms </b> </i> <br />
        <i> Deluxe Room </i>
        <p>
        Independent, spacious, luxuriously appointed cottages of 600 sqft with a private sit out overlooking the river.
        </p> <br />
        <i> Deluxe Villa </i>
        <p>
            The room is equipped with a fireplace, a king size bed, a telephone and an attached bathroom. 
            The room overlooks the lake.
        </p>
        </section>
        </main>
}

export default Main