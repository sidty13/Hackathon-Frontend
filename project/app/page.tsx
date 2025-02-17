"use client";
import React, { useState } from "react";
import Link from "next/link";
import "@/app/globals.css"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserIcon, DocumentTextIcon, ClipboardDocumentListIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SparklesCore } from "@/components/ui/sparkles";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center relative">
      <h1 className="text-xl font-bold text-blue-400">MedAI</h1>
      <div className="flex space-x-6 items-center">
        <Link href="/"><span className="hover:text-blue-400 cursor-pointer">Home</span></Link>
        <div 
          className="relative cursor-pointer hover:text-blue-400"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <span className="flex items-center">
            Features <ChevronDownIcon className="w-4 h-4 ml-1" />
          </span>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-gray-900 border border-gray-700 shadow-lg rounded-md">
              <Link href="/health-score">
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Health Score Analysis</div>
              </Link>
              <Link href="/patients">
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Patient Records</div>
              </Link>
              <Link href="/dashboard">
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Doctor Dashboard</div>
              </Link>
              <Link href="/monitoring">
                <div className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Real-time Monitoring</div>
              </Link>
            </div>
          )}
        </div>
        <Link href="/about"><span className="hover:text-blue-400 cursor-pointer">About</span></Link>
        <Link href="/login">
          <Button variant="outline" className="text-black border-blue-400 bg-white hover:bg-blue-100 hover:text-blue-600">
            Login
          </Button>
        </Link>
        <Link href="/register">
          <Button variant="outline" className="text-black border-blue-400 bg-white hover:bg-blue-100 hover:text-blue-600">
            Register
          </Button>
        </Link>
      </div>
    </nav>
  );
};

const SparklesPreview = () => {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        MedAi
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

const features = [
  { title: "Health Score Analysis", icon: DocumentTextIcon, description: "AI-powered patient health scoring for quick insights.", link: "/health-score" },
  { title: "Patient Records", icon: ClipboardDocumentListIcon, description: "View and manage patient history and medical records.", link: "/patients" },
  { title: "Doctor Dashboard", icon: UserIcon, description: "Monitor and track all patient health data at a glance.", link: "/dashboard" },
  { title: "Real-time Monitoring", icon: HeartIcon, description: "Track patient vitals and receive instant alerts with care and support.", link: "/monitoring" },
];

const WelcomePage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <SparklesPreview />
      <header className="text-center py-12 bg-gray-900">
        <h2 className="text-3xl font-semibold text-blue-400">Welcome to MedAI</h2>
        <p className="text-gray-400 mt-2">AI-driven medical insights for faster, smarter healthcare.</p>
        <div className="mt-6">
          <Link href="/choose-role">
            <Button className="bg-blue-500 text-black px-6 py-2 hover:bg-blue-400">Get Started</Button>
          </Link>
        </div>
      </header>
      <section className="text-center py-6 bg-black">
        <h3 className="text-xl font-semibold text-blue-400">Select Your Role</h3>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="/doctor">
            <Button variant="outline" className="text-black border-blue-400 bg-white hover:bg-blue-100 hover:text-blue-600">
              Doctor
            </Button>
          </Link>
          <Link href="/patient">
            <Button variant="outline" className="text-black border-blue-400 bg-white hover:bg-blue-100 hover:text-blue-600">
              Patient
            </Button>
          </Link>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
        {features.map(({ title, icon: Icon, description, link }) => (
          <Link key={title} href={link}>
            <Card className="p-6 cursor-pointer hover:shadow-lg transition bg-gray-800 border border-gray-700">
              <CardContent className="flex flex-col items-center">
                <Icon className="text-blue-400 w-12 h-12 mb-4" />
                <h3 className="text-lg font-medium text-gray-200">{title}</h3>
                <p className="text-gray-400 text-center">{description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default WelcomePage;