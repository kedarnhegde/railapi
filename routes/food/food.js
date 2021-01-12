const {Client} = require("pg");
const express = require("express");

const client = new Client({
    user:"postgres",
    password:"rithikdutt",
    host:"localhost",
    port:5432,
    database:"dba"
})

module.exports = async (req,res)=> {
    const datai = [req.body.trainno];
    datai[0] = parseInt(req.body.trainno);
    
    console.log(datai)
    await connect()
    const rows = await checktable(datai)
    console.log(rows)
    res.setHeader("content-type","application/json")
    res.send(JSON.stringify(rows))
}

async function connect(){
    try{
        await client.connect()
        console.log("Connected successfully")
    }
    catch(e){
        console.log(`Error detected ${e}`)
    }
}
async function checktable(datai){
    try{
        const r = await client.query('select * from food where trainno=$1',[datai[0]])

        return r.rows;
    }
    catch(e){
        console.log(`error ${e}`)
    }
}