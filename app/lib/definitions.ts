type Member = {
  name: string;
  email: string;
  role: "Owner" | "Member";
  accounts: number;
  isPending?: boolean;
};

type Team = {
  id: string;
  name: string;
  teamOwner: string;
  members: Member[];
  created: number;
};
