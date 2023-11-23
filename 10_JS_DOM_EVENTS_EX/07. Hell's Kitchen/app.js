function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const info = JSON.parse(document.querySelector('#inputs > textarea').value);
      let restaurants = {};
      for (currentInfo of info) {
         const [currRestaurant, ...employees] = currentInfo.split(' - ');
         if (!(currRestaurant in restaurants)) {
            restaurants[currRestaurant] = {
               workers: [],
               salaries: [],
               
            };
         }
         for (workerInfo of employees) {
            const worker = workerInfo.split(', ');
            for (currentWorker of worker) {
               const [name, salary] = currentWorker.split(' ');
               restaurants[currRestaurant].workers.push({ name: name, salary: Number(salary) });
               restaurants[currRestaurant].salaries.push(Number(salary));
            }
         }
      }
      let sorted = Object.keys(restaurants).sort((a, b) => {
         let aAverageSalary = (restaurants[a].salaries.reduce((a, b) => a + b, 0)) / (restaurants[a].salaries.length);
         let bAverageSalary = (restaurants[b].salaries.reduce((a, b) => a + b, 0)) / (restaurants[b].salaries.length);
         return bAverageSalary - aAverageSalary;
      });
      const maxSalary = Math.max(...restaurants[sorted[0]].salaries);
      const sumSalaries = (restaurants[sorted[0]].salaries.reduce((a, b) => a + b, 0));
      const averageSalary = sumSalaries / restaurants[sorted[0]].salaries.length;
      
      const bestRestaurant = document.querySelector('#bestRestaurant > p');
      bestRestaurant.textContent = `Name: ${sorted[0]} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${maxSalary.toFixed(2)}`;
      
      let sortedEmployees = Object.values(restaurants[sorted[0]].workers).sort((a, b) => b.salary - a.salary);

      let allWorkers = [];
      for (employee of sortedEmployees) {
         allWorkers.push(`Name: ${employee.name} With Salary: ${employee.salary}`);
      }

      const bestRestaurantWorkers = document.querySelector('#workers > p');
      bestRestaurantWorkers.textContent = allWorkers.join(' ');
   }
}