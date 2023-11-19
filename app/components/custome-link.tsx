import { Link as RemixLink, useLocation } from "@remix-run/react";

interface CustomLinkProps {
  to: string;
  label: string;
  className?: string; 
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, label, className }) => {
  const location = useLocation();

  const isActive = location.pathname === to;
  const defaultClassName = "text-md font-medium text-underline transition-colors hover:text-primary hover:text-underline";
  const combinedClassName = isActive
    ? `${defaultClassName} text-primary text-underline ${className}` 
    : `${defaultClassName} text-muted-foreground ${className}`; 

  return (
    <RemixLink to={to} className={combinedClassName.trim()}>
      {label}
    </RemixLink>
  );
};

export default CustomLink;
