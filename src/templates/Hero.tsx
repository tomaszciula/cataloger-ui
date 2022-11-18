import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://github.com">
            <a>GitHub</a>
          </Link>
        </li>
        <li>
          <Link href="/register">
            <a>Sign up</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            <span className="text-primary-500">Cataloger </span>
            {'for your stuff\n'}
            <span className="text-primary-500">
              books, games and even more ...
            </span>
          </>
        }
        description="The easiest way for cataloging your valuable things"
        button={
          <Link href="/login">
            <a>
              <Button xl>Get started</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
