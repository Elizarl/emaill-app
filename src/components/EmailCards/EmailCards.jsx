import React from 'react';
import { connect } from 'react-redux';

import '../EmailCards/EmailCards.sass';
import CardItem from '../../components/CardItem/CardItem';


export const EmailCards = (props) => {
    return (
        <div className="email-cards-container">
            <div className="email-cards">
                {
                    props.emails.map((email) => (
                        <CardItem from={email.from} subject={email.subject} key={email.id} id={email.id} />
                ))}
            </div>
        </div>
     );
};

const mapStateToProps = (state) => ({
    emails: state.emails.filter((email) => {
        if (state.filter.filterby == "inbox")
            return email.spam == false && email.deleted == false
        else if(state.filter.filterby == "spam")
            return email.spam == true;
        else (state.filter.filterby == "deleted")
            return email.deleted == true;
    })
});

export default connect(mapStateToProps)(EmailCards);