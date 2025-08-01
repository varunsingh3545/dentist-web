export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          phone: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      posts: {
        Row: {
          author_email: string
          author_id: string | null
          category: string | null
          content: string
          created_at: string | null
          id: string
          image: string | null
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author_email: string
          author_id?: string | null
          category?: string | null
          content: string
          created_at?: string | null
          id?: string
          image?: string | null
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author_email?: string
          author_id?: string | null
          category?: string | null
          content?: string
          created_at?: string | null
          id?: string
          image?: string | null
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      user: {
        Row: {
          created_at: string
          id: number
          user: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          user?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          user?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          role: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id: string
          role?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          role?: string | null
        }
        Relationships: []
      }
      gallery_images: {
        Row: {
          id: string
          name: string
          file_path: string
          file_size: number
          file_type: string
          uploaded_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          file_path: string
          file_size: number
          file_type: string
          uploaded_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          file_path?: string
          file_size?: number
          file_type?: string
          uploaded_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gallery_images_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      organigram_members: {
        Row: {
          id: string
          name: string
          title: string
          role: string
          image_url: string | null
          image_id: string | null
          description: string | null
          members: string[] | null
          color: string | null
          order_index: number | null
          is_active: boolean | null
          created_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          title: string
          role: string
          image_url?: string | null
          image_id?: string | null
          description?: string | null
          members?: string[] | null
          color?: string | null
          order_index?: number | null
          is_active?: boolean | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          title?: string
          role?: string
          image_url?: string | null
          image_id?: string | null
          description?: string | null
          members?: string[] | null
          color?: string | null
          order_index?: number | null
          is_active?: boolean | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organigram_members_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
          {
            foreignKeyName: "organigram_members_image_id_fkey"
            columns: ["image_id"]
            isOneToOne: false
            referencedRelation: "gallery_images"
            referencedColumns: ["id"]
          }
        ]
      },
      events: {
        Row: {
          id: string
          title: string
          description: string | null
          start_date: string
          end_date: string
          all_day: boolean | null
          location: string | null
          event_type: string | null
          priority: string | null
          status: string | null
          created_by: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          start_date: string
          end_date: string
          all_day?: boolean | null
          location?: string | null
          event_type?: string | null
          priority?: string | null
          status?: string | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          start_date?: string
          end_date?: string
          all_day?: boolean | null
          location?: string | null
          event_type?: string | null
          priority?: string | null
          status?: string | null
          created_by?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      },
      password_reset_logs: {
        Row: {
          id: number
          user_id: string | null
          user_email: string
          reset_timestamp: string | null
          temp_password: string
          used: boolean | null
          used_timestamp: string | null
          created_at: string | null
        }
        Insert: {
          id?: number
          user_id?: string | null
          user_email: string
          reset_timestamp?: string | null
          temp_password: string
          used?: boolean | null
          used_timestamp?: string | null
          created_at?: string | null
        }
        Update: {
          id?: number
          user_id?: string | null
          user_email?: string
          reset_timestamp?: string | null
          temp_password?: string
          used?: boolean | null
          used_timestamp?: string | null
          created_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "password_reset_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      },
      otp_password_reset: {
        Row: {
          id: number
          user_id: string | null
          user_email: string
          otp_code: string
          created_at: string | null
          expires_at: string | null
          used: boolean | null
          used_at: string | null
          attempts: number | null
          max_attempts: number | null
        }
        Insert: {
          id?: number
          user_id?: string | null
          user_email: string
          otp_code: string
          created_at?: string | null
          expires_at?: string | null
          used?: boolean | null
          used_at?: string | null
          attempts?: number | null
          max_attempts?: number | null
        }
        Update: {
          id?: number
          user_id?: string | null
          user_email?: string
          otp_code?: string
          created_at?: string | null
          expires_at?: string | null
          used?: boolean | null
          used_at?: string | null
          attempts?: number | null
          max_attempts?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "otp_password_reset_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_current_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      },
      handle_password_reset: {
        Args: {
          user_email: string
        }
        Returns: {
          success: boolean
          message: string
          temp_password?: string
          user_email?: string
        }
      }
      mark_password_reset_used: {
        Args: {
          user_email: string
          temp_password: string
        }
      }
      generate_password_reset_otp: {
        Args: {
          user_email: string
        }
        Returns: {
          success: boolean
          message: string
          otp_code?: string
          user_email?: string
          expires_at?: string
        }
      }
      verify_otp_code: {
        Args: {
          user_email: string
          otp_code: string
        }
        Returns: {
          success: boolean
          message: string
          otp_id?: number
        }
      }
      verify_otp_and_reset_password: {
        Args: {
          user_email: string
          otp_code: string
          new_password: string
        }
        Returns: {
          success: boolean
          message: string
        }
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
