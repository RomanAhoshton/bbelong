const registrationConfirmTemplate = (code, money) => {
  return `<div class="letter">
    <img class="letter__logo" src="https://community-connect-app.s3.us-east-1.amazonaws.com/email_sending/logo.svg"
      alt="logo" />

    <div class="letter__body">
      <p class="letter__greet">
        Welcome to <a class="welcome-link" href="#"> Bebelong.com </a>,
      </p>

      <img src="https://community-connect-app.s3.us-east-1.amazonaws.com/email_sending/welcome.svg" />

      <h1 class="letter__message">
     ${code}
      </h1>

      <p class="letter__desc">
        4-digit code To Verify Your Email Address
      </p>
    
      <p class="letter__text letter_desc">
  Please write this code on the registration page to confirm your email 
  address  and activate your account.
      </p>
    </div>
  </div>`
}

const passwordRecoveryCodeTemplate = (name, code) => {
  return `
    <div class="letter">
      <img class="letter__logo" src="https://community-connect-app.s3.us-east-1.amazonaws.com/email_sending/logo.svg" alt="logo" />

      <div class="letter__body">


	  <img  src="https://community-connect-app.s3.us-east-1.amazonaws.com/email_sending/password_recovery.svg" alt="cat" class="image-letter"/>
        <p class="letter__greet">
          Hello ${name},
        </p>

        <p class="letter__desc">
          You requested to recover your password. Use the code below to proceed with resetting your password.
        </p>

        <p class="letter__desc">
          4-digit code for password recovery:
        </p>

        <h1 class="letter__message">
          ${code}
        </h1>
      </div>
    </div>
  `
}

const walletToppedTemplate = (name, money) => {
  return `<div class="letter">
		<img class="letter__logo" src="https://community-connect-app.s3.us-east-1.amazonaws.com/email_sending/logo.svg"
			alt="">
		<div class="letter__body">
			<p class="letter__greet">
				Hello ${name},
			</p>
			<p class="letter__desc">
				We're reaching out with an update on recent transactions in your wallet:
			</p>
			<p class="letter__text">
				4-digit code for password recovery
			</p>
			<h1 class="letter__message">
				Wallet Topped Up: <span>USD ${money}</span>
			</h1>
			<p class="letter__text">
				Your wallet has been successfully credited
			</p>
		</div>
	</div>`
}

const successfulWithdrawalTemplate = (name, money) => {
  return `<div class="letter">
		<img class="letter__logo" src="https://community-connect-app.s3.us-east-1.amazonaws.com/email_sending/logo.svg"
			alt="">
		<div class="letter__body">
			<p class="letter__greet">
				Hello ${name},
			</p>
			<p class="letter__desc">
				We're reaching out with an update on recent transactions in your wallet:
			</p>
			<p class="letter__text">
				4-digit code for password recovery
			</p>
			<h1 class="letter__message">
				Successful Withdrawal: <span>USD ${money}</span>
			</h1>
			<p class="letter__text">
				Your wallet has been successfully credited
			</p>
		</div>
	</div>`
}

const transferToAnotherUserTemplate = (name, money) => {
  return `<div class="letter">
		<img class="letter__logo" src="https://community-connect-app.s3.us-east-1.amazonaws.com/email_sending/logo.svg"
			alt="">
		<div class="letter__body">
			<p class="letter__greet">
				Hello ${name},
			</p>
			<p class="letter__desc">
				We're reaching out with an update on recent transactions in your wallet:
			</p>
			<p class="letter__text">
				4-digit code for password recovery
			</p>
			<h1 class="letter__message">
				Transfer to another user: <span>USD ${money}</span>
			</h1>
			<p class="letter__text">
				Your wallet has been successfully credited
			</p>
		</div>
	</div>`
}

const transferToAnotherUserTemplate2 = (name, money) => {
  return `<div class="letter">
		<img class="letter__logo" src="https://community-connect-app.s3.us-east-1.amazonaws.com/email_sending/logo.svg"
			alt="">
		<div class="letter__body">

			<p class="letter__greet">
				Hello ${name},
			</p>
			<p class="letter__desc">
				We're reaching out with an update on recent transactions in your wallet:
			</p>
			<p class="letter__text">
				4-digit code for password recovery
			</p>
			<h1 class="letter__message">
				Received Funds: <span>USD ${money}</span>
			</h1>
			<p class="letter__text">
				Your wallet has been successfully credited
			</p>
		</div>
	</div>`
}

const userInvitationTemplate = (name, money) => {
  return `
    <div class="letter">
      <img class="letter__logo" src="https://community-connect-app.s3.us-east-1.amazonaws.com/email_sending/logo.svg" alt="logo" />

      <div class="letter__body">
        <img src="https://community-connect-app.s3.us-east-1.amazonaws.com/email_sending/invited.svg" alt="invited image" />

        <p class="user-inv">
          You're Invited to Join Bbelong
        </p>

        <p class="letter-inv">
          Hello ${name},
        </p>

        <p class="letter__desc letter-inv">
          We're excited to invite you to join Bbelong – a place where you can easily manage your properties, connect with other users, and access exclusive features.
        </p>

		<a class="sign-up-link" href="#">  <span> [Sign Up Link]</span> </a>,

        <p class="letter__text  letter-inv">
          If you have any questions, our support team is here to help.<br/><br/>
          Looking forward to having you with us!<br/><br/>
          Best regards,<br/>
          Bbelong Team
        </p>
      </div>
    </div>
  `
}

const verificationCompleteTemplate = (name, money) => {
  return `
    <div class="letter">
      <img class="letter__logo" src="https://community-connect-app.s3.us-east-1.amazonaws.com/email_sending/logo.svg" alt="logo" />

      <div class="letter__body">
        <p class="letter-inv">
          Your Verification is Complete!
        </p>

        <p class="letter-inv">
          Hello ${name},
        </p>


        <p class="letter__desc letter-inv">
          Congratulations! Your account has been successfully verified. You now have full access to all the features and services available on Bbelong.

          Thank you for verifying your information. If you have any questions or need further assistance, please don't hesitate to reach out to our support team.
          <br /><br />
          Welcome to the community!
        </p>

        <p class="letter-inv">
          Best regards,<br />
          Bbelong Team
        </p>
      </div>
    </div>
  `
}
const submitBuildingEntryDataTemplate = (name, money) => {
  return `
    <div class="letter">
      <img class="letter__logo" src="https://community-connect-app.s3.us-east-1.amazonaws.com/email_sending/logo.svg" alt="logo" />

      <div class="letter__body">
        <p class="letter-inv">
          Repair Request Confirmation
        </p>

        <p class="letter-inv">
          Hello ${name},
        </p>

        <p class="letter__desc letter-inv">
          We're pleased to confirm that your repair request has been accepted and scheduled. Please find the details below:
        </p>

        <p class="letter-inv">
          Scheduled Date and Time: [Date, Time]
        </p>

        <p class="letter-inv">
          Technician Assigned: [Technician's Full Name]
        </p>

        <p class="letter-inv">
          Contact Information: [Phone Number or Email]
        </p>

        <p class="letter__desc letter-inv">
          Our technician will arrive at the scheduled time to assist you with your repair. If you need to reschedule or have any questions, don't hesitate to reach out.
        </p>

        <p class="letter-inv">
          Best regards,<br />
          Bbelong Team
        </p>
      </div>
    </div>
  `
}
