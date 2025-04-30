
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Camera, Upload, Gallery } from 'lucide-react';

const UploadSection = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check if the file is an image
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (.jpg, .jpeg, .png)",
        variant: "destructive",
      });
      return;
    }
    
    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB",
        variant: "destructive",
      });
      return;
    }
    
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };
  
  const handleSubmit = async () => {
    if (!image) {
      toast({
        title: "No image selected",
        description: "Please upload an image to continue",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setUploading(true);
      // In a real app, we would upload the image to a server here
      // For now, we'll simulate a delay and redirect to the results page
      await new Promise(resolve => setTimeout(resolve, 2000));
      navigate('/results');
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was a problem uploading your image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-lg photo-upload-container">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-serif font-medium mb-2">Upload Your Photo</h2>
        <p className="text-muted-foreground">For the best results, please upload a clear front-facing photo in good lighting</p>
      </div>
      
      <div className="flex flex-col items-center">
        <div 
          className={`w-full aspect-square max-w-md mx-auto mb-6 rounded-lg border-2 border-dashed flex flex-col items-center justify-center p-6 transition-all ${
            preview ? 'border-fashion-mauve bg-white' : 'border-gray-300 bg-muted/30 hover:bg-muted/50'
          }`}
        >
          {preview ? (
            <div className="relative w-full h-full">
              <img 
                src={preview} 
                alt="Preview" 
                className="w-full h-full object-cover rounded" 
              />
              <Button 
                variant="outline"
                size="sm"
                className="absolute bottom-4 right-4 bg-white/80 hover:bg-white"
                onClick={() => {
                  setImage(null);
                  setPreview(null);
                }}
              >
                Change
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-4 p-4 rounded-full bg-fashion-mauve/10">
                <Camera className="h-10 w-10 text-fashion-mauve" />
              </div>
              <p className="text-sm mb-2 font-medium">Drag and drop or click to upload</p>
              <p className="text-xs text-muted-foreground mb-4">JPEG, PNG up to 5MB</p>
              <div className="flex gap-4">
                <Button variant="outline" className="flex items-center gap-2 bg-white">
                  <Upload size={16} />
                  <span>Upload</span>
                  <input 
                    type="file" 
                    className="absolute inset-0 opacity-0 cursor-pointer" 
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </Button>
                <Button variant="outline" className="flex items-center gap-2 bg-white">
                  <Gallery size={16} />
                  <span>Gallery</span>
                </Button>
              </div>
            </>
          )}
        </div>
        
        <div className="text-center mb-8 mt-2">
          <p className="text-xs text-muted-foreground">
            By uploading an image, you agree to our <a href="#" className="underline hover:text-fashion-mauve">Terms of Service</a> and <a href="#" className="underline hover:text-fashion-mauve">Privacy Policy</a>
          </p>
        </div>
        
        <Button 
          className="w-full max-w-xs bg-fashion-mauve hover:bg-fashion-mauve/90 text-white"
          onClick={handleSubmit}
          disabled={!image || uploading}
        >
          {uploading ? 'Analyzing...' : 'Get My Style Recommendations'}
        </Button>
      </div>
    </div>
  );
};

export default UploadSection;
