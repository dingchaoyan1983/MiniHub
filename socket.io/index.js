module.exports = function(client) {
    client.on('join room', function(data) {
        console.log('join room');
        client.join('动态roomid');
    });

    client.on('push change', function(data) {
        client.to('动态roomid').emit('listen change', { some: 'data' });
    })

    client.on('leave room', function(data) {
        console.log('leave room');
        client.leave('动态roomid');
    });
}
