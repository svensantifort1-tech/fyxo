-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  naam TEXT NOT NULL,
  email TEXT NOT NULL,
  bedrijfsnaam TEXT,
  bericht TEXT NOT NULL,
  bron TEXT NOT NULL DEFAULT 'contact',
  pakket TEXT,
  website TEXT,
  contact_voorkeur TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public form)
CREATE POLICY "Allow anonymous inserts" ON public.contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

-- Allow authenticated read
CREATE POLICY "Allow authenticated read" ON public.contact_submissions
  FOR SELECT TO authenticated USING (true);