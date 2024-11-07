{
  //
  const validateKeys = <T extends object>(
    obj: T,
    keys: (keyof T)[]
  ): boolean => {
    const result = keys.every((key) => key in obj);
    return result;
  };

  const person = { name: "Alice", age: 25, email: "alice@example.com" };

  console.log("Result:", validateKeys(person, ["name", "age"]));
  //   console.log(validateKeys(person, ["name", "age", "lolo"]));
  //
}
