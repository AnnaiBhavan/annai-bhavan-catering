const mysql=require("mysql2/promise");
const pool=mysql.createPool({host:process.env.DB_HOST||"127.0.0.1",port:Number(process.env.DB_PORT||3307),user:process.env.DB_USER||"root",password:process.env.DB_PASSWORD||"",database:process.env.DB_NAME||"annai_bhavan_catering",waitForConnections:true,connectionLimit:10,queueLimit:0,charset:"utf8mb4"});
async function testConnection(){const c=await pool.getConnection();await c.ping();c.release();}
module.exports={pool,testConnection};
