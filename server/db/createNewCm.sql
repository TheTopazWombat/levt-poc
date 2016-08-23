insert into customers (
  first_name,
  last_name,
  address,
  phone_num1,
  phone_num2,
  phone_num3,
  username,
  password)
  values (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8
  );
