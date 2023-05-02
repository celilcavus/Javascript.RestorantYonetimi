const context = require('../Models/Database');
const tableName = "fatura";


class Fatura {
    GetAll()
    {
        context.execute(`SELECT * FROM ${tableName}`,(req,res)=>{
            try {
                    if (req) {
                        console.log(req);
                    }
                    else
                    {
                        console.log(res);
                    }
            } catch (error) {
                console.log(error);
            }
        });
    }

    GetById(id)
    {
        context.execute(`SELECT * FROM ${tableName} WHERE faturaId = ${id}`,(req,res)=>{
            try {
                    if (req) {
                        console.log(req);
                    }
                    else
                    {
                        console.log(res);
                    }
            } catch (error) {
                console.log(error);
            }
        });
    }

    InsertFatura(siparisId)
    {
        context.execute(`INSERT INTO ${tableName}
        (
            siparisId
        )
        VALUES
        ('${siparisId}')
        `)
    }

    UpdateFatura(siparisId,id)
    {
        context.execute(`UPDATE ${tableName} SET
        siparisId = '${siparisId}' 
        WHERE faturaId = ${id}`)
    }

    DeleteFatura(id)
    {
        context.execute(`DELETE FROM ${tableName} WHERE faturaId = ${id}`)
    }
}

module.exports = Fatura
