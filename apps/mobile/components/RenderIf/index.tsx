interface RenderIfProps {
  children: React.ReactNode;
  isTrue: boolean;
}
export function RenderIf({ children, isTrue }: RenderIfProps) {
  return isTrue ? <>{children}</> : null;
}
