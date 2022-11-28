Welcome to the Chocolate Factory!

As the new manager, your duty is to:

- Hire employees
- Fire employees
- Change your employees names and/or position


The url we will use to manage our employees is /api/employees

- To see a list of all the employees, do a GET request to the url /api/employees
- To search for employees in a specific position, do a GET request to the url using /api/employees/:position
- To hire a new employee, do a POST request to the url, sending the firstName, lastName and position in the request body
- To hire a new random employee in a random position, do a POST request to the url /api/employees/random
- To fire an employee, do a DELETE request to the url using /api/employees/:firstName
- To change an employee's name or position, do a PUT request to the url, sending the new firstName, lastName and/or position in the request body


Notes:

- To Hire, Fire, or Modify employees, you must first login with your manager account. Use /api/login?username=Manager&password=chocolate [GET]. You can later logout simply using /api/logout
- Using the random employee hiring will consume the randomuser API. Check it out here for more info: https://randomuser.me/