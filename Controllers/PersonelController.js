const context = require('../Models/Database');
const tableName = "personel"

class Personel{

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
        })
    }

    GetById(id)
    {
        context.execute(`SELECT * FROM ${tableName} WHERE personelid = ${id}`,(req,res)=>{
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
        })
    }

    InsertPersonel(personelAdi,personelSoyadi,personelMaas,personelPozisyon)
    {
        context.execute(`INSERT INTO ${tableName}
        (
        personelAdi,
        personelSoyadi,
        personelMaas,
        personelPozisyon
        )
        VALUES
        ('${personelAdi}','${personelSoyadi}',${personelMaas},'${personelPozisyon}')`);
    }

    UpdatePersonel(personelAdi,personelSoyadi,personelMaas,personelPozisyon,id)
    {
        context.execute(`UPDATE ${tableName} SET
       
        personelAdi = '${personelAdi}',
        personelSoyadi = '${personelSoyadi}',
        personelMaas = ${personelMaas},
        personelPozisyon = '${personelPozisyon}',
        update_date = '${new Date().toLocaleString()}'
        WHERE personelid = ${id}
       `);
    }

    DeletePersonel(id)
    {
        context.execute(`DELETE FROM ${tableName} WHERE personelid = ${id}`);
    }


}

module.exports = Personel