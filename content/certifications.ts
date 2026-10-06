import { Certification } from "@/lib/types";

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-SAA-839210",
    verifyUrl: "https://aws.amazon.com/verification",
    stampType: "red",
  },
  {
    name: "Meta Certified Front-End Developer",
    issuer: "Meta / Coursera",
    date: "2023",
    credentialId: "META-FED-994821",
    verifyUrl: "https://coursera.org/verify/professional-cert",
    stampType: "ink",
  },
  {
    name: "TypeScript Professional Developer Certificate",
    issuer: "TypeScript Institute",
    date: "2023",
    credentialId: "TS-CERT-441092",
    verifyUrl: "https://typescriptlang.org",
    stampType: "red",
  },
  {
    name: "MongoDB Certified Node.js Developer",
    issuer: "MongoDB University",
    date: "2022",
    credentialId: "MDB-NODE-201833",
    verifyUrl: "https://university.mongodb.com/certificates",
    stampType: "ink",
  },
];
