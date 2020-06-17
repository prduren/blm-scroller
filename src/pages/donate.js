import React from "react";
import { Typography } from "@material-ui/core";
import { GridList, GridListTile, Tooltip } from "@material-ui/core";
import styled from "styled-components";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const donationSites = [
  {
    title: "Black & Brown Founders",
    url: "https://blackandbrownfounders.com/",
    info:
      "We provide community, education, and access to Black and Latinx entrepreneurs, allowing them to launch and build tech businesses with modest resources.",
  },
  {
    title: "Black Table Arts",
    url: "http://www.blacktablearts.com/",
    info:
      "Gathering black communities through the arts, towards better black futures.",
  },
  {
    title: "Embrace Race",
    url: "https://www.embracerace.org/?",
    info:
      "Let’s Raise a Generation of Children Who Are Thoughtful, Informed, and Brave About Race.",
  },
  {
    title: "Mutual Aid Hub",
    url: "https://www.mutualaidhub.org/",
    info:
      "Highlight the incredible work of mutual aid organizers around the country, and to facilitate connections and shared strategies in this growing movement of community support.",
  },
  {
    title: "Minnesota Rapid Response Coalition",
    url: "http://www.wearemrrc.com/",
    info:
      "Committed to rapidly responding to community crisis in the Minnesota.",
  },
  {
    title: "Breonna Taylor GoFundMe",
    url: "https://www.gofundme.com/f/9v4q2-justice-for-breonna-taylor",
    info:
      "GoFundMe for Breonna Taylor, woman shot and killed by officers executing no-knock search warrant.",
  },
  {
    title: "I Run With Maud",
    url: "https://www.gofundme.com/f/i-run-with-maud",
    info:
      "GoFundMe for Ahmaud Arbery, unarmed man shot and killed while jogging.",
  },
  {
    title: "Rayshard Brooks GoFundMe",
    url: "https://www.gofundme.com/f/official-gofundme-for-rayshard-brooks",
    info:
      "GoFundMe for Rayshard Brooks, man shot and killed in Atlanta in the back by police.",
  },
  {
    title: "Integrate NYC",
    url: "https://www.integratenyc.org/",
    info:
      "A youth-led organization that stands for integration and equity in New York City schools.",
  },
  {
    title: "D.R.E.A.M.",
    url: "http://dream-usa.org/our-organization",
    info: "Developing Responsible Economically Advanced Model-Citizens",
  },
  {
    title: "Autistic People of Color Fund",
    url: "https://autismandrace.com/autistic-people-of-color-fund/",
    info:
      "Gofund me for the Floyd family in order to establish funeral and burial expenses, mental and grief counseling, lodging and travel for all court proceedings, etc.",
  },
  {
    title: "ACLU Racial Justice",
    url: "https://www.aclu.org/issues/racial-justice",
    info:
      "Aims to preserve and extend constitutionally guaranteed rights to people who have historically been denied their rights on the basis of race. ",
  },
  {
    title: "Color of Change",
    url:
      "https://secure.actblue.com/contribute/page/support-us?refcode=coc_website_popup",
    info:
      "Gofund me for the Floyd family in order to establish funeral and burial expenses, mental and grief counseling, lodging and travel for all court proceedings, etc.",
  },
  {
    title: "Advancement Project",
    url: "https://advancementproject.org/",
    info:
      "Rooted in the great human rights struggles for equality and justice. We exist to fulfill America's promise of a caring, inclusive and just democracy.",
  },
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
      "A coalition to demand that Minneapolis divest from policing and invest in long-term alternatives that promote healthier, safer, more diverse communities.",
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

const Wrapper = styled.div`
  padding: 24px;
  text-align: center;
  width: 90%;
  margin: 0 auto;
`;

const StyledDiv = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 10px;
  border: ${({ theme }) => `5px solid ${theme.colors.secondary}`};
`;

const DonatePage = (props) => {
  // this function uses isWidthUp from material-ui to check the size of the screen and change the cols prop in GridList. It will resize each tile as necessary. Don't forget to export withWidth() at the bottom of the page as is shown.
  const getGridListCols = () => {
    if (isWidthUp("xl", props.width)) {
      return 4;
    }

    if (isWidthUp("lg", props.width)) {
      return 3;
    }

    if (isWidthUp("md", props.width)) {
      return 2;
    }

    return 1;
  };

  return (
    <Wrapper>
      <Typography
        fontFamily={`${({ theme }) => theme.typography.fontFamily.Roboto}`}
        variant="h2"
      >
        DONATE
      </Typography>
      <Typography fontFamily="Roboto" variant="h4" color="textSecondary">
        Utilize the below links to donate to various movements and organizations
        related to Black Lives Matter
      </Typography>
      <GridList
        style={{ padding: 24 }}
        cellHeight={"100%"}
        cols={getGridListCols()}
      >
        {donationSites.map((item, index) => (
          <StyledDiv>
            <GridListTile key={`item-${index}`} cols={1}>
              <a
                style={{ textDecoration: "underline" }}
                rel="noopener noreferrer"
                target="_blank"
                href={item.url}
              >
                <Tooltip title="Go To" aria-label="go to" placement="top">
                  <Typography variant="h6">{item.title}</Typography>
                </Tooltip>
              </a>

              <Typography
                style={{ padding: "10px" }}
                align="left"
                paragraph={true}
              >
                {item.info}
              </Typography>
            </GridListTile>
          </StyledDiv>
        ))}
      </GridList>
    </Wrapper>
  );
};

export default withWidth()(DonatePage);
