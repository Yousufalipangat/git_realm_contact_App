
import Realm from "realm";

class Contact extends Realm.Object{}

Contact.schema = {
    name: "Contact",
    properties : {
        recordId: 'string',
        givenName: 'string',
        phoneNumber : 'string'
    },
    primaryNumber : 'recordId'

}

let realm = new Realm({schema:[Contact],schemaVersion:4});   

let getAllContact = ()=>{
    return realm.objects("Contact");
}

let addContact = (_recordId, _givenName,_phoneNumber)=>{
    realm.write(()=>{
        const contact = realm.create("Contact",{
            recordId: _recordId,
            givenName: _givenName,
            phoneNumber : _phoneNumber
        })
    })
}

let deleteContact = (Id)=>{
    realm.write(()=>{
        realm.delete( realm.objects('Contact').filtered("recordId = '"+Id+"'"));
    }
    
    )
}

let deleteAllContact = ()=>{
    realm.write(()=>{
            realm.deleteAll()}
        )
}

export default realm;
export{
    getAllContact,deleteContact,addContact,deleteAllContact
}