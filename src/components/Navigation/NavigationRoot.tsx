
export function NavigationRoot({ 
  children
 }:{ 
  children: React.ReactNode
}) {
  return (
    <nav className="font-bold text-base flex items-center gap-2">
      {children}
    </nav>
  );
}