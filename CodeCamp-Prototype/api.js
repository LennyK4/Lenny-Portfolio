//List of global variables used for the API
let headShot;
let bName;
let cCode;
let fullName;
let nameAcronym;
let teamName;

//The function that gets the data required for the API
async function getDriverData(driverNo) 
{
  //The try catch that holds the fetching of the API
  try 
  {
    let link = "https://api.openf1.org/v1/drivers?driver_number=" + driverNo + "&session_key=9158";
    const response = await fetch(link);
    const data = await response.json();
    let driver = data[0];

    //Checks if the API returned data before population
    if(driver == null)
    {
      driverNotFound();
    }
    else
    {
      //Setting the variables to the API data
      console.log(driver);
      headShot = driver.headshot_url;
      bName = driver.broadcast_name;
      cCode = driver.country_code;
      fullName = driver.full_name;
      nameAcronym = driver.name_acronym;
      teamName = driver.team_name;
      updateDriverInfo();
    }
  } 
  catch (error) 
  {
    console.error('Driver Number doesnt exisit', error);
  }
}

//The function that updates the elements text.
function updateDriverInfo() 
{
  document.getElementById('reset').classList = 'button show';
  document.getElementById('headshot').classList = 'image show';
  document.getElementById('headshot').src = headShot;
  document.getElementById('broadName').classList = `show`;
  document.getElementById('broadName').innerText = `Broadcast Name: ${bName}`;
  document.getElementById('countCode').classList = `show`;
  document.getElementById('countCode').innerText = `Country Code: ${cCode}`;
  document.getElementById('fullName').classList = `show`;
  document.getElementById('fullName').innerText = `Full Name:  ${fullName}`;
  document.getElementById('nameAcronym').classList = `show`;
  document.getElementById('nameAcronym').innerText = `Name Acronym: ${nameAcronym}`;
  document.getElementById('teamName').classList = `show`;
  document.getElementById('teamName').innerText = `Team Name: ${teamName}`;
}

//The function that is called when the user searche or a driver
function driverSearch()
{
  var input = document.getElementById("driverNo").value;
  getDriverData(input)
}

//The function that takes the user from the home page to the driver details
function driverDetails()
{
  window.location.href = "index.html";
}

//The fucntion that returns the driver to the home page
function homePage()
{
   window.location.href = "Welcome.html";
}

//The function that is called to reset the drive details elements
function resetDriverDetails()
{
  document.getElementById('driverNotFound').classList = 'hidden';
  document.getElementById('reset').classList = 'button hidden';
  document.getElementById('headshot').classList = 'image hidden';
  document.getElementById('broadName').innerText = ``;
  document.getElementById('countCode').innerText = ``;
  document.getElementById('fullName').innerText = ``;
  document.getElementById('nameAcronym').innerText = ``;
  document.getElementById('teamName').innerText = ``;
}

//The function that is ran when a driver is not found
function driverNotFound()
{
  document.getElementById('reset').classList = 'button show';
  document.getElementById('driverNotFound').classList = 'show';
  document.getElementById('driverNotFound').innerText = `Driver could not be found.`;
  document.getElementById('headshot').classList = 'image hidden';
  document.getElementById('headshot').src = '';
  document.getElementById('broadName').classList = `hidden`;
  document.getElementById('countCode').classList = `hidden`;
  document.getElementById('fullName').classList = `hidden`;
  document.getElementById('nameAcronym').classList = `hidden`;
  document.getElementById('teamName').classList = `hidden`;
}