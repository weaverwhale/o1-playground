import { createWebBrowser } from './tools/WebBrowser';

export const tools = [createWebBrowser()];

export const models = [
  {
    name: 'gpt-4o-mini',
    label: 'GPT-4o Mini',
    stream: true,
  },
  {
    name: 'gpt-4o-2024-08-06',
    label: 'GPT-4o',
    stream: true,
  },
  {
    name: 'o1-mini-2024-09-12',
    label: 'o1 Mini',
    stream: false,
  },
  {
    name: 'o1-preview',
    label: 'o1 Preview',
    stream: false,
  },
];

export const systemPrompt = `
You have access to the following tools:
${tools
  .map((tool) => `- ${tool.function.name}: ${tool.function.description}`)
  .join('\n')}

To use a tool, write your response in this format:
1. Explain what you're going to do
2. Use the tool in this format: <tool>web_browser</tool>website_url
   IMPORTANT: Always use complete domain names with .com:
   - Use: weather.com (NOT just "weather")
   - Use: google.com (NOT just "google")
   - Use: amazon.com (NOT just "amazon")
3. Wait for the result and continue the conversation

Example:
Let me check the weather website for you.
<tool>web_browser</tool>weather.com
Based on the website content...
`;
