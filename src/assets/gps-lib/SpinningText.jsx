import { SpinningText } from "@/components/ui/spinning-text";

export function SpinningTextBasic() {
  return (
    <SpinningText
      radius={6.8}
      fontSize={0.5}
      className="font-medium leading-none"
    >
      {`Vamos conversar • Vamos conversar `}
    </SpinningText>
  );
}
