export const toolSelectorNavItems = {
    children: [
        {
            label: "Customer",
            children: [
                {
                    label: "",
                    children: [
                        {
                            label: "Self Service Challenges",
                            url: "http://platform-ui.topcoder.com/work",
                            icon: "self-service",
                            description: "Launch and manage work"
                        },
                        // {
                        //     label:"TopCrowd",
                        //     url: "",
                        //     icon: "topcrowd",
                        //     description: "Hover description text"
                        // }
                    ]
                },
                {
                    label: "",
                    children: [
                        {
                            label: "Talk to an expert",
                            url: "http://go.topcoder.com/lets-talk",
                            type: "cta"
                        },
                        {
                            label: "Book a demo",
                            url: "http://go.topcoder.com/lets-talk/?interest=A%20Demo%20of%20Topcoder",
                            type: "cta"
                        }
                    ]
                }
            ]
        },
        {
            label: "Talent",
            children: [
                {
                    label:"Learn",
                    children: [
                        {
                            label: "Topcoder Academy",
                            url: "http://platform-ui.topcoder.com/learn",
                            icon: "tcacademy",
                            description: "Learn new skills"
                        },
                        {
                            label:"Dev Center",
                            icon: "dev-center",
                            url: "http://platform-ui.topcoder.com/dev-center",
                            description: "Get help for Topcoder tools"
                        },
                        {
                            label:"Practice",
                            // icon: "practice",
                            url: "https://www.topcoder.com/challenges?search=practice&tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true&types%5B%5D=CH&types%5B%5D=F2F&types%5B%5D=TSK",
                            description: "Learn to compete"
                        }
                    ]
                },
                {
                    label:"Compete",
                    children: [
                        {
                            label: "Marathon Matches (MM)",
                            url: "https://www.topcoder.com/challenges?search=marathon%20match&tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true&types%5B%5D=CH&types%5B%5D=F2F&types%5B%5D=TSK",
                            icon: "mm",
                            description: "Solve hard algorithm problems"
                        },
                        {
                            label: "Rapid Dev Matches (RDM)",
                            url: "https://www.topcoder.com/challenges?bucket=openForRegistration&search=Rapid%20Development%20Match&tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true",
                            icon: "mm",
                            description: "Join fast, fun competitions"
                        },
                        {
                            label:"SRMs (Arena)",
                            url: "http://topcoder.com/talent/arena",
                            // icon: "srm",
                            description: "Start competitive programming"
                        }
                    ]
                },
                {
                    label:"Earn",
                    children: [
                        {
                            label: "Challenges",
                            url: "https://www.topcoder.com/challenges?tracks%5BDS%5D=true&tracks%5BDes%5D=true&tracks%5BDev%5D=true&tracks%5BQA%5D=true&types%5B%5D=CH&types%5B%5D=F2F&types%5B%5D=TSK",
                            icon: "challenges",
                            description: "Compete and earn money"
                        },
                        {
                            label:"Gigs",
                            url: "http://topcoder.com/gigs",
                            icon: "gigs",
                            description: "Find freelance gigs"
                        },
                        {
                            label:"Review",
                            url: "http://software.topcoder.com",
                            icon: "review",
                            description: "Review submissions"
                        },
                        {
                            label:"Payments",
                            url: "http://talent.topcoder.com/PactsMemberServlet?module=PaymentHistory",
                            icon: "payments",
                            description: "Get paid"
                        }
                    ]
                },
                {
                    label:"Connect",
                    children: [
                        {
                            label:"Forums",
                            url: "https://discussions.topcoder.com",
                            // icon: "forums",
                            description: "Discuss challenges or questions"
                        },
                        {
                            label: "Articles",
                            url: "https://www.topcoder.com/thrive",
                            // icon: "articles",
                            description: "Get inspired"
                        },
                        {
                            label: "Discord",
                            url: "http://discord.com/invite/topcoder",
                            icon: "discord",
                            description: "Chat live with members"
                        },
                    ]
                }
            ]
        }
    ]
}
