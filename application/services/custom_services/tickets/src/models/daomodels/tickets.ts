
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ticketsSchema = new Schema({
   created_date_at: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date, default: Date.now },
   name: String,
   description: String,
   assignees: String,
   types: { type: Schema.Types.String, ref: 'types' },
   severity: { type: Schema.Types.String, ref: 'severity' },
   ticketstatus: String
})

const ticketsModel = mongoose.model('tickets', ticketsSchema, 'tickets');
export default ticketsModel;
