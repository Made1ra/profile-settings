import Avatar from "./avatar";

export default function Member({
  name,
  email,
  role,
  accounts,
  isPending,
}: {
  name: string;
  email: string;
  role: string;
  accounts: number;
  isPending?: boolean;
}) {
  return (
    <tr>
      <td className="p-4 text-left">
        <div className="flex flex-row items-center">
          <Avatar width={40} height={40} className="w-10 h-10 mr-2" />
          <div className="flex flex-col">
            <span className="font-normal">{name}</span>
            <span className="text-gray-500 text-nowrap">
              {email}
              {isPending && " (pending)"}
            </span>
          </div>
        </div>
      </td>
      <td className="p-4 font-normal">{role}</td>
      <td className="p-4 font-normal">
        {role === "Owner" ? "Full access" : "Limited access"}
      </td>
      <td className="p-4 font-normal">{accounts}</td>
    </tr>
  );
}
