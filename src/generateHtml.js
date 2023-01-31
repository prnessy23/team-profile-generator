module.exports = (team) => {
  return `<!DOCTYPE html
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" 
        rel="stylesheet">
        <link rel="stylesheet" href="./assets/style.css">
        <title>Team Profile</title>
    </head>
  
    <body 
    </header>
    <nav class ="navbar" id="navbar">
        <span class="navbar-brand mb-0 h-1 w-100 text-center" id="navbar
                      text">Team Profiles</span>
    </nav>
    </header>
    
    class="container">
    <div class="row justify-content-space around" id="team-cards"></
    div>
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
    <div class="card h-50">
    <div class="card-header">
        <h3>${managers.getName()}</h3>
        <h4>Manager</h4><i class="material-icons">pending-actions</i>
        </div>

        <div class="card-body">
        <p class="id">ID: ${managers.getId()}</p>
        <p class="email">Email: <a href="mailto:${managers.getEmail()}">${managers.getEmail()}</a><p>
        <p class="office">Office Number: ${managers.getOfficeNumber()}</p>
        </div>

        </div>
    </div>
    `;
  }

  function createEng(engineers) {
    return `
    <div class ="col-4 mt-4">
    <div class="card h-50">
        <div class="card-header">
            <h3>${engineers.getName()}</h3>
                <h4>Engineer</h4><i class="material-icons">devices</i>
</div> 
    <div class="card-body">
            <p class="id">ID: ${engineers.getId()}</p>
                <p class="email">Email: <a href="mailto:${engineers.getEmail()}">${engineers.getEmail()}</a><p>
                    <p class="github">Github: <a href="https://github.com/${engineers.getGithub()}">${engineers.getGithub()}</a></p>
    </div>
        </div>
            </div>`;
  }
  function createInterns(interns) {
    return ` <div class ="col-4 mt-4">
    <div class="card h-50">
        <div class="card-header">
        <h3>${interns.getName()}</h3>
        <h4>Intern</h4><i class="material-icons">assignment_ind</i>
    </div>
    <div class="card-body">
    <p class="id">ID:${interns.getId()}</p>
    <p class="email">Email: <a href="mailto:${interns.getEmail()}">${interns.getEmail()}</a><p>
    <p class="school">School: ${interns.getSchool()}</p>
    </div>
        </div>
            </div>`;
  }
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
