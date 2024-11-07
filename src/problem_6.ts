{
  //
  interface Person {
    name: string;
    age: number;
    email: string;
  }
  const updateProfile = (obj: Person, key: Partial<Person>) => {
    const result = { ...obj, ...key };
    return result;
  };
  const myProfile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };
  console.log("Update Information:", updateProfile(myProfile, { age: 26 }));

  //
}
