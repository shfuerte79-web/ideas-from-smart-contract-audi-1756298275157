import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Risk Revealer",
    "one_liner": "Instantly assess the security risks of any smart contract with a simple upload.",
    "why_now": "With blockchain adoption accelerating, immediate security solutions are critical for developers.",
    "novel_mechanism": "Utilizing NLP to comprehend and analyze smart contract code's intent and potential vulnerabilities.",
    "ai_stack": [
      "GPT-4",
      "RAG",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Educators teaching blockchain development",
      "Freelancers needing quick audits for clients",
      "Small startups looking to ensure funding safety"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Upload smart contract",
        "Risk analysis summary",
        "User feedback loop"
      ],
      "tools": [
        "Next.js",
        "Firebase",
        "Stripe"
      ],
      "data_bootstrap": [
        "Utilize open-source smart contracts for training",
        "Simulated vulnerability datasets"
      ],
      "risk": [
        "Limited training data on novel vulnerabilities",
        "User misinterpretation of risk assessment"
      ],
      "mitigation": [
        "Create a robust help documentation section",
        "Provide sample contracts with clear examples of risks"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Showcase before/after audit results",
        "Highlight success stories of secured contracts"
      ],
      "channels": [
        "ProductHunt",
        "Medium",
        "LinkedIn"
      ],
      "pricing": {
        "free": "Basic analysis for free",
        "pro": "Detailed report and suggestions at $49",
        "business": "Team access and premium features at $199/month"
      }
    },
    "moat": [
      "Early market entry",
      "User community for shared experiences",
      "Integration with development platforms"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 8,
      "defensibility": 7
    },
    "total_score": 30,
    "reasoning": "It leverages clear user needs while providing a novel approach to risk assessment, unlike existing static analysis tools."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}