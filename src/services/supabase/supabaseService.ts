import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables: VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are required.')
}

/**
 * Creates a Supabase client authenticated with a Firebase JWT token.
 * Call this after the user signs in with Firebase and you have their ID token.
 *
 * @param {string} firebaseToken - The Firebase ID token from `user.getIdToken()`
 * @returns {import('@supabase/supabase-js').SupabaseClient}
 *
 * @example
 * const token = await firebaseUser.getIdToken()
 * const supabase = createSupabaseWithToken(token)
 * const { data } = await supabase.from('your_table').select('*')
 */
export const createSupabaseWithToken = (firebaseToken: string) => {
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: {
      headers: {
        Authorization: `Bearer ${firebaseToken}`,
      },
    },
    auth: {
      // Disable Supabase's built-in auth since Firebase handles it
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  })
}

/**
 * A public (unauthenticated) Supabase client.
 * Use this only for accessing publicly accessible data (no RLS restrictions).
 * For protected data, always use createSupabaseWithToken() instead.
 */
export const supabasePublic = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false,
  },
})