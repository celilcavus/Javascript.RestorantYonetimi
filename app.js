
const Urun = require('./Controllers/UrunController')
const Siparis = require('./Controllers/SiparisController');
const Personel = require('./Controllers/PersonelController');
const Musteri = require('./Controllers/MusteriController');
const Fatura = require('./Controllers/FaturaController');


var urun = new Urun()
var siparis = new Siparis();
var personel = new Personel();
var musteri = new Musteri();
var fatura = new Fatura();
//=== Urun

// urun.GetAll();
// urun.GetById(1)
// urun.InsertData("Poğaça","0002","50",5)
// urun.UpdateUrun("Açma","0001","50",2.5,1)
// urun.DeleteUrun(1)


//=== Siparis

// siparis.InsertSiparis("Celil",300)
// siparis.UpdateSiparis("Celil Cavus",300,1)
// siparis.DeletSiparis(1)
// siparis.GetAll();
// siparis.GetById(1)

//=== Personel

// personel.InsertPersonel("Ahmet","Mete",10000,"Garson");
// personel.UpdatePersonel("Ahmet","Sinan Mete",10000,"Garson",2)
// personel.DeletePersonel(3)
// personel.GetById(2)
// personel.GetAll();


//=== Musteri
// musteri.InsertMusteri("celil","0312312312","Kırklareli")
// musteri.UpdateMusteri("mehmet","0312312312","Kırklareli",1)
// musteri.DeleteMusteri(1)
// musteri.GetById(1)
// musteri.GetAll()


//=== Fatura
// fatura.InsertFatura(1)
// fatura.UpdateFatura(1,1)
// fatura.DeleteFatura(1)
// fatura.GetById(1)
// fatura.GetAll()