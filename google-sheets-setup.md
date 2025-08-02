# Google Sheets Integration Setup Guide

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "TreatConnect Early Access Signups"
4. Set up the following columns in row 1:
   - A1: `Name`
   - B1: `Email`
   - C1: `Timestamp`
   - D1: `Source`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to `Extensions` > `Apps Script`
2. Delete the default code and paste the following:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the JSON data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Add the data to the sheet
    sheet.appendRow([
      data.name,
      data.email,
      data.timestamp,
      data.source || 'Unknown'
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('TreatConnect Early Access API is running')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

## Step 3: Deploy the Script

1. Click the `Deploy` button (top right)
2. Choose `New deployment`
3. Set type to `Web app`
4. Set execute as: `Me`
5. Set access to: `Anyone`
6. Click `Deploy`
7. Copy the Web App URL (it will look like: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`)

## Step 4: Update the React Component

1. Open `src/components/EarlyAccessForm.tsx`
2. Find the line with `const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';`
3. Replace `YOUR_SCRIPT_ID` with your actual script ID from step 3

## Step 5: Test the Integration

1. Submit a test form on your website
2. Check your Google Sheet to see if the data appears
3. If there are issues, check the Apps Script logs in the Google Apps Script editor

## Optional: Set up Email Notifications

Add this function to your Apps Script to get email notifications for new signups:

```javascript
function sendNotificationEmail(name, email) {
  const subject = 'New TreatConnect Early Access Signup';
  const body = `
    New early access signup:
    
    Name: ${name}
    Email: ${email}
    Time: ${new Date().toLocaleString()}
  `;
  
  // Replace with your email
  GmailApp.sendEmail('your-email@gmail.com', subject, body);
}
```

Then modify the `doPost` function to call this function after adding the row:

```javascript
// Add this line after sheet.appendRow(...)
sendNotificationEmail(data.name, data.email);
```

## Security Considerations

- The script runs with your Google account permissions
- Consider adding rate limiting for production use
- Monitor the script execution logs regularly
- Set up proper error handling and logging

## Troubleshooting

- **CORS errors**: This is normal with Google Apps Script, the form uses `no-cors` mode
- **Data not appearing**: Check the Apps Script execution logs
- **Permission errors**: Make sure the script has permission to access your spreadsheet
- **Deployment issues**: Ensure you've set the correct permissions when deploying