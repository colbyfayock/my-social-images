export interface CloudinaryResource {
  asset_id?: string;
  context?: {
    custom?: {
      alt?: string;
      caption?: string;
      source?: string;
    }
  }
  public_id: string;
}