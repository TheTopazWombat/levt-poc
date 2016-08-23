select * from techs
join manufacturers on techs.id = manufacturers.tech_assigned
where techs.first_name = $1 and techs.last_name = $2;
