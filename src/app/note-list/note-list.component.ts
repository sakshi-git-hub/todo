import { Component, OnInit } from '@angular/core';
import{DataService } from '../data.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  constructor(  private dataService: DataService, private ad: AngularFireDatabase) { }

  title:string;
  message:string;
  array;
  ngOnInit() { 
    // this.ad.database.ref().child("todos").on('value',snapshot=>{
    //   if(snapshot.exists) {
    //     snapshot.forEach(doc=>{
    //       console.log(doc.val());
    //      this.array.push(doc.val())
        
    //     })
    //   } else {
    //     alert("Nothing on that ref.")
    //   }
     
    //   })
    let context = this;
    var ref = this.ad.database.ref().child("todos");
    ref.once("value")
      .then(function(snapshot) {
        // var key = snapshot.key; // "ada"
        // var value = snapshot.val(); // "last"
        // console.log(value);
        context.array = [];
        snapshot.forEach(doc  => {
          context.array.push(doc.val())
        })
      });
  }
  removeData(id){
    this.dataService.deleteNote(id);
    alert("delete succesfully");
    
  }
  updateData(id){
    this.dataService.updateNote(this.title,this.message,id);
  }
 
 
}
