import { ServerResponse } from "http";

const http = require('http');

export default function request(url: string) {
  return new Promise(resolve => {
    // This is an example of an http request, for example to fetch
    // user data from an API.
    // This module is being mocked in __mocks__/request.js
    http.get({path: url}, (response : ServerResponse)=> {
      let data = '';
      response.on('data', (_data: string) => (data += _data));
      response.on('end', () => resolve(data));
    });
  });
}

