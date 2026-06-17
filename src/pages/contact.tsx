import { useState } from "react";
import { useLocation } from "wouter";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  companyName: z.string().min(2, "Company is required"),
  designation: z.string().min(2, "Designation is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone number is required"),
  industry: z.string().min(1, "Please select an industry"),
  country: z.string().min(2, "Country is required"),
  projectType: z.string().min(1, "Please select a project type"),
  budgetRange: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  challenges: z.string().min(10, "Please describe your challenges (min 10 chars)"),
});

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [location] = useLocation();

  const queryParams = new URLSearchParams(window.location.search);
  const enquiryType = queryParams.get("type");
  const companyLabel =
  enquiryType === "students"
    ? "College / University Name *"
    : "Company Name *";

const designationLabel =
  enquiryType === "students"
    ? "Role / Position *"
    : "Designation / Title *";

  const pageTitle =
    enquiryType === "procurement"
      ? "Request a Corporate Workshop"
      : enquiryType === "students"
      ? "Student Program Enquiry"
      : enquiryType === "advisory"
      ? "Industrial Advisory Consultation"
      : "Let's Talk Strategy.";

  const pageDescription =
    enquiryType === "procurement"
      ? "Tell us about your procurement team and workshop requirements."
      : enquiryType === "students"
      ? "Tell us about your institution and student development needs."
      : enquiryType === "advisory"
      ? "Let's discuss your industrial automation and cost optimization goals."
      : "Ready to transform your industrial operations? Reach out to schedule a consultation.";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      designation: "",
      email: "",
      phone: "",
      industry: "",
      country: "",
      projectType: "",
      budgetRange: "",
      timeline: "",
      challenges: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/askme@ceveniq.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    if (response.ok) {
      setSubmitted(true);
    }
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="flex flex-col min-h-screen pt-20">
      <section className="py-24 bg-[#060d1a] border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
  {pageTitle}
</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
  {pageDescription}
