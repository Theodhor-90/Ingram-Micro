import { FunctionComponent } from 'react'
import { Card } from '../../../../components/card/card'
import { Accordion } from '../../../../components/accordion/accordion'

export const Business: FunctionComponent = () => {
  return (
    <div className='business-driving--page-container'>
      <div className='business-driving--rich-text'>
        <h3 className='ingram--title'>
          Understanding External Business Drivers
        </h3>
        <p className='ingram--paragraph'>
          Industry drivers and market forces determine what is most important to
          senior leaders at any given time. Therefore, it is critical to
          identify the factors that impact your customer's business and the key
          operating metrics used to drive day-to-day business. These will enable
          you to identify challenging business processes and pain points and
          align technology proposals for greater success.
        </p>
        <h4 className='ingram--sub-title'>Quick Tip:</h4>
        <p className='ingram--paragraph'>
          If you’re short on resources, the following list of free or
          inexpensive secondary research sources can help. In addition, try
          searching terms such as “Industry trends in
          manufacturing/retail/hospitality/etc.”{' '}
        </p>
        <Card title='Google' link='https://www.google.co.uk/' />
        <Card title='Dun and Bradstreet' link='https://www.dnb.co.uk/' />
        <Card
          title='LinkedIn Sales Navigator'
          link='https://business.linkedin.com/sales-solutions/cx/18/08/linkedin-sales-navigator'
        />
        <Card
          title='ELFA'
          link='https://www.google.com/search?q=ELFA&oq=elfa&aqs=chrome.0.69i59j46i433i512j0i131i433i512j46i512j0i131i433l2j0i433i512j46i199i465i512j0i131i433j0i271.625j0j15&sourceid=chrome&ie=UTF-8'
        />
        <Card
          title='Google Trends'
          link='https://trends.google.co.uk/trends/?geo=GB'
        />
      </div>
      <div className='business-driving--rich-text'>
        <h3 className='ingram--title'>Using PESTLE</h3>
        <p className='ingram--paragraph'>
          PESTLE is a simple framework to help you identify individual external
          business drivers. We have included some useful links below to get you
          started. Click each section to expand.
        </p>
      </div>
      <Accordion firstInColumn={true} title='Political'>
        <p className='ingram--paragraph__small__no-margin'>
          Political influences on the markets we serve include local government
          policies, tax policies, foreign trade policies and restrictions,
          political stability and corruption, and labour laws.
        </p>
        <h4 className='ingram--sub-title__small'>Learn more about:</h4>

        <h4 className='ingram--sub-title'>Tax Policies</h4>
        <Card
          title='UK Tax Collection'
          link='https://www.gov.uk/government/organisations/hm-revenue-customs'
        />
        <Card title='Personal Taxes' link='https://www.gov.uk/browse/tax' />
        <Card
          title='Business Taxes'
          link='https://www.gov.uk/corporation-tax'
        />

        <h4 className='ingram--sub-title__mt'>Trade Restrictions</h4>
        <Card
          title='Current UK Government Restrictions'
          link='https://www.gov.uk/guidance/current-arms-embargoes-and-other-restrictions'
        />
        <Card
          title='From the World Trade Organisation (WTO)'
          link='https://www.wto.org/english/thewto_e/countries_e/united_kingdom_e.htm'
        />

        <h4 className='ingram--sub-title__mt'>Labour Laws</h4>
        <Card
          title='Trades Union Congress Employee Status and Rights'
          link='https://www.tuc.org.uk/employment-status-and-rights'
        />

        <h4 className='ingram--sub-title__mt'>Political Stability</h4>
        <Card
          title='The Economist Intelligence Unit'
          link='https://country.eiu.com/united-kingdom'
        />
        <Card
          title='UK Country Analysis'
          link='https://country.eiu.com/United+Kingdom/ArticleList/Analysis/Politics'
        />
      </Accordion>
      <Accordion title='Economic'>
        <p className='ingram--paragraph__small__no-margin'>
          Forces such as devaluation of currency and inflation can generate
          uncertainty and strain resources. Some of fluctuations to notice
          include: economic growth, available disposable income of a selected
          market, and rising or falling interest/exchange/inflation/unemployment
          rates.
        </p>
        <h4 className='ingram--sub-title__small'>Learn more about:</h4>

        <h4 className='ingram--sub-title'>Economic Growth</h4>
        <Card
          title='Office for Budget Responsibility (OBR) Economic Forecasts'
          link='https://obr.uk/efo/economic-and-fiscal-outlook-march-2022/'
        />
        <Card
          title='OBR General Overview'
          link='https://obr.uk/about-the-obr/what-we-do/'
        />

        <h4 className='ingram--sub-title__mt'>Interest Rates</h4>
        <Card
          title='Bank of England Monetary Policy'
          link='https://www.bankofengland.co.uk/monetary-policy/the-interest-rate-bank-rate'
        />

        <h4 className='ingram--sub-title__mt'>Exchange Rates</h4>
        <Card
          title='Historical Exchange Rates'
          link='https://www.icaew.com/library/research-guides/current-and-historical-exchange-rates'
        />

        <h4 className='ingram--sub-title__mt'>Inflation Rates</h4>
        <Card
          title='Office for National Statistics Indices'
          link='https://www.ons.gov.uk/economy/inflationandpriceindices#publications'
        />

        <h4 className='ingram--sub-title__mt'>Disposable Income</h4>
        <Card
          title='Household Disposable Income'
          link='https://www.ons.gov.uk/economy/regionalaccounts/grossdisposablehouseholdincome'
        />

        <h4 className='ingram--sub-title__mt'>Unemployment Rates</h4>
        <Card
          title='Current Market Conditions'
          link='https://www.ons.gov.uk/employmentandlabourmarket'
        />
        <Card
          title='Unemployment Overview'
          link='https://www.ons.gov.uk/employmentandlabourmarket/peoplenotinwork/unemployment'
        />
      </Accordion>
      <Accordion title='Social'>
        <p className='ingram--paragraph__small__no-margin'>
          Social factors that influence business include population growth rate,
          age distribution, lifestyle and career attitudes, safety and health
          consciousness, and cultural barriers impacting a given market.
        </p>
        <h4 className='ingram--sub-title__small'>Learn more about:</h4>

        <h4 className='ingram--sub-title'>Demographics</h4>
        <Card
          title='Office for National Statistics (ONS) Overview'
          link='https://www.ons.gov.uk/peoplepopulationandcommunity'
        />
        <Card
          title='UK Government Latest Population Data'
          link='https://www.ethnicity-facts-figures.service.gov.uk/uk-population-by-ethnicity/national-and-regional-populations/population-of-england-and-wales/latest'
        />

        <h4 className='ingram--sub-title'>Consumer Topics</h4>
        <Card title='Shifting Sentiment' link='https://yougov.co.uk/' />
        <Card
          title='Political Climate'
          link='https://yougov.co.uk/topics/politics'
        />
        <Card
          title='Consumer Issues'
          link='https://yougov.co.uk/topics/consumer'
        />
        <Card
          title='Technology'
          link='https://yougov.co.uk/topics/technology'
        />
      </Accordion>
      <Accordion title='Technological'>
        <p className='ingram--paragraph__small__no-margin'>
          Your customer's purchase decision can be influenced by many
          technological factors, including the availability of technology
          incentives in the market, the level of innovation and automation in
          business, research and development, and general technology awareness
          and evolution within the industry.
        </p>
        <h4 className='ingram--sub-title__small'>Learn more about:</h4>

        <h4 className='ingram--sub-title'>Technology Incentives</h4>
        <Card
          title='UK Government Technology Initiatives'
          link='https://www.gov.uk/government/news/government-funding-boost-for-life-changing-technologies'
        />
        <Card
          title='UK Government R&D Support'
          link='https://www.great.gov.uk/international/content/investment/how-we-can-help/research-and-development-rd-support-in-the-uk/'
        />
        <Card
          title='UK Government R&D Roadmap'
          link='https://www.gov.uk/government/publications/uk-research-and-development-roadmap'
        />
        <Card
          title='BDO: R&D Tax Incentives and Grants'
          link='https://www.bdo.co.uk/en-gb/services/tax/innovation-and-r-d-tax-incentives'
        />

        <h4 className='ingram--sub-title'>Innovation</h4>
        <Card
          title='Cambridge University Innovation Report'
          link='https://www.ciip.group.cam.ac.uk/reports-and-articles/uk-innovation-report-2022/'
        />

        <h4 className='ingram--sub-title'>Automation</h4>
        <Card
          title='Workforce Obsolescence'
          link='https://arden.ac.uk/knowledge-base/latest-news/Arden-launches-automation-workforce-report'
        />

        <h4 className='ingram--sub-title'>Technology Awareness</h4>
        <Card
          title='IPSOS tech tracker & sentiment surveys'
          link='https://www.ipsos.com/en-uk/tech-tracker'
        />
      </Accordion>
      <Accordion title='Legal'>
        <p className='ingram--paragraph__small__no-margin'>
          International, regional, and local laws and regulations heavily
          influence how a business operates, transacts, sells, hires, and more.
          These include employment, discrimination, consumer protection,
          antitrust, copyright and patent, and health and safety laws.
        </p>
        <h4 className='ingram--sub-title__small'>Learn more about:</h4>

        <h4 className='ingram--sub-title'>Consumer Protection Laws</h4>
        <Card
          title='Global Legal Group Overview'
          link='https://iclg.com/practice-areas/consumer-protection-laws-and-regulations/united-kingdom'
        />

        <h4 className='ingram--sub-title'>Health and Safety Law</h4>
        <Card
          title='Health and Safety Executive'
          link='https://www.hse.gov.uk/legislation/index.htm'
        />

        <h4 className='ingram--sub-title'>Employment and Discrimination</h4>
        <Card
          title='Global Legal Group Laws and Regulations Overview'
          link='https://iclg.com/practice-areas/employment-and-labour-laws-and-regulations/united-kingdom'
        />

        <h4 className='ingram--sub-title'>Copyright and Patent Laws</h4>
        <Card
          title='Global Legal Group Copyright Law'
          link='https://iclg.com/practice-areas/copyright-laws-and-regulations/united-kingdom'
        />
        <Card
          title='Global Legal Group Patent Law'
          link='https://iclg.com/practice-areas/patents-laws-and-regulations/united-kingdom'
        />
      </Accordion>
      <Accordion title='Environmental'>
        <p className='ingram--paragraph__small__no-margin'>
          When looking at the environmental impacts in a particular market,
          consider weather and climate changes, environmental policies within
          and between regions, and pressures from environmental NGOs.
        </p>
        <h4 className='ingram--sub-title__small'>Learn more about:</h4>
        <h4 className='ingram--sub-title'>Climate</h4>
        <Card
          title='The Met Office Forecasts'
          link='https://www.metoffice.gov.uk/'
        />
        <Card
          title='The Met Office Climate Modelling Research'
          link='https://www.metoffice.gov.uk/research'
        />

        <h4 className='ingram--sub-title'>Environmental Policies</h4>
        <Card
          title='The Environment Agency Services and Information'
          link='https://www.gov.uk/government/organisations/environment-agency/services-information'
        />

        <h4 className='ingram--sub-title'>Climate Change Pressures</h4>
        <Card
          title='Sustainability, energy, and environmental news'
          link='https://www.edie.net/'
        />
      </Accordion>
    </div>
  )
}
