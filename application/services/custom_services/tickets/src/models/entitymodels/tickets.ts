
export interface tickets 
{
   created_date_at: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date },
   name: String,
   description: String,
   assignees: String,
   types: { type: String, ref: 'types' },
   severity: { type: String, ref: 'severity' },
   ticketstatus: String
}
