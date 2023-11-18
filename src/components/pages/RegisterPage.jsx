import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const registration = [
    "By registering and making a payment you agree that all details provided are accurate. Any discrepancy may result in cancellation of registration.",
    "By registering and making a payment you agree that all details provided are accurate. Any discrepancy may result in cancellation of registration.",
    "Cancellation and rescheduling of registration are not allowed.",
    "All tickets are non-refundable, non-transferable and is valid for one attendee only.",
    "Holder of any duplicate or forged passes/badges/tickets will be handed over to the security and/or police personnel. Forging passes is a criminal offence.",
  ];
  const solicitation = [
    "The organisers reserve the rights of frisk and restrict entry.",
    "Please cooperate with the private security and police personnel or any agencies for security checks.",
    "Any individual might be asked to leave the venue without any liability of a refund if there is any behavioural misdemeanour. This decision rests with the conference and venue management and is final and binding.",
    "No Flash Photography or video recording at the venue is permitted, under any circumstances.",
    "Carrying of food items, alcohol, cigarettes, weapons, inflammable and banned substances are strictly prohibited.",
    "The organiser does not take any responsibility for injuries, loss or theft of any personal belongings of the ticket holder.",
    "There will be adequate breaks for networking and refreshments.",
    "No children under the age of 15 will be allowed at the venue unaccompanied.",
    "All standard venue and attendee rules are to be adhered to by attendees.",
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
  const socialize = [
    "Use the official hashtag #TEDxBITBangalore on social media to talk about the event.",
    "We urge you to carpool to save fuel and get to know fellow attendees before the event.",
    "Most importantly, have a great time!",
  ];
  return (
    <div className="mx-gutter lg:mx-gutterbig my-5">
      <section>
        {" "}
        <h3 className="text-center">
          Register Now! <span className="text-ted "></span>
        </h3>
        <div className="bg-ted hover:bg-invert hover:text-invert max-w-fit px-5 py-3 m-auto my-10">
          <a
            href={"https://forms.gle/p8khgTSU9Pov9EhHA"}
            rel="noreferrer"
            target="_blank"
            className="text-2xl"
          >
            <h5 className="lg:text-5xl">Registration</h5>
          </a>
        </div>
      </section>
      <section>
        {" "}
        <p className="text-normal">
          Before registering, make sure to read and comply to the following
          rules and guidelines regarding the event:
        </p>
        <div className="grid lg:grid-cols-2 gap-x-14">
          <div>
            <h3 className="my-5 max-md:text-center">Registration</h3>
            <ol>
              {registration.map((item) => (
                <li>{item}</li>
              ))}
            </ol>
            <h3 className="my-5 max-md:text-center">VENUE</h3>
            <ol>
              {venue.map((item) => (
                <li>{item}</li>
              ))}
            </ol>
          </div>
          <div className="">
            <h3 className="my-5 max-md:text-center">Socilictation</h3>
            <ol>
              {solicitation.map((item) => (
                <li>{item}</li>
              ))}
            </ol>
            <h3 className="my-5 max-md:text-center">Socialize</h3>
            <ol>
              {socialize.map((item) => (
                <li>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
      <div className="my-14">
        <Link className="text-3xl  underline" to="/">
          Event -{`>`}
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
