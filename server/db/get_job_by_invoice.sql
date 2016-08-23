select * from jobs
join customers
on customers.id = jobs.cm_id
where jobs.invoice = $1;
