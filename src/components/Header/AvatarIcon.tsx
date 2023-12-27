import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AvatarIcon = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>ByBit</AvatarFallback>
    </Avatar>
  );
};

export default AvatarIcon;
