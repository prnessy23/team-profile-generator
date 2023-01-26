module.exports = (team) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    </head>
    <body>
        ${createTeam(team)}
    </body>
    </html>
    `;
};

function createTeam(team) {
  function createEng(engineers) {
    return `<div class='card'>
        <h1>${engineers.getName()}</h1>

    </div>`;
  }

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
