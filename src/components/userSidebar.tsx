"use client";

import { Edit2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserSidebar() {
  return (
    <aside className="fixed left-0 h-full w-64 bg-blue-900 text-white flex flex-col">
      {/* User Info */}
      <div className="p-4 border-b border-blue-700">
        <div className="flex items-center gap-3 mb-4">
          {/* Replace the src with a user avatar if you have one */}
          <div className="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center">
            <Image
              src="/avatar-placeholder.png"
              alt="User Avatar"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-semibold">User Name</h2>
            <p className="text-sm text-blue-200">Master User</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <p className="text-xs uppercase text-blue-200 tracking-wide">Manage Listings</p>
        <SidebarLink label="Profile" href="/dashboard/editprofile"/>
        <SidebarLink label="Dashboard" href="/dashboard"/>
        <SidebarLink label="Wishlist" href="/dashboard/wishlist" />
        <SidebarLink label="Support & help" href="/dashboard/support" />
        <SidebarLink label="Logout" href="/" />
      </nav>
    </aside>
  );
}

type SidebarLinkProps = {
  label: string;
  href?: string;
};

function SidebarLink({ label, href = "#" }: SidebarLinkProps) {
  return (
    <a
      href={href}
      className="block text-sm px-2 py-2 rounded-md text-white hover:bg-blue-800 transition-colors"
    >
      {label}
    </a>
  );
}
