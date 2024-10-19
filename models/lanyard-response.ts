export interface LanyardResponse {
  success: boolean;
  data: {
    spotify: Spotify | null;
    listening_to_spotify: boolean;
    kv: Record<string, any>;
    discord_user: DiscordUser;
    discord_status: string;
    activities: Activity[];
    active_on_discord_web: boolean;
    active_on_discord_mobile: boolean;
    active_on_discord_desktop: boolean;
  };
}

export interface Spotify {
  track_id: string;
  timestamps: {
    start: number;
    end: number;
  };
  song: string;
  artist: string;
  album_art_url: string;
  album: string;
}

export interface DiscordUser {
  username: string;
  public_flags: number;
  id: string;
  display_name: string | null;
  discriminator: string;
  bot: boolean;
  avatar_decoration: string | null;
  avatar: string;
}

export interface Activity {
  type: number;
  timestamps: {
    start: number;
    end?: number;
  };
  name: string;
  id: string;
  created_at: number;
  application_id?: string;
  sync_id?: string;
  state?: string;
  session_id?: string;
  party?: {
    id: string;
  };
  flags?: number;
  details?: string;
  assets?: {
    large_text: string;
    large_image: string;
  };
}
