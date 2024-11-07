{
  //
  const countWordOccurrences = (sentence: string, word: string): number => {
    const sameSentence = sentence.toLowerCase();
    const sameWord = word.toLowerCase();

    const singlewords = sameSentence.split(/\W+/);
    const repeat = singlewords.filter((w) => w === sameWord).length;

    return repeat;
  };

  const input = countWordOccurrences(
    "TypeScript is great. I love TypeScript!",
    "typescript"
  );

  console.log("Output:", input);

  //
}
