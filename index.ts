import * as prompt from "prompt";
import * as QRCode from "qrcode";

// Function to generate QR Code
const generateQRCode = async (text: string): Promise<void> => {
  try {
    const qrCode = await QRCode.toString(text, { type: "terminal" });
    console.log("\nYour QR Code:");
    console.log(qrCode);
  } catch (error) {
    console.error("Error generating QR Code:", error);
  }
};

// Function to start the CLI
const startCLI = async (): Promise<void> => {
  prompt.start();
  console.log("QR Code Generator CLI");
  console.log("Enter the text you want to encode into a QR code:");

  prompt.get(["text"], async (err, result) => {
    if (err) {
      console.error("Error reading input:", err);
      return;
    }

    if (result.text) {
      await generateQRCode(result.text as string);
    } else {
      console.log("No input provided. Exiting.");
    }
  });
};

// Run the CLI
startCLI();
