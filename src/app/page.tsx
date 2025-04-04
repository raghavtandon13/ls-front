// ₹
import Link from "next/link";
import {
    ArrowRight,
    Building,
    CheckCircle,
    ChevronRight,
    CreditCard,
    IndianRupee,
    LineChart,
    Shield,
    Star,
    User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Image src="/lslogo.png" alt="LoanSparrow Logo" width={30} height={30} priority />
                        <span className="text-xl font-bold">LoanSparrow</span>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <Link
                            href="#"
                            className="text-sm font-medium hover:text-primary transition-colors duration-200"
                        >
                            Personal Loans
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium hover:text-primary transition-colors duration-200"
                        >
                            Business Loans
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium hover:text-primary transition-colors duration-200"
                        >
                            How It Works
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium hover:text-primary transition-colors duration-200"
                        >
                            About Us
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Link
                            href="#"
                            className="text-sm font-medium hover:text-primary hidden sm:inline-block transition-colors duration-200"
                        >
                            Log in
                        </Link>
                        <Button asChild className="btn-hover-effect">
                            <Link href="#">Sign Up Free</Link>
                        </Button>
                    </div>
                </div>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className={`space-y-4 ₹{isLoaded ? "animate-fade-up" : "opacity-0"}`}>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    Find Your Perfect Loan in Minutes, Not Days
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Compare offers from 50+ lenders and apply with just one click. No paperwork, no
                                    hassle.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="w-full sm:w-auto btn-hover-effect gradient-primary">
                                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full sm:w-auto btn-hover-effect">
                                        How It Works
                                    </Button>
                                </div>
                                <div className="flex items-center gap-4 pt-4">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className="inline-block h-8 w-8 rounded-full bg-gray-200 ring-2 ring-background"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        <span className="font-medium">4,000+</span> loans approved this month
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`mx-auto lg:mx-0 relative ₹{isLoaded ? "animate-slide-in-right" : "opacity-0"}`}
                            >
                                <div className="absolute -top-4 -left-4 bg-primary/10 w-full h-full rounded-lg animate-float"></div>
                                <Card className="relative card-hover-effect">
                                    <CardHeader>
                                        <CardTitle>Find Your Loan</CardTitle>
                                        <CardDescription>Compare offers from top lenders instantly</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Tabs defaultValue="personal" className="w-full">
                                            <TabsList className="grid w-full grid-cols-2">
                                                <TabsTrigger value="personal">Personal Loan</TabsTrigger>
                                                <TabsTrigger value="business">Business Loan</TabsTrigger>
                                            </TabsList>
                                            <TabsContent value="personal" className="space-y-4 pt-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                            Loan Amount
                                                        </label>
                                                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 transition-all duration-200 hover:border-primary">
                                                            <option>₹5,000</option>
                                                            <option>₹10,000</option>
                                                            <option>₹15,000</option>
                                                            <option>₹20,000</option>
                                                            <option>₹25,000+</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                            Credit Score
                                                        </label>
                                                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 transition-all duration-200 hover:border-primary">
                                                            <option>Excellent (720+)</option>
                                                            <option>Good (680-719)</option>
                                                            <option>Fair (640-679)</option>
                                                            <option>Poor (below 640)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Loan Purpose
                                                    </label>
                                                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 transition-all duration-200 hover:border-primary">
                                                        <option>Debt Consolidation</option>
                                                        <option>Home Improvement</option>
                                                        <option>Major Purchase</option>
                                                        <option>Medical Expenses</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                                <Button className="w-full btn-hover-effect gradient-primary">
                                                    See My Rates
                                                </Button>
                                            </TabsContent>
                                            <TabsContent value="business" className="space-y-4 pt-4">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                            Loan Amount
                                                        </label>
                                                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 transition-all duration-200 hover:border-primary">
                                                            <option>₹10,000</option>
                                                            <option>₹25,000</option>
                                                            <option>₹50,000</option>
                                                            <option>₹100,000</option>
                                                            <option>₹250,000+</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                            Business Age
                                                        </label>
                                                        <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 transition-all duration-200 hover:border-primary">
                                                            <option>Less than 1 year</option>
                                                            <option>1-2 years</option>
                                                            <option>2-5 years</option>
                                                            <option>5+ years</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                        Loan Purpose
                                                    </label>
                                                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 transition-all duration-200 hover:border-primary">
                                                        <option>Working Capital</option>
                                                        <option>Equipment Purchase</option>
                                                        <option>Expansion</option>
                                                        <option>Inventory</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                                <Button className="w-full btn-hover-effect gradient-primary">
                                                    See My Rates
                                                </Button>
                                            </TabsContent>
                                        </Tabs>
                                    </CardContent>
                                    <CardFooter className="flex justify-between text-xs text-muted-foreground">
                                        <p>Free, no obligation check</p>
                                        <p>Won't affect your credit score</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className={`space-y-2 ₹{isLoaded ? "animate-fade-up" : "opacity-0"}`}>
                                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                                    Why Choose Us
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    The Smarter Way to Find Your Loan
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    We've simplified the loan process so you can focus on what matters most.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <Card
                                className={`bg-background card-hover-effect ₹{isLoaded ? "animate-fade-up animate-delay-100" : "opacity-0"}`}
                            >
                                <CardHeader className="pb-2">
                                    <CheckCircle className="h-10 w-10 text-primary mb-2 animate-pulse-soft" />
                                    <CardTitle>One Application</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Fill out just one simple form to access offers from 50+ lenders.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card
                                className={`bg-background card-hover-effect ₹{isLoaded ? "animate-fade-up animate-delay-200" : "opacity-0"}`}
                            >
                                <CardHeader className="pb-2">
                                    <LineChart className="h-10 w-10 text-primary mb-2 animate-pulse-soft" />
                                    <CardTitle>Compare Instantly</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        See side-by-side comparisons of rates, terms, and fees in seconds.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card
                                className={`bg-background card-hover-effect ₹{isLoaded ? "animate-fade-up animate-delay-300" : "opacity-0"}`}
                            >
                                <CardHeader className="pb-2">
                                    <CreditCard className="h-10 w-10 text-primary mb-2 animate-pulse-soft" />
                                    <CardTitle>One-Click Apply</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Apply for your chosen loan with a single click. No duplicate paperwork.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg-subtle">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className={`space-y-4 ₹{isLoaded ? "animate-fade-up" : "opacity-0"}`}>
                                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                                    Personal Loans
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Find Your Personal Loan in 2 Minutes
                                </h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Whether you're consolidating debt, renovating your home, or covering unexpected
                                    expenses, we'll help you find the perfect personal loan.
                                </p>
                                <ul className="grid gap-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Loans from ₹1,000 to ₹100,000</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>APRs starting at 4.99%</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Terms from 12 to 84 months</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Funding as fast as next business day</span>
                                    </li>
                                </ul>
                                <Button asChild className="btn-hover-effect gradient-primary">
                                    <Link href="#">
                                        Find My Personal Loan <ChevronRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                            <div
                                className={`relative mx-auto lg:mx-0 ₹{isLoaded ? "animate-slide-in-right" : "opacity-0"}`}
                            >
                                <div className="absolute -top-4 -right-4 bg-primary/10 w-full h-full rounded-lg animate-float"></div>
                                <Card className="relative card-hover-effect">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <User className="h-5 w-5" />
                                            Personal Loan Example
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-muted-foreground">Loan Amount</p>
                                                <p className="text-xl font-bold">₹15,000</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Monthly Payment</p>
                                                <p className="text-xl font-bold">₹283</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div>
                                                <p className="text-sm text-muted-foreground">APR</p>
                                                <p className="text-lg font-bold">6.99%</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Term</p>
                                                <p className="text-lg font-bold">60 months</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Total Cost</p>
                                                <p className="text-lg font-bold">₹16,980</p>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm">Excellent Rate</span>
                                                <span className="text-sm">5 lenders available</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-2.5">
                                                <div className="bg-primary h-2.5 rounded-full w-[85%] transition-all duration-1000"></div>
                                            </div>
                                        </div>
                                        <Button className="w-full btn-hover-effect gradient-primary">
                                            Check My Rate
                                        </Button>
                                    </CardContent>
                                    <CardFooter className="text-xs text-muted-foreground">
                                        <p>
                                            Example only. Your actual rate may vary based on credit score and other
                                            factors.
                                        </p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div
                                className={`relative mx-auto lg:mx-0 order-2 lg:order-1 ₹{isLoaded ? "animate-slide-in-left" : "opacity-0"}`}
                            >
                                <div className="absolute -top-4 -left-4 bg-primary/10 w-full h-full rounded-lg animate-float"></div>
                                <Card className="relative card-hover-effect">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Building className="h-5 w-5" />
                                            Business Loan Example
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm text-muted-foreground">Loan Amount</p>
                                                <p className="text-xl font-bold">₹50,000</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Monthly Payment</p>
                                                <p className="text-xl font-bold">₹1,054</p>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div>
                                                <p className="text-sm text-muted-foreground">APR</p>
                                                <p className="text-lg font-bold">7.99%</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Term</p>
                                                <p className="text-lg font-bold">60 months</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-muted-foreground">Total Cost</p>
                                                <p className="text-lg font-bold">₹63,240</p>
                                            </div>
                                        </div>
                                        <div className="pt-2">
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm">Competitive Rate</span>
                                                <span className="text-sm">8 lenders available</span>
                                            </div>
                                            <div className="w-full bg-muted rounded-full h-2.5">
                                                <div className="bg-primary h-2.5 rounded-full w-[75%] transition-all duration-1000"></div>
                                            </div>
                                        </div>
                                        <Button className="w-full btn-hover-effect gradient-primary">
                                            Check My Rate
                                        </Button>
                                    </CardContent>
                                    <CardFooter className="text-xs text-muted-foreground">
                                        <p>
                                            Example only. Your actual rate may vary based on business history and other
                                            factors.
                                        </p>
                                    </CardFooter>
                                </Card>
                            </div>
                            <div
                                className={`space-y-4 order-1 lg:order-2 ₹{isLoaded ? "animate-fade-up" : "opacity-0"}`}
                            >
                                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                                    Business Loans
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Fuel Your Business Growth
                                </h2>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    From startups to established enterprises, we connect businesses of all sizes with
                                    the right funding solutions.
                                </p>
                                <ul className="grid gap-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Loans from ₹10,000 to ₹5 million</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>SBA loans, term loans, lines of credit, and more</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Flexible terms tailored to your business needs</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 text-primary" />
                                        <span>Funding in as little as 24 hours</span>
                                    </li>
                                </ul>
                                <Button asChild className="btn-hover-effect gradient-primary">
                                    <Link href="#">
                                        Find My Business Loan <ChevronRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 gradient-bg-subtle">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className={`space-y-2 ₹{isLoaded ? "animate-fade-up" : "opacity-0"}`}>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How It Works</h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Get your loan in three simple steps
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-3 md:gap-12">
                            <div
                                className={`flex flex-col items-center space-y-4 text-center ₹{isLoaded ? "animate-fade-up animate-delay-100" : "opacity-0"}`}
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-primary text-xl font-bold text-primary-foreground animate-pulse-soft">
                                    1
                                </div>
                                <h3 className="text-xl font-bold">Complete One Form</h3>
                                <p className="text-muted-foreground">
                                    Fill out our simple form with basic information about your loan needs and financial
                                    situation.
                                </p>
                            </div>
                            <div
                                className={`flex flex-col items-center space-y-4 text-center ₹{isLoaded ? "animate-fade-up animate-delay-200" : "opacity-0"}`}
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-primary text-xl font-bold text-primary-foreground animate-pulse-soft">
                                    2
                                </div>
                                <h3 className="text-xl font-bold">Compare Offers</h3>
                                <p className="text-muted-foreground">
                                    Review personalized loan offers from multiple lenders side by side to find your best
                                    match.
                                </p>
                            </div>
                            <div
                                className={`flex flex-col items-center space-y-4 text-center ₹{isLoaded ? "animate-fade-up animate-delay-300" : "opacity-0"}`}
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-primary text-xl font-bold text-primary-foreground animate-pulse-soft">
                                    3
                                </div>
                                <h3 className="text-xl font-bold">Get Funded</h3>
                                <p className="text-muted-foreground">
                                    Apply with one click and receive your funds, often as quickly as the next business
                                    day.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button size="lg" className="btn-hover-effect gradient-primary">
                                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className={`space-y-2 ₹{isLoaded ? "animate-fade-up" : "opacity-0"}`}>
                                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                                    Testimonials
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    What Our Customers Say
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Join thousands of satisfied borrowers who found their perfect loan
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                            <Card
                                className={`card-hover-effect ₹{isLoaded ? "animate-fade-up animate-delay-100" : "opacity-0"}`}
                            >
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 fill-primary text-primary animate-pulse-soft"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        "I was able to consolidate all my credit card debt into one affordable monthly
                                        payment. The process was incredibly easy and I saved thousands in interest!"
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-muted"></div>
                                        <div>
                                            <p className="text-sm font-medium">Sarah T.</p>
                                            <p className="text-xs text-muted-foreground">Personal Loan Customer</p>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                            <Card
                                className={`card-hover-effect ₹{isLoaded ? "animate-fade-up animate-delay-200" : "opacity-0"}`}
                            >
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 fill-primary text-primary animate-pulse-soft"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        "As a small business owner, I needed capital quickly to take advantage of a
                                        growth opportunity. LoanSparrow connected me with the perfect lender in
                                        minutes!"
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-muted"></div>
                                        <div>
                                            <p className="text-sm font-medium">Michael R.</p>
                                            <p className="text-xs text-muted-foreground">Business Loan Customer</p>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                            <Card
                                className={`card-hover-effect ₹{isLoaded ? "animate-fade-up animate-delay-300" : "opacity-0"}`}
                            >
                                <CardHeader>
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 fill-primary text-primary animate-pulse-soft"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        "I was shocked at how much lower the interest rate was compared to what my bank
                                        offered. The one-click application saved me hours of paperwork and I got
                                        approved the same day!"
                                    </p>
                                </CardContent>
                                <CardFooter>
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-muted"></div>
                                        <div>
                                            <p className="text-sm font-medium">Jennifer L.</p>
                                            <p className="text-xs text-muted-foreground">Personal Loan Customer</p>
                                        </div>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 gradient-primary text-primary-foreground">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className={`space-y-4 ₹{isLoaded ? "animate-fade-up" : "opacity-0"}`}>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Ready to Find Your Perfect Loan?
                                </h2>
                                <p className="max-w-[600px] md:text-xl/relaxed">
                                    Join thousands of satisfied customers who found better rates and terms through our
                                    platform.
                                </p>
                                <ul className="grid gap-2">
                                    <li className="flex items-center gap-2">
                                        <Shield className="h-5 w-5 animate-pulse-soft" />
                                        <span>Bank-level security protects your information</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5 animate-pulse-soft" />
                                        <span>No impact on your credit score</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <IndianRupee className="h-5 w-5 animate-pulse-soft" />
                                        <span>100% free to use - no hidden fees</span>
                                    </li>
                                </ul>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" variant="secondary" className="w-full sm:w-auto btn-hover-effect">
                                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                    <Button size="lg" variant="secondary" className="w-full sm:w-auto btn-hover-effect">
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                            <div className={`mx-auto lg:mx-0 ₹{isLoaded ? "animate-slide-in-right" : "opacity-0"}`}>
                                <Card className="bg-background text-foreground card-hover-effect">
                                    <CardHeader>
                                        <CardTitle>Create Your Free Account</CardTitle>
                                        <CardDescription>No credit check required to see your offers</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                    First Name
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-primary"
                                                    placeholder="Enter your first name"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                    Last Name
                                                </label>
                                                <input
                                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-primary"
                                                    placeholder="Enter your last name"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                Email
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-primary"
                                                type="email"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                Password
                                            </label>
                                            <input
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 hover:border-primary"
                                                type="password"
                                                placeholder="Create a password"
                                            />
                                        </div>
                                        <Button className="w-full btn-hover-effect gradient-primary">
                                            Create Account
                                        </Button>
                                    </CardContent>
                                    <CardFooter className="flex justify-center text-xs text-muted-foreground">
                                        <p>By signing up, you agree to our Terms of Service and Privacy Policy</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="w-full border-t bg-background py-6 md:py-12">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-8 lg:grid-cols-5">
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-2">
                                <Image src="/lslogo.png" alt="LoanSparrow Logo" width={30} height={30} priority />
                                <span className="text-xl font-bold">LoanSparrow</span>
                            </div>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Connecting borrowers with the perfect loan since 2015. We've helped over 500,000
                                customers find better rates and terms.
                            </p>
                            <div className="mt-4 flex gap-4">
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </Link>
                                <Link
                                    href="#"
                                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-5 w-5"
                                    >
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Products</h3>
                            <nav className="mt-4 flex flex-col space-y-2">
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    Personal Loans
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    Business Loans
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    Debt Consolidation
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    Home Improvement
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    Auto Loans
                                </Link>
                            </nav>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Company</h3>
                            <nav className="mt-4 flex flex-col space-y-2">
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    Careers
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    Press
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    Contact
                                </Link>
                            </nav>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Legal</h3>
                            <nav className="mt-4 flex flex-col space-y-2">
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    Terms of Service
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    Cookie Policy
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                                >
                                    Licenses
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} LoanSparrow. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
