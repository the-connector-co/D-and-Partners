interface Data {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
}

const HTML_TEMPLATE = (data: Data) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Contact Form Submission</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100..900;1,100..900&display=swap"
      rel="stylesheet"
    />
    <style>
      /* ... your original styles here (unchanged) ... */
      body {
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
      }
      p {
        margin: 0;
      }
      .container {
        padding: 32px;
        position: relative;
        width: 640px;
        background: #ffffff;
      }
      .header {
        padding: 0 32px;
        gap: 24px;
      }
      .logo-header {
        background-image: url(https://firebasestorage.googleapis.com/v0/b/venttat-d7427.firebasestorage.app/o/logo.png?alt=media&token=9198ed82-6e86-4f2d-aedf-ab302e3b7720);
        width: 148px;
        height: 64px;
        background-repeat: no-repeat;
      }
      .title {
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: #000000;
      }
      .inner-container {
        padding: 32px;
        gap: 16px;
        background: #ffffff;
        border-radius: 4px;
      }
      .inner-paragraph {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #333333;
      }
      .inner-code {
        width: 100%;
        padding-bottom: 32px;
        padding-top: 32px;
      }
      .code {
        font-weight: 500;
        font-size: 24px;
        text-align: center;
      }
      .footer {
        gap: 24px;
        width: 100%;
        height: 228px;
        font-size: 12px;
        color: #999999;
      }
      .divider {
        width: 100%;
        height: 0px;
        margin-bottom: 24px;
        margin-top: 24px;
        border: 0.5px solid rgba(0, 0, 0, 0.24);
      }
      .social {
        display: flex;
        align-items: center;
      }
      .social a {
        margin-right: 24px;
      }
      .social a:last-child {
        margin-right: 0;
      }
      .logo-footer {
        padding-top: 32px;
        padding-bottom: 32px;
        filter: saturate(0);
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="logo-header"></div>
        <h1 class="title">New Contact Form Submission</h1>
      </div>
      <div class="inner-container">
        <p class="inner-paragraph">
          <strong>Name:</strong> ${data.name} <br />
          <strong>Company:</strong> ${data.company || 'N/A'} <br />
          <strong>Email:</strong> ${data.email} <br />
          <strong>Phone:</strong> ${data.phone || 'N/A'} <br />
          <strong>Service Interested In:</strong> ${data.service} <br /><br />
          <strong>Message:</strong> <br />
          ${data.message.replace(/\n/g, '<br />')}
        </p>
      </div>
      <div class="footer">
        <div class="divider"></div>
        <div class="social">
          <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/venttat-d7427.firebasestorage.app/o/Social%3DFacebook%2CStyle%3DBlack.png?alt=media&token=0b3c5894-e388-4836-9770-efd858770f4a" alt="facebook" /></a>
          <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/venttat-d7427.firebasestorage.app/o/Social%3DInstagram%2CStyle%3DBlack.png?alt=media&token=ba3c6d04-0902-4821-aebd-6a91f2c9ae6d" alt="instagram" /></a>
          <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/venttat-d7427.firebasestorage.app/o/Social%3DSocial%20Icons%2CStyle%3DBlack.png?alt=media&token=c23431ea-8089-4b7a-9df9-b56d6f13abea" alt="linkedin" /></a>
          <a href="#"><img src="https://firebasestorage.googleapis.com/v0/b/venttat-d7427.firebasestorage.app/o/Social%3DX%20ex%20Twitter%2CStyle%3DBlack.png?alt=media&token=0926e881-de58-4512-ae2f-83aa838bb450" alt="x" /></a>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/venttat-d7427.firebasestorage.app/o/logo-gray.png?alt=media&token=59c444f1-0a3d-4b32-be3d-628fe24aac58"
          alt="logo-gray"
          class="logo-footer"
          width="148px"
        />
        <p>Copyright © 2025 Venttat</p>
      </div>
    </div>
  </body>
</html>
  `;
}

export default HTML_TEMPLATE;
