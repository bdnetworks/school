import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageSquare,
  Building,
  Navigation
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    alert('আপনার বার্তা পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'ঠিকানা',
      details: [
        'Vatia High School',
        '[সম্পূর্ণ ঠিকানা লিখতে হবে]',
        'বাংলাদেশ'
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'ফোন',
      details: [
        'প্রধান অফিস: +880-XXX-XXXXXX',
        'ভর্তি বিভাগ: +880-XXX-XXXXXX',
        'জরুরি: +880-XXX-XXXXXX'
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'ইমেইল',
      details: [
        'info@vatiahighschool.edu.bd',
        'admission@vatiahighschool.edu.bd',
        'principal@vatiahighschool.edu.bd'
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'অফিস সময়',
      details: [
        'সোমবার - বৃহস্পতিবার: ৮:০০ - ১৬:০০',
        'শুক্রবার: ৮:০০ - ১২:০০',
        'শনিবার: বন্ধ'
      ]
    }
  ];

  const departments = [
    {
      name: 'প্রধান শিক্ষক',
      phone: '+880-XXX-XXXXXX',
      email: 'principal@vatiahighschool.edu.bd'
    },
    {
      name: 'ভর্তি বিভাগ',
      phone: '+880-XXX-XXXXXX',
      email: 'admission@vatiahighschool.edu.bd'
    },
    {
      name: 'একাডেমিক বিভাগ',
      phone: '+880-XXX-XXXXXX',
      email: 'academic@vatiahighschool.edu.bd'
    },
    {
      name: 'প্রশাসনিক বিভাগ',
      phone: '+880-XXX-XXXXXX',
      email: 'admin@vatiahighschool.edu.bd'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/90 to-primary/70">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              যোগাযোগ করুন
            </h1>
            <p className="text-xl opacity-90">
              আমাদের সাথে যোগাযোগ করুন এবং আপনার যেকোনো প্রশ্নের উত্তর পান
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">আমাদের লিখুন</CardTitle>
                      <CardDescription>
                        আপনার বার্তা পাঠান এবং আমরা শীঘ্রই উত্তর দেব
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">নাম *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="আপনার নাম"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">ফোন নম্বর</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="আপনার ফোন নম্বর"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">ইমেইল *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="আপনার ইমেইল ঠিকানা"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">বিষয় *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="বার্তার বিষয়"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">বার্তা *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="আপনার বার্তা লিখুন..."
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      বার্তা পাঠান
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  যোগাযোগের তথ্য
                </h2>
                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 bg-accent/10 rounded-full flex-shrink-0">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg text-foreground mb-2">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-muted-foreground">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              বিভাগীয় যোগাযোগ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              নির্দিষ্ট বিষয়ে জানতে সংশ্লিষ্ট বিভাগের সাথে সরাসরি যোগাযোগ করুন
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    <span>{dept.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span className="break-all">{dept.email}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              আমাদের অবস্থান
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vatia High School-এর অবস্থান এবং কীভাবে আমাদের কাছে পৌঁছাবেন
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Navigation className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">কীভাবে আসবেন</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">বাসে করে:</h4>
                    <p className="text-muted-foreground">
                      [বাস রুট এবং নির্দেশনা লিখতে হবে]
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">রিকশা/সিএনজিতে:</h4>
                    <p className="text-muted-foreground">
                      [রিকশা/সিএনজি রুট এবং নির্দেশনা লিখতে হবে]
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">ব্যক্তিগত গাড়িতে:</h4>
                    <p className="text-muted-foreground">
                      [গাড়ি পার্কিং এবং রুট নির্দেশনা লিখতে হবে]
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              {/* Placeholder for Google Map */}
              <div className="bg-muted/50 rounded-lg h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Google Map এখানে এম্বেড করা হবে
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            জরুরি যোগাযোগ
          </h2>
          <p className="text-xl mb-8 opacity-90">
            জরুরি প্রয়োজনে ২৪/৭ যোগাযোগ করুন
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              জরুরি হটলাইন: +880-XXX-XXXXXX
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Mail className="mr-2 h-5 w-5" />
              emergency@vatiahighschool.edu.bd
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

