const { createClient } = require('bedrock-protocol');

function startBot() {
  const client = createClient({
    host: 'zeusop103.aternos.me',
    port: 12524,
    username: 'AFKBotBedrock',
    offline: true
  });

  client.on('join', () => {
    console.log('✅ Bot joined the server!');
  });

  client.on('disconnect', (reason) => {
    console.log('❌ Bot disconnected:', reason);
    console.log('🔁 Reconnecting in 10 seconds...');
    setTimeout(startBot, 10000);
  });

  client.on('error', (err) => {
    console.log('❗ Error:', err);
  });
}

startBot();
