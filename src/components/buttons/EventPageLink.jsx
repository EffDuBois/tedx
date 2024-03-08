import React from 'react';
import { Link } from 'react-router-dom';

const EventPageLink = () => {
    return (
        <div className="ml-14 mb-14">
        <Link className="text-3xl  underline" to="/">
          Event -{`>`}
        </Link>
      </div>
    );
};

export default EventPageLink;