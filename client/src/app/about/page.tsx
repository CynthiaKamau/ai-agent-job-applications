import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function AboutPage() {
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
          About AI Job Assistant
        </h1>
        <p className="text-gray-600 max-w-[700px]">
          An AI-powered tool to help you optimize your job search and application process
        </p>
      </div>

      <div className="grid gap-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
            <CardDescription>What you can do with AI Job Assistant</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Job Analysis</h3>
              <p className="text-gray-600">
                Upload job descriptions and get AI-powered analysis of required skills,
                experience, and qualifications. See how well your profile matches the requirements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cover Letter Generation</h3>
              <p className="text-gray-600">
                Generate tailored cover letters based on your profile and the job description,
                highlighting your relevant experience and skills.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Profile Management</h3>
              <p className="text-gray-600">
                Maintain your professional profile, skills, and experience in one place.
                Use this information to generate better matches and applications.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>The technology behind AI Job Assistant</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              AI Job Assistant uses OpenAI's advanced language models to analyze job
              descriptions, generate cover letters, and provide insights about job
              requirements. The application processes your profile and job details
              to create personalized, relevant content for your job applications.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
