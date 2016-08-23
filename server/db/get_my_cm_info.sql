select customers.first_name, customers.last_name, customers.id, customers.address, customers.phone_num1, customers.phone_num2, customers.phone_num3, jobs.invoice, jobs.model_num, jobs.serial_num, jobs.next_step, jobs.status, jobs.tracking_num, jobs.tech_assigned, jobs.manuf_id from customers
join jobs on customers.id = jobs.cm_id
where customers.first_name = $1 and customers.last_name = $2;
