import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, 
  Users, 
  Calendar, 
  CheckCircle2, 
  Play, 
  ChevronDown,
  GraduationCap,
  TrendingUp,
  Shield,
  Star,
  Award,
  BookOpen,
  Target,
  Zap,
  AlertCircle,
  Phone
} from "lucide-react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const StockTrading101 = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer to next batch (15th of each month)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      let targetDate = new Date(now.getFullYear(), now.getMonth(), 15, 20, 0, 0);
      
      if (now > targetDate) {
        targetDate = new Date(now.getFullYear(), now.getMonth() + 1, 15, 20, 0, 0);
      }
      
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToEnroll = () => {
    document.getElementById('enroll-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const painPoints = [
    {
      icon: AlertCircle,
      title: "Overwhelmed by Information",
      description: "Endless YouTube videos and conflicting advice"
    },
    {
      icon: Clock,
      title: "No Time for Long Courses",
      description: "You work 9-5 or study full-time"
    },
    {
      icon: Shield,
      title: "Expensive & Risky",
      description: "₹50,000+ courses with no real guidance"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "30 Mins Daily Live at 8 PM IST",
      description: "Learn after your work/college hours"
    },
    {
      icon: Award,
      title: "SEBI Registered Experts",
      description: "Learn from seasoned traders with 50+ years of combined experience"
    },
    {
      icon: Target,
      title: "Pocket-Friendly",
      description: "Just ₹100/day, no big lump-sum fees"
    }
  ];

  const curriculum = [
    {
      week: "Week 1",
      title: "Foundations",
      topics: [
        "Orientation Day",
        "Philosophy of Technical Analysis – Dow Theory",
        "Types of Charts & Timeframes",
        "Trendline Analysis"
      ]
    },
    {
      week: "Week 2",
      title: "Charting & Candlestick Patterns",
      topics: [
        "Trading View Setup",
        "Basics of Candlestick Charts",
        "One, Two & Three Candlestick Patterns",
        "Support & Resistance",
        "Volume and Delivery Analysis"
      ]
    },
    {
      week: "Week 3",
      title: "Price Patterns & Indicators",
      topics: [
        "Introduction to Price Patterns",
        "Reversal & Continuation Patterns",
        "Trend Following Indicators",
        "Momentum & Volatility Indicators"
      ]
    },
    {
      week: "Week 4",
      title: "Strategies & Trading Systems",
      topics: [
        "Volume Indicators & Fibonacci Retracement",
        "Gap Theory",
        "Intraday & Swing Trading Strategies",
        "Positional Strategies",
        "Strategy Making Process"
      ]
    },
    {
      week: "Final Days",
      title: "Risk Management",
      topics: [
        "Introduction to Multi-Asset Trading",
        "Methods of Setting Stop Loss",
        "Position Sizing & Capital Allocation",
        "Creating Your Trading Journal"
      ]
    }
  ];

  const instructors = [
    { name: "Expert Mentor 1", experience: "18+ Years", specialty: "Technical Analysis" },
    { name: "Expert Mentor 2", experience: "15+ Years", specialty: "Derivatives Trading" },
    { name: "Expert Mentor 3", experience: "12+ Years", specialty: "Swing Trading" },
    { name: "Expert Mentor 4", experience: "10+ Years", specialty: "Risk Management" }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      date: "Jan 2025",
      text: "In just 30 days, I've gained clarity, discipline, and confidence in my approach. The teaching style, real-life examples, and continuous mentor engagement make this journey truly rewarding."
    },
    {
      name: "Priya Patel",
      date: "Dec 2024",
      text: "This course model is excellent for beginners. Every mentor is approachable and they try to solve our problems in class. The value for money is unmatched."
    },
    {
      name: "Amit Kumar",
      date: "Nov 2024",
      text: "The presentation is crisp and to the point. Combined with practical tools and mentorship, it creates the perfect foundation for any beginner passionate about trading."
    }
  ];

  const whoCanJoin = [
    { icon: Users, text: "Complete Beginners" },
    { icon: TrendingUp, text: "Aspiring Full-Time Traders" },
    { icon: GraduationCap, text: "College Students" },
    { icon: Target, text: "Working Professionals" },
    { icon: Zap, text: "Small Business Owners" },
    { icon: BookOpen, text: "Those Who Tried & Failed Before" }
  ];

  const notFor = [
    "People looking for 'get rich quick' schemes",
    "Those who won't dedicate 30 mins daily",
    "Experienced traders looking for advanced strategies"
  ];

  const faqs = [
    {
      question: "I have no trading experience. Can I join?",
      answer: "Yes. Stock Trading 101 is designed for complete beginners. The program starts with fundamental concepts and progresses systematically."
    },
    {
      question: "What if I miss a live session?",
      answer: "All sessions are recorded. You'll have lifetime access to watch at your convenience."
    },
    {
      question: "Is this a one-time payment?",
      answer: "Yes. ₹2,999 is paid once for the complete 30-day program including lifetime access to recordings."
    },
    {
      question: "How much time do I need to dedicate daily?",
      answer: "Just 30 minutes for the live session. An additional 15–20 minutes for practice is recommended but optional."
    },
    {
      question: "Will I be able to trade independently after this course?",
      answer: "Stock Trading 101 provides all the foundational skills for independent analysis. Profitability requires continued practice and discipline beyond any course."
    },
    {
      question: "How is this different from free content online?",
      answer: "Free content often lacks structure and expert verification. Our program offers systematic progression, live mentorship, and guidance from SEBI registered experts."
    },
    {
      question: "When does the next batch start?",
      answer: "A new batch starts on the 15th of every month, so you can plan your enrollment with confidence."
    }
  ];

  const includes = [
    "Daily 30-Min Live Sessions",
    "Lifetime Access to Recordings + Notes",
    "30-Day Structured Curriculum",
    "Direct Guidance from Expert Mentors",
    "Certificate of Completion",
    "Private Community Access"
  ];

  return (
    <>
      <Helmet>
        <title>Stock Trading 101 - Learn Trading in 30 Days | Master Stock Market</title>
        <meta name="description" content="Learn stock trading in just 30 days with our expert-led live masterclass. Only 30 minutes a day at ₹100/day. Join 1000+ students already enrolled." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                Learn Trading @ just <span className="text-primary">₹100/Day</span>
              </h1>
              <Badge className="bg-primary/20 text-primary border-primary/30 text-sm px-4 py-1">
                Level: Beginner
              </Badge>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                No prior knowledge of the stock market required. This course starts from the absolute basics and builds your foundation step by step.
              </p>
            </motion.div>

            {/* Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="max-w-4xl mx-auto p-6 md:p-8 bg-card/80 backdrop-blur-sm border-border/50">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-2 text-primary font-semibold mb-3">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      30-Day Expert-Led Live Masterclass
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      Stock Trading 101
                    </h2>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-foreground">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span><strong>30 Minutes</strong> a Day × <strong>30 Days</strong></span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <Users className="w-5 h-5 text-primary" />
                        <span>Anyone can join</span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>Batch starts from <strong>15th of every month!</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <Badge variant="outline" className="text-green-600 border-green-600 bg-green-50 dark:bg-green-950">
                        Limited Seats Left
                      </Badge>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>500+ Students Enrolled</span>
                      </div>
                    </div>

                    <Button 
                      onClick={scrollToEnroll}
                      size="lg" 
                      className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    >
                      ENROLL NOW @ ₹100/DAY
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">Next Batch starts on 15th!</p>

                    <div className="mt-4">
                      <a 
                        href="https://wa.me/919876543210?text=I%20want%20to%20know%20more%20about%20Stock%20Trading%20101" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Have any queries? WhatsApp Us
                      </a>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center cursor-pointer hover:from-primary/30 hover:to-accent/30 transition-all">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-2 flex items-center justify-center gap-2">
                      <Play className="w-4 h-4 text-red-500" />
                      Watch Last Batch's Orientation
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Why Do Most People <span className="text-destructive">Never Start Trading?</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full bg-card hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <point.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                    <p className="text-muted-foreground text-sm">{point.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              Trading Made <span className="text-primary">Simple, Affordable,</span> yet Powerful
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button onClick={scrollToEnroll} size="lg" className="bg-primary hover:bg-primary/90">
                Learn Trading @ ₹100/Day
              </Button>
              <p className="text-sm text-muted-foreground mt-2">Next Batch starts on 15th!</p>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your <span className="text-primary">1 Month</span> Learning Journey
              </h2>
              <p className="text-muted-foreground">Gain essential skills through guided 30-day practical learning</p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {curriculum.map((week, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-20 shrink-0">
                        <Badge variant="outline" className="text-primary border-primary">
                          {week.week}
                        </Badge>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-3">{week.title}</h3>
                        <ul className="space-y-2">
                          {week.topics.map((topic, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground text-sm">
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Instructors Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Learn from Traders Who've Been <span className="text-primary">in the Markets</span>
              </h2>
              <p className="text-muted-foreground">Not casual influencers or YouTubers. Real trading professionals with SEBI registration and decades of experience.</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {instructors.map((instructor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 text-center hover:shadow-lg transition-shadow">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold">{instructor.name}</h3>
                    <p className="text-primary text-sm">{instructor.experience}</p>
                    <p className="text-muted-foreground text-xs">{instructor.specialty}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Everything You Get for Just <span className="text-primary">₹100/Day</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {includes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our <span className="text-primary">Learners</span> Are Saying
              </h2>
              <p className="text-muted-foreground">Don't take our word for it. Hear it from our students.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm flex-1 mb-4">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Can Join */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Who Can <span className="text-primary">Join</span> This Course?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
              {whoCanJoin.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-sm"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <Card className="max-w-2xl mx-auto p-6 bg-destructive/5 border-destructive/20">
              <h3 className="font-semibold text-lg mb-4 text-destructive">This Course Is NOT For:</h3>
              <ul className="space-y-2">
                {notFor.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <AlertCircle className="w-4 h-4 text-destructive shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Frequently Asked <span className="text-primary">Questions</span>
            </motion.h2>

            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="enroll-section" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your <span className="text-primary">Trading Journey</span> Today
              </h2>
              <p className="text-muted-foreground mb-8">One-time payment | No Cost EMI Available | No hidden charges</p>

              <Card className="max-w-md mx-auto p-8 bg-card shadow-xl">
                <div className="text-5xl font-bold text-primary mb-2">₹2,999</div>
                <p className="text-muted-foreground mb-6">Next Batch starts on 15th!</p>
                <Badge variant="outline" className="text-orange-600 border-orange-600 bg-orange-50 dark:bg-orange-950 mb-6">
                  Limited Seats Available
                </Badge>

                {/* Countdown Timer */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{timeLeft.days}</div>
                    <div className="text-xs text-muted-foreground">Days</div>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{timeLeft.hours}</div>
                    <div className="text-xs text-muted-foreground">Hrs</div>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{timeLeft.minutes}</div>
                    <div className="text-xs text-muted-foreground">Mins</div>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="text-2xl font-bold text-foreground">{timeLeft.seconds}</div>
                    <div className="text-xs text-muted-foreground">Sec</div>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Learn Trading @ ₹100/Day
                </Button>

                <a 
                  href="https://wa.me/919876543210?text=I%20want%20to%20know%20more%20about%20Stock%20Trading%20101" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-primary hover:underline text-sm"
                >
                  Still Not Sure? WhatsApp Us
                </a>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Sticky Bottom CTA (Mobile) */}
        <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 md:hidden z-50">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-lg font-bold text-primary">₹2,999</div>
              <div className="text-xs text-muted-foreground">Next Batch: 15th</div>
            </div>
            <Button onClick={scrollToEnroll} className="bg-primary hover:bg-primary/90">
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockTrading101;
