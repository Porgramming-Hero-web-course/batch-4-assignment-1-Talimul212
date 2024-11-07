# The Significance of Union and Intersection Types in TypeScript

TypeScript offers powerful features like union and intersection types that improve type safety and flexibility in code.

## Union Types

Union types allow a variable to hold values of different types. By using the pipe (`|`) symbol, we can combine types.

### Example:

let value: string | number;
value = "Hello";
value = 42;

## Intersection Types

Intersection types combine multiple types into one. This is useful when you need an object to have properties from more than one type.

### Example:

```typescript
type Admin = { role: string };
type User = { name: string };

type AdminUser = Admin & User;

let adminUser: AdminUser = { role: "Admin", name: "John" };
```
