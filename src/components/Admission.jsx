import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  FileText, 
  Calendar, 
  DollarSign, 
  CheckCircle,
  AlertCircle,
  Download,
  Phone,
  Mail,
  Clock,
  Users,
  GraduationCap
} from 'lucide-react';

const Admission = () => {
  const admissionProcess = [
    {
      step: '১',
      title: 'আবেদনপত্র সংগ্রহ',
      description: 'স্কুল অফিস থেকে আবেদনপত্র সংগ্রহ করুন অথবা অনলাইনে ডাউনলোড করুন',
      icon: <FileText className="h-6 w-6 text-primary" />
    },
    {
      step: '২',
      title: 'আবেদনপত্র পূরণ',
      description: 'সম্পূর্ণ তথ্য সহ আবেদনপত্র পূরণ করুন এবং প্রয়োজনীয় কাগজপত্র সংযুক্ত করুন',
      icon: <CheckCircle className="h-6 w-6 text-primary" />
    },
    {
      step: '৩',
      title: 'আবেদনপত্র জমা',
      description: 'নির্ধারিত সময়ের মধ্যে আবেদনপত্র ও ফি জমা দিন',
      icon: <Calendar className="h-6 w-6 text-primary" />
    },
    {
      step: '৪',
      title: 'ভর্তি পরীক্ষা',
      description: 'নির্ধারিত তারিখে ভর্তি পরীক্ষায় অংশগ্রহণ করুন',
      icon: <GraduationCap className="h-6 w-6 text-primary" />
    },
    {
      step: '৫',
      title: 'ফলাফল প্রকাশ',
      description: 'ভর্তি পরীক্ষার ফলাফল প্রকাশ ও মেধা তালিকা',
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      step: '৬',
      title: 'ভর্তি নিশ্চিতকরণ',
      description: 'নির্ধারিত সময়ের মধ্যে ভর্তি ফি প্রদান করে ভর্তি নিশ্চিত করুন',
      icon: <DollarSign className="h-6 w-6 text-primary" />
    }
  ];

  const requirements = [
    {
      class: '৬ষ্ঠ শ্রেণী',
      eligibility: 'পঞ্চম শ্রেণী পাস',
      documents: [
        'পঞ্চম শ্রেণীর সনদপত্র',
        'জন্ম নিবন্ধন সনদ',
        'অভিভাবকের জাতীয় পরিচয়পত্র',
        'পাসপোর্ট সাইজ ছবি (৪ কপি)'
      ],
      fee: '৫,০০০ টাকা'
    },
    {
      class: '৯ম শ্রেণী',
      eligibility: 'অষ্টম শ্রেণী পাস',
      documents: [
        'অষ্টম শ্রেণীর সনদপত্র',
        'জন্ম নিবন্ধন সনদ',
        'অভিভাবকের জাতীয় পরিচয়পত্র',
        'পাসপোর্ট সাইজ ছবি (৪ কপি)'
      ],
      fee: '৮,০০০ টাকা'
    },
    {
      class: '১১শ শ্রেণী',
      eligibility: 'এসএসসি পাস (ন্যূনতম জিপিএ ৩.৫০)',
      documents: [
        'এসএসসি সনদপত্র ও নম্বরপত্র',
        'জন্ম নিবন্ধন সনদ',
        'অভিভাবকের জাতীয় পরিচয়পত্র',
        'পাসপোর্ট সাইজ ছবি (৪ কপি)'
      ],
      fee: '১২,০০০ টাকা'
    }
  ];

  const importantDates = [
    {
      event: 'আবেদনপত্র বিতরণ শুরু',
      date: '১ জানুয়ারি, ২০২৫',
      status: 'চলমান'
    },
    {
      event: 'আবেদনপত্র জমা দেওয়ার শেষ তারিখ',
      date: '৩১ জানুয়ারি, ২০২৫',
      status: 'আসন্ন'
    },
    {
      event: 'ভর্তি পরীক্ষা (৬ষ্ঠ ও ৯ম শ্রেণী)',
      date: '১৫ ফেব্রুয়ারি, ২০২৫',
      status: 'আসন্ন'
    },
    {
      event: 'ভর্তি পরীক্ষা (১১শ শ্রেণী)',
      date: '২২ ফেব্রুয়ারি, ২০২৫',
      status: 'আসন্ন'
    },
    {
      event: 'ফলাফল প্রকাশ',
      date: '১ মার্চ, ২০২৫',
      status: 'আসন্ন'
    },
    {
      event: 'ভর্তি নিশ্চিতকরণের শেষ তারিখ',
      date: '১৫ মার্চ, ২০২৫',
      status: 'আসন্ন'
    }
  ];

  const feeStructure = [
    {
      class: '৬ষ্ঠ - ৮ম শ্রেণী',
      admission: '৫,০০০',
      monthly: '২,০০০',
      annual: '৫,০০০',
      total: '৩৪,০০০'
    },
    {
      class: '৯ম - ১০ম শ্রেণী',
      admission: '৮,০০০',
      monthly: '২,৫০০',
      annual: '৮,০০০',
      total: '৪৬,০০০'
    },
    {
      class: '১১শ - ১২শ শ্রেণী',
      admission: '১২,০০০',
      monthly: '৩,০০০',
      annual: '১০,০০০',
      total: '৫৮,০০০'
    }
  ];

  const scholarships = [
    {
      name: 'মেধা বৃত্তি',
      criteria: 'ভর্তি পরীক্ষায় প্রথম ১০ জন',
      benefit: '৫০% ছাড়',
      duration: 'পুরো শিক্ষাবর্ষ'
    },
    {
      name: 'অসচ্ছল পরিবারের বৃত্তি',
      criteria: 'পারিবারিক আয় ১৫,০০০ টাকার কম',
      benefit: '৩০% ছাড়',
      duration: 'পুরো শিক্ষাবর্ষ'
    },
    {
      name: 'ক্রীড়া বৃত্তি',
      criteria: 'জাতীয়/আঞ্চলিক পর্যায়ে পুরস্কারপ্রাপ্ত',
      benefit: '২৫% ছাড়',
      duration: 'পুরো শিক্ষাবর্ষ'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ভর্তি তথ্য
            </h1>
            <p className="text-xl opacity-90">
              Vatia High School-এ ভর্তির জন্য সম্পূর্ণ তথ্য ও নির্দেশনা
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <AlertCircle className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary mb-1">গুরুত্বপূর্ণ বিজ্ঞপ্তি</h3>
                <p className="text-muted-foreground">
                  ২০২৫ শিক্ষাবর্ষের ভর্তি কার্যক্রম চলমান। আবেদনের শেষ তারিখ ৩১ জানুয়ারি, ২০২৫।
                  বিস্তারিত তথ্যের জন্য স্কুল অফিসে যোগাযোগ করুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ভর্তি প্রক্রিয়া
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ধাপে ধাপে ভর্তি প্রক্রিয়া সম্পন্ন করুন
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionProcess.map((process, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {process.step}
                    </div>
                    <div className="p-3 bg-accent/10 rounded-full">
                      {process.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {process.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ভর্তির যোগ্যতা ও প্রয়োজনীয় কাগজপত্র
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              বিভিন্ন শ্রেণীতে ভর্তির জন্য প্রয়োজনীয় যোগ্যতা ও কাগজপত্র
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-center mb-4">
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      {req.class}
                    </Badge>
                  </div>
                  <CardTitle className="text-center">{req.eligibility}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">প্রয়োজনীয় কাগজপত্র:</h4>
                      <ul className="space-y-1">
                        {req.documents.map((doc, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center p-3 bg-accent/10 rounded-lg">
                      <span className="font-semibold text-primary">ভর্তি ফি: {req.fee}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              গুরুত্বপূর্ণ তারিখসমূহ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ভর্তি সংক্রান্ত সকল গুরুত্বপূর্ণ তারিখ ও সময়সূচী
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {importantDates.map((date, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Calendar className="h-6 w-6 text-primary" />
                        <div>
                          <h3 className="font-semibold text-foreground">{date.event}</h3>
                          <p className="text-muted-foreground">{date.date}</p>
                        </div>
                      </div>
                      <Badge 
                        variant={date.status === 'চলমান' ? 'default' : 'secondary'}
                      >
                        {date.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ফি কাঠামো
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              বিভিন্ন শ্রেণীর জন্য বার্ষিক ফি কাঠামো
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-center">বার্ষিক ফি কাঠামো (টাকায়)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4">শ্রেণী</th>
                        <th className="text-center py-3 px-4">ভর্তি ফি</th>
                        <th className="text-center py-3 px-4">মাসিক ফি</th>
                        <th className="text-center py-3 px-4">বার্ষিক ফি</th>
                        <th className="text-center py-3 px-4">মোট (বার্ষিক)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeStructure.map((fee, index) => (
                        <tr key={index} className="border-b border-border">
                          <td className="py-3 px-4 font-medium">{fee.class}</td>
                          <td className="text-center py-3 px-4">{fee.admission}</td>
                          <td className="text-center py-3 px-4">{fee.monthly}</td>
                          <td className="text-center py-3 px-4">{fee.annual}</td>
                          <td className="text-center py-3 px-4 font-semibold text-primary">{fee.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>বিশেষ দ্রষ্টব্য:</strong> উপরোক্ত ফি কাঠামো পরিবর্তনযোগ্য। 
                    সর্বশেষ তথ্যের জন্য স্কুল অফিসে যোগাযোগ করুন।
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              বৃত্তি ও ছাড়
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              মেধাবী ও অসচ্ছল শিক্ষার্থীদের জন্য বিভিন্ন বৃত্তির ব্যবস্থা
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{scholarship.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">যোগ্যতা:</span>
                      <p className="text-foreground">{scholarship.criteria}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">সুবিধা:</span>
                      <p className="text-primary font-semibold">{scholarship.benefit}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">মেয়াদ:</span>
                      <p className="text-foreground">{scholarship.duration}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download & Contact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                আবেদনপত্র ডাউনলোড
              </h2>
              <p className="text-xl mb-8 opacity-90">
                অনলাইনে আবেদনপত্র ডাউনলোড করুন অথবা স্কুল অফিস থেকে সংগ্রহ করুন
              </p>
              <div className="space-y-4">
                <Button size="lg" variant="secondary" className="w-full md:w-auto">
                  <Download className="mr-2 h-5 w-5" />
                  আবেদনপত্র ডাউনলোড করুন
                </Button>
                <Button size="lg" variant="outline" className="w-full md:w-auto text-white border-white hover:bg-white hover:text-primary">
                  <FileText className="mr-2 h-5 w-5" />
                  ভর্তি গাইড ডাউনলোড
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">ভর্তি সংক্রান্ত যোগাযোগ</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <div>
                    <p className="font-medium">ভর্তি হটলাইন</p>
                    <p className="opacity-90">+880-XXX-XXXXXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <div>
                    <p className="font-medium">ইমেইল</p>
                    <p className="opacity-90">admission@vatiahighschool.edu.bd</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5" />
                  <div>
                    <p className="font-medium">অফিস সময়</p>
                    <p className="opacity-90">সকাল ৮:০০ - বিকাল ৪:০০</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;

