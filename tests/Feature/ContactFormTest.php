<?php

use App\Mail\ContactSubmissionMail;
use Illuminate\Support\Facades\Mail;

it('sends contact submission email successfully', function () {
    Mail::fake();

    $response = $this->post('/contact', [
        'name' => 'John Doe',
        'phone' => '1234567890',
        'email' => 'john@example.com',
        'reason' => 'Mangal Dosh',
        'date' => 'June 2026',
        'message' => 'Hello there!',
    ]);

    $response->assertRedirect();
    $response->assertSessionHasNoErrors();

    Mail::assertSent(ContactSubmissionMail::class, function ($mail) {
        return $mail->hasTo('vickypandey5250@gmail.com') &&
               $mail->formData['name'] === 'John Doe' &&
               $mail->formData['phone'] === '1234567890' &&
               $mail->formData['email'] === 'john@example.com' &&
               $mail->formData['reason'] === 'Mangal Dosh' &&
               $mail->formData['date'] === 'June 2026' &&
               $mail->formData['message'] === 'Hello there!';
    });
});

it('validates required fields for contact submission', function () {
    Mail::fake();

    $response = $this->post('/contact', [
        'name' => '', // missing name
        'phone' => '', // missing phone
    ]);

    $response->assertSessionHasErrors(['name', 'phone']);
    Mail::assertNothingSent();
});

it('has correct sender and subject in the mailable envelope', function () {
    $mail = new ContactSubmissionMail([
        'name' => 'Jane Doe',
        'phone' => '0987654321',
        'email' => 'jane@example.com',
        'reason' => 'Kaal Sarp Dosh',
        'date' => 'July 2026',
        'message' => 'Test message',
    ]);

    $envelope = $mail->envelope();
    expect($envelope->from->address)->toBe('admin@shaadibeyondstars.com');
    expect($envelope->from->name)->toBe('Shadi Beyond Stars');
    expect($envelope->subject)->toBe('New Contact Form Submission: Jane Doe');
});
