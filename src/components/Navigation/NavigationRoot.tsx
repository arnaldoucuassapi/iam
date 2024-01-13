
export function NavigationRoot({ 
  children
 }:{ 
  children: React.ReactNode
}) {
  return (
    <nav className="font-bold text-base flex gap-4">
      {children}
    </nav>
  );
}