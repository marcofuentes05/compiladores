class Main {
   
   current_number : Int  <- 1;
   last_number : Int  <- 1;
   back_up_number : Int;
   n : Int;
   control : Bool <- true;

   main() : Int {
      {
         n <- in_int(0);
         out_int(current_number);
         while(control) loop {
            back_up_number <- current_number;
            current_number <- current_number + last_number;
            last_number <- back_up_number;
            out_int(current_number);
            n <- n-1;
            control <- false;
         } pool;
         n;
      }
   };
};
