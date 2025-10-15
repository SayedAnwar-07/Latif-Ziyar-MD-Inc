import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  badgeIcon?: LucideIcon;
  badgeText: string;
  title: string;
  description: string;
  className?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function SectionHeader({
  badgeIcon: Icon,
  badgeText,
  title,
  description,
  className = "",
  badgeClassName = "",
  titleClassName = "",
  descriptionClassName = ""
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <div className={`inline-flex items-center gap-2 text-[#004a65] px-4 py-2  text-sm font-medium mb-4 border-b border-b-[#004a65] ${badgeClassName}`}>
        {Icon && <Icon className="w-4 h-4" />}
        {badgeText}
      </div>
      <h3 className={`text-4xl font-bold text-gray-900 mb-4 ${titleClassName}`}>
        {title}
      </h3>
      <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${descriptionClassName}`}>
        {description}
      </p>
    </div>
  );
}