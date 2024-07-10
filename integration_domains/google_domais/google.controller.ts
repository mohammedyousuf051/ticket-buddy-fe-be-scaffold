import { Controller, Get, Req, Res, Post, Body, Param } from '@nestjs/common';
import { google } from 'googleapis';

const CLIENT_ID =
  'xx';
const CLIENT_SECRET = 'xx';
const REDIRECT_URI = 'http://localhost:3000/google-domain/oauth2callback';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);

const userTokens: { [i: string]: any } = {};

@Controller('google-domain')
export class GoogleDomainController {
  @Get('integrate-email')
  integrateEmail(@Res() res: any) {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: ['https://www.googleapis.com/auth/gmail.readonly'],
    });
    console.log('authUrl', authUrl);
    res.redirect(authUrl);
  }

  @Get('oauth2callback')
  async oauth2callback(@Req() req: any, @Res() res: any) {
    const { code } = req.query;
    console.log('---------------------------', req.query);
    console.log(code, 'code', req.query);
    const { tokens } = await oauth2Client.getToken(code);
    const userId = 'user123'; // Replace with your own user ID
    userTokens[userId] = tokens;

    //store userEmailId and token object in DB

    res.send('Email integration successful!');
  }

  @Get('emails')
  async readEmails(@Req() req: any, @Res() res: any) {
    const userId = 'user123';
    // console.log(userTokens[userId]);
    if (userTokens[userId]) {
      oauth2Client.setCredentials(userTokens[userId]);

      console.log('0000000000000000000', oauth2Client.credentials.expiry_date);
      console.log(
        'isExceeded',
        oauth2Client.credentials.expiry_date
          ? oauth2Client.credentials.expiry_date - Date.now() < 60000
          : false,
      );
      if (
        oauth2Client.credentials.expiry_date &&
        oauth2Client.credentials.expiry_date - Date.now() < 60000
      ) {
        // 60 seconds
        // Refresh the access token using the refresh token
        const a = await oauth2Client.refreshAccessToken();
        console.log(a, 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        userTokens[userId] = a;
      }

      const gmail = google.gmail({ version: 'v1', auth: oauth2Client });
      console.log(userTokens[userId]);
      //   console.log(gmail);
      const { data } = await gmail.users.messages.list({
        userId: 'me',
        maxResults: 10,
      });

      res.json(data);
    } else {
      res.status(401).send('User email integration required');
    }
  }
}
