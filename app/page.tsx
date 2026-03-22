import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { AboutSection } from "@/components/sections/about"
import { ProjectsSection } from "@/components/sections/projects"
import { IcecoolSection } from "@/components/sections/icecool"
import { SkillsSection } from "@/components/sections/skills"
import { AppsSection } from "@/components/sections/apps"
import { AchievementsSection } from "@/components/sections/achievements"
import { BlogSection } from "@/components/sections/blog"
import { ResumeSection } from "@/components/sections/resume"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { ClientMain } from "@/components/client-main"

export default function Home() {
  return (
    <>
      <Navigation />
      <ClientMain>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <IcecoolSection />
        <SkillsSection />
        <AppsSection />
        <AchievementsSection />
        <BlogSection />
        <ResumeSection />
        <ContactSection />
      </ClientMain>
      <Footer />
    </>
  )
}
