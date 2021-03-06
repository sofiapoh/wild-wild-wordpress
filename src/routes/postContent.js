const postContent = require('../helpers/postcontent');

module.exports = {
  method: 'POST',
  path: '/content',
  handler: (request, reply) => {
    if (!request.state.session || (Date.now() - request.state.session.last) > 30 * 60 * 1000) {
      return reply('Please log in to execute request').code(401);
    }
    postContent(request.payload, (err, result) => {
      return reply(result).code(201);
    });
  },
};
