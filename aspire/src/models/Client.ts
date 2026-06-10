import mongoose, { Schema, Document } from 'mongoose';

export interface IClient extends Document {
  name: string;
  category: string;
  status: 'Active' | 'Onboarding' | 'Paused';
  mrr: string;
  since: string;
  createdAt: Date;
}

const ClientSchema: Schema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, enum: ['Active', 'Onboarding', 'Paused'], default: 'Active' },
  mrr: { type: String, required: true },
  since: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Client || mongoose.model<IClient>('Client', ClientSchema);
