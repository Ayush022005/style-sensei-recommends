
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Share, Save } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';

const ShareResults = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setCopied(true);
        toast({
          title: "Link copied!",
          description: "Share with your friends",
        });
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        toast({
          title: "Failed to copy link",
          description: "Please try again",
          variant: "destructive",
        });
      });
  };
  
  const handleSaveResults = () => {
    // In a real app, this would save the results to the user's account
    toast({
      title: "Results saved!",
      description: "You can access them anytime from your profile",
    });
  };
  
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-fashion-mauve"
          >
            <Share size={16} />
            <span>Share Results</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Share Your Style Profile</DialogTitle>
            <DialogDescription>
              Copy the link below to share your style recommendations with friends
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center gap-2 mt-4">
            <Input 
              value={window.location.href} 
              readOnly 
              className="flex-1"
            />
            <Button 
              onClick={handleCopyLink}
              className="bg-fashion-mauve hover:bg-fashion-mauve/90"
            >
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              This link will be active for 30 days
            </p>
          </div>
        </DialogContent>
      </Dialog>
      
      <Button 
        variant="outline" 
        className="flex items-center gap-2"
        onClick={handleSaveResults}
      >
        <Save size={16} />
        <span>Save Results</span>
      </Button>
    </div>
  );
};

export default ShareResults;
