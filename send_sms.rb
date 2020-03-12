# Download the twilio-ruby library from twilio.com/docs/libraries/ruby
require 'twilio-ruby'

account_sid = 'AC50429134acd89e32efd6e09da922f93d'
auth_token = ENV.auth_token
client = Twilio::REST::Client.new(account_sid, auth_token)

from = '+18547770150' # Your Twilio number
to = '+55021974629430' # Your mobile phone number

client.messages.create(
from: from,
to: to,
body: "This is a test. Elisa, iPiPi CTO!"
)
