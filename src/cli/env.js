const parseEnv = () => {
  const result = Object.entries(process.env).reduce((acc, [key, value]) => {
    if (key.startsWith('RSS_')) {
      return `${acc}; ${key}=${value}`;
    }

    return acc;
  }, '');

  console.log(result.slice(2));
};

parseEnv();
