import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface QuoteRequestData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  projectDetails: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const quoteData: QuoteRequestData = await req.json();
    
    console.log("Processing quote request:", quoteData);

    // Send email to ECC Works
    const emailResponse = await resend.emails.send({
      from: "ECC Works Quote System <onboarding@resend.dev>",
      to: ["info@eccworksltd.com"],
      subject: `New Quote Request from ${quoteData.firstName} ${quoteData.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Quote Request - ECC Works Ltd
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Client Information</h3>
            <p><strong>Name:</strong> ${quoteData.firstName} ${quoteData.lastName}</p>
            <p><strong>Email:</strong> ${quoteData.email}</p>
            ${quoteData.phone ? `<p><strong>Phone:</strong> ${quoteData.phone}</p>` : ''}
            ${quoteData.company ? `<p><strong>Company:</strong> ${quoteData.company}</p>` : ''}
          </div>

          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">Service Requirements</h3>
            <p><strong>Service Type:</strong> ${quoteData.service}</p>
            <p><strong>Project Details:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
              ${quoteData.projectDetails.replace(/\n/g, '<br>')}
            </div>
          </div>

          <div style="margin-top: 30px; padding: 15px; background-color: #ecfdf5; border-radius: 8px;">
            <p style="margin: 0; color: #065f46;">
              <strong>Next Steps:</strong> Please respond to this quote request within 24 hours for priority handling.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email response:", emailResponse);

    // Check if email sending failed
    if (emailResponse.error) {
      console.error("Email sending failed:", emailResponse.error);
      throw new Error(`Email sending failed: ${emailResponse.error.message}`);
    }

    console.log("Email sent successfully!");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Quote request submitted successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-quote-request function:", error);
    return new Response(
      JSON.stringify({ 
        error: "Failed to send quote request", 
        message: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);