import React from 'react'

function Meat() {
    return (
        <div>
        <section id="page-title">
          <div className="container column">
            <h1>Our Meat</h1>
            <p>Our premium products include Rump, Fillet, Sirloin (Strip Loin),<br />Oxtail, Silverside, Topside, Lean Mince and Boerewors.</p>
          </div>
        </section>
        <section id="content">
          <div className="container">
            <p><span className="big">Consistently sourcing only high-grade meat for our products is challenging but rewarding. Our mandate is to always use healthy, top quality beef, chicken and pork.</span></p>
            <p>We hold our suppliers to strict standards to ensure our customers always enjoy quality meat products. Our premium products include Rump, Fillet, Sirloin (Strip Loin), Oxtail, Silverside, Topside, Lean Mince and Boerewors. Our beef comes from premium Zimbabwean-bred cattle, predominantly sourced from the Matabeleland region and primarily sustained on their natural grass-fed diet.</p>
          </div>
        </section>
        <section id="premium">
          <div className="container">
            <div className="content-body">
              <p className="main">High-grade meat for Premium Products</p>
              <p className="sub">We discourage the use of antibiotics and hormones, and only<br /> utilise those suppliers who practise fair and sustainable farming<br /> methods.</p>
            </div>
          </div>
        </section>
        <section id="content">
          <div className="container">
            <div className="row">
              <div className="col-7">
                <p>
                  We discourage the use of antibiotics and hormones, and only utilise those suppliers who practise fair and sustainable farming methods.
                </p>
                <p>
                  Our vision is to make premium quality meat more affordable than ever before. Through partnering with a select group of reputable abattoirs, we’re able to purchase in large quantities and pass the savings onto you.
                </p>
                <p>
                  Our products are cheaper than what you’d find at large grocery chains and in most cases even cheaper than what you’d find in niche butcheries as we don’t have the overheads associated with premium physical locations in upmarket shopping centres.
                </p>
                <button type="button" className="btn btn-outline-dark">ORDER NOW</button>
              </div>
              <div className="col-5">
                <div className="drop-quote">
                  ... premium quality meat more affordable than ever before.
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default Meat
