import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { IoLogoGithub } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

// const FeatureList: FeatureItem[] = [
//   {
//     title: 'Easy to Use',
//     Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: 'Focus on What Matters',
//     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: 'Powered by React',
//     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {/* {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))} */}
          <div className="flex justify-between px-5 pt-5">
        <a target="_blank" className="text-white" href="/docs/intro">Docs</a>
        <div className="flex gap-5">

        <a target="_blank" href="https://github.com/Harish-M-2003/Squig" className="text-gray-200 hover:opacity-[0.5] hover:text-gray-200">

        <IoLogoGithub className="text-4xl"/>
        </a>
        <a target="_blank" href="https://github.com/Harish-M-2003/Squig" className="text-gray-200 hover:opacity-[0.5] hover:text-gray-200">

        <FaLinkedin className="text-4xl"/>
        </a>

        </div>
      </div>
      
        </div>
      </div>
    </section>
  );
}
