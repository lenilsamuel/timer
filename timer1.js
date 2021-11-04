const input = process.argv.slice(2);
if (input.length === 0) return;
for (let sec of input) {
  if (sec < 0 || typeof +sec !== 'number') return;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, sec*1000);
}
