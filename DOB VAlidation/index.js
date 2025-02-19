function validateBirthDate(inputDate)
{
        const currentDate = new Date();
      const userDate = new Date(inputDate);

      if (isNaN(userDate) || userDate > currentDate) {
    
        console.log("false");
      } else {
            console.log("true");
          }
        }
    
    
    
    
        const inputDate = '2025-02-06';
        validateBirthDate(inputDate);
    
