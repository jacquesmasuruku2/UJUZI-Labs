import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const Partners = () => {
  const { t } = useTranslation();
  const [showForm, setShowForm] = useState(false);
  const partnersList = [
    { name: "Cardano Foundation", type: "Blockchain Protocol", description: t("partners.p1Desc") },
    { name: "Apex Fusion", type: "Blockchain Protocol", description: t("partners.p2Desc") },
    { name: "Safrochain", type: "Blockchain Protocol", description: t("partners.p3Desc") },
    { name: "WADA", type: "Blockhain Organization", description: t("partners.p4Desc") },
    { name: "Africa Blockchain Institute", type: "Organization", description: t("partners.p5Desc") },
    { name: "ISDR-GL University", type: "University", description: t("partners.p6Desc") },
  ];

  return (
    <div>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t("partners.title")} <span className="gradient-text">{t("partners.titleHighlight")}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("partners.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Partners</h2>
          <ScrollArea className="w-full overflow-x-auto">
            <div className="flex gap-10 py-4 px-2 min-w-[700px]">
              {[
                {
                  name: "Partner 1",
                  logo: "/partners/partner1.png",
                  description: "Virtual Assets Chamber - Crypto regulation & advocacy.",
                  url: "https://virtualassets.example.com"
                },
                {
                  name: "Partner 2",
                  logo: "/partners/partner2.png",
                  description: "Asaari - Blockchain solutions provider.",
                  url: "https://asaari.example.com"
                },
                {
                  name: "Partner 3",
                  logo: "/partners/partner3.png",
                  description: "Helicode - Web3 developer tools.",
                  url: "https://helicode.example.com"
                },
                {
                  name: "Partner 4",
                  logo: "/partners/partner4.png",
                  description: "Onchain Union - Decentralized finance.",
                  url: "https://onchainunion.example.com"
                },
                {
                  name: "Partner 5",
                  logo: "/partners/partner5.png",
                  description: "Farmhub Agro - AgriTech blockchain.",
                  url: "https://farmhubagro.example.com"
                },
                {
                  name: "Partner 6",
                  logo: "/partners/partner6.png",
                  description: "GATAC - Africa Trade Advisory Chamber.",
                  url: "https://gatac.example.com"
                }
              ].map((partner, i) => (
                <div key={i} className="flex flex-col items-center min-w-[180px] max-w-[200px]">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-20 w-auto object-contain mb-2"
                    style={{ maxWidth: 180 }}
                  />
                  <div className="text-center text-sm text-muted-foreground mb-1 min-h-[40px]">{partner.description}</div>
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1">
                    <span>Visit website</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto">
            <SectionHeading
              title={t("partners.becomeTitle")}
              subtitle={t("partners.becomeSubtitle")}
            />
            <div className="flex justify-center mb-6">
              <Button variant="glow" size="lg" onClick={() => setShowForm((v) => !v)}>
                {t("partners.getInTouch")}
              </Button>
            </div>
            {showForm && (
              <Card className="shadow-xl border-none animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-center text-2xl font-bold mb-2">
                    Become a partner at UJUZI Labs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={e => e.preventDefault()}>
                    <div>
                      <Label htmlFor="companyName">Company Name <span className="text-red-500">*</span></Label>
                      <Input id="companyName" name="companyName" required placeholder="Company Name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="companyWebsite">Company Website <span className="text-red-500">*</span></Label>
                      <Input id="companyWebsite" name="companyWebsite" required placeholder="Company Website" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry <span className="text-red-500">*</span></Label>
                      <Input id="industry" name="industry" required placeholder="Industry" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="contactPerson">Contact Person (Full Name) <span className="text-red-500">*</span></Label>
                      <Input id="contactPerson" name="contactPerson" required placeholder="Contact Person (Full Name)" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
                      <Input id="email" name="email" type="email" required placeholder="Email Address" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                      <Input id="phone" name="phone" required placeholder="Phone Number" className="mt-1" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="partnershipType">What type of partnership are you interested in? <span className="text-red-500">*</span></Label>
                      <Select required name="partnershipType">
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Sponsorship" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sponsorship">Sponsorship</SelectItem>
                          <SelectItem value="media">Media Partner</SelectItem>
                          <SelectItem value="ecosystem">Ecosystem Partner</SelectItem>
                          <SelectItem value="startup">Startup Showcase</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="md:col-span-2 flex justify-center mt-4">
                      <Button type="submit" className="w-full md:w-1/2" size="lg">Register</Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
