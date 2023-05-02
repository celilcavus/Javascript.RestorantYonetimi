const context = require('../Models/Database');
const tableName = "musteri";


class Musteri {
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
        context.execute(`SELECT * FROM ${tableName} WHERE musteriId = ${id}`,(req,res)=>{
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

    InsertMusteri(musteriadi,musteritelefon,musteriadres,musterieposta)
    {
        context.execute(`INSERT INTO ${tableName}
        (
        musteriadi,
        musteritelefon,
        musteriadres,
        musterieposta,
        )
        VALUES
        ('${musteriadi}','${musteritelefon}','${musteriadres}','${musterieposta}');
        `)
    }

    UpdateMusteri(musteriadi,musteritelefon,musteriadres,musterieposta,id)
    {
        context.execute(`UPDATE ${tableName} SET
        
        musteriadi = '${musteriadi}',
        musteritelefon = '${musteritelefon}',
        musteriadres = '${musteriadres}',
        musterieposta = '${musterieposta}',
        update_date = '${new Date().toLocaleString()}'
        WHERE musteriId = ${id}
        `)
    }

    DeleteMusteri(id)
    {
        context.execute(`DELETE FROM ${tableName} WHERE musteriId = ${id}`)
    }
}

module.exports = Musteri
