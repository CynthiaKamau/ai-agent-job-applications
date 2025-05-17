import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JobAnalyzer } from "@/components/job-analyzer";
import { CoverLetterGenerator } from "@/components/cover-letter-generator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function JobToolsPage() {
  return (
    <main className="container mx-auto py-10 px-4 md:px-6">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>

      <div className="flex flex-col items-center space-y-6 text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          Job Application Tools
        </h1>
        <p className="text-muted-foreground max-w-[700px]">
          Analyze job postings and generate tailored cover letters
        </p>
      </div>

      <Tabs defaultValue="analyze" className="w-full max-w-4xl mx-auto">
        <div className="flex justify-center w-full mb-12">
          <TabsList className="grid grid-cols-2 gap-6 mb-8">
            <TabsTrigger
              value="analyze"
              className="px-8 rounded-md data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 hover:text-blue-600"
            >
              Analyze Job
            </TabsTrigger>
            <TabsTrigger
              value="cover-letter"
              className="px-8 rounded-md data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 hover:text-blue-600"
            >
              Cover Letter
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="analyze" className="space-y-2">
          <JobAnalyzer />
        </TabsContent>

        <TabsContent value="cover-letter" className="space-y-2">
          <CoverLetterGenerator />
        </TabsContent>
      </Tabs>
    </main>
  );
}
