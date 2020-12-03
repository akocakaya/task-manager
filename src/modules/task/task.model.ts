import { Schema, Document, model } from 'mongoose';

export interface ITask extends Document {
  text: string;
  author: string;
}

const TaskSchema: Schema = new Schema(
  {
    text: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true },
);

export default model<ITask>('Task', TaskSchema);
