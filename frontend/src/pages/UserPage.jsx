import { useEffect, useState } from "react";
import { UserHeader } from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";

export default function UserPage() {
  const [user, setUser] = useState(null);
  const showToast = useShowToast();
  const { username } = useParams();

  useEffect(
    () => {
      const getUser = async () => {
        try {
          const res = await fetch(`/api/users/profile/${username}`);
          const data = res.json();
          if (data.error) {
            showToast("Error", data.error, "error");
            return;
          }
          setUser(data);
        } catch (error) {
          showToast("Error", error, "error");
        }
      };

      getUser();
    },
    [username],
    showToast
  );

  if (!user) {
    return null;
  }

  return (
    <>
      <UserHeader user={user} />
      <UserPost
        likes={1100}
        replies={500}
        postImg="/post1.png"
        postTitle="Hi , i am using thread"
      />
      <UserPost
        likes={100}
        replies={50}
        postImg="/post2.png"
        postTitle="Hi , i am using thread"
      />
      <UserPost
        likes={180}
        replies={467}
        postImg="/post3.png"
        postTitle="this is my first post"
      />
      <UserPost
        likes={1670}
        replies={5900}
        postTitle="This is my first thread"
      />
    </>
  );
}
