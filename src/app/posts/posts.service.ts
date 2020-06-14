import { Post } from "../posts/post-model";
export class PostsService {
    private posts:Post[] = [];

    getPosts(){
        return [...this.posts]
    }
}