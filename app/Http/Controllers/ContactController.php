<?php

namespace App\Http\Controllers;

use App\Mail\ContactSubmissionMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * Handle the contact form submission.
     */
    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:50',
            'email' => 'nullable|email|max:255',
            'reason' => 'nullable|string|max:255',
            'date' => 'nullable|string|max:255',
            'message' => 'nullable|string|max:5000',
        ]);

        // Send notification email to vickypandey5250@gmail.com
        Mail::to('astrobeyondstars@gmail.com')->send(new ContactSubmissionMail($validated));

        return back()->with('success', 'Your request has been received.');
    }
}
