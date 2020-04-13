import React, { memo, FC } from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  stroke-width: 0;
  stroke: white;
  fill: white;
`;

interface SocialIconProps {
  icon: 'facebook' | 'twitter' | 'instagram';
}

export const SocialIcon: FC<SocialIconProps> = memo(({ icon }) => {
  if (icon === 'facebook') {
    return (
      <Icon
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          fill="white"
          d="M19.998 9.999c0-5.522-4.477-9.999-9.999-9.999s-9.999 4.477-9.999 9.999c0 4.991 3.657 9.128 8.437 9.878v-6.987h-2.539v-2.89h2.539v-2.203c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238 0.195 2.238 0.195v2.461h-1.261c-1.242 0-1.63 0.771-1.63 1.562v1.876h2.773l-0.443 2.89h-2.33v6.987c4.78-0.75 8.437-4.887 8.437-9.878z"
        ></path>
      </Icon>
    );
  }

  if (icon === 'instagram') {
    return (
      <Icon
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <title>instagram</title>
        <path
          fill="white"
          d="M10 0c-2.717 0-3.056 0.013-4.123 0.060-1.065 0.050-1.79 0.217-2.427 0.465-0.657 0.255-1.216 0.597-1.772 1.153s-0.899 1.113-1.153 1.772c-0.248 0.637-0.416 1.363-0.465 2.427-0.050 1.067-0.060 1.406-0.060 4.123s0.013 3.056 0.060 4.123c0.050 1.064 0.217 1.79 0.465 2.428 0.255 0.657 0.597 1.216 1.153 1.772s1.113 0.899 1.772 1.153c0.638 0.247 1.363 0.416 2.427 0.465 1.067 0.050 1.406 0.060 4.123 0.060s3.056-0.012 4.123-0.060c1.064-0.050 1.79-0.218 2.428-0.465 0.657-0.255 1.216-0.598 1.772-1.153s0.899-1.112 1.153-1.772c0.247-0.637 0.416-1.363 0.465-2.427 0.050-1.067 0.060-1.406 0.060-4.123s-0.012-3.056-0.060-4.123c-0.050-1.064-0.218-1.791-0.465-2.428-0.255-0.657-0.598-1.216-1.153-1.772s-1.112-0.899-1.772-1.153c-0.637-0.248-1.363-0.416-2.427-0.465-1.067-0.050-1.406-0.060-4.123-0.060zM10 1.8c2.669 0 2.988 0.013 4.042 0.059 0.975 0.046 1.504 0.208 1.856 0.346 0.468 0.181 0.8 0.398 1.152 0.747 0.349 0.35 0.566 0.683 0.747 1.151 0.137 0.352 0.3 0.881 0.344 1.856 0.048 1.055 0.058 1.372 0.058 4.042s-0.013 2.988-0.062 4.042c-0.051 0.975-0.213 1.504-0.351 1.856-0.187 0.468-0.399 0.8-0.749 1.152-0.349 0.349-0.687 0.566-1.15 0.747-0.35 0.137-0.887 0.3-1.862 0.344-1.062 0.048-1.374 0.058-4.049 0.058s-2.988-0.013-4.049-0.062c-0.976-0.051-1.513-0.213-1.863-0.351-0.474-0.187-0.8-0.399-1.149-0.749-0.351-0.349-0.575-0.687-0.75-1.15-0.138-0.35-0.299-0.887-0.35-1.862-0.038-1.050-0.051-1.374-0.051-4.037s0.013-2.988 0.051-4.051c0.051-0.975 0.212-1.512 0.35-1.862 0.175-0.475 0.399-0.8 0.75-1.151 0.349-0.349 0.675-0.574 1.149-0.748 0.35-0.138 0.876-0.301 1.851-0.351 1.063-0.037 1.375-0.050 4.049-0.050l0.037 0.025zM10 4.865c-2.837 0-5.135 2.3-5.135 5.135 0 2.837 2.3 5.135 5.135 5.135 2.837 0 5.135-2.3 5.135-5.135 0-2.837-2.3-5.135-5.135-5.135zM10 13.333c-1.842 0-3.333-1.492-3.333-3.333s1.492-3.333 3.333-3.333 3.333 1.492 3.333 3.333-1.492 3.333-3.333 3.333zM16.538 4.662c0 0.662-0.538 1.2-1.2 1.2s-1.2-0.538-1.2-1.2 0.538-1.199 1.2-1.199c0.661-0.001 1.2 0.538 1.2 1.199z"
        ></path>
      </Icon>
    );
  }

  if (icon === 'twitter') {
    return (
      <Icon
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <title>twitter</title>
        <path
          fill="white"
          d="M19.962 3.807c-0.738 0.324-1.525 0.545-2.354 0.646 0.845-0.509 1.495-1.312 1.802-2.269-0.793 0.462-1.671 0.799-2.606 0.987-0.747-0.799-1.811-1.299-2.992-1.299-2.264 0-4.1 1.836-4.1 4.098 0 0.325 0.037 0.637 0.106 0.937-3.408-0.161-6.429-1.797-8.451-4.272-0.356 0.602-0.555 1.301-0.555 2.062 0 1.425 0.725 2.678 1.823 3.413-0.672-0.022-1.305-0.207-1.857-0.513v0.051c0 1.988 1.411 3.645 3.288 4.023-0.344 0.092-0.707 0.143-1.080 0.143-0.262 0-0.513-0.025-0.763-0.072 0.526 1.627 2.038 2.814 3.837 2.848-1.4 1.099-3.174 1.754-5.085 1.754-0.325 0-0.649-0.019-0.975-0.056 1.824 1.162 3.973 1.841 6.298 1.841 7.545 0 11.666-6.247 11.666-11.655 0-0.174 0-0.35-0.012-0.525 0.801-0.574 1.5-1.3 2.050-2.123l-0.039-0.017z"
        ></path>
      </Icon>
    );
  }

  return null;
});
