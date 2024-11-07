{
  //generic+type alice
  type ArrayType<T> = Array<T>;

  const sumArray = (nums: ArrayType<number>): number => {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    return sum;
  };

  console.log(` Sum of all elements in the array:`, sumArray([1, 2, 3, 4, 5]));

  //
}
