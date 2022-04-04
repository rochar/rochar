const Hero = (props) => {

    return (
        // <!-- ======= Hero Section ======= -->
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
          <div class="hero-container" data-aos="fade-in">
            <h1>{props.name}</h1>
            <p>I'm <span class="typed" data-typed-items="Software Engineer"></span></p>
          </div>
        </section>
        // <!-- End Hero -->
    );
}
export default Hero;