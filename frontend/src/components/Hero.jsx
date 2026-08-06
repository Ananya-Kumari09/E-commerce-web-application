const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="hero-tags">

          <span>NEW SEASON</span>
          <span>SS 2025</span>
          <span>CURATED EDITS</span>

        </div>

        <h1>
          Dress the
          <br />
          <span>Story</span>
          <br />
          You Tell.
        </h1>

        <div className="hero-line"></div>

        <p>
          Curated fashion that moves with you —
          timeless silhouettes, premium fabrics,
          and effortless style for every chapter
          of your life.
        </p>

        <div className="hero-buttons">

          <button className="shop-btn">
            SHOP NOW
          </button>

          <button className="lookbook-btn">
            View Lookbook →
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="circle-bg"></div>

        <div className="discount-box">

          <small>TODAY ONLY</small>

          <h3>20% OFF</h3>

        </div>

        <div className="hero-image">

          <img
src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200"            alt=""
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;