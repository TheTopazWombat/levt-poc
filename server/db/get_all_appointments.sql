select jobs.invoice, customers.first_name, customers.last_name, appointments.appt_time, appointments.appt_met, appointments.tech_id from appointments
join customers on customers.id = appointments.cm_id
join jobs on jobs.cm_id = appointments.cm_id;
