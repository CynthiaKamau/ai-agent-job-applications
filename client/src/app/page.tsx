"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Upload,
  User,
  Briefcase,
  Key,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { ApiKeySetup } from "@/components/api-key-setup";
import { ResumeUploader } from "@/components/resume-uploader";
import Link from "next/link";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Home() {
  const [apiKeyConfigured, setApiKeyConfigured] = useState<boolean | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkApiKey = async () => {
      try {
        // Fetch the API key from the settings endpoint.
        const response = await fetch("http://localhost:8000/api/settings");
        const data = await response.json();
        // If data.api_key exists (and is non-empty), mark as configured.
        setApiKeyConfigured(!!data.api_key);
      } catch (error) {
        console.error("Failed to check API key status:", error);
        setApiKeyConfigured(false);
      } finally {
        setLoading(false);
      }
    };

    checkApiKey();
  }, []);

  if (loading) {
    return (
      <main className="container mx-auto py-10 px-4 md:px-6 flex justify-center items-center min-h-[80vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-blue-600">Loading application...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            AI Job Assistant
          </h1>
          <p className="text-gray-600 text-lg max-w-[700px]">
            Analyze job postings, generate tailored cover letters, and manage
            your professional profile with AI-powered tools.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {/* Top row with API Key and Resume Upload side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* API Key Setup Card */}
            <Card
              className={`transform transition-all duration-300 hover:shadow-xl ${
                apiKeyConfigured
                  ? "border-blue-200 bg-blue-50/50"
                  : "border-blue-200 border-dashed hover:border-blue-400"
              }`}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center text-gray-900">
                  <Key className="mr-2 h-6 w-6" />
                  API Key Setup
                </CardTitle>
                <CardDescription>
                  {apiKeyConfigured
                    ? "Your OpenAI API key is configured"
                    : "Configure your OpenAI API key to use the application"}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-8">
                {apiKeyConfigured ? (
                  <div className="text-center">
                    <CheckCircle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <p className="text-blue-600 font-medium mb-4">
                      API Key is configured and working
                    </p>
                    <Button variant="outline" asChild>
                      <Link href="/settings">Update API Key</Link>
                    </Button>
                  </div>
                ) : (
                  <ApiKeySetup onSuccess={() => setApiKeyConfigured(true)} />
                )}
              </CardContent>
            </Card>

            {/* Resume Upload Card */}
            <Card
              className={`transform transition-all duration-300 hover:shadow-xl ${
                !apiKeyConfigured
                  ? "opacity-50"
                  : "border-blue-200 hover:border-blue-400"
              }`}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl flex items-center justify-center text-gray-900">
                  <Upload className="mr-2 h-5 w-5" />
                  Resume Upload
                </CardTitle>
                <CardDescription>
                  Upload your resume to begin your job application journey
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-8">
                {!apiKeyConfigured ? (
                  <Alert>
                    <AlertCircle className="h-4 w-4 mr-2" />
                    <AlertDescription>
                      Please configure your API key first
                    </AlertDescription>
                  </Alert>
                ) : (
                  <ResumeUploader />
                )}
              </CardContent>
            </Card>
          </div>

          {/* Profile and Job Tools Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Profile Card */}
            <Card
              className={`transform transition-all duration-300 hover:shadow-xl ${
                !apiKeyConfigured
                  ? "opacity-50"
                  : "border-blue-200 hover:border-blue-400"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <User className="mr-2 h-5 w-5" />
                  Your Profile
                </CardTitle>
                <CardDescription>
                  Manage your professional information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Keep your profile up-to-date to generate accurate cover
                  letters and job matches.
                </p>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={!apiKeyConfigured}
                  asChild
                >
                  <Link href="/profile">Edit Profile</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Job Tools Card */}
            <Card
              className={`transform transition-all duration-300 hover:shadow-xl ${
                !apiKeyConfigured
                  ? "opacity-50"
                  : "border-blue-200 hover:border-blue-400"
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-gray-900">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Job Tools
                </CardTitle>
                <CardDescription>
                  Analyze job postings and generate cover letters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">
                  Analyze how well you match job requirements and create
                  tailored cover letters.
                </p>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={!apiKeyConfigured}
                  asChild
                >
                  <Link href="/job-tools">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
