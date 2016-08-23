select customers.first_name, customers.last_name, customers.phone_num1, customers.phone_num2, customers.phone_num3, jobs.invoice, jobs.status, jobs.model_num, jobs.serial_num, jobs.next_step, jobs.tracking_num, jobs.tech_assigned, appointments.appt_time, appointments.appt_met, appointments.appt_phone, appointments.id as appt_id from jobs
join customers on customers.id = jobs.cm_id
join appointments on appointments.job_invoice = jobs.invoice
where appointments.tech_id = $1;
