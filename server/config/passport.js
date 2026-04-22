import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User.js';
import Cart from '../models/Cart.js';

const setupPassport = () => {
  // Only setup Google strategy if credentials are configured
  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: process.env.GOOGLE_CALLBACK_URL || '/api/auth/google/callback',
          scope: ['profile', 'email']
        },
        async (accessToken, refreshToken, profile, done) => {
          try {
            // Check if user already exists with this Google ID
            let user = await User.findOne({ googleId: profile.id });

            if (user) {
              return done(null, user);
            }

            // Check if user exists with same email (local account)
            user = await User.findOne({ email: profile.emails[0].value });

            if (user) {
              // Link Google account to existing user
              user.googleId = profile.id;
              user.avatar = profile.photos?.[0]?.value;
              if (user.authProvider === 'local') {
                user.authProvider = 'local'; // Keep as local if they had password
              }
              await user.save();
              return done(null, user);
            }

            // Create new user
            user = await User.create({
              googleId: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
              avatar: profile.photos?.[0]?.value,
              authProvider: 'google'
            });

            // Create empty cart for new user
            await Cart.create({ user: user._id, items: [] });

            done(null, user);
          } catch (error) {
            done(error, null);
          }
        }
      )
    );

    console.log('✅ Google OAuth configured');
  } else {
    console.log('⚠️  Google OAuth not configured (missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET)');
  }

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
};

export default setupPassport;
