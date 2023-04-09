const generateTeam = (team) => {
    console.log(team);
    const html = [];

    const addManager = manager => {
        console.log(manager);
        let managerHTML = `
        <div class="card" style="width: 15rem;">
        <div class="card-header">
        ${manager.name} <br/>
        <i class="fas fa-mug-hot"></i> Manager </div>
        <ul class="list-group list-group-flush">
         <li class="list-group-item"> ID: ${manager.id}</li>
         <li class="list-group-item"> Email: <span id="emai;"><a href"mailto:${manager.email}">${manager.email}</a></span></li>
         <li class="list-group-item"> Office Number: ${manager.officeNumber}</li>
        </ul>
        </div>`;
    html.push(managerHTML);
    }
    const addEngineer = engineer => {
        console.log(engineer);
        let engineerHTML = `
        <div class="card" style="width: 18rem;">
        <div class="card-header">
       ${engineer.name} <br/>
       <i class="fas fa-glasses"></i> Engineer</div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item">ID: ${engineer.id}</li>
         <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
         <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
        </div>
    `;
    html.push(engineerHTML);
    }
    const addIntern = intern => {
        console.log(intern);
        let internHTML = `
       <div class="card" style="width: 18rem;">
       <div class="card-header">
       ${intern.name} <br/>
       <i class="fas fa-user-graduate"></i> Intern</div>
       <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
        <li class="list-group-item">School: ${intern.school}</li>
       </ul>
       </div>
       `;
    html.push(internHTML);
    }

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Manager') {
            addManager(team[i]);
        }
        if (team[i].getRole() === 'Engineer') {
            addEngineer(team[i]);
        }
        if (team[i].getRole() === 'Intern') {
            addIntern(team[i]);
        }
    }

    return html.join('');
}

module.exports = team => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/12ac653a61.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./style.css">
        <title>Corporate Org Chart</title>
</head>
<body>
    <header>
    <h1> My Team </h1>
    </header>
    <main>
    <div class="container-fluid">
    <div class="row justify-content-center">
    ${generateTeam(team)}
    </div>
    </div>
    </main>
     
</body>
</html>
`;
}