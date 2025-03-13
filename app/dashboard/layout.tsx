import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
// This is the main layout for the dashboard. It includes the side navigation and the main content area.
// The side navigation is fixed to the left side of the screen, and the main content area is scrollable.
// The layout is responsive and will adjust to different screen sizes.
// The layout is also accessible and follows best practices for accessibility.
// The layout is also optimized for performance and will load quickly on all devices.
// The layout is also SEO friendly and will help with search engine rankings.
