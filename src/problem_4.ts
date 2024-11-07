{
  //
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };
  type Shape = Circle | Rectangle;

  const calculateShapeArea = (areaInfo: Shape): any => {
    if (areaInfo.shape === "circle") {
      return parseFloat((Math.PI * areaInfo.radius ** 2).toFixed(2));
    } else if (areaInfo.shape === "rectangle") {
      return areaInfo?.width * areaInfo?.height;
    }
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(" Area of Cricle", circleArea);
  console.log(" Area of Rectangle:", rectangleArea);

  //
}
