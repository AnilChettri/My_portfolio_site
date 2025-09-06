export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: string
          title: string
          summary: string
          tags: string[]
          year: number
          image_url: string
          demo_url: string | null
          source_url: string | null
          featured: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          summary: string
          tags: string[]
          year: number
          image_url: string
          demo_url?: string | null
          source_url?: string | null
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          summary?: string
          tags?: string[]
          year?: number
          image_url?: string
          demo_url?: string | null
          source_url?: string | null
          featured?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          name: string
          email: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          message?: string
          created_at?: string
        }
      }
    }
  }
}
