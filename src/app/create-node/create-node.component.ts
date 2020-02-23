import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
@Component({
  selector: 'app-create-node',
  templateUrl: './create-node.component.html',
  styleUrls: ['./create-node.component.css']
})
export class CreateNodeComponent implements OnInit {
title:string;
message:string;
data;
isButtonVisible : Boolean;
  constructor( private dataService: DataService,private ad:AngularFireDatabase,private route: ActivatedRoute ) { }

  ngOnInit() {
    var ids = this.route.snapshot.params.id;
     
   
    if(ids != undefined) {
      //upate alert(id)
      this.isButtonVisible=true;
      let context = this;
      var ref = this.ad.database.ref().child("todos").child(ids);
      ref.once("value")
        .then(function(snapshot) {
          // var key = snapshot.key; // "ada"
          // var value = snapshot.val(); // "last"
          // console.log(snapshot.val());
          // context.array = [];
          // snapshot.forEach(doc  => {
          //   context.array.push(doc.val())
          // })
        context.data=snapshot.val();
        });


    }
  }


  addClicked(){
    
    this.dataService.addNote(this.title,this.message);
      
    
      }
      editClicked(id){
        console.log(this.title);
  console.log(this.message);
        this.dataService.updateNote(this.title,this.message,id);
      }
    
      
}
