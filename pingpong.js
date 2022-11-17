function ping(request, response) {
  return response
    .status(200)
    .json({
      msg: 'pong'
    });
}

function pong(request, response) {
  return response
    .status(200)
    .json({
      msg: 'ping'
    });
}

module.exports = { ping, pong };