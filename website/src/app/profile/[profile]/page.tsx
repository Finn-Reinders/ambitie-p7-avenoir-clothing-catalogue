import Page from "@/components/Page";
import { loadProfiles } from "@/modules/garmentsData";

interface Props {
  params: Promise<{ profile: string }>;
}

export default async function UserProfilePage({ params }: Props) {
  const { profile: profileId } = await params;
  const profiles = await loadProfiles();
  const foundProfile = profiles.find(p => p._id ===  profileId);

  return (
    <Page>
      <div className="w-screen h-screen text-white"> {foundProfile.name}
        <img src={foundProfile.image} alt="" />
      </div>
    </Page>
  );
}

