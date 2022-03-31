import { User } from "../../../src/http/user";

const users: {[index: string]: User} = {
  4: {name: 'Mark'},
  5: {name: 'Paul'},
};
console.log('Mock Used!')
export default function request(url: string): Promise<User|string> {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr('/users/'.length), 10);
    process.nextTick(() =>
      users[userID]
        ? resolve(users[userID])
        : reject({
            error: `User with ${userID} not found.`,
          }),
    );
  });
}

