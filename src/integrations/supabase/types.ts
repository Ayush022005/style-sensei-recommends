export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      customers: {
        Row: {
          address: string | null
          contact_person: string
          created_at: string | null
          email: string | null
          id: string
          name: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          contact_person: string
          created_at?: string | null
          email?: string | null
          id?: string
          name: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          contact_person?: string
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      guests: {
        Row: {
          accepted_at: string | null
          created_at: string | null
          event_id: string | null
          event_name: string | null
          id: string
          name: string
          people: number
          phone: string | null
          rsvp_status: string | null
          unique_id: string | null
          updated_at: string | null
          user_id: string | null
          viewed_at: string | null
          wedding_id: string | null
        }
        Insert: {
          accepted_at?: string | null
          created_at?: string | null
          event_id?: string | null
          event_name?: string | null
          id?: string
          name: string
          people?: number
          phone?: string | null
          rsvp_status?: string | null
          unique_id?: string | null
          updated_at?: string | null
          user_id?: string | null
          viewed_at?: string | null
          wedding_id?: string | null
        }
        Update: {
          accepted_at?: string | null
          created_at?: string | null
          event_id?: string | null
          event_name?: string | null
          id?: string
          name?: string
          people?: number
          phone?: string | null
          rsvp_status?: string | null
          unique_id?: string | null
          updated_at?: string | null
          user_id?: string | null
          viewed_at?: string | null
          wedding_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "guests_wedding_id_fkey"
            columns: ["wedding_id"]
            isOneToOne: false
            referencedRelation: "weddings"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string | null
          id: string
          order_id: string | null
          price: number
          product_id: string | null
          quantity: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          order_id?: string | null
          price: number
          product_id?: string | null
          quantity: number
        }
        Update: {
          created_at?: string | null
          id?: string
          order_id?: string | null
          price?: number
          product_id?: string | null
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string | null
          customer_id: string | null
          id: string
          status: Database["public"]["Enums"]["order_status"]
          total_amount: number
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          customer_id?: string | null
          id?: string
          status?: Database["public"]["Enums"]["order_status"]
          total_amount?: number
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          customer_id?: string | null
          id?: string
          status?: Database["public"]["Enums"]["order_status"]
          total_amount?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      photos: {
        Row: {
          caption: string | null
          created_at: string
          id: string
          url: string
          wedding_id: string
        }
        Insert: {
          caption?: string | null
          created_at?: string
          id?: string
          url: string
          wedding_id: string
        }
        Update: {
          caption?: string | null
          created_at?: string
          id?: string
          url?: string
          wedding_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "photos_wedding_id_fkey"
            columns: ["wedding_id"]
            isOneToOne: false
            referencedRelation: "weddings"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          id: string
          name: string
          sku: string
          specifications: Json | null
          stock: number
          unit: string
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          sku: string
          specifications?: Json | null
          stock?: number
          unit?: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          sku?: string
          specifications?: Json | null
          stock?: number
          unit?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          birth_date: string | null
          created_at: string
          first_name: string
          id: string
          last_name: string
          phone: string | null
          profile_type: string
          sub_community: string | null
          updated_at: string
        }
        Insert: {
          birth_date?: string | null
          created_at?: string
          first_name: string
          id: string
          last_name: string
          phone?: string | null
          profile_type: string
          sub_community?: string | null
          updated_at?: string
        }
        Update: {
          birth_date?: string | null
          created_at?: string
          first_name?: string
          id?: string
          last_name?: string
          phone?: string | null
          profile_type?: string
          sub_community?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      units: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      wedding_events: {
        Row: {
          created_at: string
          date: string
          description: string | null
          id: string
          name: string
          time: string
          venue_address: string
          venue_map_url: string | null
          venue_name: string
          wedding_id: string
        }
        Insert: {
          created_at?: string
          date: string
          description?: string | null
          id?: string
          name: string
          time: string
          venue_address: string
          venue_map_url?: string | null
          venue_name: string
          wedding_id: string
        }
        Update: {
          created_at?: string
          date?: string
          description?: string | null
          id?: string
          name?: string
          time?: string
          venue_address?: string
          venue_map_url?: string | null
          venue_name?: string
          wedding_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "wedding_events_wedding_id_fkey"
            columns: ["wedding_id"]
            isOneToOne: false
            referencedRelation: "weddings"
            referencedColumns: ["id"]
          },
        ]
      }
      weddings: {
        Row: {
          couple_names: Json
          created_at: string | null
          events: Json
          hashtag: string | null
          id: string
          music: string | null
          photos: string[] | null
          relations: Json
          rsvp_enabled: boolean | null
          story: string | null
          theme: Database["public"]["Enums"]["wedding_theme"] | null
          updated_at: string | null
          user_id: string | null
          venue_location: Json
          wedding_date: string
        }
        Insert: {
          couple_names?: Json
          created_at?: string | null
          events?: Json
          hashtag?: string | null
          id?: string
          music?: string | null
          photos?: string[] | null
          relations?: Json
          rsvp_enabled?: boolean | null
          story?: string | null
          theme?: Database["public"]["Enums"]["wedding_theme"] | null
          updated_at?: string | null
          user_id?: string | null
          venue_location?: Json
          wedding_date: string
        }
        Update: {
          couple_names?: Json
          created_at?: string | null
          events?: Json
          hashtag?: string | null
          id?: string
          music?: string | null
          photos?: string[] | null
          relations?: Json
          rsvp_enabled?: boolean | null
          story?: string | null
          theme?: Database["public"]["Enums"]["wedding_theme"] | null
          updated_at?: string | null
          user_id?: string | null
          venue_location?: Json
          wedding_date?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      order_status:
        | "pending"
        | "processing"
        | "out_for_delivery"
        | "completed"
        | "cancelled"
      wedding_theme: "royal" | "floral" | "pastel" | "minimal"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      order_status: [
        "pending",
        "processing",
        "out_for_delivery",
        "completed",
        "cancelled",
      ],
      wedding_theme: ["royal", "floral", "pastel", "minimal"],
    },
  },
} as const
