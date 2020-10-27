import React from 'react'
import "./Event.css"

const Event = () => {
    return (
        <section className="event-container">
      <div className="event-container__date-block">
        <div className="date-block__month">Dec</div>
        <div className="date-block__day">4</div>
      </div>
      <div className="event-container__event-details">
        <h1 className="event-details__title">boardme Founders meeting</h1>
        <p className="event-details__date-range">
          4 Dec 2019 &bull; 17:30 to 18:15
        </p>
        <div className="event-details__action-bar">
          <button className="action-bar__btn action-bar__btn--primary">
            Join Zoom Meeting
          </button>
          <button className="action-bar__btn action-bar__btn--dimmed">
            Meeting info
          </button>
        </div>
        <div className="event-details__attendees">
          <h2>Attendees</h2>
          <ul>
            <li className="attendees__email attendees__email--accepted">
              passion@email.com
            </li>
            <li className="attendees__email attendees__email--accepted">
              art@email.com
            </li>
            <li className="attendees__email attendees__email--tentative">
              love@email.com
            </li>
            <li className="attendees__email attendees__email--tentative">
              technology@email.com
            </li>
          </ul>
        </div>
      </div>
    </section>
    )
}

export default Event
