#! python3 

import pyperclip, re

#TODO: Create a regex for phone numbers
phoneRegex = re.compile(r'''(
    (\d{3}|\(\d{3}\))? # area code
    (\s|-|\.)?         # separator
    (\d{3})              # first 3 digits
    (\s|-|\.)          # separator
    (\d{4})              # last 4 digits
    (\s*(ext|x|ext.)\s*(\d{2,5}))?  # extension
    )''', re.VERBOSE)

#TODO: Create a regex for email address
emailRegex = re.compile(r'''

	[a-zA-Z0-9_.+]+
	@
	[a-zA-Z0-9_.+]+
	''', re.VERBOSE)

#TODO: Get the text off the clipboard
text = pyperclip.paste()

#TODO: Extract the email/phone from this text
extractedPhone = phoneRegex.findall(text)
extractedEmail = emailRegex.findall(text)

allPhoneNumbers = []
for phoneNumber in extractedPhone:
	allPhoneNumbers.append(phoneNumber[0])

#print(allPhoneNumbers)
#print(extractedEmail)
result = '\n'.join(allPhoneNumbers)  + '\n' + '\n'.join(extractedEmail)
print(result)
#TODO: Cope the extracted email/phone to the clipboard
pyperclip.copy(result)