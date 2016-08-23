update jobs set next_step = $1, model_num = $2, serial_num = $3, status = $4 where invoice = $5;
