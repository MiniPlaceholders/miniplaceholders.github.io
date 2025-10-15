import type {ReactNode} from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'MiniMessage-based',
    Svg: require('@site/static/img/KyoriLogo.svg').default,
    description: (
      <>
        Easily create component-based expansions with the MiniMessage API.
      </>
    ),
  },
  {
    title: 'Compatibility',
    Svg: null, // Dynamically set based on color mode
    description: (
      <>
        Support for all popular platforms such as Paper, Velocity, Fabric, Sponge, and (Neo)Forge (via Sponge)
      </>
    ),
  },
  {
    title: 'Join the modern era',
    Svg: require('@site/static/img/MiniPlaceholdersLogoMinTransparent.svg').default,
    description: (
      <>
        MiniPlaceholders is always up to date to support the latest features of Minecraft
        and each platform, so you'll always be at the “cutting edge.”
      </>
    ),
  },
];

function Feature(props: FeatureItem) {
  const {colorMode} = useColorMode();
  let SvgToRender = props.Svg;
  if (props.title === 'Compatibility') {
    SvgToRender = colorMode === 'dark'
      ? require('@site/static/img/SupportedPlatforms.svg').default
      : require('@site/static/img/SupportedPlatformsLight.svg').default;
  }
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {SvgToRender && <SvgToRender className={styles.featureSvg} role="img" />}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{props.title}</Heading>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
