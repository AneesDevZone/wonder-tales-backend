import { SignOptions } from 'jsonwebtoken'; // Import the type from jsonwebtoken

// JWT Configuration: This is used to configure the JWT settings for signing and verifying tokens.
export default {
  secret: process.env.JWT_SECRET || 'defaultSecretKey', // Secret key for signing JWT
  signOptions: {
    expiresIn: '60m', // Token expiration time (1 hour)
    algorithm: 'HS256' as SignOptions['algorithm'], // Explicitly set the type
  },
};
