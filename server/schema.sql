CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  first_name varchar(40),
  last_name varchar(40),
  address varchar(250),
  phone_num1 varchar(10),
  phone_num2 varchar(10),
  phone_num3 varchar(10),
  username varchar(40),
  password varchar(40)
);

create table test1 (
  id serial primary key,
  test_stuff varchar(40)
)

CREATE TABLE jobs (
  invoice serial primary key,
  cm_id integer references customers(id),
  status varchar(40),
  model_num varchar(40),
  serial_num varchar(40),
  next_step text,
  tracking_num varchar(40),
  tech_assigned integer references techs(id)
);

CREATE TABLE techs (
  id serial PRIMARY key,
  username varchar(40),
  password varchar(40),
  first_name varchar(40),
  last_name varchar(40)
);

CREATE TABLE appointments (
  id serial PRIMARY KEY,
  cm_id integer references customers(id),
  tech_id integer references techs(id),
  appt_time timestamp,
  appt_met boolean
);

CREATE TABLE manufacturers (
  id serial primary key,
  name varchar(40),
  tech_assigned integer references techs(id),
  phone varchar(20),
  warranty varchar(80),
  website varchar(60),
  hours_of_op varchar(120)
)

insert into test1 (
  test_stuff
)
values (
  'Hi there sexy'
)

insert into manufacturers (
  name,
  tech_assigned,
  phone,
  warranty,
  website,
  hours_of_op
)
values (
  'Kid Trax',
  3,
  '877-741-6154',
  '1 yr. 6 months on battery. Covers everything but labor',
  'kidtraxtoys.com',
  'M-F  8-5  C.S.T'
)

insert into customers (
  first_name,
  last_name,
  address,
  phone_num1,
  phone_num2,
  phone_num3,
  username,
  password
)
values (
  'Isaac',
  'Leavitt',
  '3808 S W Temple. Salt Lake City, UT 84115',
  '111-111-1111',
  '222-222-2222',
  '333-333-3333',
  'me',
  'me'
);

CREATE TABLE customer_account_requests (
  id serial primary key,
  first_name varchar(40),
  last_name varchar(40),
  address varchar(120),
  invoice varchar(20),
  phone_num1 varchar(18),
  phone_num2 varchar(18),
  model_num varchar(20),
  serial_num varchar(20)
)

insert into customer_account_requests (
  id,
  first_name,
  last_name,
  address,
  invoice,
  phone_num1,
  phone_num2,
  model_num,
  serial_num
)
values (
  $1,
  $2,
  $3,
  $4,
  $5,
  $6,
  $7,
  $8
)

CREATE TABLE jobs (
  invoice serial primary key,
  cm_id integer references customers(id),
  status varchar(40),
  model_num varchar(40),
  serial_num varchar(40),
  next_step text,
  tracking_num varchar(40),
  tech_assigned integer references techs(id)
);

insert into jobs (
  invoice,
  cm_id,
  tech_assigned,
  status,
  model_num,
  serial_num,
  next_step,
  tracking_num
)
values (
  21656,
  6,
  2,
  'Awaiting Customer Authorization',
  'KidTrax Dodge Charger Police',
  '50165-55163AC',
  'Contact for Troubleshooting',
  'null'
)

-- appointments.cm_id as cm_id_appt

select techs.first_name as techs_firstname, techs.last_name as techs_lastname, manufacturers.name, jobs.invoice, customers.first_name as cm_firstname, customers.last_name as cm_lastname, jobs.status, jobs.model_num, jobs.serial_num, jobs.next_step, jobs.tracking_num from jobs
join customers on jobs.cm_id = customers.id
join techs on jobs.tech_assigned = techs.id
join manufacturers on manufacturers.tech_assigned = techs.id
where techs.id = 3;

select customers.first_name, customers.last_name, customers.phone_num1, customers.phone_num2, customers.phone_num3, jobs.invoice, jobs.status, jobs.model_num, jobs.serial_num, jobs.next_step, jobs.tracking_num, jobs.tech_assigned, appointments.appt_time, appointments.appt_met, appointments.appt_phone from jobs
join customers on customers.id = jobs.cm_id
join appointments on appointments.job_invoice = jobs.invoice
where appointment.tech_id = $1


insert into techs (
  username,
  password,
  first_name,
  last_name
)
values(
  'adam',
  'password1',
  'Adam',
  'Williams'
);

insert into appointments (
  cm_id,
  tech_id,
  appt_time,
  appt_met
  job_invoice
)
values (
  4,
  2,
  '2016-08-18T17:18:50.725Z',
  'false',

)
