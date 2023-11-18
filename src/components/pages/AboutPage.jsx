import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="mt-16 mx-gutter lg:mx-64 mb-12  ">
      <h2 className="lg:text-center lg:my-0 lg:mb-8">
        About{" "}
        <span className="text-ted underline">
          <a href="https://www.ted.com/tedx">TEDx</a>
        </span>
      </h2>
      <p className="my-4">
        In the spirit of ideas worth spreading,{" "}
        <span classname="text-ted">TED</span> has created a program called{" "}
        <span className="text-ted">TEDx</span>.{" "}
        <span className="text-ted">TEDx </span> is a program of local,
        self-organized events that bring people together to share a{" "}
        <span classname="text-ted">TED</span>-like experience. Our event is
        called TEDxBitBangalore, where
        <br />
        <span className="text-ted">x</span> = independently organized{" "}
        <span classname="text-ted">TED</span>
        event. At our <span className="text-ted">TEDxBitBangalore</span> event
        INSIGHTX, <span classname="text-ted">TED</span> Talks video and live
        speakers will combine to spark deep discussion and connection in a small
        group. The <span classname="text-ted">TED</span> Conference provides
        general guidance for the <span className="text-ted">TEDx </span>{" "}
        program, but individual <span className="text-ted">TEDx </span> events,
        including ours, are self-organized.
      </p>
      <h2 className="lg:text-center lg:my-8">
        About <span className="text-ted">TED</span>
      </h2>
      <p className="my-4">
        <span classname="text-ted">TED</span> is a nonprofit organization
        devoted to Ideas Worth Spreading, often in the form of short talks
        delivered by leading thinkers and doers. Many of these talks are given
        at <span classname="text-ted">TED</span> Conferences, intimate{" "}
        <span classname="text-ted">TED</span>
        Salons and thousands of independently organised{" "}
        <span className="text-ted">TEDx</span> events around the world. Videos
        of these talks are made available, free, on{" "}
        <a className="text-ted underline" href="http://ted.com/">
          TED.com
        </a>{" "}
        and other platforms. Audio versions of{" "}
        <span className="text-ted">TED Talks</span> are published to{" "}
        <a
          className="text-ted underline"
          href="http://applepodcasts.com/tedtalksdaily"
        >
          TED Talks Daily
        </a>
        , available on all podcast platforms.
      </p>
      <p className="my-4">
        <span className="text-ted">TED's</span> open and free initiatives for
        spreading ideas include{" "}
        <a className="text-ted underline" href="http://ted.com/">
          TED.com
        </a>
        , where new <span classname="text-ted">TED</span> Talk videos are posted
        daily; <a href="http://www.ted.com/tedx">TEDx</a>, which licenses
        thousands of individuals and groups to host local, self-organized{" "}
        <span classname="text-ted">TED</span>-style events around the world; the{" "}
        <a className="text-ted underline" href="http://www.ted.com/fellows">
          TED Fellows
        </a>{" "}
        program, which selects innovators from around the globe to amplify the
        impact of their remarkable projects and activities;{" "}
        <a href="https://audaciousproject.org/">The Audacious Project</a>, which
        surfaces and funds critical ideas that have the potential to impact
        millions of lives;{" "}
        <a
          className="text-ted underline"
          href="https://www.ted.com/about/programs-initiatives/ted-translators"
        >
          TED Translators Program
        </a>
        , which crowdsources the subtitling of{" "}
        <span className="text-ted underline">TED Talks</span> so that big ideas
        can spread across languages and borders; and the educational initiative{" "}
        <a className="text-ted underline" href="http://ed.ted.com/">
          TED-Ed
        </a>
        . TED also offers{" "}
        <a className="text-ted underline" href="https://tedatwork.ted.com/">
          TED@Work
        </a>{" "}
        a program that reimagines <span classname="text-ted">TED</span> Talks
        for workplace learning. <span classname="text-ted">TED</span> also has a
        growing library of original podcasts, including{" "}
        <a
          className="text-ted underline"
          href="https://www.ted.com/podcasts/ted-interview"
        >
          The TED Interview
        </a>{" "}
        with Chris Anderson,{" "}
        <a className="underline" href="https://www.ted.com/podcasts/worklife">
          WorkLife with Adam Grant
        </a>
        ,{" "}
        <a
          className="underline"
          href="https://www.ted.com/podcasts/far_flung_with_saleem_reshamwala"
        >
          Far Flung with Saleem Reshamwala
        </a>{" "}
        and{" "}
        <a
          className="underline"
          href="https://www.ted.com/podcasts/how-to-be-a-better-human"
        >
          How to Be a Better Human
        </a>
        .
      </p>
      <p>
        Follow <span classname="text-ted">TED</span> on{" "}
        <a className="underline" href="http://twitter.com/TEDTalks">
          Twitter
        </a>
        ,{" "}
        <a className="underline" href="http://www.facebook.com/TED">
          Facebook
        </a>
        ,{" "}
        <a className="underline" href="https://instagram.com/ted">
          Instagram
        </a>{" "}
        and on{" "}
        <a
          className="underline"
          href="https://www.linkedin.com/company/ted-conferences"
        >
          LinkedIn
        </a>
        .
      </p>
      <br />
      <Link className="text-3xl my-20 underline" to="/">
        Event -{`>`}
      </Link>
    </div>
  );
};

export default AboutPage;
