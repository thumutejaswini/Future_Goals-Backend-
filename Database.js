const oracledb = require("oracledb");
// Set database connection details
const dbConfig = {
  user: "system",
  password: "manager",
  connectString: "localhost:/orcl",
};

const Query = async (sql) => {
  let connection;
  try {
    connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(sql);
    await connection.commit();
    return result;
  } catch (error) {
    return (error);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error(error);
      }
    }
  }
};

const Result = async (...Parameters) => {

  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
    // try{
    //   Details = eval(`(${Parameters[2]})`);
    // } catch(err){}
 switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.username}','${Details.suggestion}','${Details.quires}','${Details.experience}','${Details.rating}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set username = '${Parameters[3].username}', suggestion = '${Parameters[3].suggestion}', quires = '${Parameters[3].quires}',experience = '${Parameters[3].experience}',rating = '${Parameters[3].rating}' where username = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where username = '${Details}'`;
      break;
    case "Read":
          Sql = `select * from ${Parameters[0]} where username = '${Details}'`;
       
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};


const Login = async (...Parameters) => {
  
  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
    try{
      Details = eval(`(${Parameters[2]})`);
    } catch(err){}
 switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.username}','${Details.password}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set username = '${Parameters[3].username}', password = '${Parameters[3].password}' where username = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where username = '${Details}'`;
      break;
      case "Read":
        Sql = `select * from ${Parameters[0]} where username = '${Details}'`;
     
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};

const register = async (...Parameters) => {
  
  let Sql;
  console.log(typeof (Parameters[2]));
  Details = Parameters[2];
    try{
      Details = eval(`(${Parameters[2]})`);
    } catch(err){}
 switch (Parameters[1]) {
    case "Insert":
      Sql = `insert into ${Parameters[0]} values('${Details.name}','${Details.mail}','${Details.password}','${Details.birth}','${Details.phonenumber}')`;
      break;
    case "Update":
      Sql = `update ${Parameters[0]} set name = '${Parameters[3].name}', password = '${Parameters[3].password}' where name = '${Details}'`;
      break;
    case "Delete":
      Sql = `delete from ${Parameters[0]} where name = '${Details}'`;
      break;
      case "Read":
        Sql = `select * from ${Parameters[0]} where name = '${Details}'`;
     
      break;
    default:
      console.error("Invalid Parameters");
      break;
  }
  console.log(Sql);
  var result = await Query(Sql);
  return result;
};

module.exports = {
  Result:Result,
  Login:Login,
  register:register,

};
