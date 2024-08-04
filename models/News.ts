import { model, models, Schema } from "mongoose";

export interface INewsDocument {
  title: string;
  address: string;
  body: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const NewsSchema = new Schema<INewsDocument>({
    title: { type: String, required: true },
    address: { type: String, required: true, unique: true },
    body: { type: String, required: true },
    image: { type: String },
},
    {
      timestamps: true,
    }
  );
const News = models.News || model("News", NewsSchema);
export default News;