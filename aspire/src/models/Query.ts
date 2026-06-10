import mongoose, { Schema, Document } from 'mongoose';

export interface IQuery extends Document {
  name: string;
  email: string;
  brand?: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: Date;
}

const QuerySchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  brand: { type: String },
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'read', 'replied'], default: 'new' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Query || mongoose.model<IQuery>('Query', QuerySchema);
