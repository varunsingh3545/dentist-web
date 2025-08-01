-- Create gallery storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'gallery',
  'gallery',
  true,
  20971520, -- 20MB limit (increased to support videos)
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml', 'video/mp4', 'video/webm', 'video/ogg']
) ON CONFLICT (id) DO NOTHING;

-- Create storage policies for the gallery bucket
-- Allow authenticated users to upload images and videos
CREATE POLICY "Allow authenticated users to upload gallery media" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'gallery' AND 
    auth.role() = 'authenticated'
  );

-- Allow authenticated users to view gallery images and videos
CREATE POLICY "Allow authenticated users to view gallery media" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'gallery' AND 
    auth.role() = 'authenticated'
  );

-- Allow users to update their own uploaded media
CREATE POLICY "Allow users to update their own gallery media" ON storage.objects
  FOR UPDATE USING (
    bucket_id = 'gallery' AND 
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Allow users to delete their own uploaded media
CREATE POLICY "Allow users to delete their own gallery media" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'gallery' AND 
    auth.uid()::text = (storage.foldername(name))[1]
  ); 