import React from "react";

export function Hotels() {
  return (
    <div className="hotels">
      <div className="title">Hotels</div>
      <div className="content">
        <div className="row">
          <div className="col offset-lg-1 col-lg-10 offset-xl-3 col-xl-6 offset-xxl-5 col-xxl-1">
            <div className="row">
              <div className="col">
                <a href="https://jwlees.dbm.guestline.net/availability?hotel=JWLEESSTAN&_ga=2.216378070.1946952260.1589200074-104676365.1589200074">
                  <div className="hotel-section">
                    <div className="button-section">
                      <div className="hotel-name">Stanneylands</div>
                      <span className="fas fa-chevron-right"></span>
                    </div>
                    <div className="underline"></div>
                    <div className="hotel-description">
                      A warm and friendly hotel based in the heart of Wilmslow
                      offering a stylish country-house experience, just a few
                      minutes taxi from the Lodge.
                      <br></br>
                      <br></br>
                      Rooms here are around <span>£120</span> and we can offer
                      you a<span> STYAL</span> disount code which provides free
                      breakfast within the price.
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="row">
              {/* <div className="col-12 col-sm-6">
                <a href="http://www.booking.com/Share-OPjCUVf">
                  <div className="hotel-section">
                    <div className="button-section">
                      <div className="hotel-name">Handforth Premier Inn</div>
                      <span className="fas fa-chevron-right"></span>
                    </div>
                    <div className="underline"></div>
                    <div className="hotel-description">
                      <ul>
                        <li>7 min drive</li>
                        <li>
                          <span>£50</span> a night
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
              </div> */}
              <div className="col-12 col-sm-6">
                <a href="https://www.booking.com/searchresults.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4ARfIAQzYAQHoAQH4AQuIAgGoAgO4AtTry-4FwAIB&lang=en-gb&sid=5859f6de84426795a53e60f2348c8838&sb=1&src=searchresults&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fsearchresults.en-gb.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4ARfIAQzYAQHoAQH4AQuIAgGoAgO4AtTry-4FwAIB%3Bsid%3D5859f6de84426795a53e60f2348c8838%3Btmpl%3Dsearchresults%3Bac_click_type%3Db%3Bac_position%3D2%3Bcheckin_month%3D7%3Bcheckin_monthday%3D5%3Bcheckin_year%3D2020%3Bcheckout_month%3D7%3Bcheckout_monthday%3D6%3Bcheckout_year%3D2020%3Bclass_interval%3D1%3Bdest_id%3D-2611787%3Bdest_type%3Dcity%3Bdtdisc%3D0%3Bfrom_sf%3D1%3Bgroup_adults%3D2%3Bgroup_children%3D0%3Binac%3D0%3Bindex_postcard%3D0%3Blabel_click%3Dundef%3Bno_rooms%3D1%3Boffset%3D0%3Bpostcard%3D0%3Braw_dest_type%3Dcity%3Broom1%3DA%252CA%3Bsb_price_type%3Dtotal%3Bsearch_selected%3D1%3Bshw_aparth%3D1%3Bslp_r_match%3D0%3Bsrc%3Dsearchresults%3Bsrc_elem%3Dsb%3Bsrpvid%3D7a765769c8e80008%3Bss%3DWilmslow%252C%2520Cheshire%252C%2520United%2520Kingdom%3Bss_all%3D0%3Bss_raw%3Dstyal%3Bssb%3Dempty%3Bsshis%3D0%3Bssne%3DQuarry%2520Bank%2520Mill%2520and%2520Styal%2520Estate%3Bssne_untouched%3DQuarry%2520Bank%2520Mill%2520and%2520Styal%2520Estate%3Btop_ufis%3D1%26%3B&ss=Wilmslow&is_ski_area=0&ssne=Wilmslow&ssne_untouched=Wilmslow&city=-2611787&checkin_year=2021&checkin_month=7&checkin_monthday=4&checkout_year=2021&checkout_month=7&checkout_monthday=5&group_adults=2&group_children=0&no_rooms=1&from_sf=1">
                  <div className="hotel-section">
                    <div className="button-section">
                      <div className="hotel-name">Browse more</div>
                      <span className="fas fa-chevron-right"></span>
                    </div>
                    <div className="underline"></div>
                    <div className="hotel-description">
                      4th July 2021;
                      <br></br>
                      Styal/Wilmslow area
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
