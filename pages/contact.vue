<script setup>
import PageTitle from "~/components/base/heading/PageTitle";
const title = "Contact Me";
useHead({
  title: 'Contact',
});
</script>

<template>
  <article class="contact active" data-page="contact">

    <PageTitle :title="title" />

    <section class="contact-form">
      <h3 class="h3 form-title">
        Contact Form
      </h3>

      <form action="https://formsubmit.co/dubeyshauryam@gmail.com" method="POST" class="form" data-form>
        <div class="input-wrapper">
          <input type="text" name="fullname" class="form-input" placeholder="Full name" required data-form-input>

          <input
            type="email" name="email" class="form-input" placeholder="Email address" required
            data-form-input>
        </div>

        <textarea name="message" class="form-input" placeholder="Your Message" required data-form-input />

        <button class="form-btn" type="submit" disabled data-form-btn>
          <ion-icon name="paper-plane" />
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
</template>
