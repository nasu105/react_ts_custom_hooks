import React, { FC } from 'react';
import { UserProfile } from '../types/userProfile';

type Props = {
  user: UserProfile;
}

const style = {
  border: "solid 1px #ccc",
  borderRadius: "8px",
  padding: "0 16px",
  margin: "8px",
}

export const UserCard: FC<Props> = (props) => {
  const { user } = props;
  return (
    <div style={style}>
      <dl>名前</dl>
      <dt>{user.name}</dt>
      <dl>メール</dl>
      <dt>{user.email}</dt>
      <dl>住所</dl>
      <dt>{user.address}</dt>
    </div>
  )
}
