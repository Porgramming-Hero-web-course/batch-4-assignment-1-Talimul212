{
  //

  const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
  };
  const person = { name: "Alice", age: 30 };
  console.log("Simple Output:", getProperty(person, "name"));

  //
}
