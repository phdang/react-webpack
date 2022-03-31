import request from './request';

export type User = {
    name: string
}

export function getUserName(userID: number) {
  return request(`/users/${userID}`).then((user: User) => user.name);
}