import React from 'react';

import '../EmailCards/EmailCards.sass';
import { emails } from "../../mockData/mail-data";
import CardItem from '../../components/CardItem/CardItem';

const EmailCards = () => {
    return (
        <div className="email-cards-container">
            <div className="email-cards">
                {
                    emails.map((email) => (
                        <CardItem from={email.from} subject={email.subject} key={email.tag} />
                ))}
            </div>
        </div>
     );
};

export default EmailCards; 