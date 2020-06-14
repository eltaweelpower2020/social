import { Component, OnInit ,Input} from '@angular/core';
import { Post } from "../post-model";
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

//   posts=[ {title:'first post ',contenet:'this is first post content body'},
//           {title:'second post ',contenet:'this is second post content body'},
//           {title:'third post ',contenet:'this is third post content body'},
// ];

@Input() posts:Post[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  



}
