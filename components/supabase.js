
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oopbhzzvvkxdoosimrui.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vcGJoenp2dmt4ZG9vc2ltcnVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MTMzMDYsImV4cCI6MjAxMzM4OTMwNn0.0Hp4D90P-s1m6N1V3NGEhIMwBb_UBi_437OCO7XghcA"
const supabase = createClient(supabaseUrl, supabaseKey)

export { supabase }