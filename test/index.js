const assert = require('assert')
const convertIpInto32int = require('../lib/index').convertIpInto32int

describe('iptoint', function () {
  describe('conver result check', function () {
    it('should return 2896692481 when input 172.168.5.1', function () {
      assert.equal(convertIpInto32int('172.168.5.1'), 2896692481)
    })
  })
})
