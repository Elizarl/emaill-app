import React from 'react';
import '../Principal/Principal.sass';
import Inbox from '../../components/Inbox/Inbox';
import DetailView from '../../components/DetailView/DetailView';

const PrincipalPage = () => {
    return (
            <div className="container">
                   <Inbox className="inbox"></Inbox>
                   <DetailView className="detail"></DetailView>
             </div>
     );
};

export default PrincipalPage;