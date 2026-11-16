export default function AuguriesOfInnocence() {
  return (
    <article>
      <h2 className="text-2xl font-semibold sm:text-3xl">
        Auguries of Innocence
      </h2>
      <div className="mt-8 text-sm leading-relaxed text-muted lg:mt-16">
        <p>Sadler’s Wells, London</p>
        <time dateTime="2026-09-30">30 September 2026</time>
      </div>

      <div className="mt-8 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:items-end lg:gap-14">
        <figure>
          <img
            src="/images/story-auguries-of-innocence.webp"
            alt="The cast of Auguries of Innocence taking a bow on stage"
            className="aspect-video w-full object-cover"
          />
        </figure>

        <div className="max-w-[60ch] space-y-5 text-base leading-relaxed">
          <p>
            I felt as though I had just watched a Korean period drama. The
            dancers moved with the force of an ink-loaded brush drawn across
            paper. Low, deep cries broke through the movement, and every so
            often the sound of the beopgo, a Korean Buddhist drum, rang out. I
            heard in it the resolve of someone determined to hold on to what
            mattered.
          </p>
          <p>
            The lighting sometimes drew my eye across the stage and sometimes
            held it in one place. The set, the costumes, the sound. Every
            element felt deliberately placed.
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-5 text-base leading-relaxed lg:mt-20">
        <p>
          I felt an ache I couldn’t quite call sadness. It was closer to the
          effort of holding yourself together.
        </p>
        <p>
          I may have taken something different from what the work set out to
          say. Still, I recognised something Korean in it that I found difficult
          to put into words. There was a sense of swallowing grief and standing
          firm, of holding on to something until the end.
        </p>

        <p>without a word, the ensemble and the sound carried it all.</p>
        <p>At some point, I felt tears well up.</p>
      </div>
      <footer className="mt-8 space-y-1 text-sm leading-relaxed text-muted">
        <p>English National Ballet</p>
        <p>
          Choreography ·{' '}
          <a
            href="https://www.instagram.com/jaemanjoo/"
            className="hover:underline"
          >
            Jae Man Joo
          </a>
        </p>
        <p>
          <a
            href="https://www.instagram.com/sadlers_wells/"
            className="hover:underline"
          >
            Sadler’s Wells
          </a>
        </p>
      </footer>
    </article>
  );
}
