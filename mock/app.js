delete require.cache[require.resolve('./home_mock')]
delete require.cache[require.resolve('./myprizes_mock')]
delete require.cache[require.resolve('./lottery_mock')]
const proxy = {
  'GET /motor/pleasure/worldcup/index': require('./home_mock'),
  'GET /motor/pleasure/worldcup/awards/list': require('./myprizes_mock'),
  'POST /motor/pleasure/worldcup/lottery': require('./lottery_mock')
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
