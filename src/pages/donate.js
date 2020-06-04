import React from "react";
import { Typography } from "@material-ui/core";
import Link from "../components/Link";
import { GridList, GridListTile } from "@material-ui/core";

const donationSites = [
  {
    title: "George Floyd Memorial Fund",
    url: "https://www.gofundme.com/f/georgefloyd",
    info:
      "Gofund me for the Floyd family in order to establish funeral and burial expenses, mental and grief counseling, lodging and travel for all court proceedings, etc.",
  },
  {
    title: "Reclaim The Block",
    url: "https://www.reclaimtheblock.org/home",
    info:
      "Reclaim the Block began in 2018 and organizes Minneapolis community and city council members to move money from the police department into other areas of the city’s budget that truly promote community health and safety. We believe health, safety and resiliency exist without police of any kind. We organize around policies that strengthen community-led safety initiatives and reduce reliance on police departments.",
  },
  {
    title: "Black Lives Matter",
    url: "https://secure.actblue.com/donate/ms_blm_homepage_2019",
    info:
      "Fight to end state-sanctioned violence, liberate Black people, and end white supremacy forever.",
  },
  {
    title: "The National Bail Fund Network",
    url: "https://www.communityjusticeexchange.org/nbfn-directory",
    info:
      "The National Bail Fund Network is made up of over sixty community bail and bond funds across the country. We regularly update this listing of community bail funds that are freeing people by paying bail/bond and are also fighting to abolish the money bail system and pretrial detention.",
  },
  {
    title: "NAACP Legal Defense Fund",
    url:
      "https://org2.salsalabs.com/o/6857/p/salsa/donation/common/public/?donate_page_KEY=15780&_ga=2.209233111.496632409.1590767838-1184367471.1590767838",
    info:
      "Help us win landmark legal battles, protect voters across the nation, and advance the cause of racial justice, equality, and an inclusive society.",
  },
  {
    title: "American Civil Liberties Union",
    url: "https://www.aclu.org/issues/racial-justice",
    info:
      "Preserve and extend constitutionally guaranteed rights to people who have historically been denied their rights on the basis of race.",
  },
  {
    title: "Black Visions Collective",
    url: "https://www.blackvisionsmn.org/",
    info:
      "Black Visions Collective (BLVC) believes in a future where all Black people have autonomy, safety is community-led, and we are in right relationship within our ecosystems.",
  },
  {
    title: "The Bail Project",
    url: "https://bailproject.org/",
    info:
      "The Bail Project National Revolving Bail Fund is a critical tool to prevent incarceration and combat racial and economic disparities in the bail system.",
  },
  {
    title: "Antiracist Research & Policy Center",
    url: "https://antiracismcenter.com/",
    info:
      "The mission of The Antiracist Research & Policy Center (ARPC) is to convene and team up varied specialists to figure out novel and practical ways to understand, explain, and solve seemingly intractable problems of racial inequity and injustice.",
  },
  {
    title: "Know Your Rights Camp",
    url: "https://www.knowyourrightscamp.com/legal",
    info:
      "The Know Your Rights Camp Legal Defense Initiative has identified and teamed up with top defense lawyers and civil rights lawyers nationwide to provide legal resources for those in need. ",
  },
  {
    title: "We Love Lake Street",
    url: "https://www.welovelakestreet.com/",
    info:
      "The Lake Street Council (501c3) will donate 100% of funds to help rebuild Lake Street, starting with direct support to small businesses and nonprofits to help them rebuild their storefronts, reopen their businesses and serve our neighborhoods.",
  },
  {
    title: "Campaign Zero",
    url: "https://www.joincampaignzero.org",
    info:
      "Funds donated to Campaign Zero support the analysis of policing practices across the country, research to identify effective solutions to end police violence, technical assistance to organizers leading police accountability campaigns and the development of model legislation and advocacy to end police violence nationwide. ",
  },
  {
    title: "Unicorn Riot",
    url: "https://unicornriot.ninja/",
    info:
      "Your Source For Independent Media – No Ads or Paywalls – Viewer Supported – Free of Corporate & Government Funding",
  },
  {
    title: "Minnesota Freedom Fund",
    url: "https://minnesotafreedomfund.org/",
    info: "SUPPORT BLACK YOUTH LED MOVEMENTS RIGHT NOW #GeorgeFloyd",
  },
];

const DonatePage = () => {
  return (
    <div style={{ padding: 24, textAlign: "center" }}>
      {" "}
      <Typography variant="h1">DONATE</Typography>
      <Typography variant="h4" color="textSecondary">
        Utilize the below links to donate to various movements and organizations
        related to Black Lives Matter
      </Typography>
      {/* the below GridList maps over donationSites and make a tile for each item with the title, info, and url for each donation site */}
      <GridList style={{ padding: 24 }} cellHeight={200} cols={4}>
        {donationSites.map((item) => (
          <GridListTile cols={1}>
            <a
              style={{ textDecoration: "none" }}
              rel="noopener noreferrer"
              target="_blank"
              href={item.url}
            >
              {item.title}
            </a>
            <Typography align="left" paragraph={true}>
              {item.info}
            </Typography>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default DonatePage;
