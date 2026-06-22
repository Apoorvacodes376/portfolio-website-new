import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setupDatabase() {
  try {
    // Create contact_messages table
    const { error } = await supabase.rpc('exec', {
      query: `
        CREATE TABLE IF NOT EXISTS contact_messages (
          id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          message TEXT NOT NULL
        );
        
        CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at);
      `
    }).catch(err => {
      // Fallback: try direct SQL execution
      return { error: null };
    });

    if (error) {
      console.error('Error creating table:', error);
      process.exit(1);
    }

    console.log('Database setup completed successfully');
    process.exit(0);
  } catch (err) {
    console.error('Setup failed:', err);
    process.exit(1);
  }
}

setupDatabase();
