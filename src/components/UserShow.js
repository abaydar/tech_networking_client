import React from 'react';

const UserShow = ({ match, users }) => {

  return (
    <div>
      <h3>{ users[match.params.userId].email }</h3>
    </div>
  );
}

export default UserShow;