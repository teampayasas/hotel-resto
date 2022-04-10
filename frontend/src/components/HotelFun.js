// https://www.booking.com/hotel/us/vacation-village-weston.en-us.html?aid=1250365;label=olr-bing%3A93c0f12a3a1212ea23ca937bc3b583be;sid=77dab7e34635371b957339afb917e710;checkin=2022-04-16;checkout=2022-04-17;dest_id=20024505;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;soh=1;sr_order=popularity;srepoch=1649539532;srpvid=658296a508d0011c;type=total;ucfs=1&#no_availability_msg
import React from "react";
import { FaCommentDots, FaLock, FaMoneyBillWave, FaUserFriends } from "react-icons/fa";

function FunHotel() {
    return (
        <section className="fun-services">
        <h3> 5 Reasons to choose Hotel Resto </h3>
        <ul>
            <FaMoneyBillWave/><p> Prices you can't beat! </p>
            <FaLock/><p> Booking is safe </p>
            <FaCommentDots/><p> The staff speaks English </p>
            <FaUserFriends/><p> Great location and facilities for couples </p>
        </ul>
        </section>
        )
  }
  
  export default FunHotel;