module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        ${createTeam(team)}
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    
    </html>
    `;
};

function createTeam(team) {
  function createManagers(managers) {
    return `
    <div class ="col-4 mt-4">
    <div class="card h-100">
    <div class="card header"
        <h3>${managers.getName()}</h3>
        <h4>Manager</h4><i class="material-icons">content_paste</i>
        </div>

        <div class="card body">
        <p class="id">ID: ${managers.id}</p>
        <p class="email">Email: <a href="mailto:${managers.email}">${managers.email}</a<p>
        <p class="office">Office Number: ${managers.officeNumber}</p>
        </div>

        </div>


    </div>
    `;
  }
  function createEng(engineers)
  function createInterns(interns) {}

  function createManagers(managers) {}

  const currentEmp = [];
  currentEmp.push(
    team
      .filter((emp) => emp.getRole() === "Manager")
      .map((manager) => createManagers(manager))
  );

  currentEmp.push(
    team
      .filter((emp) => emp.getRole() === "Engineer")
      .map((eng) => createEng(eng))
  );

  currentEmp.push(
    team
      .filter((emp) => emp.getRole() === "Intern")
      .map((intern) => createInterns(intern))
  );

  return currentEmp.join("");
}
