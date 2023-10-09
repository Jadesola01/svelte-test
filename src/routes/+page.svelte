<script>
  import { ArrowRight, ChevronRight, Envelope, Hero, ThinkingWoman } from '$lib/assets/vectors';
  import HomeContents from 'src/home.contents';
  import './styles/home/home.scss';

  const { landing, aboutUs, projects, testimonials, subscribe } = HomeContents;
</script>

<svelte:head>
  <title>THDC Tech</title>
</svelte:head>

<section class="landing">
  <div class="content-restrictor landing-restrictor">
    <div class="landing-top-section">
      <div class="landing-contents">
        <div>
          <h1>{landing.heading}</h1>
          <p>{landing.subHeading}</p>
        </div>
        <button type="button">
          <span>{landing.buttonText}</span>
          <ChevronRight />
        </button>
      </div>
      <div class="hero-illustration-wrapper">
        <div>
          <Hero />
        </div>
      </div>
    </div>
    <div class="partners-list">
      {#each landing.partnersList as partner, i}
        <a href={partner.href} aria-label={partner.label}>
          <svelte:component this={partner.icon} />
        </a>
      {/each}
    </div>
  </div>
</section>

<section class="about-us">
  <div class="content-restrictor about-us-restrictor">
    <div>
      <h2 class="section-heading">
        {aboutUs.heading}
      </h2>
      <p class="section-subheading">
        {aboutUs.subHeading}
      </p>
    </div>
    <ul class="doings-list">
      {#each aboutUs.doings as doing}
        <li>
          <div>
            <svelte:component this={doing.icon} />
          </div>
          <h3>{doing.title}</h3>
          <p>{doing.description}</p>
        </li>
      {/each}
    </ul>
  </div>
</section>

<section class="our-works">
  <div class="content-restrictor our-works-restrictor">
    <div>
      <h2 class="section-heading">{projects.heading}</h2>
      <p class="section-subheading">{projects.subHeading}</p>
    </div>
    <ul class="works-list">
      {#each projects.works as work}
        <li>
          <div class="image-wrapper">
            <div>
              <img src={work.imgSrc} alt={work.imgAlt} />
            </div>
          </div>
          <div class={`work-description-wrapper${work.flip ? ' flipped' : ''}`}>
            <h3>{work.title}</h3>
            <p>{work.description}</p>
            <button type="button">
              <span>{work.btnText}</span>
            </button>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<section class="cta">
  <div class="content-restrictor cta-restrictor">
    <div class="content-wrapper">
      <div class="illustration">
        <ThinkingWoman />
      </div>
      <div class="cta-main-contents">
        <p>Have more questions to ask about us?</p>
        <button type="button">
          <span>Get A Quote</span>
          <ArrowRight />
        </button>
      </div>
    </div>
  </div>
</section>

<section class="our-clients">
  <div class="content-restrictor our-clients-restrictor">
    <div>
      <h2 class="section-heading">
        {testimonials.heading}
      </h2>
      <p class="section-subheading">
        {testimonials.subHeading}
      </p>
    </div>
    <ul class="testimonials">
      {#each testimonials.testimonials as testimonial}
        <li>
          <p class="comment-wrapper">
            <span>{testimonial.comment}</span>
          </p>
          <div class="author-details">
            <div class="avatar-wrapper">
              <img src={testimonial.avatarSrc} alt={`A portrait of ${testimonial.author}`} />
            </div>
            <div class="author-info">
              <h3>{testimonial.author}</h3>
              <p>{testimonial.title}, {testimonial.company}</p>
              <ul>
                <!-- TODO: star SVG out of 5 depending on the `rating` value e.gc., if `rating` is 3, 3 FilledStar SVG and 2 Star SVG are rendered -->
              </ul>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</section>

<section class="newsletter-subscription">
  <div class="content-restrictor newsletter-subscription-restrictor">
    <div>
      <h2 class="section-heading">
        {subscribe.heading}
      </h2>
      <p class="section-subheading">
        {subscribe.subHeading}
      </p>
    </div>
    <form>
      <label for="email">
        <div>
          <Envelope />
          <input type="email" id="email" placeholder="Add your email address" autocomplete="off" />
        </div>
        <button type="submit">
          <span>Subscribe</span>
          <ArrowRight />
        </button>
      </label>
    </form>
  </div>
</section>
