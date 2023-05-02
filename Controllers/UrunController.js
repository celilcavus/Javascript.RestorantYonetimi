const context = require('../Models/Database')
const tableName = "urun";
class Urun{
    constructor(){
        
    }
    GetAll() {
        context.query("SELECT * FROM urun",(res,req)=> {
           try {
             if (res) {
                console.log(res);
            }
            else
            {
                console.log(req);
            }
           } catch (error) {
            
           }
        })    
    }

    GetById(id)
    {
        context.query(`SELECT * FROM ${tableName} WHERE urunId = ${id}`,(res,req)=> {
            try {
                if(res) {console.log(res);}
                else{console.log(req);}
            } catch (error) {
                console.log(error);
            }
        })
    }

    InsertUrun(urunadi,urunkodu,stokmiktari,birimfiyati)
    {
        context.execute(`INSERT INTO urun
        (urunadi,
        urunkodu,
        stokmiktari,
        birimfiyati) VALUES ('${urunadi}',  '${urunkodu}' , ${stokmiktari} , ${birimfiyati})`)
    }

    UpdateUrun(urunadi,urunkodu,stokmiktari,birimfiyati,Id)
    {
        context.execute(`UPDATE ${tableName} SET 
        urunadi= '${urunadi}',
        urunkodu  =  '${urunkodu}',
        stokmiktari = ${stokmiktari},
        birimfiyati =  ${birimfiyati} WHERE urunId = ${Id}`)
    }

    DeleteUrun(Id) { context.execute(`DELETE FROM ${tableName} where urunId = ${Id}`) }
}



module.exports = Urun