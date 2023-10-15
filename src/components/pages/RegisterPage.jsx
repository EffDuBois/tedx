import React from "react";

const RegisterPage = () => {
  const registration = [
    "By registering and making a payment you agree that all details provided are accurate. Any discrepancy may result in cancellation of registration.",
    "By registering and making a payment you agree that all details provided are accurate. Any discrepancy may result in cancellation of registration.",
    "Cancellation and rescheduling of registration are not allowed.",
    "All tickets are non-refundable, non-transferable and is valid for one attendee only.",
    "Holder of any duplicate or forged passes/badges/tickets will be handed over to the security and/or police personnel. Forging passes is a criminal offence.",
  ];
  const venue = [
    "We urge you to mark your presence at the venue 45 minutes prior to event timing to carry out necessary verification.",
    "All attendees must carry e-ticket or its printout for verification at the venue.",
    "Please carry a valid government identity card to attain a conference attendee badge at the venue. Eg: Aadhar card, Voter ID, PAN card, etc.",
    "The attendees must wear their conference badge throughout the conference across all venues.",
    "Seat numbers will be allotted to each confirmed and verified attendee at the entrance.",
    "Entry into the auditorium will only start 30 minutes before the event timing.",
    "The auditorium doors will remain shut during sessions and will not open for entry.",
    "Attendees reaching late at the venue will not be allowed inside the auditorium while the sessions are in progress.",
    "There will be a simulcast area to view live proceedings in the venue foyer area.",
    "Re-entry into the venue is strictly prohibited. Attendees will have to submit event badge to the security at exit. The same will not be given back.",
  ];
  return (
    <div className="mx-gutter lg:mx-gutterbig my-5">
      <h1>
        Register for <span className="text-white glow">INSIGHTX</span>
      </h1>
      <p>
        Before registering, make sure to read and comply to the following rules
        and guidelines regarding the event:
      </p>
      <p>
        <h2>REGISTRATION</h2>
        <ol>
          {registration.map((item) => (
            <li>{item}</li>
          ))}
        </ol>{" "}
        <h2>VENUE</h2>{" "}
        <ol>
          {venue.map((item) => (
            <li>{item}</li>
          ))}
        </ol>{" "}
      </p>
      <iframe
        className="m-auto"
        title="Gform"
        src="https://docs.google.com/forms/d/e/1FAIpQLSeYqzG7pKLX4PCnbK1RmcAvZCyE_TCd8rpVob3Rsf1rE_k38A/viewform?embedded=true"
        width="1000"
        height="1500"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default RegisterPage;
