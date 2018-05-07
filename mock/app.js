delete require.cache[require.resolve('./home_mock')]
delete require.cache[require.resolve('./awards_mock')]
delete require.cache[require.resolve('./prizes_mock')]
delete require.cache[require.resolve('./prizes_detail_mock')]
delete require.cache[require.resolve('./lottery_mock')]
delete require.cache[require.resolve('./call_mock')]
delete require.cache[require.resolve('./invite_mock')]
delete require.cache[require.resolve('./notice_mock')]

const proxy = {
  'GET /motor/pleasure/worldcup/index': require('./home_mock'),
  'GET /motor/pleasure/worldcup/awards/list': require('./awards_mock'),
  'GET /motor/pleasure/worldcup/prize/list': require('./prizes_mock'),
  'GET /motor/pleasure/worldcup/prize/detail': require('./prizes_detail_mock'),
  'POST /motor/pleasure/worldcup/lottery': require('./lottery_mock'),
  'POST /motor/pleasure/worldcup/call': require('./call_mock'),
  'POST /motor/pleasure/worldcup/invite': require('./invite_mock'),
  'GET /motor/pleasure/worldcup/winners': require('./notice_mock')

  /**
   * example
   */
  // 'POST /api/login/account': (req, res) => {
  //   const { password, username } = req.body;
  //   if (password === '888888' && username === 'admin') {
  //     return res.json({
  //       status: 'ok',
  //       code: 0,
  //       token: "sdfsdfsdfdsf",
  //       data: {
  //         id: 1,
  //         username: 'kenny',
  //         sex: 6
  //       }
  //     });
  //   } else {
  //     return res.json({
  //       status: 'error',
  //       code: 403
  //     });
  //   }
  // },
  // 'DELETE /api/user/:id': (req, res) => {
  //   console.log('---->', req.body)
  //   console.log('---->', req.params.id)
  //   res.send({ status: 'ok', message: '删除成功！' });
  // }
}
module.exports = proxy;
