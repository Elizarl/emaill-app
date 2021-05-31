import React from 'react';
import '../DetailView/DetailView.sass';
import ActionButtons from '../ActionButtons/ActionButtons';
import EmailDescription from '../EmailDescription/EmailDescription';

const DetailView = () => {
    return (
        <div className="detail-view">
            <ActionButtons />
            <EmailDescription/>
        </div>
     );
};

export default DetailView;