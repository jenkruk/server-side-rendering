import { getClient } from "../../../actions";

const ProfilePage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const result = id.split("%3A");
  const seed = result[0];
  const uuid = result[1];
  const page = result[2];
  const data = getClient(seed, uuid, page);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 xl:px-24">
      {data}
    </main>
  );
};

export default ProfilePage;
