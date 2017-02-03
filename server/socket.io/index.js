module.exports = function(client) {
    let roomId = null;

    client.on('join room', function(room_id) {
        console.log('welcome ip: ' + client.handshake.address + ', clientId: ' + client.id + ' join the room: ' + room_id);
        client.join(room_id);
        roomId = room_id;
    });

    client.on('push change', function(patches) {
        if (roomId) {
            console.log(client.id + ' is pushing changes to room: ' + roomId);
            client.to(roomId).emit('listen change', patches);
        }
    })

    client.on('sync others', function(latestCode) {
        if (roomId) {
            console.log(client.id + ' is sycn changes to other room: ' + roomId);
            client.to(roomId).emit('sync redux', latestCode);
        }
    })

    client.on('leave room', function(roomId) {
        console.log('goodbay:' + client.id + ' leave the room: ' + roomId);
        client.leave(roomId);
    });
}