</p>
        </div>
      </section>

      <section className="py-24 bg-[#030812]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-8">Direct Contact</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-1">Email</h4>
                      <a href="mailto:askme@ceveniq.com" className="text-lg hover:text-cyan-400 transition-colors font-medium">askme@ceveniq.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-1">Phone / WhatsApp</h4>
                      <a href="tel:+919187091728" className="text-lg hover:text-cyan-400 transition-colors font-medium">+91-9187091728</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white/50 uppercase tracking-wider mb-1">Global Reach</h4>
                      <p className="text-lg text-white font-medium">Serving clients worldwide with engineering excellence.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-xl font-bold mb-6">Connect Instantly</h3>
                <a href="https://wa.me/919187091728" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-400 transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 border border-cyan-500/30 rounded-3xl p-16 text-center h-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.1)]"
                >
                  <div className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6">Request Received</h2>
                  <p className="text-white/70 text-xl max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Our engineering intelligence team will review your requirements and contact you within 24 hours to schedule a consultation.
                  </p>
                </motion.div>
              ) : (
                <div className="bg-[#060d1a] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>
                  
                  <h3 className="text-2xl font-bold mb-8">
  {pageTitle}
</h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="fullName" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="First Name Last Name" className="bg-black/40 border-white/10 h-12 text-base focus-visible:ring-cyan-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="companyName" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">
  {companyLabel}
</FormLabel>
                            <FormControl>
                              <Input placeholder="ABC College of Engineering" className="bg-black/40 border-white/10 h-12 text-base focus-visible:ring-cyan-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="designation" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">
  {designationLabel}
</FormLabel>
                            <FormControl>
                              <Input placeholder="Principal/ Dean" className="bg-black/40 border-white/10 h-12 text-base focus-visible:ring-cyan-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">Official Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="xyz@university.com" className="bg-black/40 border-white/10 h-12 text-base focus-visible:ring-cyan-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">Phone Number *</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+91 9876543210" className="bg-black/40 border-white/10 h-12 text-base focus-visible:ring-cyan-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="country" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">Country *</FormLabel>
                            <FormControl>
                              <Input placeholder="India" className="bg-black/40 border-white/10 h-12 text-base focus-visible:ring-cyan-500" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="industry" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">
  {enquiryType === "students"
    ? "Institution Type *"
    : "Industry *"}
</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-black/40 border-white/10 h-12 text-base focus:ring-cyan-500">
                                  <SelectValue
  placeholder={
    enquiryType === "students"
      ? "Select Institution Type"
      : "Select Industry"
  }
/>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-[#0a1220] border-white/10">
                                {enquiryType === "students" ? (
  <>
    <SelectItem value="engineering-college">Engineering College</SelectItem>
    <SelectItem value="deemed-university">Deemed University</SelectItem>
    <SelectItem value="private-university">Private University</SelectItem>
    <SelectItem value="management-institute">Management Institute</SelectItem>
    <SelectItem value="polytechnic">Polytechnic</SelectItem>
    <SelectItem value="other">Other</SelectItem>
  </>
) : (
  <>
    <SelectItem value="ecommerce">Ecommerce</SelectItem>
    <SelectItem value="warehousing">Warehousing & Logistics</SelectItem>
    <SelectItem value="retail">Retail</SelectItem>
    <SelectItem value="fmcg">FMCG</SelectItem>
    <SelectItem value="manufacturing">Manufacturing</SelectItem>
    <SelectItem value="automotive">Automotive</SelectItem>
    <SelectItem value="pharma">Pharmaceuticals</SelectItem>
    <SelectItem value="airports">Airports</SelectItem>
    <SelectItem value="infrastructure">Infrastructure</SelectItem>
    <SelectItem value="other">Other</SelectItem>
  </>
)}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="projectType" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">
  {enquiryType === "students"
    ? "Program Interest *"
    : "Project Type *"}
</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-black/40 border-white/10 h-12 text-base focus:ring-cyan-500">
                                  <SelectValue
  placeholder={
    enquiryType === "students"
      ? "Select Program Interest"
      : "Select Project Type"
  }
/>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-[#0a1220] border-white/10">
  {enquiryType === "students" ? (
    <>
      <SelectItem value="career-readiness">
        Career Readiness Program
      </SelectItem>

      <SelectItem value="industrial-awareness">
        Industrial Awareness Workshop
      </SelectItem>

      <SelectItem value="automation-fundamentals">
        Automation Fundamentals
      </SelectItem>

      <SelectItem value="supply-chain-fundamentals">
        Supply Chain Fundamentals
      </SelectItem>

      <SelectItem value="guest-lecture">
        Guest Lecture Session
      </SelectItem>

      <SelectItem value="custom-program">
        Custom Program
      </SelectItem>
    </>
  ) : (
    <>
      <SelectItem value="consulting">Automation Consulting</SelectItem>
      <SelectItem value="integration">System Integration</SelectItem>
      <SelectItem value="deployment">Deployment & Commissioning</SelectItem>
      <SelectItem value="sourcing">Strategic Sourcing</SelectItem>
      <SelectItem value="cost-engineering">Cost Engineering</SelectItem>
      <SelectItem value="training">Training</SelectItem>
      <SelectItem value="other">Other</SelectItem>
    </>
  )}
</SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="budgetRange" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">
  {enquiryType === "students"
    ? "Expected Participants *"
    : "Budget Range *"}
</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-black/40 border-white/10 h-12 text-base focus:ring-cyan-500">
                                  <SelectValue
  placeholder={
    enquiryType === "students"
      ? "Select Student Count"
      : "Select Budget"
  }
/>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-[#0a1220] border-white/10">
                                {enquiryType === "students" ? (
  <>
    <SelectItem value="under-50">
      Under 50 Students
    </SelectItem>

    <SelectItem value="50-100">
      50 - 100 Students
    </SelectItem>

    <SelectItem value="100-250">
      100 - 250 Students
    </SelectItem>

    <SelectItem value="250-500">
      250 - 500 Students
    </SelectItem>

    <SelectItem value="500-plus">
      More than 500 Students
    </SelectItem>
  </>
) : (
  <>
    <SelectItem value="under-50k">&lt; $50K</SelectItem>
    <SelectItem value="50k-200k">$50K – $200K</SelectItem>
    <SelectItem value="200k-500k">$200K – $500K</SelectItem>
    <SelectItem value="over-500k">$500K+</SelectItem>
    <SelectItem value="not-sure">Not Sure</SelectItem>
  </>
)}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="timeline" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">
  {enquiryType === "students"
    ? "Preferred Program Timeline *"
    : "Project Timeline *"}
</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-black/40 border-white/10 h-12 text-base focus:ring-cyan-500">
                                  <SelectValue
  placeholder={
    enquiryType === "students"
      ? "Select Program Timeline"
      : "Select Timeline"
  }
/>
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-[#0a1220] border-white/10">
                                {enquiryType === "students" ? (
  <>
    <SelectItem value="immediate">
      Immediate Discussion
    </SelectItem>

    <SelectItem value="within-30-days">
      Within 30 Days
    </SelectItem>

    <SelectItem value="within-90-days">
      Within 90 Days
    </SelectItem>

    <SelectItem value="current-semester">
      Current Semester
    </SelectItem>

    <SelectItem value="next-semester">
      Next Semester
    </SelectItem>

    <SelectItem value="exploring">
      Exploring Opportunities
    </SelectItem>
  </>
) : (
  <>
    <SelectItem value="immediate">Immediate</SelectItem>
    <SelectItem value="1-3-months">1-3 months</SelectItem>
    <SelectItem value="3-6-months">3-6 months</SelectItem>
    <SelectItem value="6-12-months">6-12 months</SelectItem>
    <SelectItem value="planning">Planning Phase</SelectItem>
  </>
)}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="challenges" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white/80">Objectives / Learning Outcomes Expected *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please describe what you are looking to achieve..." 
                                className="bg-black/40 border-white/10 min-h-[120px] text-base focus-visible:ring-cyan-500 resize-none" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                      <Button 
                        type="submit" 
                        disabled={form.formState.isSubmitting}
                        className="w-full h-14 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] mt-4"
                      >
                        {form.formState.isSubmitting ? "SUBMITTING..." : "SUBMIT REQUEST"}
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}