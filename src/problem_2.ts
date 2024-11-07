{
  //generic+type alice
  type ArrayType<T> = Array<T>;
  const removeDuplicates = (array: ArrayType<number>): ArrayType<number> => {
    const result = array.filter(
      (item: number, index: number) => array.indexOf(item) === index
    );
    return result;
  };
  const unique: ArrayType<number> = [1, 2, 2, 3, 4, 4, 5];
  console.log("Duplicates of Array:", unique);
  console.log("Unique element of Array:", removeDuplicates(unique));
  //
}
