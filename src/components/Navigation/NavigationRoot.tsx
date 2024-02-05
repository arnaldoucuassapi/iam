
export function NavigationRoot({ 
  children
 }:{ 
  children: React.ReactNode
}) {
  return (
    <nav className="font-bold text-base flex gap-2">
      {children}
    </nav>
  );
}