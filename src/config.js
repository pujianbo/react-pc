module.exports = {
  port: 3000,
  IPv4: 'localhost',
  agentSev: 'http://192.168.2.11:1780', //家校通内网地址
  agentSevWx: 'http://192.168.2.13:8800', //随寻通内网地址
  agentSevTest: 'http://www.cnzoom.com', //测试地址
  getAgent: function() {
    return {
      '/user/*': {
        target: this.agentSev
      },
      '/jxt/*': {
        target: this.agentSevTest
      },
    }
  },
  getIP: function() {
    try {
      const network = require('os').networkInterfaces()
      this.IPv4 = network[Object.keys(network)[0]][1].address
      if (this.IPv4.length < 7)
        this.IPv4 = network[Object.keys(network)[1]][1].address
    } catch (e) {
      this.IPv4 = '127.0.0.1';
    } finally {
      const httpStr = 'http://' + this.IPv4 + ':' + this.port;
      const opn = require('opn');
      console.log(httpStr);
      setTimeout(function() {
        opn(httpStr);
      }, 20000);
      return this.IPv4;
    }
  }
}
