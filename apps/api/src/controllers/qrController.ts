import type { Request, Response, NextFunction } from 'express';
import QRCode from 'qrcode';

export const generateQRCode = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    const { text } = req.body;
    if (!text) {
      res.status(400).json({ message: 'Text is required to generate QR code' });
      return;
    }

    // Generate QR code
    QRCode.toDataURL(text, { errorCorrectionLevel: 'H' })
      .then((url) => {
        res.json({ qrCode: url });
      })
      .catch((error) => {
        next(error);
      });
  } catch (error) {
    next(error);
  }
};
