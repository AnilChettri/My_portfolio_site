import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/database'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a fallback client or null if environment variables are missing or invalid
export const supabase = (supabaseUrl && supabaseUrl.startsWith('http') && supabaseAnonKey)
  ? (() => {
      try {
        return createClient<Database>(supabaseUrl, supabaseAnonKey)
      } catch (e) {
        console.warn('Failed to initialize Supabase:', e)
        return null
      }
    })()
  : null
