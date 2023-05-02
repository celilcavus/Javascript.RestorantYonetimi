const context = require('../Models/Database');
const tableName = "siparis";
class Siparis{
    constructor(){

    }


    GetAll()
    {
        context.execute(`SELECT * FROM ${tableName}`,(req,res)=>{
            try {
                if (req) {
                    console.log(reg);
                }
                else{
                    console.log(res);
                }
            } catch (error) {
                console.log(error);
            }
        })
    }
    GetById(id)
    {
        context.execute(`SELECT * FROM ${tableName} WHERE siparisId = ${id}`,(req,res)=>{
           try {
                if (req) {
                    console.log(req);
                }
                else{
                    console.log(res);
                }
           } catch (error) {
                console.log(error);
           }
        })
    }

    InsertSiparis(musteriadi,siparisucret)
    {
        var query = `INSERT INTO ${tableName}
        (
        musteriadi,
        siparisucret)
        VALUES
        ('${musteriadi}',${siparisucret})`
        
        context.execute(query);
    }

    UpdateSiparis(musteriadi,siparisucret,id)
    {
        var query = `UPDATE ${tableName} SET
        
        musteriadi = '${musteriadi}',
        siparisucret = ${siparisucret},
        update_date = '${new Date().toLocaleString()}'
        WHERE siparisId = ${id}
        `
        
        context.execute(query);
    }

    DeletSiparis(id)
    {
        var query  = `DELETE FROM ${tableName} WHERE siparisId = ${id}`;
        context.execute(query)
    }
}

module.exports = Siparis