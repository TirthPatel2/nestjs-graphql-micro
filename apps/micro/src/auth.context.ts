import { UnauthorizedException } from '@nestjs/common';

export const authContext = ({ req }) => {
  if (req.headers?.authorization) {
    // validate token

    return true;
  }

  throw new UnauthorizedException('You are unauthorized');
};
