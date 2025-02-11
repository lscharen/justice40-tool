import * as React from 'react';
import {Grid} from '@trussworks/react-uswds';
import {useIntl, FormattedMessage} from 'gatsby-plugin-intl';

import J40MainGridContainer from '../components/J40MainGridContainer';
import Layout from '../components/layout';
import LinkTypeWrapper from '../components/LinkTypeWrapper';
import DatasetsButton from '../components/DatasetsButton';

import * as CONTACT_COPY from '../data/copy/contact';
import {FEEDBACK_EMAIL} from '../data/copy/common';

interface IContactPageProps {
  location: Location;
}

const ContactPage = ({location}: IContactPageProps) => {
  const intl = useIntl();

  return (
    <Layout location={location} title={intl.formatMessage(CONTACT_COPY.PAGE_INTRO.PAGE_TILE)}>

      <J40MainGridContainer>

        <section className={'page-heading'}>
          <h1>{intl.formatMessage(CONTACT_COPY.PAGE_INTRO.PAGE_HEADING)}</h1>
          <DatasetsButton href= {intl.locale === 'es' ? 'https://www.surveymonkey.com/r/ZPKY8G9' : 'https://www.surveymonkey.com/r/6G9TQJ8'} />
        </section>

        <Grid row gap={6}>

          {/* First column */}
          <Grid desktop={{col: 8}} col={12}>
            <h2>
              {intl.formatMessage(CONTACT_COPY.PAGE_INTRO.PAGE_SUB_HEADING)}
            </h2>
            <p>
              <FormattedMessage
                id={'contact.page.general'}
                description={'Contact page body text'}
                defaultMessage={`Email CEQ at: {general_email_address}.`}
                values={{
                  general_email_address:
                    <LinkTypeWrapper
                      linkText={FEEDBACK_EMAIL}
                      internal={false}
                      url={`mailto:${FEEDBACK_EMAIL}`}
                      openUrlNewTab={true}
                    />,
                }} />
            </p>
          </Grid>

          {/* Second Column */}
          <Grid desktop={{col: 4}} col={12}>
          </Grid>
        </Grid>
      </J40MainGridContainer>
    </Layout>
  );
};

export default ContactPage;
