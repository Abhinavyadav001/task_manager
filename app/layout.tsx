import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Manage your tasks efficiently and stay productive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <header className="bg-gray-800 shadow-md">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
              <a href="/" className="text-xl font-bold text-white">
                TaskManager
              </a>
              <div className="space-x-6">
                <a
                  href="/tasks"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tasks
                </a>
                <a
                  href="/login"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow"
                >
                  Sign Up
                </a>
                <a
                  href="/admin"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow"
                >
                  Admin
                </a>
              </div>
            </nav>
          </header>

          {/* Content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <footer className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} TaskManager. All rights
                reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Built with ❤️ by Abhinav Yadav.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
