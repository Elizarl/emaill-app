import React from 'react';
import '../Inbox/Inbox.sass';
import Header from '../Header/Header';
import EmailCards from '../EmailCards/EmailCards';

const Inbox = () => {
    return (
        <div id="inbox-container">
            <Header />
            <EmailCards/>
        </div>
     );
};

export default Inbox; 