---
layout: docs
title: Welcome Messages - Smart Network Growth
description: Learn how to use LeadsAutopilot's Welcome Messages feature to automatically engage with new connections and start meaningful conversations.
feature: true
feature_name: Welcome Messages
---

<h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Welcome Messages 👋</h1>

<div class="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg mb-8">
    <p class="text-orange-800 dark:text-orange-200">
        <strong>Welcome Messages</strong> helps you automatically engage with new connections, filter your network by country, and start meaningful conversations that can lead to business opportunities.
    </p>
</div>

<div class="doc-content">
    <h2>What are Welcome Messages?</h2>
    <p>
        Welcome Messages is a powerful feature that automatically sends personalized messages to new LinkedIn connections. This helps you:
    </p>
    <ul>
        <li>Build relationships with new connections immediately</li>
        <li>Filter your network by country to focus on high-value markets</li>
        <li>Start sales conversations with qualified prospects</li>
        <li>Integrate with AI appointment setters for automated lead qualification</li>
    </ul>
    
    <h2>Message Template Format</h2>
    
    <h3>Variables</h3>
    <p>
        Use these variables to personalize your messages:
    </p>
    <ul>
        <li><code>[[first_name]]</code> - Connection's first name</li>
        <li><code>[[last_name]]</code> - Connection's last name</li>
        <li><code>[[full_name]]</code> - Connection's full name</li>
        <li><code>[[location]]</code> - Connection's location</li>
        <li><code>[[company]]</code> - Connection's current company</li>
        <li><code>[[school]]</code> - Connection's school/education</li>
    </ul>
    
    <h3>Spintax</h3>
    <p>
        Use spintax to create message variations:
    </p>
    <ul>
        <li>Basic format: <code>{% raw %}{{option1|option2|option3}}{% endraw %}</code></li>
        <li>Nested spintax is supported: <code>{% raw %}{{Hello|Hi}} [[first_name]], {I hope you're having a {great|wonderful} day|I trust this finds you well}}{% endraw %}</code></li>
        <li>Each message will randomly select one option from each set of curly braces</li>
    </ul>
    
    <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg my-6">
        <h4 class="font-semibold mb-2">Example Message Template</h4>
        <p class="whitespace-pre-wrap text-gray-600 dark:text-gray-300">
        {% raw %}{{Hello|Hi}}{% endraw %} [[first_name]],

        {% raw %}{{Thanks for connecting|Great to connect with you}}{% endraw %}! I noticed you're in [[company]] and based in [[location]]. {% raw %}{{I'm always interested in learning about different approaches|I'd love to hear more about your experience}}{% endraw %} in {% raw %}{{your industry|your field}}{% endraw %}.

        {% raw %}{{Would you be open to a brief conversation|I'd welcome the opportunity to chat}}{% endraw %} about how we might help each other?

        {% raw %}{{Best regards|Best}}{% endraw %},
        James</p>
    </div>
    
    <h3>AI Message Optimization</h3>
    <p>
        Use the "Optimize with AI" button to:
    </p>
    <ul>
        <li>Check for template syntax errors</li>
        <li>Optimize message structure and flow</li>
        <li>Ensure proper variable usage</li>
        <li>Validate spintax formatting</li>
        <li>Improve overall message effectiveness</li>
    </ul>
    
    <div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg my-6">
        <h4 class="font-semibold mb-2 text-blue-800 dark:text-blue-200">Pro Tip: Template Testing</h4>
        <p class="text-blue-800 dark:text-blue-200">
            After creating your template, use the "Preview" feature to see how different combinations of spintax will appear. This helps ensure your message variations all maintain a professional and engaging tone.
        </p>
    </div>
    
    <h2>Key Features</h2>
    
    <h3>Country-Based Filtering</h3>
    <p>
        Target connections from specific countries to build a high-quality network:
    </p>
    <ul>
        <li><strong>Tier-1 country focus</strong> - Automatically identify connections from major markets</li>
        <li><strong>Custom country lists</strong> - Create lists of target countries for your business</li>
        <li><strong>Smart filtering</strong> - Only send welcome messages to connections from selected countries</li>
        <li><strong>Country analytics</strong> - Track which countries generate the most valuable connections</li>
    </ul>
    
    <h3>AI-Powered Message Generation</h3>
    <p>
        Create personalized welcome messages that resonate:
    </p>
    <ul>
        <li><strong>Context-aware content</strong> - Generate messages based on connection's profile</li>
        <li><strong>Industry customization</strong> - Adapt tone and content to different sectors</li>
        <li><strong>Language support</strong> - Send messages in the connection's preferred language</li>
        <li><strong>Brand voice matching</strong> - Maintain consistent messaging across your network</li>
    </ul>
    
    <h3>Sales Conversation Starters</h3>
    <p>
        Begin meaningful business discussions:
    </p>
    <ul>
        <li><strong>Value-first approach</strong> - Focus on providing value before selling</li>
        <li><strong>Qualification questions</strong> - Include subtle qualifying questions in messages</li>
        <li><strong>Call-to-action options</strong> - Offer multiple ways to continue the conversation</li>
        <li><strong>Follow-up triggers</strong> - Set up automated follow-up based on responses</li>
    </ul>
    
    <h2>API Integration</h2>
    
    <h3>AI Appointment Setter Integration</h3>
    <p>
        Connect Welcome Messages with AI appointment setters:
    </p>
    <ul>
        <li><strong>Automated qualification</strong> - Let AI assess connection quality</li>
        <li><strong>Smart routing</strong> - Direct qualified leads to your sales team</li>
        <li><strong>Response analysis</strong> - Track and optimize conversation outcomes</li>
        <li><strong>Custom workflows</strong> - Build automated lead nurturing sequences</li>
    </ul>
    
    <h2>Best Practices</h2>
    
    <h3>Message Timing</h3>
    <p>
        Send welcome messages at the right time:
    </p>
    <ul>
        <li><strong>Quick response</strong> - Send within 24 hours of connection</li>
        <li><strong>Time zone awareness</strong> - Schedule messages for optimal delivery times</li>
        <li><strong>Frequency control</strong> - Avoid overwhelming your network</li>
        <li><strong>Follow-up timing</strong> - Space out follow-up messages appropriately</li>
    </ul>
    
    <h3>Message Content</h3>
    <p>
        Create effective welcome messages:
    </p>
    <ul>
        <li><strong>Keep it personal</strong> - Reference specific details from their profile</li>
        <li><strong>Be concise</strong> - Aim for 2-3 short paragraphs</li>
        <li><strong>Add value</strong> - Share relevant insights or resources</li>
        <li><strong>Clear next steps</strong> - Include a specific call to action</li>
    </ul>
    
    <div class="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg my-6">
        <h4 class="font-semibold mb-2 text-blue-800 dark:text-blue-200">Pro Tip: Country-Specific Customization</h4>
        <p class="text-blue-800 dark:text-blue-200">
            Create different welcome message templates for different countries. Consider cultural nuances, business etiquette, and preferred communication styles when crafting your messages.
        </p>
    </div>
    
    <h2>Measuring Success</h2>
    
    <p>
        Track these key metrics to optimize your welcome message strategy:
    </p>
    
    <ul>
        <li><strong>Response rate</strong> - Percentage of connections who reply</li>
        <li><strong>Country performance</strong> - Which countries generate the best responses</li>
        <li><strong>Conversion rate</strong> - Number of welcome messages leading to meetings</li>
        <li><strong>Message effectiveness</strong> - Which message templates perform best</li>
    </ul>
    
    <h2>Frequently Asked Questions</h2>
    
    <h3>How do I set up country filtering?</h3>
    <p>
        In the Welcome Messages settings:
    </p>
    <ol>
        <li>Click on "Country Settings"</li>
        <li>Select your target countries from the list</li>
        <li>Choose whether to send messages only to these countries or exclude them</li>
        <li>Save your preferences</li>
    </ol>
    
    <h3>Can I customize messages for different industries?</h3>
    <p>
        Yes! You can create different message templates for various industries and automatically match them based on the connection's profile. This helps ensure your messages are relevant and resonate with each connection's specific context.
    </p>
    
    <h3>How does the API integration work?</h3>
    <p>
        The API allows you to:
    </p>
    <ul>
        <li>Automatically qualify new connections</li>
        <li>Route qualified leads to your sales team</li>
        <li>Track conversation outcomes</li>
        <li>Build custom automated workflows</li>
    </ul>
    
    <h3>What's the best time to send welcome messages?</h3>
    <p>
        Send welcome messages within 24 hours of connection, but consider:
    </p>
    <ul>
        <li>The connection's local time zone</li>
        <li>Business hours in their country</li>
        <li>Your own response capacity</li>
        <li>LinkedIn's activity patterns</li>
    </ul>
</div> 