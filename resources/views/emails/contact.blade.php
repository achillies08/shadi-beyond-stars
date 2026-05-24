<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Submission</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            background-color: #0b070e;
            color: #f7f4ef;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            -ms-text-size-adjust: none;
        }
        .wrapper {
            width: 100%;
            background-color: #0b070e;
            padding: 40px 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #1a0b12; /* Burgundy Tint */
            border: 1px solid rgba(197, 168, 128, 0.22); /* Gold Border */
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }
        .header {
            background-color: #2b0b14;
            padding: 30px;
            text-align: center;
            border-bottom: 1px solid rgba(197, 168, 128, 0.22);
        }
        .logo-symbol {
            color: #c5a880;
            font-size: 2.5rem;
            margin-bottom: 10px;
            line-height: 1;
        }
        .header h1 {
            color: #c5a880;
            margin: 0;
            font-size: 20px;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            font-weight: normal;
        }
        .content {
            padding: 30px;
        }
        .intro {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 25px;
            color: rgba(247, 244, 239, 0.85);
            text-align: center;
        }
        .details-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 25px;
        }
        .details-table td {
            padding: 12px 15px;
            border-bottom: 1px solid rgba(197, 168, 128, 0.1);
            vertical-align: top;
        }
        .details-table tr:last-child td {
            border-bottom: none;
        }
        .label {
            color: #c5a880;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            font-weight: bold;
            width: 160px;
        }
        .value {
            color: #f7f4ef;
            font-size: 15px;
            line-height: 1.5;
        }
        .message-box {
            background-color: rgba(197, 168, 128, 0.05);
            border-left: 2px solid #c5a880;
            padding: 15px;
            margin-top: 5px;
            font-style: italic;
            color: rgba(247, 244, 239, 0.9);
        }
        .footer {
            background-color: #0b070e;
            padding: 20px;
            text-align: center;
            border-top: 1px solid rgba(197, 168, 128, 0.12);
        }
        .footer p {
            color: rgba(197, 168, 128, 0.6);
            font-size: 12px;
            margin: 0;
            letter-spacing: 0.05em;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="container">
            <div class="header">
                <div class="logo-symbol">ॐ</div>
                <h1>Shadi Beyond Stars</h1>
            </div>
            <div class="content">
                <p class="intro">
                    A new consultation/analysis request has been received from the website contact form.
                </p>
                <table class="details-table">
                    <tr>
                        <td class="label">Name</td>
                        <td class="value"><strong>{{ $formData['name'] ?? 'N/A' }}</strong></td>
                    </tr>
                    <tr>
                        <td class="label">WhatsApp</td>
                        <td class="value">
                            <a href="tel:{{ $formData['phone'] ?? '' }}" style="color: #c5a880; text-decoration: none;">
                                {{ $formData['phone'] ?? 'N/A' }}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td class="label">Email</td>
                        <td class="value">
                            @if(!empty($formData['email']))
                                <a href="mailto:{{ $formData['email'] }}" style="color: #c5a880; text-decoration: none;">
                                    {{ $formData['email'] }}
                                </a>
                            @else
                                <span style="opacity: 0.5; font-style: italic;">Not provided</span>
                            @endif
                        </td>
                    </tr>
                    <tr>
                        <td class="label">Concern</td>
                        <td class="value">{{ $formData['reason'] ?? 'General Analysis' }}</td>
                    </tr>
                    <tr>
                        <td class="label">Wedding Date</td>
                        <td class="value">
                            {{ $formData['date'] ?: 'Not provided' }}
                        </td>
                    </tr>
                    <tr>
                        <td class="label">Message</td>
                        <td class="value">
                            @if(!empty($formData['message']))
                                <div class="message-box">
                                    {!! nl2br(e($formData['message'])) !!}
                                </div>
                            @else
                                <span style="opacity: 0.5; font-style: italic;">No message provided</span>
                            @endif
                        </td>
                    </tr>
                </table>
            </div>
            <div class="footer">
                <p>© {{ date('Y') }} Shadi Beyond Stars · Celestial Matchmaking & Rituals</p>
            </div>
        </div>
    </div>
</body>
</html>
