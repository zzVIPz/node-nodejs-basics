const parseArgs = () => {
  let result = '';

  process.argv.forEach((entry, idx, arr) => {
    if (entry.startsWith('--')) {
      result = `${result}, ${entry.slice(2)} is ${arr[idx + 1]}`;
    }
  });

  console.log(result.slice(2));
};

parseArgs();
