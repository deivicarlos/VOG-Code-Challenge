const config = {};

config.common = {
  API_ENDPOINT:
    process.env.API_ENDPOINT ||
    'http://codingchallenge.mxmjqkudpq.ca-central-1.elasticbeanstalk.com/api/account',
};

const { API_ENDPOINT } = { ...config.common };

export default API_ENDPOINT;
