import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  array=[]; 
  details:number;
  data;
  constructor(
private af : AngularFireAuth,
private ad : AngularFireDatabase 

  )
  { }

 

  checkLogin(email,password){
    this.af.auth.signInWithEmailAndPassword(email,password).then(result => {
      alert('Login success');
      return true;
    } ).catch(error =>{
      alert(error);
      return false ;
    })
  }

  register(email,password){
    this.af.auth.createUserWithEmailAndPassword(email,password).then(result =>{ 
      alert('register sucess');
    }).catch(error =>{
      alert(error);
    })

  }

  addNote(title,message){
   var id = this.ad.database.ref().child("todos").push().key
   this.ad.database.ref().child("todos").child(id).set({
     topic:title,
     message:message,
     id:id
   })


  }
  fetchNoteById(id){
    let context = this;
    var ref = this.ad.database.ref().child("todos").child(id);
    ref.once("value")
      .then(function(snapshot) {
        // var key = snapshot.key; // "ada"
        // var value = snapshot.val(); // "last"
        // console.log(value);
        // context.array = [];
        // snapshot.forEach(doc  => {
        //   context.array.push(doc.val())
        // })
      context.data=snapshot.val();
      });

  }

updateNote(title,message,id){
  
  this.ad.database.ref().child("todos").child(id).update({
    topic:title,
    message:message
  })
}
deleteNote(id){
  this.ad.database.ref().child("todos").child(id).remove()
}

}
