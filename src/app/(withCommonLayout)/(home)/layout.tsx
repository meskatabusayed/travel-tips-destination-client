export default function AboutLayout({
    children, recentPosts
  }: {
    children: React.ReactNode;
    recentPosts : React.ReactNode;
  }) {
    return <>
      
      {children}
      {recentPosts}
  
    </>
  }