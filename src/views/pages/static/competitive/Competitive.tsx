import { FunctionComponent } from 'react'
import { Accordion } from '../../../../components/accordion/accordion'

export const Competitive: FunctionComponent = () => {
  return (
    <div className='competetive--page-container'>
      <div className='competetive--rich-text'>
        <h3 className='ingram--title'>
          Understanding Your Customer's Competitive Environment
        </h3>
        <p className='ingram--paragraph'>
          It’s important to understand your customer's competitive environment
          because this will enable you to build a sense of urgency into your
          proposals. Five basic competitive forces exist, as competition in an
          industry doesn’t only relate to direct competitors. The collective
          strength of these forces determines the profit potential within an
          industry and its attractiveness. By understanding your customer's
          competitive environment, you can build proposals that tie to
          competitive opportunities or threats to resonate with senior leaders
          in the firm.
        </p>
        <h4 className='ingram--sub-title'>
          Expand the five drop-down menus below to prepare questions next time
          to engage with your prospect or customer.
        </h4>
      </div>
      <Accordion
        firstInColumn={true}
        title='1. Rivalry Among Existing Competitors'
      >
        <ul className='competetive--list'>
          <li>Number of competitors</li>
          <li>Diversity of competitors</li>
          <li>Industry concentration</li>
          <li>Industry growth</li>
          <li>Quality differences</li>
          <li>Brand loyalty</li>
          <li>Barriers to exit</li>
          <li>Switching costs</li>
        </ul>
      </Accordion>
      <Accordion title='2. Threat of New Entrants'>
        <ul className='competetive--list'>
          <li>Barriers to entry</li>
          <li>Brand loyalty</li>
          <li>Economies of scale</li>
          <li>Capital requirements</li>
          <li>Cumulative experience</li>
          <li>Government policies</li>
          <li>Access to distribution channels</li>
          <li>Switching costs</li>
        </ul>
      </Accordion>
      <Accordion title='3. Bargaining Power of Buyers'>
        <ul className='competetive--list'>
          <li>Number of customers</li>
          <li>Size of each customer order</li>
          <li>Differences between competitors</li>
          <li>Price sensitivity</li>
          <li>Buyer's ability to substitute</li>
          <li>Buyer's information availability</li>
          <li>Switching costs</li>
        </ul>
      </Accordion>
      <Accordion title='4. Threat of Substitute Products'>
        <ul className='competetive--list'>
          <li>Number of substitute products available</li>
          <li>Buyer propensity to substitute</li>
          <li>Relative price performance of substitute</li>
          <li>Perceived level of product differentiation</li>
          <li>Switching costs</li>
        </ul>
      </Accordion>
      <Accordion title='5. Bargaining Power of Suppliers'>
        <ul className='competetive--list'>
          <li>Number and size of suppliers</li>
          <li>Uniqueness of each supplier's product</li>
          <li>Focal company's ability to substitute</li>
        </ul>
      </Accordion>
    </div>
  )
}
