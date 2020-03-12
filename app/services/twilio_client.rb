class TwilioClient
	attr_reader: :client
	def initialize
		account_sid = 'AC7ee08d44259a855a8510bc9e26ccc397'
		auth_token = '9cefdae0e2fabd70362a3194b75d2314'
		@client = Twilio::REST::Client.new(account_sid, auth_token)
	end

	def send_whatsapp
	message = @client.messages.create(
                         from: 'whatsapp:+4917684338887',
                         body: 'Hello there!',
                         to: 'whatsapp:+13233633791'
                       )
	end
end