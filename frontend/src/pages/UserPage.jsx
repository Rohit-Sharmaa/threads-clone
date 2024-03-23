import { UserHeader } from "../components/UserHeader";
import UserPost from "../components/UserPost";

export default function UserPage() {
  return (
    <>
      <UserHeader />
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
