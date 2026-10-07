import { Image as ImageIcon, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: '3/4' | '16/9' | '21/9' | '1/1' | '4/3' | '3/2';
  icon?: 'image' | 'building';
  className?: string;
  rounded?: boolean;
}

const aspectClass: Record<string, string> = {
  '3/4': 'aspect-[3/4]',
  '16/9': 'aspect-[16/9]',
  '21/9': 'aspect-[21/9]',
  '1/1': 'aspect-square',
  '4/3': 'aspect-[4/3]',
  '3/2': 'aspect-[3/2]',
};

export function ImagePlaceholder({
  label,
  aspectRatio = '16/9',
  icon = 'image',
  className,
  rounded = true,
}: ImagePlaceholderProps) {
  const Icon = icon === 'building' ? Building : ImageIcon;

  return (
    <div
      className={cn(
        'relative flex flex-col items-center justify-center overflow-hidden bg-stone-fill',
        aspectClass[aspectRatio],
        rounded && 'rounded-sm',
        className
      )}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(166,124,82,0.04) 0%, rgba(30,36,32,0.03) 100%)',
        }}
      />
      {/* Decorative thin frame */}
      <div className="absolute inset-4 border border-stone-border/60" />

      <div className="relative z-10 flex flex-col items-center gap-4 px-8 text-center">
        <Icon
          className="h-8 w-8 text-bronze/40"
          strokeWidth={1}
        />
        <p className="max-w-[280px] text-xs font-light uppercase tracking-wider text-slate-muted/80">
          Image Placeholder
        </p>
        <p className="max-w-[320px] font-serif text-sm italic text-slate/70">
          {label}
        </p>
      </div>
    </div>
  );
}
