describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('submitServerInfo',function (){

  })
  it('updateServerTable()',function (){

  })


 
  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = ''
  });
});
