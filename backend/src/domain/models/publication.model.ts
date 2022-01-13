import { PublicationStatus } from "../constants/publication-status.enum";
import { Post } from "./post.model";

export class PublicationModel {
  constructor(
    public readonly id: string,
    public status: PublicationStatus,
    public createdAt: Date,
    public publishAt: Date,
    public posts: Post[]
  ) {}
}
